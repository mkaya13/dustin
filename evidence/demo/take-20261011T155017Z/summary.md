# Demo take 20261011T155017Z

The take behind the 60-second demo video (story E4-S6), produced by `node scripts/demo/make-demo.mjs` from the rehearsal script [`docs/demo-video-script.md`](../../../docs/demo-video-script.md) on a fresh `messy` fixture, on the Stellar testnet, with `dustin` 0.1.0. Every terminal shot is cut from the three recordings in this directory; nothing in them was typed or printed by anything but the shell and the CLI.

## Accounts

| Role | Address | Links |
|---|---|---|
| Closed account (fixture `messy-20261011T155021Z-0af7a2`) | `GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS` | [explorer](https://stellar.expert/explorer/testnet/account/GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS), [Horizon](https://horizon-testnet.stellar.org/accounts/GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS) (404 after the close) |
| Destination | `GB2TXR47ONIZYQBNQKM6GIQNMJEDQUMYMDPKQ4OPAXR2K36E4NXOCUR2` | [explorer](https://stellar.expert/explorer/testnet/account/GB2TXR47ONIZYQBNQKM6GIQNMJEDQUMYMDPKQ4OPAXR2K36E4NXOCUR2), [Horizon](https://horizon-testnet.stellar.org/accounts/GB2TXR47ONIZYQBNQKM6GIQNMJEDQUMYMDPKQ4OPAXR2K36E4NXOCUR2) |
| Fee sponsor (fee account of every transaction) | `GCEQT6KAZRFJUOUTIG4T7ARJ3YYKT2ZVCZGPUI2PXEDBWMO6QIN7YH2Q` | [explorer](https://stellar.expert/explorer/testnet/account/GCEQT6KAZRFJUOUTIG4T7ARJ3YYKT2ZVCZGPUI2PXEDBWMO6QIN7YH2Q), [Horizon](https://horizon-testnet.stellar.org/accounts/GCEQT6KAZRFJUOUTIG4T7ARJ3YYKT2ZVCZGPUI2PXEDBWMO6QIN7YH2Q) |

## The close shown in the video

| # | Hash (the fee bump's) | Ledger | Fee charged to the sponsor | Links |
|---|---|---|---|---|
| 1 | `3477ef22f63396bbaf4f3f7c6f7ce5a29e7d73a64aeda49d33033655638411f4` | 5142065 | 1,000 stroops | [explorer](https://stellar.expert/explorer/testnet/tx/3477ef22f63396bbaf4f3f7c6f7ce5a29e7d73a64aeda49d33033655638411f4), [Horizon](https://horizon-testnet.stellar.org/transactions/3477ef22f63396bbaf4f3f7c6f7ce5a29e7d73a64aeda49d33033655638411f4), [record](tx-1.json) |
| 2 | `2b28811cab502756d77863c8bc2298a2c8d642758ec08f978a5d7eb5815325a6` | 5142066 | 300 stroops | [explorer](https://stellar.expert/explorer/testnet/tx/2b28811cab502756d77863c8bc2298a2c8d642758ec08f978a5d7eb5815325a6), [Horizon](https://horizon-testnet.stellar.org/transactions/2b28811cab502756d77863c8bc2298a2c8d642758ec08f978a5d7eb5815325a6), [record](tx-2.json) |
| 3 | `e3c6cd1ff35493af3b90bcc1691a14844f587f40da80f8832e1e2cb4d9b59b77` | 5142067 | 200 stroops | [explorer](https://stellar.expert/explorer/testnet/tx/e3c6cd1ff35493af3b90bcc1691a14844f587f40da80f8832e1e2cb4d9b59b77), [Horizon](https://horizon-testnet.stellar.org/transactions/e3c6cd1ff35493af3b90bcc1691a14844f587f40da80f8832e1e2cb4d9b59b77), [record](tx-3.json) |

Checked by the script before it wrote anything: each transaction succeeded with `fee_account` the sponsor and `source_account` the closed account ([`tx-1.json`](tx-1.json) to [`tx-3.json`](tx-3.json)); Horizon answers 404 for the account ([`account-after.json`](account-after.json)); its last operation is the merge of transaction 3 ([`operations-after.json`](operations-after.json)). The fixture met SOW Appendix B right before the take: [`fixture-verify.txt`](fixture-verify.txt), [`fixture-verification.json`](fixture-verification.json); its build is in [`fixture-manifest.json`](fixture-manifest.json) and on camera in [`fixture-create.cast`](fixture-create.cast).

## The fixture's build, on camera

| Step | Ledger | Hash |
|---|---|---|
| create-accounts | 5142049 | [`9f89803e83d98e516f94b322e53aab45f1f0407fb66d59e4ffe3576dfb44ee3c`](https://stellar.expert/explorer/testnet/tx/9f89803e83d98e516f94b322e53aab45f1f0407fb66d59e4ffe3576dfb44ee3c) |
| trustlines | 5142050 | [`8182e3b1ee52d19ddb868b11f8f10a9029f03f0fa53e6b9817497f5254de966b`](https://stellar.expert/explorer/testnet/tx/8182e3b1ee52d19ddb868b11f8f10a9029f03f0fa53e6b9817497f5254de966b) |
| sponsored-trustline | 5142051 | [`32dd00b87bdbf0541e77fd63593968c1da0fa4acb225372518845763337f2279`](https://stellar.expert/explorer/testnet/tx/32dd00b87bdbf0541e77fd63593968c1da0fa4acb225372518845763337f2279) |
| dust-payments | 5142052 | [`9f05980fddf285eebaba6ae9580ff4f73c879598520199e9b9e8e86c45b84c4e`](https://stellar.expert/explorer/testnet/tx/9f05980fddf285eebaba6ae9580ff4f73c879598520199e9b9e8e86c45b84c4e) |
| market-maker-bid | 5142053 | [`a95dc956540f6cda954905646ecc16c33cf600d3ab905ad46bb99ceb8c033bfd`](https://stellar.expert/explorer/testnet/tx/a95dc956540f6cda954905646ecc16c33cf600d3ab905ad46bb99ceb8c033bfd) |
| offers-and-data | 5142054 | [`2f334ab0ead76dd53030d4b43f1f01d23bebd3c8f34385b7aff04558ca2f6b32`](https://stellar.expert/explorer/testnet/tx/2f334ab0ead76dd53030d4b43f1f01d23bebd3c8f34385b7aff04558ca2f6b32) |
| drain-to-minimum | 5142055 | [`28ddb77aa348b2c543994a9244a9edb0a751726ba40fac63ccaad1d688a39197`](https://stellar.expert/explorer/testnet/tx/28ddb77aa348b2c543994a9244a9edb0a751726ba40fac63ccaad1d688a39197) |

## The video

| Field | Value |
|---|---|
| File | `evidence/demo/dustin-demo-60s.mp4` (not in git; hosted as a release asset once the builder uploads it) |
| Duration | 59.80 s |
| Size | 1920 x 1080, H.264, 30 frames per second, no sound |
| SHA-256 | `25e5ae082283d19c82c47f7e6e9104e7036298301ca50bb7452d452c69c1c7cd` |
| Captions | burned in on a band at the top, and [`dustin-demo.srt`](../dustin-demo.srt) |

## The cut

| Time | Shot | Source | Caption |
|---|---|---|---|
| 0.0 to 5.0 s | title | still | This Stellar account holds 4 XLM but cannot spend any of it, so it cannot even pay the fee to close itself. |
| 5.0 to 9.0 s | before-balances | still | Before: 4 trustlines with balances, 2 open offers, 1 data entry. All 4 XLM are locked as reserve. |
| 9.0 to 13.0 s | before-history | still | (the caption above continues) |
| 13.0 to 16.0 s | unsponsored | recording seconds 44.36 to 44.36 | Without a sponsor, the account cannot pay a fee: the fixture builder's own unsponsored attempt is rejected. |
| 16.0 to 26.0 s | plan | recording seconds 0.53 to 6.55, pauses over 1 s shortened | The plan is read-only. Every step has a reason. Nothing is signed yet. |
| 26.0 to 28.2 s | close-command | recording seconds 0.78 to 2.94 | To run it, you confirm the destination. |
| 28.2 to 31.0 s | confirmation | recording seconds 6.09 to 10.47, pauses over 1.2 s shortened | (the caption above continues) |
| 31.0 to 44.0 s | execution | recording seconds 10.47 to 25.34, pauses over 2.9000000000000012 s shortened | Three transactions. Every fee is paid by the sponsor. The account pays nothing. |
| 44.0 to 49.0 s | receipt | recording seconds 25.34 to 25.41 | Result: 4 XLM arrived at the destination. Fees paid by the account: zero. |
| 49.0 to 52.5 s | after-explorer | still | After: the account no longer exists. Anyone can check this link. |
| 52.5 to 56.0 s | after-horizon-404 | still | (the caption above continues) |
| 56.0 to 59.8 s | end | still | Dustin. Read the plan, then close the account. Testnet only. |

The browser pages, each captured with Playwright (Chromium) when the cut above shows it, under a strip that names its URL (they are not links here: after the close the account's pages on Horizon answer 404):

```text
https://stellar.expert/explorer/testnet/account/GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS
https://stellar.expert/explorer/testnet/account/GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS
https://stellar.expert/explorer/testnet/account/GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS
https://horizon-testnet.stellar.org/accounts/GBBKY67KWLD2C4A3OC75HKBFGGVJPZ3LDVG7ADG3UJGJS5CADG5KPRIS
```

The key frames, taken from the finished video: [`01-before-balances.png`](frames/01-before-balances.png), [`02-before-history.png`](frames/02-before-history.png), [`03-plan.png`](frames/03-plan.png), [`04-confirmation.png`](frames/04-confirmation.png), [`05-transactions.png`](frames/05-transactions.png), [`06-receipt.png`](frames/06-receipt.png), [`07-explorer-after.png`](frames/07-explorer-after.png), [`08-horizon-404.png`](frames/08-horizon-404.png).

## Recordings

[`fixture-create.cast`](fixture-create.cast), [`plan.cast`](plan.cast) and [`close.cast`](close.cast) are asciicast v2 files (https://docs.asciinema.org/manual/asciicast/v2/): every byte the terminal showed, with its time. `asciinema play close.cast` replays the close as it ran, the typed confirmation included; the commands' secrets came from a `.env` file written right before the close and removed right after it, and appear nowhere.
