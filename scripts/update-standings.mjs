/* Fetch the nuLiga group page and rewrite the data block in standings.js.
 *
 * Run by .github/workflows/update-standings.yml after every match day;
 * local test: node scripts/update-standings.mjs [--from-file page.html]
 *
 * Exits 0 with "unchanged"/"updated" on stdout; exits 1 when the page
 * cannot be fetched or the table cannot be parsed (the workflow then
 * fails visibly instead of committing garbage).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const URL_ =
  "https://bwbv-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupPage?championship=NB+26%2F27&group=40186";
const STANDINGS_PATH = join(dirname(fileURLToPath(import.meta.url)), "..", "standings.js");

function textOf(cellHtml) {
  return cellHtml
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parse(html) {
  // the standings table is the one whose header row has Rang + Mannschaft + Punkte
  const tables = html.match(/<table[^>]*class="result-set"[\s\S]*?<\/table>/g) || [];
  const table = tables.find(
    (t) => t.includes(">Rang<") && t.includes(">Mannschaft<") && t.includes(">Punkte<")
  );
  if (!table) throw new Error("standings table not found on the page");

  const rows = [];
  for (const tr of table.match(/<tr[\s\S]*?<\/tr>/g) || []) {
    if (tr.includes("<th")) continue;
    const cells = (tr.match(/<td[\s\S]*?<\/td>/g) || []).map(textOf);
    // layout: [icon] rang team beg s u n punkte spiele saetze
    if (cells.length < 10) continue;
    const [, rang, team, beg, s, u, n, punkte, spiele, saetze] = cells;
    if (!/^\d+$/.test(rang) || !team || !/^\d+:\d+$/.test(punkte)) continue;
    rows.push({
      rang: Number(rang),
      team,
      beg: Number(beg),
      s: Number(s),
      u: Number(u),
      n: Number(n),
      punkte,
      spiele,
      saetze,
    });
  }
  if (rows.length < 2) throw new Error(`only ${rows.length} valid rows parsed`);
  return rows;
}

function render(rows) {
  const pad = (v, w) => String(v).padEnd(w);
  const lines = rows.map(
    (r) =>
      `    { rang: ${r.rang}, team: ${pad(JSON.stringify(r.team) + ",", 34)}` +
      ` beg: ${r.beg}, s: ${r.s}, u: ${r.u}, n: ${r.n},` +
      ` punkte: ${JSON.stringify(r.punkte)}, spiele: ${JSON.stringify(r.spiele)}, saetze: ${JSON.stringify(r.saetze)} },`
  );
  // date in German local time — the "as of" day shown in the app
  const updated = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Berlin" }).format(new Date());
  return `window.STANDINGS = {\n  updated: "${updated}",\n  rows: [\n${lines.join("\n")}\n  ],\n};\n`;
}

const fileArg = process.argv.indexOf("--from-file");
const html =
  fileArg >= 0
    ? readFileSync(process.argv[fileArg + 1], "utf8")
    : await (async () => {
        const res = await fetch(URL_, { headers: { "User-Agent": "tsg-heilbronn standings updater" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })();

const rows = parse(html);
const current = readFileSync(STANDINGS_PATH, "utf8");
const head = current.slice(0, current.indexOf("window.STANDINGS"));
if (!head) throw new Error("standings.js: window.STANDINGS marker not found");
const next = head + render(rows);

// compare ignoring the "updated" date so a no-change Sunday produces no commit
const strip = (s) => s.replace(/updated: "[^"]*"/, "");
if (strip(next) === strip(current)) {
  console.log("unchanged");
} else {
  writeFileSync(STANDINGS_PATH, next);
  console.log("updated");
}
