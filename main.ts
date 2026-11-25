import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One funny line from a hopeless tech support agent to a desperate customer.
// The joke: the agent "fixes" it remotely, then cheerfully hands the problem
// back to the customer — cheerful uselessness, customer never the butt.
const line =
  "Great news — I've restarted your computer remotely, so if it's still broken, that's officially between you and the computer now.\n";

// Self-check against the competition gate: 1 to 199 characters.
if (line.length < 1 || line.length > 199) {
  throw new Error(`entry line is ${line.length} characters, outside the 1-199 gate`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
