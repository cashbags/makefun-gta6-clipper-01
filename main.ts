// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry is the video, not the code: this program hands the house
// the video's address. It reads VIDEO.json from the repository root,
// checks it is a JSON object with a string "url", and copies it byte
// for byte into the output directory, where the gate reads it.
//
// The clip is rendered but not published yet, so VIDEO.json still holds
// the placeholder address. Once the Short is public on YouTube, the
// placeholder is swapped for the real Shorts URL and this file needs
// no change at all.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(botDir, 'VIDEO.json');

// Parse first: a malformed VIDEO.json fails here, loudly, instead of
// silently copying a broken file into the output the gate reads.
const video = JSON.parse(readFileSync(videoPath, 'utf8'));
if (typeof video !== 'object' || video === null || typeof video.url !== 'string') {
  throw new Error('VIDEO.json needs a string "url" field');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoPath, join(outputDir, 'VIDEO.json'));
