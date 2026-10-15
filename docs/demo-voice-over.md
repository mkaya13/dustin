# Dustin demo video: voice-over script

For the builder to read aloud over the 60-second video (`evidence/demo/dustin-demo-60s.mp4`, 59.8 s). Each line fits its shot at a calm pace of about two and a half words per second, and repeats the burned-in caption in spoken form, so the voice and the captions never disagree. Times are from the take's record (`evidence/demo/take-20261011T155017Z/summary.md`).

| Time | On screen | Say |
|---|---|---|
| 0:00 - 0:05 | Title card, the account's address | "This account holds four XLM and can't spend a single one." |
| 0:05 - 0:13 | The account on the explorer, before | "Four trustlines, two open offers and a data entry. Every XLM is locked as reserve, so it's stuck." |
| 0:13 - 0:16 | The unsponsored attempt, rejected | "Without a sponsor, its transactions are rejected." |
| 0:16 - 0:26 | `dustin plan` in the terminal | "Dustin first prints a read-only plan: every step, the reason for it, and what reaches the destination. Nothing is signed yet." |
| 0:26 - 0:31 | `dustin close --execute`, the confirmation | "To run it, I confirm the last four characters of the destination." |
| 0:31 - 0:44 | The three transactions | "Three transactions: cleanup, conversion, and the merge. Each one is wrapped in a fee bump, so the sponsor pays every fee and the account pays nothing." |
| 0:44 - 0:49 | The receipt | "Four XLM reached the destination. Fees paid by the account: zero." |
| 0:49 - 0:56 | The explorer after, then Horizon's 404 | "And on the explorer, the account is gone. Anyone can open this link and check." |
| 0:56 - 0:59.8 | End card | "Dustin. Read the plan, then close the account." |

## Recording

- Play the video muted on one screen and read each line as its shot appears; a short silence between lines is fine.
- Record in a quiet room, the microphone a hand's width from the mouth. On Windows, the Sound Recorder app is enough; save as `.m4a`, `.mp3` or `.wav`.
- One take from the first second to the end is easiest to lay over the video. If a line runs long, leave out its last words rather than speeding up.
- The voice is added to the existing video without changing its cut or its captions: `ffmpeg -i dustin-demo-60s.mp4 -i voice.m4a -map 0:v -map 1:a -c:v copy -c:a aac -shortest out.mp4`.
