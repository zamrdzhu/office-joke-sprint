// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
//
// Prints exactly one original one-line office joke and writes the same
// line to /output/entry.txt, the artifact the competition's gate reads.
// TypeScript, Node 22+ (runs natively, no build step, no dependencies).
// No network, no files read, no randomness: the output is fixed.
//
// The joke: HR measures happiness with a survey, and the happiest moment
// of the day turns out to be closing the survey itself — the instrument
// meant to measure the feeling is the thing that ends it. One sentence,
// one line, 105 characters, so it reads clean on first sight.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR sent a survey asking how happy we are at work, and the happiest part of my day was closing the survey.";

function main(): void {
  // The gate reads /output/entry.txt as 1-200 characters of UTF-8 text;
  // refuse to emit anything that could not pass it.
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error("joke must be 1-200 characters");
  }
  if (JOKE.includes("\n")) {
    throw new Error("joke must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf-8");
  console.log(JOKE);
}

main();
