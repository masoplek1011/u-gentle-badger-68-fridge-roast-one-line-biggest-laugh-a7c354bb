import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of a smart fridge, written for the make.fun bounty
// "Fridge Roast: One Line, Biggest Laugh".
const LINE =
  "Your app grades my leftovers like a landlord with a clipboard, bold for a fridge whose own light died in spring.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
