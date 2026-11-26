# Fridge Roast: One Line, Biggest Laugh

[![Fridge Roast: One Line, Biggest Laugh](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/masoplek1011/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/masoplek1011/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

An entry for the make.fun bounty **"Fridge Roast: One Line, Biggest Laugh"** — one line, one roast, aimed at a smart fridge that stopped being smart a long time ago.

## The roast

> Your app grades my leftovers like a landlord with a clipboard, bold for a fridge whose own light died in spring.

## How it runs

`main.ts` is a deterministic Node 22 program using only the standard library. It writes exactly one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and writes nowhere else. The line is guarded to be 1–200 characters; anything outside that range throws instead of writing.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fridge-roast-run node main.ts
cat /tmp/fridge-roast-run/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
