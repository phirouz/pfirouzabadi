import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const resumePath = join(__dirname, "..", "..", "resume-source.md");
const outPath = join(__dirname, "..", "src", "resume-context.ts");

const content = readFileSync(resumePath, "utf-8");
const escaped = content
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\$\{/g, "\\${");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(
  outPath,
  `// Auto-generated from resume-source.md by scripts/build-context.mjs. Do not edit directly.\nexport const resumeContext = \`${escaped}\`;\n`,
);
