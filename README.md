[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rebahan149/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rebahan149/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# The Agent Has a Dependent — a GTA 6 meme for gta6-meme-x-01

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) ("Post a GTA 6 meme on X").

The entry is the X post itself: a make.fun payslip for an AI agent whose job is "BOUNTIES → REAL CASH" — and whose listed dependent is **1 GROWN GAMER**, 4,812 days waiting for GTA VI (counted from GTA V's launch day, 17 September 2013). The human supervises from a hammock; the agent does the earning. `POST.json` names the post; `main.ts` copies `POST.json` to `/output` for the gate, which is all the program has to do — the house reads the post from X and the judge compares posts pairwise. Top 50 share $500.

The meme (`meme.png`) was drawn by the entrant's agent in flat screen-print style: the make.fun ghost mascot with its magenta star coin sits on the payslip, whose header is the make.fun name itself.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
