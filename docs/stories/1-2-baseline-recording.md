# Story 1.2: Record the baseline run of the existing tool

Status: done

## Story

As a reviewer,
I want a recording of StellarExpert's Account Demolisher run against the messy fixture,
so that the gap Dustin closes is something I can watch rather than take on trust.

## Acceptance Criteria

1. Given the messy fixture verified immediately before, when the Demolisher testnet page is driven with that account, then a screen recording of the whole session is stored in `evidence/baseline/` (file, or a link if it is too large for git) with a `README.md` timeline.
2. Then the README states where the tool stopped (the exact message shown), the fixture state after the run (`fixture verify` snapshot) and which fixture items remained.
3. Then the README links the tool's URL, source location and license, and repeats claims about the tool only where the recording or the source confirms them; anything not confirmed is marked "not reproduced".
4. Then `dustin fixture verify` still passes after the run, so Dustin later closes the same, unchanged account (PRD FR-25).

## Tasks / Subtasks

- [x] Task 1: recording protocol and fixture details in `evidence/baseline/README.md` (AC: 1, 3)
- [x] Task 2: `verify-before.json` snapshot, the recording and its still frame (AC: 1) — recorded on 2026-10-12 by an automated browser at the builder's request
- [x] Task 3: `verify-after.json` snapshot and the filled Result table (AC: 2, 4)

## Dev Notes

- Fixture `messy-20260926T035942Z` (built by E1-S1). Its keys are in the gitignored `.fixture/` directory; the fixture secret is pasted into the Demolisher only, on testnet only.
- The below-1-XLM co-sign refusal was already probed on 2026-09-25 (docs/analysis/competitive-landscape.md); the recording should show whatever the tool actually does on this fixture.
- The recording is made by the builder; the agent prepares the protocol and fills the README from the snapshots afterwards.

### References

- docs/epics-and-stories.md, Story 1.2
- docs/prd.md FR-25
- docs/technical-spike.md section 7

## Dev Agent Record

### Agent Model Used

dev-story workflow (AI developer agent)

### Completion Notes List

- 2026-09-26: protocol written; waiting for the builder's recording.
- 2026-10-12: recorded. The keys of `messy-20260926T035942Z` are not in the working copy the recording was made from, so the fixture was rebuilt from Friendbot with the same recipe on 2026-10-11 (`messy-20261011T142222Z-3d11c6`, recipe hash `a00bfd18...dd9b`, `verify-before.json`), and B-02 used a second rebuild with 1 XLM spendable (`messy-20261011T142354Z-f796e3`). Both recordings were made on 2026-10-12 by an automated browser (Playwright, Chromium, a fresh profile) at the builder's request, driving StellarExpert's Account Demolisher (v1.0.2) as a person would, with the secret key field masked in the recording by a style rule. AC-1: `evidence/baseline/demolisher-2026-10-12.mp4`, its still `demolisher-stop.png` and a log of the page's status lines and posted requests; AC-2: the tool stopped at "Error: Failed to merge the account" 37 s in, after its first transaction (a `manage_data` removal paid by the account) was rejected five times with `tx_insufficient_balance`; nothing reached the ledger and every fixture item remained; AC-3: the README links the tool's URL, its MIT-licensed client source and states the expectation it confirms; AC-4: `verify-after.json`, every check passed. B-02: the tool closed the account in five transactions paid by the account, the merge co-signed by its server; B-03 followed (`evidence/baseline/b03-comparison.md`). The below-1-XLM co-sign refusal was not tested again: B-02 paid out 4.9998207 XLM.

### File List

- `evidence/baseline/README.md` (new; the Result filled on 2026-10-12)
- `evidence/baseline/demolisher-2026-10-12.mp4`, `demolisher-stop.png`, `demolisher-2026-10-12-log.txt`, `demolisher-b02.mp4`, `demolisher-b02-stop.png`, `demolisher-b02-log.txt`, `verify-after.json` (new, 2026-10-12)
- `docs/stories/1-2-baseline-recording.md` (new)

## Change Log

- 2026-09-26: Recording protocol prepared. Status: in-progress (blocked on the builder's recording).
- 2026-10-12: B-01 and B-02 recorded on rebuilds of the recipe, the Result filled, the fixture unchanged after B-01; B-03 run. Status: done.
