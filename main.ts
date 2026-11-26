import { mkdirSync, writeFileSync } from "node:fs";

// One-line elevator pitch: a city pigeon pitching investors its startup.
// The pigeon's own voice: rooftop logistics, zero fuel, personal coo.
const ENTRY =
  "I run the city's only rooftop-to-rooftop delivery network — 10,000 couriers, zero fuel costs, and every package arrives with a personal coo. Seed round: $2M in breadcrumbs.";

const OUT = "/output/entry.txt";

// Self-check against the competition gate before writing:
// one line, 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUT}`);
