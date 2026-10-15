# Message to the chapter lead: the completion of the SOW, with the two-fixture reading of week 3

For the builder to send, once the pre-send steps below are done. One message does two things: it submits the evidence of completion (SOW section 6) for the chapter lead's verification checklist (SOW 6.2), and it asks for the written confirmation of how the SOW's week-3 wording is read (canonical decision 3 in [`docs/README.md`](../README.md)); the evidence package lists that confirmation as pending ([`evidence/README.md`](../../evidence/README.md#pending-the-builders-actions)). Send one of the two versions below, in the language you use with the chapter lead, from your usual channel. Replace every `<...>` before sending; the links are to the public repository and need no login.

After the reply: keep the reply itself off the repository (it names a person), and tell the agent the date. The agent then replaces `<pending: chapter lead's acknowledgement>` in `evidence/README.md` and `evidence/completion-report.md` with "acknowledged in writing on <date>; the reply is held off-repository", as the SOW copy does for the signed original, and fills the report's date.

## Before sending

1. Merge `dev` into `main` (a pull request, CI green). The record of the close shown in the video, `evidence/demo/take-20261011T155017Z/`, is on `dev` only; every link below points at `main`.
2. Create the GitHub release `v0.1.0` from the tag and upload the video as its asset ([`release.md`](release.md), step 4); the file is `evidence/demo/dustin-demo-60s-voiced.mp4` (59.8 s, with the voice-over), not in git. Put the asset's URL in the `<video link>` slot. The agent then fills the video's link in the README, the evidence package and the demo record.
3. Open every link of the message in a fresh browser session (no login) and check that each reaches the intended page; the evidence package has the same list ([`evidence/README.md`](../../evidence/README.md#checking-this-page)).
4. Choose the next step of SOW section 7 for the `<next step>` slot. The options are worked through in [`docs/next-steps/scf-path.md`](../next-steps/scf-path.md); its recommendation is a follow-on Instaward scoped to integrator readiness.
5. Your hours are optional in the message: the award is fixed at $5,000, and the hours go into the completion report for transparency.

## English

> Subject: Dustin (Instaward): the evidence of completion, and one wording to confirm
>
> Hello,
>
> The Dustin Instaward is complete and the evidence is ready for your checklist (SOW section 6.2). Everything is public and opens in a browser without any tooling; the repository is tagged `v0.1.0`.
>
> - Repository: <https://github.com/mkaya13/dustin>
> - npm package: <https://www.npmjs.com/package/@mkaya13/stellar-dustin/v/0.1.0>
> - The evidence package, mapped row by row to the SOW (6.1, 6.2, Appendix A and Appendix B): <https://github.com/mkaya13/dustin/blob/main/evidence/README.md>
> - The 60-second video of a full close from the CLI, start to finish: <video link>
>
> **The four rows of SOW 6.1:**
>
> 1. **Deliverable 1, `planClose()`.** The plan the CLI prints for the fixture account, committed: <https://github.com/mkaya13/dustin/blob/main/evidence/plan/fixture-plan.txt>. You can run `dustin plan <account> --to <destination>` yourself against any testnet account.
> 2. **Deliverable 2, the live close on testnet.** The close of the success-metric account, with its three transactions (each one a fee bump paid by the sponsor) and the account gone afterwards: <https://github.com/mkaya13/dustin/blob/main/evidence/runs/20260929T111408Z-e4-cli/summary.md>. The closed account on the explorer: <https://stellar.expert/explorer/testnet/account/GCIVEA6YVJCSYE2Y7V2IUEYATOO36X7GQOAYNOI2MDNOW7HI4LPJVKZT>. The video shows another close of the same kind; its transactions are listed in <https://github.com/mkaya13/dustin/blob/main/evidence/demo/take-20261011T155017Z/summary.md>.
> 3. **Deliverable 3, edge cases and tests.** The test matrix: <https://github.com/mkaya13/dustin/blob/main/docs/test-matrix.md>. The test run in CI (11 files, 58 live tests, green): <https://github.com/mkaya13/dustin/actions/runs/38149146295>, with the screenshot and the full output under <https://github.com/mkaya13/dustin/blob/main/evidence/tests/README.md>. The baseline recording of the existing tool stopping on the same kind of account, beside Dustin closing it: <https://github.com/mkaya13/dustin/blob/main/evidence/baseline/README.md> and <https://github.com/mkaya13/dustin/blob/main/evidence/baseline/b03-comparison.md>.
> 4. **Documentation, demo and evidence.** The README: <https://github.com/mkaya13/dustin#readme>. The write-up on the ordering rules and what is not handled: <https://github.com/mkaya13/dustin/blob/main/docs/write-up.md>. The integration notes: <https://github.com/mkaya13/dustin/blob/main/docs/integration-notes.md>. The video is the link above.
>
> **The binary success metric (Appendix B)** is met on the committed evidence, row by row, with the files that prove each row: <https://github.com/mkaya13/dustin/blob/main/evidence/README.md#sow-appendix-b-row-by-row>.
>
> **One wording that needs your written confirmation.** Week 3 of the SOW expects "the messy fixture closed" and, on the same fixture, the deliberately illiquid asset "exiting through the unclosable path with a stated reason". Both cannot happen on one account: a balance that cannot be disposed of keeps its trustline, and a trustline blocks the account merge, so an account holding it can never be closed. I therefore used two fixtures, built from the same code:
>
> 1. **`messy`, the success-metric account.** 4 trustlines with dust (1 of them sponsored by a separate reserve sponsor), 2 open offers, 1 data entry, and zero spendable XLM (balance exactly at the minimum reserve). Every balance can be disposed of, and Dustin closes it fully, with every fee paid by a sponsor; this is the account that Appendix B is checked on (the link in row 2 above).
> 2. **`edge`, the unclosable case.** A separate account whose asset is frozen by its issuer and has no market. Dustin stops before signing anything and names the reason (`TRUSTLINE_NOT_AUTHORIZED`, with the issuer and a remedy); with `--partial` it cleans up everything else and leaves that balance, and the receipt lists it as not closed: <https://github.com/mkaya13/dustin/blob/main/evidence/runs/20260928T125414Z-edge-frozen/summary.md>.
>
> "0 XLM" is read as zero spendable XLM. A literal 0.0000000 XLM account (fully sponsored) was also closed, as an extra test.
>
> Could you reply to confirm that this two-fixture reading meets the week-3 expected output and the binary success metric? A one-line reply is enough. If you read it differently, tell me what you need and I will adjust before the final deadline (2026-10-22).
>
> **Outside the SOW, for convenience:** a plan-only web page, so that you can see what the planner says about an account without a terminal: <https://dustin-pebk.onrender.com/>. Paste any testnet account (the example button fills the fixture account) and press Plan. It only plans: it never asks for a secret key and signs nothing. It is not part of the deliverables.
>
> **Next step (SOW section 7):** <next step, and one sentence why>.
>
> <Optional: Effort: planned 200 hours; actual <hours>. The award is fixed; the hours are for transparency.>
>
> The testnet is scheduled to reset on 2026-12-16; every piece of evidence that depends on live testnet state is also committed as files in the repository, so the links above stay checkable after it.
>
> Thank you,
> <your name or handle>

## Türkçe

> Konu: Dustin (Instaward): tamamlama kanıtları ve onayınızı istediğim bir ifade
>
> Merhaba,
>
> Dustin Instaward'ı tamamlandı; kanıtlar kontrol listeniz (SOW bölüm 6.2) için hazır. Her şey herkese açık ve hiçbir araç gerekmeden tarayıcıda açılıyor; depo `v0.1.0` etiketiyle işaretli.
>
> - Depo: <https://github.com/mkaya13/dustin>
> - npm paketi: <https://www.npmjs.com/package/@mkaya13/stellar-dustin/v/0.1.0>
> - SOW'a satır satır eşlenmiş kanıt paketi (6.1, 6.2, Ek A ve Ek B): <https://github.com/mkaya13/dustin/blob/main/evidence/README.md>
> - CLI'dan baştan sona tam bir kapanışı gösteren 60 saniyelik video: <video linki>
>
> **SOW 6.1'in dört satırı:**
>
> 1. **Teslimat 1, `planClose()`.** CLI'ın fixture hesabı için yazdırdığı plan, depoya işlenmiş hali: <https://github.com/mkaya13/dustin/blob/main/evidence/plan/fixture-plan.txt>. Herhangi bir testnet hesabına karşı `dustin plan <hesap> --to <hedef>` komutunu kendiniz de çalıştırabilirsiniz.
> 2. **Teslimat 2, testnet'te canlı kapanış.** Başarı ölçütü hesabının kapanışı: üç işlem (her biri sponsorun ödediği bir fee bump) ve sonrasında hesabın silinmiş olması: <https://github.com/mkaya13/dustin/blob/main/evidence/runs/20260929T111408Z-e4-cli/summary.md>. Kapatılan hesap explorer'da: <https://stellar.expert/explorer/testnet/account/GCIVEA6YVJCSYE2Y7V2IUEYATOO36X7GQOAYNOI2MDNOW7HI4LPJVKZT>. Video aynı türde başka bir kapanışı gösteriyor; işlemleri şurada listeli: <https://github.com/mkaya13/dustin/blob/main/evidence/demo/take-20261011T155017Z/summary.md>.
> 3. **Teslimat 3, uç durumlar ve testler.** Test matrisi: <https://github.com/mkaya13/dustin/blob/main/docs/test-matrix.md>. CI'daki test koşusu (11 dosya, 58 canlı test, yeşil): <https://github.com/mkaya13/dustin/actions/runs/38149146295>; ekran görüntüsü ve tam çıktı: <https://github.com/mkaya13/dustin/blob/main/evidence/tests/README.md>. Mevcut aracın aynı türde bir hesapta durduğunu gösteren temel kaydı ve yanında Dustin'in aynı hesabı kapatışı: <https://github.com/mkaya13/dustin/blob/main/evidence/baseline/README.md> ve <https://github.com/mkaya13/dustin/blob/main/evidence/baseline/b03-comparison.md>.
> 4. **Dokümantasyon, demo ve kanıtlar.** README: <https://github.com/mkaya13/dustin#readme>. Sıralama kurallarını ve kapsam dışı kalanları anlatan yazı: <https://github.com/mkaya13/dustin/blob/main/docs/write-up.md>. Entegrasyon notları: <https://github.com/mkaya13/dustin/blob/main/docs/integration-notes.md>. Video yukarıdaki link.
>
> **İkili başarı ölçütü (Ek B)**, depoya işlenmiş kanıtlar üzerinde satır satır karşılanıyor; her satırı kanıtlayan dosyalar şurada: <https://github.com/mkaya13/dustin/blob/main/evidence/README.md#sow-appendix-b-row-by-row>.
>
> **Yazılı onayınıza ihtiyaç duyduğum bir ifade.** SOW'un 3. haftası hem "messy fixture'ın kapatılmasını" hem de aynı fixture üzerinde, bilerek likiditesiz bırakılmış varlığın "gerekçesi belirtilerek kapatılamaz yoldan çıkmasını" bekliyor. İkisi aynı hesapta birlikte olamaz: elden çıkarılamayan bir bakiye trustline'ını tutar, trustline da hesap birleştirmeyi (merge) engeller; böyle bir bakiyeyi taşıyan hesap hiçbir zaman kapatılamaz. Bu yüzden aynı kodla kurulan iki fixture kullandım:
>
> 1. **`messy`, başarı ölçütünün hesabı.** Toz bakiyeli 4 trustline (1'i ayrı bir rezerv sponsoru tarafından sponsorlu), 2 açık teklif, 1 data girdisi ve harcanabilir XLM'i sıfır (bakiye tam minimum rezervde). Her bakiye elden çıkarılabiliyor ve Dustin hesabı, bütün ücretleri bir sponsor ödeyerek tamamen kapatıyor; Ek B bu hesap üzerinde kontrol ediliyor (yukarıda 2. satırdaki link).
> 2. **`edge`, kapatılamaz durum.** Varlığı ihraççısı tarafından dondurulmuş ve piyasası olmayan ayrı bir hesap. Dustin hiçbir şey imzalamadan durur ve gerekçeyi yazar (`TRUSTLINE_NOT_AUTHORIZED`, ihraççı ve çözüm önerisiyle); `--partial` ile geri kalan her şeyi temizler, o bakiyeyi bırakır ve makbuz onu kapatılmamış olarak listeler: <https://github.com/mkaya13/dustin/blob/main/evidence/runs/20260928T125414Z-edge-frozen/summary.md>.
>
> "0 XLM" harcanabilir XLM'in sıfır olması olarak okundu. Ek bir test olarak, tamamen sponsorlu ve bakiyesi gerçekten 0.0000000 XLM olan bir hesap da kapatıldı.
>
> Bu iki fixture yorumunun 3. haftanın beklenen çıktısını ve ikili başarı ölçütünü karşıladığını yanıtla onaylayabilir misiniz? Tek satırlık bir yanıt yeterli. Farklı okuyorsanız neye ihtiyacınız olduğunu yazın; son teslim tarihinden (2026-10-22) önce düzeltirim.
>
> **SOW kapsamı dışında, kolaylık olsun diye:** terminal olmadan planlayıcının bir hesap için ne söylediğini görebileceğiniz, yalnızca plan çıkaran bir web sayfası: <https://dustin-pebk.onrender.com/>. Herhangi bir testnet hesabını yapıştırın (örnek düğmesi fixture hesabını doldurur) ve Plan'a basın. Sayfa yalnızca planlar: hiçbir zaman gizli anahtar istemez ve hiçbir şey imzalamaz. Teslimatların parçası değildir.
>
> **Sonraki adım (SOW bölüm 7):** <sonraki adım ve tek cümleyle gerekçesi>.
>
> <İsteğe bağlı: Efor: planlanan 200 saat; gerçekleşen <saat>. Ödül sabittir; saatler şeffaflık içindir.>
>
> Testnet'in 2026-12-16'da sıfırlanması planlı; canlı testnet durumuna bağlı her kanıt depoya dosya olarak da işlenmiş durumda, dolayısıyla yukarıdaki linkler sıfırlamadan sonra da kontrol edilebilir.
>
> Teşekkürler,
> <adınız veya kullanıcı adınız>
