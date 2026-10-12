# Matrix row B-03: the existing tool and Dustin on the same recipe

The side-by-side table of matrix row B-03 (docs/edge-cases-and-test-matrix.md, section 4), written by `node scripts/baseline-b03.mjs`. The existing tool's rows come from the builder's recordings ([README.md](README.md)); Dustin's rows from the two runs linked below, each on a fixture rebuilt from the baseline recipe.

Recipe hash of the baseline fixture `messy-20260926T035942Z`: `a00bfd18c386d2f536daf544513ee7153c433f62a68437bc3a0af11bdc4ddd9b`. Both rebuilt fixtures carry the same recipe hash.

| Row | Tool | Fixture | Transactions submitted | Where it stopped | Account afterwards | XLM to the destination |
|---|---|---|---|---|---|---|
| B-01 | StellarExpert Account Demolisher | the baseline recipe, zero spendable ([README.md](README.md#fixture)) | see [README.md](README.md#result) | see [README.md](README.md#result) | see [README.md](README.md#result) | see [README.md](README.md#result) |
| B-02 | StellarExpert Account Demolisher | the baseline recipe plus 1 XLM | see [README.md](README.md#result) | see [README.md](README.md#result) | see [README.md](README.md#result) | see [README.md](README.md#result) |
| B-03 | Dustin 0.1.0 (`dustin close --execute`) | FIX-base-1 (zero spendable), [`messy-20261012T142647Z-229347`](../../evidence/runs/20261012T142618Z-b03-base1/summary.md), `GBLXGTTPY2ZU64A53ZCANIX7ZFLXMHI6KSGRCPKSY5ORZAFEHUU3YMOK` | 3, every one a fee bump paid by the sponsor: `c98a7c223818...`, `96ed56d0fe97...`, `b199ce868f2e...` | nowhere: `closed` | gone, Horizon 404 | 4.0000007 XLM |
| B-03 | Dustin 0.1.0 (`dustin close --execute`) | FIX-base-2 (plus 1 XLM), [`messy-20261012T142817Z-92f8c0`](../../evidence/runs/20261012T142809Z-b03-base2/summary.md), `GDTETQF6FVJBDNB53JZFXCEPHDACQIGM5Q3JAYF52KVTYDJAURYITJ5L` | 3, every one a fee bump paid by the sponsor: `f2e8b4c465f5...`, `d5ae3b12423f...`, `a18ffc67a7bd...` | nowhere: `closed` | gone, Horizon 404 | 5.0000007 XLM |

Dustin's runs: [`evidence/runs/20261012T142618Z-b03-base1`](../../evidence/runs/20261012T142618Z-b03-base1/summary.md), [`evidence/runs/20261012T142809Z-b03-base2`](../../evidence/runs/20261012T142809Z-b03-base2/summary.md).
