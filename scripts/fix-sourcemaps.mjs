// Runs after tsup (`npm run build`). tsup's CommonJS output names the generated file itself by its
// absolute path as the first entry of `sources`, and as `file`, in each .cjs map, so the published
// maps of 0.1.0 carried the directory they were built in and the tarball depended on where it was
// packed. This rewrites every absolute path in `sources` and `file` relative to its map, which is
// what the other maps already hold. `scripts/check-package.mjs` fails the package check if one is left.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist", import.meta.url));
const ABSOLUTE = /^(\/|[a-zA-Z]:[\\/]|\\\\|file:)/;

function* maps(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* maps(path);
    else if (entry.name.endsWith(".map")) yield path;
  }
}

let fixed = 0;
for (const file of maps(DIST)) {
  const map = JSON.parse(readFileSync(file, "utf8"));
  let changed = false;
  const relativize = (path) => {
    if (typeof path !== "string" || !ABSOLUTE.test(path)) return path;
    changed = true;
    const absolute = path.startsWith("file:") ? fileURLToPath(path) : path;
    return relative(dirname(file), absolute).split(sep).join("/");
  };
  map.sources = map.sources.map(relativize);
  if ("file" in map) map.file = relativize(map.file);
  if (changed) {
    writeFileSync(file, JSON.stringify(map));
    fixed += 1;
  }
}
console.log(`fix-sourcemaps: ${fixed} map(s) rewritten`);
