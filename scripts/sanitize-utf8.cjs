#!/usr/bin/env node
/**
 * Sanitize broken UTF-8 text anomalies in blog/CMS source files.
 *
 * Scans .ts and .tsx files for double-encoded mojibake patterns
 * (text written in UTF-8, misinterpreted as Windows-1252, and
 * re-saved as UTF-8, producing â€", â€œ, etc.).
 *
 * Fixes:
 *   â€   (en-dash misread) → en-dash –
 *   â€| (em-dash misread)  → em-dash —
 *   â€™ (right quote)      → right single quote '
 *
 * Usage:
 *   node scripts/sanitize-utf8.cjs                              # default
 *   node scripts/sanitize-utf8.cjs --dry-run                    # preview only
 *   node scripts/sanitize-utf8.cjs --path src/lib/blog-data.ts  # single file
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DRY_RUN = process.argv.includes("--dry-run");
const SINGLE_FILE = process.argv.includes("--path")
  ? process.argv[process.argv.indexOf("--path") + 1]
  : null;

// Map of broken byte sequences → correct UTF-8 replacements
// These are double-encoded: original UTF-8 was misinterpreted as Windows-1252,
// then the resulting chars were re-encoded as UTF-8.
//
// Original → UTF-8 → Win-1252 misread → double-encoded mojibake
// — (U+2014) → 0xE2 0x80 0x94 → â € " → \xc3\xa2 \xe2\x82\xac \xe2\x80\x9d
// – (U+2013) → 0xE2 0x80 0x93 → â € " → \xc3\xa2 \xe2\x82\xac \xe2\x80\x9c
// ' (U+2019) → 0xE2 0x80 0x99 → â € ™ → \xc3\xa2 \xe2\x82\xac \xe2\x84\xa2

const FIXES = [
  { from: [0xc3, 0xa2, 0xe2, 0x82, 0xac, 0xe2, 0x80, 0x9d], to: [0xe2, 0x80, 0x94], label: "em-dash → —" },
  { from: [0xc3, 0xa2, 0xe2, 0x82, 0xac, 0xe2, 0x80, 0x9c], to: [0xe2, 0x80, 0x93], label: "en-dash → –" },
  { from: [0xc3, 0xa2, 0xe2, 0x82, 0xac, 0xe2, 0x80, 0x99], to: [0xe2, 0x80, 0x99], label: "r-quote → '" },
];

function findSourceFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== "dist") {
      results.push(...findSourceFiles(full));
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function sanitize(buf) {
  let fixed = 0;
  const fixLog = [];

  for (const { from, to, label } of FIXES) {
    const fBytes = Buffer.from(from);
    const tBytes = Buffer.from(to);
    let idx = buf.indexOf(fBytes);
    while (idx !== -1) {
      fixLog.push({ offset: idx, label });
      buf = Buffer.concat([buf.subarray(0, idx), tBytes, buf.subarray(idx + fBytes.length)]);
      fixed++;
      idx = buf.indexOf(fBytes);
    }
  }

  return { buf, fixed, fixLog };
}

function main() {
  let files;
  if (SINGLE_FILE) {
    files = [path.resolve(ROOT, SINGLE_FILE)];
  } else {
    files = findSourceFiles(path.join(ROOT, "src"));
  }

  if (files.length === 0) {
    console.log("No source files found.");
    process.exit(1);
  }

  console.log(`%cScanning ${files.length} source file(s)...\n`);

  let globalFixes = 0;
  let modifiedCount = 0;

  for (const f of files) {
    const raw = fs.readFileSync(f);
    const { buf: sanitized, fixed } = sanitize(raw);

    if (fixed === 0) continue;
    modifiedCount++;
    globalFixes += fixed;

    const rel = path.relative(ROOT, f);
    const bytesSaved = raw.length - sanitized.length;

    if (DRY_RUN) {
      console.log(`[DRY-RUN] %c${rel}%c  — ${fixed} fix(es), ${bytesSaved > 0 ? "-" : ""}${bytesSaved}B`);
    } else {
      fs.writeFileSync(f, sanitized);
      console.log(`[FIXED]   %c${rel}%c  — ${fixed} fix(es), ${bytesSaved > 0 ? "-" : ""}${bytesSaved}B`);
    }
  }

  if (globalFixes === 0) {
    console.log("✓ No broken text anomalies found.");
    return;
  }

  console.log(`\nDone. ${modifiedCount} file(s) modified, ${globalFixes} anomalies fixed.${DRY_RUN ? " (dry-run)" : ""}`);
  if (DRY_RUN) {
    console.log("Run without --dry-run to apply fixes.");
  }
}

main();
