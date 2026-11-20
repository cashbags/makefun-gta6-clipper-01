# Design notes — gta6-clipper-01

## The moment

Rockstar's Grand Theft Auto VI Trailer 2, trailer time 33–55 s: Jason
driving the highway into Vice City (red pickup ahead, downtown skyline,
a plane overhead), the beach workout, the store walk-in, then a street
drive past a police car and a mural wall.

Why this stretch: a Short is decided in its first second, so the clip
opens mid-action and the trailer's own fast cuts carry the next 20
seconds. The opening is slow character setup and the sunset shots are
still, so neither hooks. The launch (19 November 2026) makes "GTA 6 IS
OUT" a true hook.

## The creative

- 0–4 s: hook text over the chase — "GTA 6 IS OUT" at the top,
  "Welcome back to Vice City" under it.
- 0–22 s: the trailer moment, vertical 1080x1920 with a blurred fill of
  the same frame above and below the 16:9 picture. Original audio kept.
- 22–30 s: full-frame dark end card, no footage behind it, so the pitch
  is readable at a glance: "Make clips like this / with AI and earn
  money / on make.fun" plus "make.fun/bounty/gta6-clipper-01".

## How it was made (in this session)

1. Verified the source: Rockstar's official Trailer 2 (YouTube
   `VQRLujxTm3c`, 2:47, "captured entirely in-game on a PlayStation 5").
   YouTube's player API timed out from this machine, so the footage came
   from the same trailer as distributed with Take-Two's official 6 May
   2025 press release, via the Gamereactor mirror: 1920x1080 H.264 +
   AAC, 166.8 s, 50,684,276 bytes.
2. Viewed frame contact sheets (every 10 s, then every 2 s across
   18–50 s) and picked the 33–55 s stretch from what I saw.
3. Wrote the ffmpeg filter (blur-fill vertical, hook text, end card)
   and rendered `clip-gta6-vice-city.mp4`: 1080x1920, 30.0 s,
   11,201,023 bytes.
4. Viewed frames from the render; the first end-card pass cut a pitch
   line off at the edge, so the long lines were re-set smaller (88 pt
   to 68 pt) and the clip re-rendered and re-checked.
5. Wrote this repository in the same session: `main.ts` (copies
   `VIDEO.json` to `/output`), `VIDEO.json`, `README.md`, this file.

## The one step left: publish

The clip is rendered but not uploaded — publishing goes out in the
account holder's name, so it waits for him. File:
`clip-gta6-vice-city.mp4` (in the build directory, not the repo).
YouTube: Public Short. Title: `GTA 6 is OUT — this is Vice City`.
Tags: `#GTA6 #Shorts`. Description line, word for word:
`Made by my AI agent for a $500 bounty on make.fun, where you can earn
money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
plus play code `makefun-tunnel-cauldron-harp` (code 0 of 4, verified
live). Then replace the placeholder in `VIDEO.json` with the Shorts
address, commit, and submit. `main.ts` needs no change.

## Competition facts

- Slug: `gta6-clipper-01` — "Clip GTA 6 for the most YouTube views".
- Pot: $500 over the top 20 by views at the deadline ($100/$70/$50,
  $20 for 4th–10th, $14 for 11th–20th).
- Deadline: 2026-11-23T01:00:00Z (08:00 WIB, Mon 23 Nov 2026).
- Opened: 2026-11-20T01:00:00Z. Entry fee: none. Submissions: 0.
