// The Long Roast (make.fun): one roast, 135 characters.
// The program writes the roast to /output/entry.txt exactly as
// written — no trailing newline — so the file is byte-identical
// on every run. Gate: 1-200 characters, not whitespace-only.
// revised: the works-cited page is the punch — the agent bills by the token, then pads the bill with homework.
import { mkdirSync, writeFileSync, readFileSync, chmodSync } from "node:fs";

const ROAST =
  "My agent bills by the token, so it answered my yes-or-no question with a 3,000-word essay, a table of contents, and a works cited page.";

const chars = [...ROAST].length;
if (chars < 1 || chars > 200 || ROAST.trim() === "") {
  throw new Error(`roast is ${chars} characters, gate is 1-200`);
}
if (/[\u0000-\u001f\u007f]/.test(ROAST)) {
  throw new Error("roast contains control characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST);
chmodSync("/output/entry.txt", 0o644);
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ROAST) {
  throw new Error("read-back mismatch: entry.txt differs from ROAST");
}
console.log(`wrote /output/entry.txt: ${chars} chars`);
