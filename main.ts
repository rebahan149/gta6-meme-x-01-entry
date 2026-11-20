// gta6-meme-x-01 entrypoint.
//
// The entry itself is the X post named in POST.json; this program's job is
// to carry that pointer into the grading output directory, unchanged, after
// checking it really is an X status address. Nothing else is judged here:
// the house reads the post from X itself.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? new URL(".", import.meta.url).pathname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

const raw = readFileSync(source, "utf8");
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== "string") {
  throw new Error("POST.json must carry a string field named url");
}
const match = /^https:\/\/x\.com\/([A-Za-z0-9_]+)\/status\/(\d+)$/.exec(post.url);
if (!match) {
  throw new Error(`POST.json url is not an X status address: ${post.url}`);
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Read the copy back: the gate trusts this file, so it must be byte-for-byte
// the pointer that was checked above, never a truncated or stale write.
const copied = readFileSync(target, "utf8");
if (copied !== raw) {
  throw new Error("copied POST.json differs from the checked source");
}
console.log(`gta6-meme-x-01: @${match[1]} status ${match[2]} -> ${target}`);
