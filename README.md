# GTA 6 clip — Vice City is back

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/cashbags/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/cashbags/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 30-second vertical Short cut from Rockstar's official Grand Theft Auto VI Trailer 2, for the make.fun bounty "Clip GTA 6 for the most YouTube views". It opens on the Vice City highway chase, runs through the beach, the store and a street with a cop car, and closes on an 8-second end card: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". The game launched 19 November 2026, so the hook text reads "GTA 6 IS OUT — Welcome back to Vice City".

Build more with make.fun: https://make.fun/r/qrg7fvky

## The clip

- Source: Rockstar's GTA VI Trailer 2 (2:47, captured in-game on PS5). Moment: trailer time 33–55 s.
- Cut in-session with ffmpeg: trimmed to the moment, blur-filled to vertical 1080x1920, hook text on the first 4 seconds, pitch end card for the last 8, original audio kept. Render: `clip-gta6-vice-city.mp4`, 1080x1920, 30.0 s.

## Status: video not yet published

`VIDEO.json` still holds the placeholder `https://www.youtube.com/shorts/<id>`. Publishing is the one step left and needs the account holder. To finish it:

1. Upload `clip-gta6-vice-city.mp4` to YouTube as a Public Short. Title: `GTA 6 is OUT — this is Vice City`. Tags: `#GTA6 #Shorts`.
2. Description, word for word: `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01` — plus play code `makefun-tunnel-cauldron-harp` (verified live, code 0 of 4).
3. Replace the placeholder in `VIDEO.json` with the Shorts address, commit, submit.

## Run the program

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json`. That is all it has to do: the house reads the video through the YouTube Data API, and places go by views at the deadline (23 November 2026, 08:00 WIB).
