# Baseline: the existing tool on the messy fixture

SOW Deliverable 3 asks for a recorded baseline run of the existing tool (StellarExpert's Account Demolisher) against the same fixture Dustin closes, "so the gap can be checked rather than taken on trust". This folder holds that recording and the Horizon evidence around it.

## Fixture

| Field | Value |
|---|---|
| Fixture id | `messy-20261011T142222Z-3d11c6` |
| Fixture account | `GBAFBJOQ6ITXALBTERTORGEFKQTHBYU4DPYJYLKZVXGN2622BKQWUF3D` |
| Destination | `GAL6DG3L5RFP5JIGQMGGRGWYDW24I2N3YDVFHBACEAXBJRFCLO67PEKK` |
| Explorer | https://stellar.expert/explorer/testnet/account/GBAFBJOQ6ITXALBTERTORGEFKQTHBYU4DPYJYLKZVXGN2622BKQWUF3D |
| Recipe | the baseline recipe, recipe hash `a00bfd18c386d2f536daf544513ee7153c433f62a68437bc3a0af11bdc4ddd9b`, as in the public manifest `test/fixtures/horizon/messy/manifest.json` |
| State | balance 4.0000000 XLM = minimum balance, spendable 0; 4 trustlines with dust (1 sponsored), 2 open offers, 1 data entry (`verify-before.json`, 2026-10-11) |

Rebuilt on 2026-10-11 from Friendbot with the same recipe: the keys of the first baseline fixture, `messy-20260926T035942Z` (account `GAZF3X7YYCI7PHZYZDQOGPLVN2RVD37YIQG7YEY6QJW6IK224Y4R3MBK`), are not in the working copy the recording is made from. Its public manifest stays the source of the recipe hash that B-03 checks.

## Recording protocol

1. Build the CLI: `npm run build`.
2. Snapshot the fixture before the run:
   `node dist/cli/main.js fixture verify .fixture/messy-20261011T142222Z-3d11c6/manifest.json --snapshot evidence/baseline/verify-before.json`
   Every check must pass.
3. Start the screen recording (terminal prompt reduced to `$ `, no personal names, paths or other tabs visible).
4. Open https://stellar.expert/demolisher/testnet in a clean browser profile. Paste the fixture's secret key (the `fixture` entry in `.fixture/messy-20261011T142222Z-3d11c6/keys.json`; testnet only) and the destination above. Start the tool and keep recording until it stops. Record the exact message it shows.
5. Stop the recording. Save it as `evidence/baseline/demolisher-2026-10-12.mp4` (or keep it outside git and put the link below if it is too large) and a still frame of the stopping point as `evidence/baseline/demolisher-stop.png`.
6. Snapshot the fixture after the run:
   `node dist/cli/main.js fixture verify .fixture/messy-20261011T142222Z-3d11c6/manifest.json --snapshot evidence/baseline/verify-after.json`
   Every check must still pass, which proves Dustin later closes the same, unchanged account.

## B-02: the same recipe plus 1 XLM

Matrix row B-02 records the existing tool on the baseline recipe with 1 XLM the account can spend, to see how far it gets when the fee is not the obstacle. The baseline fixture itself stays at zero spendable XLM, so B-02 uses a fresh fixture of the same recipe:

1. `node scripts/baseline-b03.mjs --prepare-b02` builds a fresh `messy` fixture (the recipe hash of the baseline fixture), saves its checks as `evidence/baseline/b02-verify-before-the-1-xlm.json`, pays it 1 XLM from its own fee sponsor, and prints the account, the destination and the payment's hash. Its keys stay in `.fixture/<id>/keys.json`.
2. Record the existing tool on that account exactly as in steps 3 to 5 above, and save the recording as `evidence/baseline/demolisher-b02.mp4` (or its link) with a still of where it stops.
3. Fill the B-02 lines of the result below, with every transaction hash the tool produced.

Prepared on 2026-10-11 by `--prepare-b02`, ready for the recording: fixture `messy-20261011T142354Z-f796e3`, account `GA7BSNFNFMD2FB4FXLTXHVFMW6ZGO46PNVDGFSHMD6MCZ4U5AHRCNHZ3` (5.0000000 XLM, 1 XLM of it spendable), destination `GCB4FEJS4DZTOBAVGLJILPWVSYBQ7ZZZ4BE3WDPAL2OCEXPROEBZZ5E5`, the 1 XLM paid by its fee sponsor in [`9b05a212c33b07574ce847d75016270fe7d47103186ad632b4fe6f0fb90ceec7`](https://stellar.expert/explorer/testnet/tx/9b05a212c33b07574ce847d75016270fe7d47103186ad632b4fe6f0fb90ceec7) (ledger 5141024); its checks before the 1 XLM: [`b02-verify-before-the-1-xlm.json`](b02-verify-before-the-1-xlm.json). The account prepared on 2026-09-29 (`GCT4MKGXIAT246OV246CVYXIZYT3FLXVOBIQ5BQ4Q5CQPKZGD7JBX4MM`) is not used: its keys are not in this working copy.

## B-03: Dustin on the same recipe, after both recordings

One command, run once B-01 (and B-02) are recorded: `node scripts/baseline-b03.mjs`. It refuses to start while `evidence/baseline/verify-after.json` (step 6 above) is missing. It builds the CLI, rebuilds the recipe twice from Friendbot and closes each fixture through the command line, recorded under `evidence/runs/` like every other run:

- `scripts/evidence-cli.mjs baseline-zero` (FIX-base-1, zero spendable XLM), label `b03-base1`;
- `scripts/evidence-cli.mjs baseline-plus1` (FIX-base-2, the same after 1 XLM from the fee sponsor), label `b03-base2`.

Each run checks that the new fixture's recipe hash is the baseline fixture's (`a00bfd18c386d2f536daf544513ee7153c433f62a68437bc3a0af11bdc4ddd9b`, in `test/fixtures/horizon/messy/manifest.json`), that the plan is closable, that every transaction is a fee bump paid by the sponsor, and that Horizon answers 404 for the account afterwards. The script then writes `evidence/baseline/b03-comparison.md`, the side-by-side table of the matrix (tool, transactions submitted, where it stopped, the account afterwards, XLM delivered), with the existing tool's rows taken from the result below. The baseline fixture `messy-20260926T035942Z` itself is never closed by the script: whether to close it after the recordings is the builder's call. The command was rehearsed on 2026-09-29 with `--before-recordings`: both closes passed every check ([base 1](../runs/20260929T185240Z-b03-rehearsal-base1/summary.md), [base 2](../runs/20260929T185359Z-b03-rehearsal-base2/summary.md), [the rehearsal's table](b03-comparison-rehearsal.md)); the rehearsal does not stand for B-03, which runs after the recordings.

## Expected observation

From the tool's public client source (`business-logic/demolisher/demolisher-tx-builder.js` in https://github.com/stellar-expert/stellar-expert-explorer, MIT), every transaction is sourced from and paid by the account being closed, with no fee bump. An unbumped transaction from this fixture is rejected by the network with `tx_insufficient_balance` (the fixture builder recorded exactly that). The expected stopping point is therefore the first transaction, retried and then abandoned. This is an expectation to be confirmed by the recording, not a claim.

## Result

Both recordings were made on 2026-10-12 by an automated browser (Playwright 1.63, Chromium, a fresh profile, a 1600 x 1000 window) that drives the page as a person would: it types the source and the destination, fills the secret key, clicks "Merge account" and records until the page has not changed for 45 seconds. The secret key field is masked in the recording by a style rule the recorder adds (`-webkit-text-security: disc`), which changes only how the field is drawn; the page reads the real value. Beside each recording, a log of the page's status lines and of every request the page posted, with Horizon's answers.

| Field | Value |
|---|---|
| Recorded on (UTC) | B-01: 2026-10-12, 14:18; B-02: 2026-10-12, 14:20 |
| Tool URL and version seen | https://stellar.expert/demolisher/testnet, footer "2026 © StellarExpert v1.0.2" |
| Where it stopped (message, time in the recording) | B-01: "Dropping data entries…" at 12 s, then "Error: Failed to merge the account" at 37 s ([`demolisher-2026-10-12.mp4`](demolisher-2026-10-12.mp4), still [`demolisher-stop.png`](demolisher-stop.png)) |
| Transactions it submitted | B-01: its first transaction, one `manage_data` operation removing `dustin.fixture`, sourced from and paid by the account (fee 200 stroops, no fee bump), submitted five times between 12 s and 37 s, re-signed each time; Horizon rejected every submission with `tx_insufficient_balance`, so none reached the ledger (the envelopes are in [`demolisher-2026-10-12-log.txt`](demolisher-2026-10-12-log.txt)). As expected above. |
| Fixture unchanged afterwards | Yes: [`verify-after.json`](verify-after.json), taken right after the recording, every check passed |
| B-02: fixture, recorded on, where it stopped, transactions | `messy-20261011T142354Z-f796e3` (`GA7BSNFNFMD2FB4FXLTXHVFMW6ZGO46PNVDGFSHMD6MCZ4U5AHRCNHZ3`, 1 XLM spendable), 2026-10-12 14:20 UTC: the tool closed the account. "Congratulation! Account ... has been merged successfully." at 35 s ([`demolisher-b02.mp4`](demolisher-b02.mp4), still [`demolisher-b02-stop.png`](demolisher-b02-stop.png), log [`demolisher-b02-log.txt`](demolisher-b02-log.txt)). Five transactions, each sourced from and paid by the account, 1600 stroops in all: the data entry [`e1a20386...`](https://stellar.expert/explorer/testnet/tx/e1a20386a869f4c3bccd904ab72af9fb1a8762c29498f3fc95001a103b6ecd21) (ledger 5158253), the offers [`b27ea0ab...`](https://stellar.expert/explorer/testnet/tx/b27ea0abe5e7c088f1c7fbc9e6c8d11c07b5e64ac270655eb949eb196cae58bd), the sale [`d2c14bd6...`](https://stellar.expert/explorer/testnet/tx/d2c14bd6676012de5f8be0374502d236ff01e68035a2e1f20fd179951dad5486), the trustlines [`812c5f4b...`](https://stellar.expert/explorer/testnet/tx/812c5f4bb9815f129d492baf4b364d64ada2aa4e813b50e83fe100a4a96c7337), and the merge [`64e9ec93...`](https://stellar.expert/explorer/testnet/tx/64e9ec93cfed4ad9d2e3dcf6d3e1a7eeed8e0d10b9ac605c66b3bec896754307) (ledger 5158257, memo "StellarExpert merge tool"), which the tool's server co-signed: the account merged into the intermediate account `GA4C3WUE7TL7GNXHF27B6Z54VMRCPTW2JH2OQRHH4U2EHPI6CCLMERGE`, which paid 4.9998207 XLM to the destination in the same transaction. Horizon answers 404 for the account. |

The two rows together: the existing tool closes this recipe when the account can pay its own fees (B-02), and cannot start when it holds zero spendable XLM (B-01), which is the case Dustin's sponsor-paid fee bumps cover (B-03).
