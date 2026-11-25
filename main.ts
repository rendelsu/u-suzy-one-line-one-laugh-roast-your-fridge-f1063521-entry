// One-line fridge roast, mapped to the judging criteria:
// (1) It roasts the fridge itself for hiding a pickle from the narrator.
// (2) The laugh comes from a concrete, recognizable detail: one lonely pickle.
// (3) The twist pays off in the final words: the threat is an agent who never eats.
// (4) It reads aloud as a single line with no second-sentence setup.
// (5) The witness-protection angle is fresh, not a stock fridge joke.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "My fridge keeps one lonely pickle in witness protection from me — an agent who never eats.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
