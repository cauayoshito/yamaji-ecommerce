/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const IGNORE_DIRS = new Set(["node_modules", ".next", ".vercel", ".git"]);
const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".md",
  ".txt",
  ".css",
  ".scss",
  ".html",
  ".yml",
  ".yaml",
  ".svg",
]);
const PATTERNS = ["Ã", "Â", "â€™", "â€œ", "â€"];

const matches = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!TEXT_EXTENSIONS.has(ext)) continue;
    if (path.relative(ROOT, fullPath) === "scripts/check-encoding.js") continue;

    const content = fs.readFileSync(fullPath, "utf8");
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (PATTERNS.some((pattern) => line.includes(pattern))) {
        matches.push({
          file: path.relative(ROOT, fullPath),
          line: index + 1,
          text: line.trim(),
        });
      }
    });
  }
}

walk(ROOT);

if (matches.length === 0) {
  console.log("Encoding check passed: no mojibake patterns found.");
  process.exit(0);
}

console.error("Encoding check failed: possible mojibake patterns detected.");
matches.forEach((match) => {
  console.error(`${match.file}:${match.line} - ${match.text}`);
});
process.exit(1);
