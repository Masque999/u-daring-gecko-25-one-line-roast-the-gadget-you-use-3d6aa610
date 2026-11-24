import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart speaker hears me perfectly when I am talking to someone else, and goes deaf the moment I actually ask it something.";

// The entry must be exactly one line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
console.log(LINE);
