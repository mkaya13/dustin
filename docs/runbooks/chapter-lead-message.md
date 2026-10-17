# Message to the chapter lead: the completion of the SOW, with the two-fixture reading of week 3

For the builder to send, once the pre-send steps below are done. It submits the evidence of completion (SOW section 6) for the chapter lead's verification checklist (SOW 6.2) and explains, as a statement, how the SOW's week-3 wording was met on two accounts (canonical decision 3 in [`docs/README.md`](../README.md)); the message is sent on 2026-10-17 for the chapter lead's approval of the whole submission, and that approval, once it comes in writing, is the acknowledgement the evidence package lists as pending ([`evidence/README.md`](../../evidence/README.md#pending-the-builders-actions)). Send one of the two versions below, in the language you use with the chapter lead, from your usual channel. Every slot is filled; the links are to the public repository and need no login.

After the reply: keep the reply itself off the repository (it names a person), and tell the agent the date. The agent then replaces `<pending: chapter lead's acknowledgement>` in `evidence/README.md` and `evidence/completion-report.md` with "acknowledged in writing on <date>; the reply is held off-repository", as the SOW copy does for the signed original, and fills the report's date.

## Before sending

1. Merge `dev` into `main` (a pull request, CI green). The record of the close shown in the video, `evidence/demo/take-20261011T155017Z/`, is on `dev` only; every link below points at `main`.
2. Done on 2026-10-15: the GitHub release `v0.1.0` holds the video as its asset, <https://github.com/mkaya13/dustin/releases/download/v0.1.0/dustin-demo-first-sow.mp4>, and the message below carries that link.
3. Open every link of the message in a fresh browser session (no login) and check that each reaches the intended page; the evidence package has the same list ([`evidence/README.md`](../../evidence/README.md#checking-this-page)).
4. The next step of SOW section 7 is filled in the message: a follow-on Instaward scoped to integrator readiness, the recommendation of [`docs/next-steps/scf-path.md`](../next-steps/scf-path.md) (wallet signing is phase 2 of [`docs/web-demo.md`](../web-demo.md), "Roadmap"). Change it if you decide otherwise.
5. Hours are not in the message: the award is fixed at $5,000, and the hours go into the completion report for transparency.

## English

> Subject: Dustin (Instaward): the evidence of completion
>
> Hello,
>
> The Dustin Instaward is complete and the evidence is ready for your checklist (SOW section 6.2). Everything is public and opens in a browser without any tooling; the repository is tagged `v0.1.0`.
>
> - Repository: <https://github.com/mkaya13/dustin>
> - npm package: <https://www.npmjs.com/package/@mkaya13/stellar-dustin/v/0.1.0>
> - The evidence package, mapped row by row to the SOW (6.1, 6.2, Appendix A and Appendix B): <https://github.com/mkaya13/dustin/blob/main/evidence/README.md>
> - The 60-second video of a full close from the CLI, start to finish, with a voice-over: <https://github.com/mkaya13/dustin/releases/download/v0.1.0/dustin-demo-first-sow.mp4> (an asset of the release <https://github.com/mkaya13/dustin/releases/tag/v0.1.0>; also on YouTube: <https://www.youtube.com/watch?v=JoTat4bXGR0>)
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
> **How the week-3 milestone was met, on two accounts.** The SOW's expected output for week 3 says two things about the same test account: that "the messy fixture is closed", and that a deliberately illiquid asset on it "exits through the unclosable path with a stated reason". In plain terms: the account must end up deleted, and at the same time it must hold an asset that cannot be got rid of, which Dustin must refuse with an explanation. These two cannot both be true of one account, for a reason that comes from Stellar itself, not from Dustin:
>
> - To delete a Stellar account it must first be emptied: every asset balance must be gone and every trustline (the account's permission to hold an asset) removed. Stellar refuses to merge an account that still has a trustline.
> - A trustline can be removed only when its balance is zero. A balance that cannot be sold, sent back to its issuer or transferred anywhere keeps its trustline open.
> - So an account that holds an asset nobody can take off it can never be deleted. Whichever account carries the "unclosable" asset stays open by definition.
>
> I therefore split the milestone across two test accounts, built by the same fixture command, so that each half of the sentence is demonstrated where it can be:
>
> 1. **`messy`, the account the success metric is checked on.** It holds 4 trustlines with dust (tiny leftover balances; 1 of the trustlines is sponsored, meaning another account paid its reserve), 2 open offers, 1 data entry, and zero spendable XLM: the account holds XLM, but all of it is locked as the minimum reserve, so it cannot pay even one transaction fee on its own. Every balance on it can be disposed of, so Dustin closes it fully: it cancels the offers, sells or returns the dust, removes the trustlines and the data entry, and merges the account away, with every fee paid by the sponsor. Afterwards the account no longer exists. This is the account every box of Appendix B is ticked on (the link in row 2 above).
> 2. **`edge`, the unclosable case.** A separate account holding an asset that its issuer has frozen and that has no buyers. Dustin reads the account, finds that the balance cannot be moved by any route, and stops before signing anything, printing the reason (`TRUSTLINE_NOT_AUTHORIZED`), the issuer's address and what would unblock it. With `--partial` it cleans up everything else on that account and leaves only that balance, and the receipt lists it as not closed: <https://github.com/mkaya13/dustin/blob/main/evidence/runs/20260928T125414Z-edge-frozen/summary.md>.
>
> Two further readings follow the same logic. "0 XLM" is read as zero spendable XLM, because an account with literally no XLM can only exist on Stellar when someone else sponsors its reserve; one such fully sponsored 0.0000000 XLM account was closed too, as an extra test. And "the same fixture" is read as the same fixture recipe: both accounts come from one command, `dustin fixture create`, with the profile `messy` or `edge`. Together, the two accounts meet the week-3 expected output and the binary success metric: the messy fixture is closed, and the illiquid asset exits through the unclosable path with its reason stated.
>
> **Outside the SOW, for convenience:** a plan-only web page, so that you can see what the planner says about an account without a terminal: <https://dustin-pebk.onrender.com/>. Paste any testnet account (the example button fills the fixture account) and press Plan. It only plans: it never asks for a secret key and signs nothing. It is not part of the deliverables.
>
> **Next step (SOW section 7):** apply for a follow-on Instaward, scoped to integrator readiness: wallet signing of the close from the browser (the wallet signs for the account, the integrator's own process pays the fees, so no secret ever reaches a page) and a first named wallet integration of the published package, while development continues independently in the meantime.
>
> The testnet is scheduled to reset on 2026-12-16; every piece of evidence that depends on live testnet state is also committed as files in the repository, so the links above stay checkable after it.
>
> Thank you,
> Mert Kaya (GitHub: mkaya13)

## Türkçe

> Konu: Dustin (Instaward): tamamlama kanıtları
>
> Merhaba,
>
> Dustin Instaward'ı tamamlandı; kanıtlar kontrol listeniz (SOW bölüm 6.2) için hazır. Her şey herkese açık ve hiçbir araç gerekmeden tarayıcıda açılıyor; depo `v0.1.0` etiketiyle işaretli.
>
> - Depo: <https://github.com/mkaya13/dustin>
> - npm paketi: <https://www.npmjs.com/package/@mkaya13/stellar-dustin/v/0.1.0>
> - SOW'a satır satır eşlenmiş kanıt paketi (6.1, 6.2, Ek A ve Ek B): <https://github.com/mkaya13/dustin/blob/main/evidence/README.md>
> - CLI'dan baştan sona tam bir kapanışı gösteren, seslendirmeli 60 saniyelik video: <https://github.com/mkaya13/dustin/releases/download/v0.1.0/dustin-demo-first-sow.mp4> (sürüm sayfasının eki: <https://github.com/mkaya13/dustin/releases/tag/v0.1.0>; YouTube'da da: <https://www.youtube.com/watch?v=JoTat4bXGR0>)
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
> **3. hafta kilometre taşı nasıl karşılandı: iki hesapla.** SOW'un 3. hafta için beklenen çıktısı aynı test hesabı hakkında iki şey söylüyor: "messy fixture kapatılır" ve üzerindeki, bilerek likiditesiz bırakılmış varlık "gerekçesi belirtilerek kapatılamaz yoldan çıkar". Düz bir dille: hesap sonunda silinmiş olmalı ve aynı zamanda elden çıkarılamayan bir varlık taşımalı; Dustin de bunu bir açıklamayla reddetmeli. Bu ikisi aynı hesap için birlikte doğru olamaz; sebebi Dustin'den değil, Stellar'ın kendisinden geliyor:
>
> - Bir Stellar hesabını silmek için önce boşaltmak gerekir: her varlık bakiyesi sıfırlanmalı ve her trustline (hesabın bir varlığı tutma izni) kaldırılmalı. Stellar, üzerinde hâlâ trustline olan bir hesabı birleştirmeyi (merge) reddeder.
> - Bir trustline ancak bakiyesi sıfırken kaldırılabilir. Satılamayan, ihraççısına geri gönderilemeyen ya da başka yere aktarılamayan bir bakiye trustline'ını açık tutar.
> - Dolayısıyla kimsenin üzerinden alamayacağı bir varlık taşıyan hesap hiçbir zaman silinemez. "Kapatılamaz" varlığı hangi hesap taşıyorsa o hesap tanım gereği açık kalır.
>
> Bu yüzden kilometre taşını, aynı fixture komutuyla kurulan iki test hesabına böldüm; böylece cümlenin her yarısı gösterilebileceği yerde gösteriliyor:
>
> 1. **`messy`, başarı ölçütünün üzerinde kontrol edildiği hesap.** Toz bakiyeli (çok küçük artık bakiyeler) 4 trustline (bunlardan 1'i sponsorlu, yani rezervini başka bir hesap ödemiş), 2 açık teklif, 1 data girdisi ve harcanabilir XLM'i sıfır: hesapta XLM var ama tamamı minimum rezerv olarak kilitli, dolayısıyla tek bir işlem ücretini bile kendi başına ödeyemiyor. Üzerindeki her bakiye elden çıkarılabiliyor; bu yüzden Dustin hesabı tamamen kapatıyor: teklifleri iptal ediyor, tozu satıyor ya da iade ediyor, trustline'ları ve data girdisini kaldırıyor ve hesabı birleştiriyor; her ücreti sponsor ödüyor. Sonrasında hesap artık yok. Ek B'nin her kutusu bu hesap üzerinde işaretleniyor (yukarıda 2. satırdaki link).
> 2. **`edge`, kapatılamaz durum.** İhraççısının dondurduğu ve alıcısı olmayan bir varlık taşıyan ayrı bir hesap. Dustin hesabı okuyor, bakiyenin hiçbir yoldan taşınamayacağını görüyor ve hiçbir şey imzalamadan duruyor; gerekçeyi (`TRUSTLINE_NOT_AUTHORIZED`), ihraççının adresini ve neyin önünü açacağını yazıyor. `--partial` ile o hesaptaki geri kalan her şeyi temizliyor, yalnızca o bakiyeyi bırakıyor ve makbuz onu kapatılmamış olarak listeliyor: <https://github.com/mkaya13/dustin/blob/main/evidence/runs/20260928T125414Z-edge-frozen/summary.md>.
>
> İki okuma daha aynı mantığı izliyor. "0 XLM", harcanabilir XLM'in sıfır olması olarak okundu; çünkü Stellar'da hiç XLM'i olmayan bir hesap ancak rezervini başkası sponsorladığında var olabilir; böyle tamamen sponsorlu, bakiyesi 0.0000000 XLM olan bir hesap da ek test olarak kapatıldı. "Aynı fixture" ise aynı fixture tarifi olarak okundu: iki hesap da tek bir komuttan, `messy` ya da `edge` profiliyle `dustin fixture create`'ten geliyor. İki hesap birlikte 3. haftanın beklenen çıktısını ve ikili başarı ölçütünü karşılıyor: messy fixture kapatıldı, likiditesiz varlık ise gerekçesi belirtilerek kapatılamaz yoldan çıktı.
>
> **SOW kapsamı dışında, kolaylık olsun diye:** terminal olmadan planlayıcının bir hesap için ne söylediğini görebileceğiniz, yalnızca plan çıkaran bir web sayfası: <https://dustin-pebk.onrender.com/>. Herhangi bir testnet hesabını yapıştırın (örnek düğmesi fixture hesabını doldurur) ve Plan'a basın. Sayfa yalnızca planlar: hiçbir zaman gizli anahtar istemez ve hiçbir şey imzalamaz. Teslimatların parçası değildir.
>
> **Sonraki adım (SOW bölüm 7):** entegratör hazırlığına odaklı bir devam Instaward'ına başvurmak: kapanışın tarayıcıdan cüzdanla imzalanması (hesap adına cüzdan imzalar, ücretleri entegratörün kendi süreci öder; böylece hiçbir gizli anahtar bir sayfaya ulaşmaz) ve yayımlanan paketin ilk somut cüzdan entegrasyonu; bu arada geliştirme bağımsız olarak sürecek.
>
> Testnet'in 2026-12-16'da sıfırlanması planlı; canlı testnet durumuna bağlı her kanıt depoya dosya olarak da işlenmiş durumda, dolayısıyla yukarıdaki linkler sıfırlamadan sonra da kontrol edilebilir.
>
> Teşekkürler,
> Mert Kaya (GitHub: mkaya13)
