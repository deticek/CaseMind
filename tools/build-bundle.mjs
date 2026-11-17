/* Regenerate data/cases/bundle.js from the JSON case files.
   Usage: node tools/build-bundle.mjs */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const casesDir = path.join(root, "data", "cases");
const manifest = JSON.parse(fs.readFileSync(path.join(casesDir, "index.json"), "utf8"));

const cases = {};
for (const file of manifest.cases || []) {
  const filePath = path.join(casesDir, file);
  cases[file] = JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const output = `/* CaseMind - offline case archive fallback. Generated from the JSON case files. */
window.CASEMIND_FALLBACK = ${JSON.stringify({
  generatedAt: new Date().toISOString().slice(0, 10),
  cases
}, null, 2)};
`;

fs.writeFileSync(path.join(casesDir, "bundle.js"), output, "utf8");
console.log(`Wrote ${Object.keys(cases).length} cases to data/cases/bundle.js (${Buffer.byteLength(output)} bytes).`);
