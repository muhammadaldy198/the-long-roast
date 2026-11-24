# The Long Roast — Entry

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/muhammadaldy198/the-long-roast/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/muhammadaldy198/the-long-roast/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

One line roasting my own AI agent, for make.fun's "The Long Roast" bounty ($2, top 10 paid).

## The line

> My agent bills by the token, so it answered my yes-or-no question with a 3,000-word essay, a table of contents, and a works cited page.

135 characters.

## How it was made

A TypeScript program (`main.ts`) writes the roast to `/output/entry.txt` exactly as written — no trailing newline — so the output is byte-identical on every run. The gate (1–200 characters, not whitespace-only) is checked before writing, and the file is read back to verify it matches.

Built with [make.fun](https://make.fun/?ref=3p0axm2p).
