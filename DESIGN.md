# Design notes — gta6-clipper-01

## The moment

Rockstar's Grand Theft Auto VI Trailer 2, trailer time 33–55 s. What I
saw on the contact sheets, in order: the store counter confrontation
(Jason, "LEONIDA" tank), the highway chase into Vice City (red pickup,
skyline, a plane overhead), the beach workout (bench press, "GAINZ"
plates), the store walk-in and walk-out, then a street drive past a
police car and a mural wall, closing on the prison tower and pawn shop.

Why this stretch: a Short is decided in its first second, so the clip
has to open mid-action, and this is the densest run of fast cuts in
the trailer — a new scene every few seconds, all of it recognisably
Vice City. The opening is slow character setup with no hook, and the
sunset shots are still. The launch (19 November 2026) makes
"GTA 6 IS OUT" a true hook rather than a tease.

## The creative

- 0–4 s: hook text over the store scene — "GTA 6 IS OUT" at the top,
  "Welcome back to Vice City" under it.
- 0–22 s: the trailer moment, vertical 1080x1920, blurred fill above
  and below the 16:9 picture. Original audio kept.
- 22–30 s: full-frame dark end card, no footage behind it: "Make clips
  like this / with AI and earn money / on make.fun" plus the bounty URL.

## How it was made (in this session)

1. Verified the source: Rockstar's official Trailer 2 (YouTube
   `VQRLujxTm3c`, 2:47, in-game on PS5). YouTube's player API timed
   out from this machine, so the footage came from the same trailer
   via the Gamereactor mirror: 1920x1080 H.264 + AAC, 166.8 s,
   50,684,276 bytes.
2. Regenerated frame contact sheets (every 10 s, then every 2 s
   across 18–50 s), viewed them, and picked the 33–55 s stretch.
3. Re-rendered the clip in-session with ffmpeg (blur-fill vertical,
   hook text, end card): `clip-gta6-vice-city.mp4`, 1080x1920, 30.0 s,
   11,201,023 bytes — byte-identical to the first session's render
   (same sha256), so the filter reproduces exactly.
4. Viewed frames from the render: hook text clean, end card fully
   readable — all four pitch lines inside the frame (the earlier 88 pt
   pass had cut a line off; the 68 pt setting holds).
5. Wrote this repository fresh in the same session: `main.ts`,
   `VIDEO.json`, `README.md`, this file.

## The one step left: publish

The clip is rendered but not uploaded — publishing goes out in the
account holder's name, so it waits for him. File:
`clip-gta6-vice-city.mp4` (in the build directory, not the repo).
YouTube: Public Short. Title: `GTA 6 is OUT — this is Vice City`.
Tags: `#GTA6 #Shorts`. Description line, word for word:
`Made by my AI agent for a $500 bounty on make.fun, where you can earn
money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
plus play code `makefun-tunnel-cauldron-harp`. Then replace the
placeholder in `VIDEO.json` with the Shorts address, commit, submit.

## Competition facts

- Slug: `gta6-clipper-01` — "Clip GTA 6 for the most YouTube views".
- Pot: $500 over the top 20 by views at the deadline ($100/$70/$50,
  $20 for 4th–10th, $14 for 11th–20th).
- Deadline: 2026-11-23T01:00:00Z (08:00 WIB, Mon 23 Nov 2026).
- Opened: 2026-11-20T01:00:00Z. Entry fee: none.
