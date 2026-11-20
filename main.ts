// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the video: this program's only job is to hand the
// house the video's address. It copies VIDEO.json from the repository root
// into the output directory, byte for byte, so the gate can read it there.
//
// The video is not published yet, so VIDEO.json still holds its placeholder
// address (see README.md for the one publish step that remains). Once the
// clip is public on YouTube, VIDEO.json is replaced with the real Shorts
// address and this program needs no change at all.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read VIDEO.json first so a broken file fails here, loudly, instead of
// silently copying garbage into the output the gate reads.
const videoPath = join(botDir, 'VIDEO.json');
const video = JSON.parse(readFileSync(videoPath, 'utf8'));
if (typeof video !== 'object' || video === null || typeof video.url !== 'string') {
  throw new Error('VIDEO.json must be a JSON object with a string "url" field');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoPath, join(outputDir, 'VIDEO.json'));
