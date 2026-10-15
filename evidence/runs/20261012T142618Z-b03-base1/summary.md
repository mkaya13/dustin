# Matrix row B-03, the rebuilt baseline fixture (FIX-base-1) 20261012T142618Z-b03-base1

Matrix row B-03 (docs/edge-cases-and-test-matrix.md, section 4): the recipe of the builder's baseline fixture `messy-20260926T035942Z`, on which the existing tool was recorded (B-01, evidence/baseline/README.md), rebuilt from Friendbot with `dustin fixture create --profile messy` (FIX-base-1: zero spendable XLM) and closed by Dustin through the command line with the default ladder order. The recipe hash in the new manifest is the baseline fixture's, so the account Dustin closes is built identically to the one the existing tool stopped on.

Written by `node scripts/evidence-cli.mjs baseline-zero`. Public data only: public keys, hashes, envelopes and Horizon JSON. The secret keys reached `dustin close` through its environment only; every file here was scanned for secret seeds and for the fixture's secret keys before it was written.

## What the reviewer should see

1. The recipe: the rebuilt fixture `messy-20261012T142647Z-229347` has the recipe hash `a00bfd18c386d2f536daf544513ee7153c433f62a68437bc3a0af11bdc4ddd9b`, the baseline fixture's (`test/fixtures/horizon/messy/manifest.json`). See `fixture-manifest.json`.
2. `dustin fixture verify fixture-manifest.json --snapshot fixture-verification.json` exited 0: 12 of 12 checks passed right after the build, zero spendable XLM among them. See `fixture-verify.txt` and `fixture-verification.json`.
3. `dustin plan GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK --to GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ --sponsor GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I` exited 0: status CLOSABLE, 3 transactions (cleanup (9 ops), convert (2 ops), merge (1 op)). See `plan.txt` and `plan.json`.
4. `dustin close GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK --to GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ --execute --yes --report report.json` exited 0: report status `closed`; tx 1 (cleanup, applied in ledger 5158338) [c98a7c223818bbdb44e319dd8a45b162a9189d7d93fb1e11bdf1cf3e0c158e02](https://stellar.expert/explorer/testnet/tx/c98a7c223818bbdb44e319dd8a45b162a9189d7d93fb1e11bdf1cf3e0c158e02); tx 2 (convert, applied in ledger 5158339) [96ed56d0fe972b8c7e64e1e11c442e8a5c99bb4cb27eaec170e08377a2e46138](https://stellar.expert/explorer/testnet/tx/96ed56d0fe972b8c7e64e1e11c442e8a5c99bb4cb27eaec170e08377a2e46138); tx 3 (merge, applied in ledger 5158340) [b199ce868f2e862c5d588750208300b1294ea8ee2573d0d9a79b909e52f17e5a](https://stellar.expert/explorer/testnet/tx/b199ce868f2e862c5d588750208300b1294ea8ee2573d0d9a79b909e52f17e5a), each a fee bump paid by the sponsor. See `transcript.txt` and `report.json`.
5. Horizon answers HTTP 404 for the account afterwards ([Horizon](https://horizon-testnet.stellar.org/accounts/GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK), `account-after.json`); the destination received the merged 4.0000007 XLM (`balances.json`). The side-by-side table with the existing tool's recordings is `evidence/baseline/b03-comparison.md`.

## Run

| Field | Value |
|---|---|
| Captured (UTC) | 2026-10-12T14:28:08.940Z |
| Case | `baseline-zero` (matrix row B-03 after the recording B-01; SOW 6.1 Deliverable 3) |
| Network passphrase | `Test SDF Network ; September 2015` |
| Horizon | https://horizon-testnet.stellar.org |
| Fixture | messy-20261012T142647Z-229347 (profile messy) |
| Account | [GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK](https://stellar.expert/explorer/testnet/account/GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK) ([Horizon](https://horizon-testnet.stellar.org/accounts/GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK)) |
| Destination | [GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ](https://stellar.expert/explorer/testnet/account/GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ) ([Horizon](https://horizon-testnet.stellar.org/accounts/GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ)) |
| Fee sponsor (fee account of every transaction of the close) | [GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I](https://stellar.expert/explorer/testnet/account/GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I) ([Horizon](https://horizon-testnet.stellar.org/accounts/GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I)) |
| Reserve sponsor (sponsors the SPTA trustline) | [GCO735NK5RUZWH25A3CKBROJOUPXKJPTQDXRJA7SWP5INVGCGMZWSBP4](https://stellar.expert/explorer/testnet/account/GCO735NK5RUZWH25A3CKBROJOUPXKJPTQDXRJA7SWP5INVGCGMZWSBP4) ([Horizon](https://horizon-testnet.stellar.org/accounts/GCO735NK5RUZWH25A3CKBROJOUPXKJPTQDXRJA7SWP5INVGCGMZWSBP4)) |
| Issuer of DUSTA, DUSTB, DUSTC and SPTA | [GC5YET2PKQP7WCEQWOP4ASBJHW3I5JN2KUMWOVQMUGPL2Q6UX44PW3EM](https://stellar.expert/explorer/testnet/account/GC5YET2PKQP7WCEQWOP4ASBJHW3I5JN2KUMWOVQMUGPL2Q6UX44PW3EM) ([Horizon](https://horizon-testnet.stellar.org/accounts/GC5YET2PKQP7WCEQWOP4ASBJHW3I5JN2KUMWOVQMUGPL2Q6UX44PW3EM)) |
| Ledgers | latest before the close 5158336; after it 5158340 |
| Report status | closed |
| Plan hash of the run | `b9e605ac8eeca18663f9873a465e0f044d140416c97d9d9ffd878b89d1f06065` |
| Merged XLM (from the merge result) | 4.0000007 |
| Fees paid by the account / by the sponsor | 0 / 1500 stroops |
| Horizon for the account afterwards | HTTP 404 |

## Commands

Each ran as `node dist/cli/main.js` from this repository's build, shown here as `dustin`.

| # | Command | Expected exit | Exit | Output |
|---|---|---|---|---|
| 1 | `dustin fixture create --profile messy --dir .fixture --json` | 0 | 0 | `fixture-create.txt`, `fixture-manifest.json` |
| 2 | `dustin fixture verify fixture-manifest.json --snapshot fixture-verification.json` | 0 | 0 | `fixture-verify.txt` |
| 3 | `dustin plan GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK --to GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ --sponsor GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I` | 0 | 0 | `plan.txt` |
| 4 | `dustin plan GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK --to GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ --sponsor GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I --json` | 0 | 0 | `plan-json.txt`, `plan.json` |
| 5 | `dustin close GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK --to GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ --execute --yes --report report.json` | 0 | 0 | `transcript.txt` |

## Transactions of the close

| # | Phase | Hash | Result | Ledger | Fee charged (stroops) | Fee account is the sponsor | Source is the account | Inner max_fee | Links |
|---|---|---|---|---|---|---|---|---|---|
| 1 | cleanup | `c98a7c223818bbdb44e319dd8a45b162a9189d7d93fb1e11bdf1cf3e0c158e02` | applied | 5158338 | 1000 | yes (sponsor) | yes | 0 | [explorer](https://stellar.expert/explorer/testnet/tx/c98a7c223818bbdb44e319dd8a45b162a9189d7d93fb1e11bdf1cf3e0c158e02), [Horizon](https://horizon-testnet.stellar.org/transactions/c98a7c223818bbdb44e319dd8a45b162a9189d7d93fb1e11bdf1cf3e0c158e02) |
| 2 | convert | `96ed56d0fe972b8c7e64e1e11c442e8a5c99bb4cb27eaec170e08377a2e46138` | applied | 5158339 | 300 | yes (sponsor) | yes | 0 | [explorer](https://stellar.expert/explorer/testnet/tx/96ed56d0fe972b8c7e64e1e11c442e8a5c99bb4cb27eaec170e08377a2e46138), [Horizon](https://horizon-testnet.stellar.org/transactions/96ed56d0fe972b8c7e64e1e11c442e8a5c99bb4cb27eaec170e08377a2e46138) |
| 3 | merge | `b199ce868f2e862c5d588750208300b1294ea8ee2573d0d9a79b909e52f17e5a` | applied | 5158340 | 200 | yes (sponsor) | yes | 0 | [explorer](https://stellar.expert/explorer/testnet/tx/b199ce868f2e862c5d588750208300b1294ea8ee2573d0d9a79b909e52f17e5a), [Horizon](https://horizon-testnet.stellar.org/transactions/b199ce868f2e862c5d588750208300b1294ea8ee2573d0d9a79b909e52f17e5a) |

## Checks

| Result | Check | Observed |
|---|---|---|
| PASS | The rebuilt fixture's recipe hash is the baseline fixture's (messy-20260926T035942Z) | recipe hash a00bfd18c386d2f536daf544513ee7153c433f62a68437bc3a0af11bdc4ddd9b (the baseline fixture's recipe hash a00bfd18c386d2f536daf544513ee7153c433f62a68437bc3a0af11bdc4ddd9b) |
| PASS | The dry-run plan is closable and ends in the merge | status closable; transactions cleanup (9 ops), convert (2 ops), merge (1 op) |
| PASS | The report says closed, verified gone, with no stop | status closed; verification HTTP 404; stop none |
| PASS | Horizon answers HTTP 404 for the account afterwards | HTTP 404 |
| PASS | Every transaction of the close on the ledger is a fee bump: fee account the sponsor, source the account, inner max_fee 0 | 3 of 3 transactions on the ledger |
| PASS | The destination's XLM grew by exactly the merged amount | 10.0000000 -> 14.0000007 XLM (+4.0000007); merged 4.0000007 XLM |
| PASS | The whole XLM balance of the account reached the destination, plus the sale | account 4.0000000 XLM before; merged 4.0000007 XLM |

## Balances

Latest ledger before the close 5158336, after it 5158340.

- Account `GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK`: 4.0000000 XLM -> missing (404); trustlines DUSTA 0.0000007 -> none, DUSTB 0.0000003 -> none, DUSTC 0.0000005 -> none, SPTA 0.0000001 -> none.
- Destination `GBR3YSAJB5V75OA377G54DABNPO65I5IUHUW24C7QFFDOD2DDER42UJQ`: 10.0000000 XLM -> 14.0000007 XLM (+4.0000007), num_sponsoring 0 -> 0.
- Reserve sponsor `GCO735NK5RUZWH25A3CKBROJOUPXKJPTQDXRJA7SWP5INVGCGMZWSBP4`: 10.0000000 XLM -> 10.0000000 XLM (+0.0000000), num_sponsoring 1 -> 0.
- Fee sponsor `GCBW3VNCN7IYREOZIJ7LFC5TCRK3O6E4K7TK3WGY2KK6AARIOYFC6O6I`: 9865.9997200 XLM -> 9865.9995700 XLM (-0.0001500), num_sponsoring 0 -> 0.

## Files

- `summary.md`: this page.
- `fixture-create.txt`: `dustin fixture create`: the command and its build log (public keys and hashes).
- `fixture-manifest.json`: the fixture's public manifest, as `dustin fixture create --json` printed it.
- `fixture-verify.txt`: `dustin fixture verify` on that manifest, right after the build.
- `fixture-verification.json`: what it checked (`--snapshot`); for a messy fixture the checks with `"appendixB": true` are the SOW Appendix B preconditions.
- `plan.txt`: the dry-run `dustin plan`.
- `plan-json.txt`: the same command with `--json`: its standard error and exit code.
- `plan.json`: its standard output: the plan as JSON.
- `account-before.json`: Horizon's view of the account before the close.
- `transcript.txt`: the close that ran (`--report report.json`), with its receipt.
- `report.json`: the close report written by `--report`, with both envelopes of every transaction as XDR.
- `account-after.json`: Horizon's answer for the account after the close: status and body.
- `balances.json`: XLM, num_sponsoring and trustlines of each role before and after, and the ledgers.
- `tx-1.json`: Horizon's record of transaction 1, c98a7c223818bbdb44e319dd8a45b162a9189d7d93fb1e11bdf1cf3e0c158e02.
- `tx-2.json`: Horizon's record of transaction 2, 96ed56d0fe972b8c7e64e1e11c442e8a5c99bb4cb27eaec170e08377a2e46138.
- `tx-3.json`: Horizon's record of transaction 3, b199ce868f2e862c5d588750208300b1294ea8ee2573d0d9a79b909e52f17e5a.

Explorer and Horizon links resolve only until the next testnet reset (scheduled for 2026-12-16), which deletes every account and transaction; the JSON, the XDR and the transcripts in this directory are the durable record.
