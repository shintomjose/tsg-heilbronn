/* ================= i18n: German (default) / English ================= */
const LANG_KEY = "bwbv-lang";
const LANG = localStorage.getItem(LANG_KEY) === "en" ? "en" : "de";
document.documentElement.lang = LANG;
const DATE_LOCALE = LANG === "en" ? "en-GB" : "de-DE";

/* dynamic strings: the German text is the key */
const EN = {
  "Rückgängig": "Undo",
  "Kopieren fehlgeschlagen": "Copy failed",
  "Herren": "Men",
  "Damen": "Women",
  "Heim": "Home",
  "Auswärts": "Away",
  "Keine Verbindung zur Datenbank": "No database connection",
  "Bitte zuerst oben deinen Namen wählen": "Please pick your name above first",
  "Du kannst nur deine eigene Verfügbarkeit ändern": "You can only change your own availability",
  "Speichern fehlgeschlagen": "Save failed",
  "Spieler existiert bereits": "Player already exists",
  "○ offline — keine Verbindung": "○ offline — no connection",
  "○ Zugriff verweigert — DB-Regeln prüfen": "○ access denied — check DB rules",
  "Verbinde mit Datenbank…": "Connecting to database…",
  "— Name wählen —": "— pick your name —",
  "✓ Dabei": "✓ I'm in",
  "✗ Keine Zeit": "✗ Can't play",
  "Datum": "Date", "Zeit": "Time", "Gegner": "Opponent", "Spieler": "Player",
  /* standings */
  "Tabelle": "Standings",
  "Rang": "Rank",
  "Mannschaft": "Team",
  "Beg.": "MP",
  "Punkte": "Points",
  "Spiele": "Games",
  "Sätze": "Sets",
  "Stand: ": "As of: ",
  /* lineup */
  "— Spieler wählen": "— pick players",
  "— keine Dame verfügbar": "— no woman available",
  "— noch nicht gewählt": "— not chosen yet",
  "Einzel-Herren (3):": "Men's singles (3):",
  "Dameneinzel:": "Women's singles:",
  "Beste Chemie": "Best chemistry",
  "⚖ Rangsummen gleich — Kapitän entscheidet die Reihenfolge.": "⚖ Equal rank sums — captain decides the order.",
  "Mindestens 2 Herren anhaken.": "Check at least 2 men.",
  "Mindestens 2 Damen anhaken.": "Check at least 2 women.",
  "Herren und Damen anhaken.": "Check men and women.",
  "Zuerst HD1 wählen — dann erscheinen die möglichen HD2-Paare.": "Pick MD1 first — then the possible MD2 pairs appear.",
  "Keine freien Paare mehr — mehr Herren anhaken.": "No pairs left without a repeated player — check more men.",
  "Alle {0} anzeigen": "Show all {0}",
  "— schon 2 Disziplinen: {0}": "— already 2 events: {0}",
  "Aufstellung": "Lineup",
  "Aufstellung kopiert": "Lineup copied",
  "Auswahl geleert": "Selection cleared",
  "Kader zurückgesetzt (Chemie-Sterne bleiben)": "Squad reset (chemistry stars kept)",
  "HD1": "MD1", "HD2": "MD2", "DD": "WD", "HE1": "MS1", "HE2": "MS2", "HE3": "MS3", "DE": "WS", "GD": "XD",
  "Sa": "Sat",
  "🔔 an": "🔔 on",
  "🔔 aus": "🔔 off",
  "Benachrichtigungen aus": "Notifications off",
  "Benachrichtigungen an — solange die App läuft": "Notifications on — while the app is running",
  "Benachrichtigungen im Browser blockiert — in den Website-Einstellungen erlauben": "Notifications blocked in the browser — allow them in the site settings",
  "Keine Berechtigung erteilt": "Permission not granted",
  "Auf diesem Gerät nur in der installierten App möglich — Seite über „Zum Home-Bildschirm“ hinzufügen": "Only available in the installed app on this device — add the page via “Add to Home Screen”",
  "{0} hat {1} zur Liste hinzugefügt": "{0} added {1} to the list",
  "… und {0} weitere Änderungen": "… and {0} more changes",
  /* templates with {0}/{1} */
  "{0} gelöscht": "{0} deleted",
  "{0} löschen": "Delete {0}",
  "Angemeldet als {0}": "Signed in as {0}",
  "Herren (min. {0})": "Men (min. {0})",
  "Damen (min. {0})": "Women (min. {0})",
  "· {0} fehlt": "· {0} missing",
  "· {0} fehlen": "· {0} missing",
  "{0} verfügbar": "{0} available",
  "Rang {0}": "Rank {0}",
};
function t(s) { return LANG === "en" && EN[s] !== undefined ? EN[s] : s; }
function tt(tpl) {
  let s = t(tpl);
  for (let i = 1; i < arguments.length; i++) s = s.replace("{" + (i - 1) + "}", arguments[i]);
  return s;
}

/* static page texts (only replaced when English is active) */
const STATIC_EN = [
  ["#tabbtn-termine .tlabel", "Matches"],
  ["#tabbtn-lineup .tlabel", "Lineup"],
  [".brand-eyebrow", "SG Heilbronn/Leingarten · Season 2026/27"],
  [".brand-text h1", "Team 4"],
  ["#tab-termine .tab-sub", "Match dates SG Heilbronn/Leingarten IV — Bezirksliga „Neckar-Odenwald“ 2026/27 · all matches on Saturdays"],
  ["#avViewCards", "Cards"],
  ["#avViewTable", "Table"],
  ["#avTabVor", "First half"],
  ["#avTabRueck", "Second half"],
  ["#rdTabVor", "First half"],
  ["#rdTabRueck", "Second half"],
  ["label[for=avWho]", "I am:"],
  ["#avWho option", "— pick your name —"],
  ["#avStatus", "connecting…"],
  ["#tab-lineup .tab-sub", "8 matches: 2 MD · 1 WD · 3 MS · 1 WS · 1 XD — max. 2 events per player (mixed counts as an event)"],
  ["#luClearBtn", "Clear selection"],
  ["#luResetBtn", "Reset squad"],
  ["#luAddGender option[value=m]", "Male"],
  ["#luAddGender option[value=f]", "Female"],
  ["#stRefresh", "Update ↗"],
];
const STATIC_EN_HTML = [
  /* anchored on the panel ids, so reordering the Termine tab cannot break them */
  ["#rdPaneVor h2", "First half <span class=\"hint\">— Oct–Nov 2026</span>"],
  ["#rdPaneRueck h2", "Second half <span class=\"hint\">— Jan–Mar 2027</span>"],
  ["#tab-lineup .col-left h2", "Squad <span class=\"hint\">— check = available on match day</span>"],
  ["#tab-lineup .col-right .panel:nth-child(1) h2", "Singles <span class=\"hint\">— captain picks who plays · order fixed by ranking</span>"],
  ["#tab-lineup .col-right .panel:nth-child(2) h2", "Men's doubles <span class=\"hint\">— pick MD1 and MD2 freely · MD1 = lower rank sum · ⭐ = chemistry</span>"],
  ["#tab-lineup .col-right .panel:nth-child(3) h2", "Women's doubles <span class=\"hint\">— pick a pair</span>"],
  ["#tab-lineup .col-right .panel:nth-child(4) h2", "Mixed <span class=\"hint\">— all combinations · max. 2 events per player</span>"],
  ["#tab-lineup .col-right .panel:nth-child(5) h2", "Lineup"],
];
const STATIC_EN_ATTR = [
  ["#luAddName", "placeholder", "Name"],
  ["#stRefresh", "title", "Opens GitHub Actions — start “Run workflow” there (fetches the table from nuLiga)"],
];
function applyStaticEn() {
  if (LANG !== "en") return;
  document.title = "Team 4 — SG Heilbronn/Leingarten";
  STATIC_EN.forEach(([sel, txt]) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = txt;
  });
  STATIC_EN_HTML.forEach(([sel, html]) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  });
  STATIC_EN_ATTR.forEach(([sel, attr, val]) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  });
  /* headings with dynamic child elements: replace only the text parts */
  const stStatus = document.getElementById("stTabStatus");
  const stH2 = stStatus && stStatus.closest("h2");
  if (stH2 && stH2.querySelector(".hint")) {
    stH2.childNodes[0].textContent = "Standings ";
    stH2.querySelector(".hint").textContent = "— Bezirksliga „Neckar-Odenwald“ (3-4)";
  }
  const avStatusEl = document.getElementById("avStatus");
  const availH2 = avStatusEl && avStatusEl.closest("h2");
  if (availH2 && availH2.querySelector(".hint")) {
    availH2.childNodes[0].textContent = "Availability ";
    availH2.querySelector(".hint").textContent = "— tap a cell: — → ✓ → ✗ · shared live with the team";
  }
}
applyStaticEn();

const langBtn = document.getElementById("langBtn");
langBtn.textContent = LANG === "de" ? "EN" : "DE";
langBtn.addEventListener("click", () => {
  localStorage.setItem(LANG_KEY, LANG === "de" ? "en" : "de");
  location.reload();
});

/* ================= shared: theme, tabs, toast ================= */
/* own keys: the sister app lives on the same origin */
const THEME_KEY = "t4-theme";
const TAB_KEY = "t4-tab";

function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem(THEME_KEY, t);
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.content = t === "dark" ? "#121412" : "#F3F4F3";
}
document.getElementById("themeBtn").addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
const savedTheme = localStorage.getItem(THEME_KEY);
applyTheme(savedTheme || "light");
/* pwa.js only injects the theme-color meta tag after this script */
window.addEventListener("load", () => applyTheme(document.documentElement.dataset.theme));

const TABS = ["termine", "lineup"];
function showTab(id) {
  if (!TABS.includes(id)) id = "termine";
  TABS.forEach(t => {
    document.getElementById("tab-" + t).hidden = t !== id;
    document.getElementById("tabbtn-" + t).setAttribute("aria-selected", String(t === id));
  });
  localStorage.setItem(TAB_KEY, id);
  if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
}
TABS.forEach(t =>
  document.getElementById("tabbtn-" + t).addEventListener("click", () => showTab(t)));
window.addEventListener("hashchange", () => showTab(location.hash.slice(1)));
showTab(location.hash.slice(1) || localStorage.getItem(TAB_KEY) || "termine");

function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
let toastTimer;
function toast(msg, undo) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  if (undo) {
    const b = document.createElement("button");
    b.textContent = undo.label;
    b.addEventListener("click", () => { undo.action(); el.classList.remove("show"); });
    el.appendChild(b);
  }
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), undo ? 6000 : 2200);
}

/* ---- Firebase: shared app initialisation + anonymous sign-in ----
   Config is harmless in public — access is governed by the DB rules. */
const FB_CONFIG = {
  apiKey: "AIzaSyC6ZVUwkthjkgo3HjeaNwRigH-ueK_95E0",
  authDomain: "badminton-tools-c6b27.firebaseapp.com",
  databaseURL: "https://badminton-tools-c6b27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "badminton-tools-c6b27",
  storageBucket: "badminton-tools-c6b27.firebasestorage.app",
  messagingSenderId: "446320933164",
  appId: "1:446320933164:web:468c9ce5a053c5ee1d5489",
};
window.fbReady = new Promise(resolve => {
  if (!window.firebase || !firebase.initializeApp) { resolve(null); return; }
  try { firebase.initializeApp(FB_CONFIG); } catch (e) { resolve(null); return; }
  firebase.auth().onAuthStateChanged(u => { if (u) resolve(firebase.database()); });
  firebase.auth().signInAnonymously().catch(() => resolve(null));
});

/* ================= TAB 1: Termine (match dates of the active IV) ================= */
(function () {
/* Bezirksliga „Neckar-Odenwald" 2026/27 — matches of SG Heilbronn/Leingarten IV.
   id = stable key for per-match-day player availability later on. */
const MATCHES = [
  { id: "2026-10-10-1400", round: "vor",   day: "Sa", date: "10.10.2026", time: "14:00", opp: "SG Heilbronn/Leingarten V",  home: false, ort: "(H)" },
  { id: "2026-10-17-1400", round: "vor",   day: "Sa", date: "17.10.2026", time: "14:00", opp: "SF Zaberfeld",               home: false, ort: "" },
  { id: "2026-10-17-1800", round: "vor",   day: "Sa", date: "17.10.2026", time: "18:00", opp: "SG Brackenheim/Schwaigern",  home: false, ort: "" },
  { id: "2026-11-14-1400", round: "vor",   day: "Sa", date: "14.11.2026", time: "14:00", opp: "TSV Pfedelbach",             home: true,  ort: "(H)" },
  { id: "2026-11-14-1800", round: "vor",   day: "Sa", date: "14.11.2026", time: "18:00", opp: "TV Bad Rappenau",            home: true,  ort: "(H)" },
  { id: "2026-11-28-1800", round: "vor",   day: "Sa", date: "28.11.2026", time: "18:00", opp: "Spfr. Affaltrach II",        home: true,  ort: "(H)" },
  { id: "2027-01-23-1400", round: "rueck", day: "Sa", date: "23.01.2027", time: "14:00", opp: "SG Heilbronn/Leingarten V",  home: true,  ort: "(H)" },
  { id: "2027-02-20-1400", round: "rueck", day: "Sa", date: "20.02.2027", time: "14:00", opp: "SG Brackenheim/Schwaigern",  home: true,  ort: "(H)" },
  { id: "2027-02-20-1800", round: "rueck", day: "Sa", date: "20.02.2027", time: "18:00", opp: "SF Zaberfeld",               home: true,  ort: "(H)" },
  { id: "2027-03-06-1400", round: "rueck", day: "Sa", date: "06.03.2027", time: "14:00", opp: "TV Bad Rappenau",            home: false, ort: "" },
  { id: "2027-03-06-1800", round: "rueck", day: "Sa", date: "06.03.2027", time: "18:00", opp: "TSV Pfedelbach",             home: false, ort: "74629-1" },
  { id: "2027-03-20-1400", round: "rueck", day: "Sa", date: "20.03.2027", time: "14:00", opp: "Spfr. Affaltrach II",        home: false, ort: "(H)" },
];

function renderMatches(tableId, round) {
  const list = MATCHES.filter(m => m.round === round);
  const rows = list.map((m, i) => {
    const sameAsPrev = i > 0 && list[i - 1].date === m.date;
    const span = list.filter(x => x.date === m.date).length;
    return `
    <tr data-match="${m.id}"${sameAsPrev ? "" : ' class="date-start"'}>
      ${sameAsPrev ? "" : `<td class="mdate" rowspan="${span}">${t(m.day)} ${m.date}</td>`}
      <td class="mtime">${m.time}</td>
      <td class="mopp">${esc(m.opp)}</td>
      <td><span class="badge-ha ${m.home ? "h" : "a"}">${t(m.home ? "Heim" : "Auswärts")}</span></td>
    </tr>`;
  }).join("");
  document.getElementById(tableId).innerHTML = `
    <thead><tr><th>${t("Datum")}</th><th>${t("Zeit")}</th><th>${t("Gegner")}</th><th></th></tr></thead>
    <tbody>${rows}</tbody>`;
}
renderMatches("mtVor", "vor");
renderMatches("mtRueck", "rueck");

/* mobile: show one round at a time (visibility only — both panels stay in the
   DOM and are shown side by side on desktop, where the switcher is hidden) */
const ROUNDS_TAB_KEY = "t4-rounds-tab";
let roundsTab = localStorage.getItem(ROUNDS_TAB_KEY) === "rueck" ? "rueck" : "vor";
function applyRoundsTab() {
  document.getElementById("rdTabVor").setAttribute("aria-selected", String(roundsTab === "vor"));
  document.getElementById("rdTabRueck").setAttribute("aria-selected", String(roundsTab === "rueck"));
  document.getElementById("tab-termine").classList.toggle("rounds-rueck", roundsTab === "rueck");
}
for (const [id, round] of [["rdTabVor", "vor"], ["rdTabRueck", "rueck"]]) {
  document.getElementById(id).addEventListener("click", () => {
    roundsTab = round;
    localStorage.setItem(ROUNDS_TAB_KEY, round);
    applyRoundsTab();
  });
}
applyRoundsTab();

/* ---- league standings: static data from standings.js, live fetch as a bonus ---- */
const OWN_TEAM = "Heilbronn/Leingarten IV";
const ST_URL = "https://bwbv-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupPage?championship=NB+26%2F27&group=40186";

function renderStandings(rows, live) {
  const table = document.getElementById("standingsTable");
  if (!table) return;
  const heads = [t("Rang"), t("Mannschaft"), t("Beg."), "S", "U", "N", t("Punkte"), t("Spiele"), t("Sätze")];
  const head = `<thead><tr>${heads.map((h, i) =>
    `<th${i === 1 ? ' class="st-team"' : ""}>${esc(h)}</th>`).join("")}</tr></thead>`;
  const body = rows.map(r => {
    const own = String(r.team).includes(OWN_TEAM);
    return `<tr${own ? ' class="own-team"' : ""}>
      <td class="st-rank">${esc(r.rang)}</td>
      <td class="st-team" title="${esc(r.team)}"><span class="st-team-n">${esc(r.team)}</span></td>
      <td>${esc(r.beg)}</td><td>${esc(r.s)}</td><td>${esc(r.u)}</td><td>${esc(r.n)}</td>
      <td class="st-pts">${esc(r.punkte)}</td><td>${esc(r.spiele)}</td><td>${esc(r.saetze)}</td>
    </tr>`;
  }).join("");
  table.innerHTML = head + `<tbody>${body}</tbody>`;
  const st = document.getElementById("stTabStatus");
  const updated = (window.STANDINGS && window.STANDINGS.updated) || "";
  if (st) st.textContent = live ? "● live" : t("Stand: ") + updated;
}

/* parse nuLiga HTML defensively: find columns via the header row, else by position */
function parseStandings(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const clean = el => (el.textContent || "").replace(/\s+/g, " ").trim();
  const tables = [...doc.querySelectorAll("table")];
  const table = tables.find(tb => {
    const hs = [...tb.querySelectorAll("th")].map(clean);
    return hs.some(h => h.startsWith("Mannschaft")) && hs.some(h => h.startsWith("Punkte"));
  });
  if (!table) return [];
  const heads = [...table.querySelectorAll("th")].map(clean);
  const idxOf = (...cands) => {
    for (const c of cands) {
      const i = heads.findIndex(h => h === c || h.startsWith(c));
      if (i >= 0) return i;
    }
    return -1;
  };
  const pick = (fallback, ...cands) => {
    const i = idxOf(...cands);
    return i >= 0 ? i : fallback;
  };
  const iRang = pick(0, "Rang", "Platz", "Pl.");
  const iTeam = pick(1, "Mannschaft", "Team");
  const iBeg = pick(2, "Beg.", "Begegnungen", "Sp.");
  const iS = pick(3, "S");
  const iU = pick(4, "U");
  const iN = pick(5, "N");
  const iP = pick(6, "Punkte");
  const iSp = pick(7, "Spiele");
  const iSa = pick(8, "Sätze", "Saetze");
  const rows = [];
  [...table.querySelectorAll("tr")].forEach(tr => {
    const cells = [...tr.cells].map(clean);
    if (cells.length < 9) return;
    if (!cells.filter(Boolean).length) return;
    const team = cells[iTeam];
    if (!team || /^(Mannschaft|Team)$/i.test(team)) return;
    const at = i => (i >= 0 && i < cells.length ? cells[i] : "");
    rows.push({
      rang: at(iRang) || String(rows.length + 1),
      team,
      beg: at(iBeg), s: at(iS), u: at(iU), n: at(iN),
      punkte: at(iP), spiele: at(iSp), saetze: at(iSa),
    });
  });
  return rows;
}

(function initStandings() {
  const stat = window.STANDINGS && Array.isArray(window.STANDINGS.rows) ? window.STANDINGS.rows : [];
  renderStandings(stat, false);
  if (!window.fetch || !window.AbortController || !window.DOMParser) return;
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 6000);
  fetch(ST_URL, { signal: ac.signal, credentials: "omit" })
    .then(r => (r.ok ? r.text() : Promise.reject(new Error("HTTP " + r.status))))
    .then(html => {
      const rows = parseStandings(html);
      if (rows.length >= 2) {
        renderStandings(rows, true);
        console.info("[standings] live table loaded from nuLiga");
      }
    })
    .catch(() => { /* CORS/offline: the static table stays in place */ })
    .finally(() => clearTimeout(timer));
})();

/* ---- Verfügbarkeit per match — 14:00 and 18:00 matches marked separately ---- */
const DAYS = MATCHES.map(m => ({ key: m.id, date: m.date, day: m.day, time: m.time, round: m.round }));

/* minimum squad per match */
const MIN_M = 4;
const MIN_F = 2;

const AV_DEFAULT_PLAYERS = [
  "Bolt-Bevilacqua, Nicolas",
  "Rajendraprasad, Anurag",
  "Chu, Cuong Xuan",
  "Mathew Jose, Shinto",
  "Dujic, Lucija",
  "Schebesch, Carolin",
  "Croll, Alessia",
];

let av = { players: [], marks: {} };
let avDb = null;
let avSeeded = false;

/* names as DB keys: replace forbidden characters */
function avKey(name) { return name.replace(/[.#$/\[\]]/g, "_"); }
function avState(name, dayKey) { return (av.marks[dayKey] || {})[avKey(name)] || "u"; }
function avStatus(txt) { document.getElementById("avStatus").textContent = txt; }

/* honour system: everyone picks their name once, changes are logged under it */
const WHO_KEY = "termine-whoami";
function whoami() { return localStorage.getItem(WHO_KEY) || ""; }
function avSym(st) { return st === "y" ? "✓" : st === "n" ? "✗" : "—"; }

function renderWho() {
  const sel = document.getElementById("avWho");
  const cur = whoami();
  const names = [...av.players];
  if (cur && !names.includes(cur)) names.push(cur);
  sel.innerHTML = `<option value="">${t("— Name wählen —")}</option>` +
    names.map(n => `<option value="${esc(n)}"${n === cur ? " selected" : ""}>${esc(n)}</option>`).join("");
}
document.getElementById("avWho").addEventListener("change", e => {
  localStorage.setItem(WHO_KEY, e.target.value);
  renderAvail();
  if (e.target.value) toast(tt("Angemeldet als {0}", e.target.value));
});

function avLogWrite(entry) {
  avDb.ref("avail/log").push({ t: firebase.database.ServerValue.TIMESTAMP, ...entry }).catch(() => {});
}

let avRound = localStorage.getItem("t4-termine-round") === "rueck" ? "rueck" : "vor";
function visDays() { return DAYS.filter(d => d.round === avRound); }

function renderAvail() {
  const days = visDays();
  document.getElementById("avTabVor").setAttribute("aria-selected", avRound === "vor");
  document.getElementById("avTabRueck").setAttribute("aria-selected", avRound === "rueck");
  const head = `<thead><tr><th>${t("Spieler")}</th>${days.map(d =>
    `<th>${d.date.slice(0, 6)}<br><span class="th-time">${d.time}</span></th>`).join("")}</tr></thead>`;
  const body = av.players.map(name => `<tr>
    <td class="avname">${esc(name)}</td>
    ${days.map(d => {
      const st = avState(name, d.key);
      const locked = name !== whoami();
      return `<td class="av ${st}${locked ? " locked" : ""}" data-name="${esc(name)}" data-day="${d.key}"
        ${locked ? "" : 'role="button" tabindex="0"'} aria-label="${esc(name)} am ${d.date} ${d.time}">${avSym(st)}</td>`;
    }).join("")}
  </tr>`).join("");
  const progCell = (cnt, min) =>
    `<td class="prog-cell ${cnt >= min ? "ok" : "miss"}">${cnt}/${min}</td>`;
  const foot = `
    <tr class="av-prog"><td>${tt("Herren (min. {0})", MIN_M)}</td>${days.map(d => progCell(progressFor(d.key).m, MIN_M)).join("")}</tr>
    <tr class="av-prog"><td>${tt("Damen (min. {0})", MIN_F)}</td>${days.map(d => progCell(progressFor(d.key).f, MIN_F)).join("")}</tr>`;
  const empty = av.players.length ? "" :
    `<tr><td colspan="${days.length + 1}" style="color:var(--text-muted);font-style:italic">${t("Verbinde mit Datenbank…")}</td></tr>`;
  document.getElementById("availTable").innerHTML = head + `<tbody>${empty}${body}${foot}</tbody>`;
  renderCards();
}

for (const [id, round] of [["avTabVor", "vor"], ["avTabRueck", "rueck"]]) {
  document.getElementById(id).addEventListener("click", () => {
    avRound = round;
    localStorage.setItem("t4-termine-round", round);
    renderAvail();
  });
}

/* mobile: card or compact table view (visibility only, identical data) */
let avView = localStorage.getItem("t4-termine-view") === "table" ? "table" : "cards";
function applyAvView() {
  document.getElementById("avViewCards").setAttribute("aria-selected", String(avView === "cards"));
  document.getElementById("avViewTable").setAttribute("aria-selected", String(avView === "table"));
  document.getElementById("tab-termine").classList.toggle("av-table-mode", avView === "table");
}
for (const [id, view] of [["avViewCards", "cards"], ["avViewTable", "table"]]) {
  document.getElementById(id).addEventListener("click", () => {
    avView = view;
    localStorage.setItem("t4-termine-view", view);
    applyAvView();
  });
}
applyAvView();

function progressFor(dayKey) {
  let m = 0, f = 0;
  av.players.forEach(p => {
    if (avState(p, dayKey) !== "y") return;
    const g = (window.LU_ROSTER_MAP || {})[p];
    if (g === "m") m++;
    else if (g === "f") f++;
  });
  return { m, f };
}

function progHtml(label, cnt, min) {
  const ok = cnt >= min;
  const missing = min - cnt;
  return `<div class="prog${ok ? " ok" : ""}">
    <span class="prog-label">${label}</span>
    <div class="prog-bar"><i style="width:${Math.min(100, (cnt / min) * 100)}%"></i></div>
    <span class="prog-txt">${cnt}/${min}${ok ? " ✓" : " " + (missing === 1 ? tt("· {0} fehlt", missing) : tt("· {0} fehlen", missing))}</span>
  </div>`;
}

function renderCards() {
  const el = document.getElementById("availCards");
  const by = whoami();
  const html = [];
  visDays().forEach(d => {
    const m = MATCHES.find(x => x.id === d.key);
    const pr = progressFor(d.key);
    const mine = by ? avState(by, d.key) : "u";
    const yes = av.players.filter(p => avState(p, d.key) === "y");
    const no = av.players.filter(p => avState(p, d.key) === "n");
    html.push(`<div class="av-card">
      <div class="av-card-head">
        <span class="av-card-date">${t(m.day)} ${m.date.slice(0, 6)} · ${m.time}</span>
        <span class="badge-ha ${m.home ? "h" : "a"}">${t(m.home ? "Heim" : "Auswärts")}</span>
      </div>
      <div class="av-card-opp">${esc(m.opp)}</div>
      ${progHtml(t("Herren"), pr.m, MIN_M)}
      ${progHtml(t("Damen"), pr.f, MIN_F)}
      <div class="me-row">
        <button type="button" class="me-btn y${mine === "y" ? " on" : ""}" data-day="${d.key}" data-set="y">${t("✓ Dabei")}</button>
        <button type="button" class="me-btn n${mine === "n" ? " on" : ""}" data-day="${d.key}" data-set="n">${t("✗ Keine Zeit")}</button>
      </div>
      ${yes.length || no.length ? `<details class="av-names"><summary>${yes.length} ✓ · ${no.length} ✗</summary>
        ${yes.length ? `<div class="log-row y"><span class="log-mark">✓</span><span>${yes.map(esc).join(", ")}</span></div>` : ""}
        ${no.length ? `<div class="log-row n"><span class="log-mark">✗</span><span>${no.map(esc).join(", ")}</span></div>` : ""}
      </details>` : ""}
    </div>`);
  });
  el.innerHTML = html.join("");
}

document.getElementById("availCards").addEventListener("click", e => {
  const btn = e.target.closest(".me-btn");
  if (!btn) return;
  if (!avDb) { toast(t("Keine Verbindung zur Datenbank")); return; }
  const by = whoami();
  if (!by) {
    toast(t("Bitte zuerst oben deinen Namen wählen"));
    document.getElementById("avWho").focus();
    return;
  }
  const day = btn.dataset.day;
  const cur = avState(by, day);
  const next = btn.dataset.set === cur ? null : btn.dataset.set;
  const ref = avDb.ref("avail/marks/" + day + "/" + avKey(by));
  (next ? ref.set(next) : ref.remove()).catch(() => toast(t("Speichern fehlgeschlagen")));
  avLogWrite({ day, player: by, from: cur, to: next || "u", by });
});

function cycleAv(td) {
  if (!avDb) { toast(t("Keine Verbindung zur Datenbank")); return; }
  const by = whoami();
  if (!by) {
    toast(t("Bitte zuerst oben deinen Namen wählen"));
    document.getElementById("avWho").focus();
    return;
  }
  if (td.dataset.name !== by) {
    toast(t("Du kannst nur deine eigene Verfügbarkeit ändern"));
    return;
  }
  const cur = avState(td.dataset.name, td.dataset.day);
  const next = cur === "u" ? "y" : cur === "y" ? "n" : null;
  const ref = avDb.ref("avail/marks/" + td.dataset.day + "/" + avKey(td.dataset.name));
  (next ? ref.set(next) : ref.remove()).catch(() => toast(t("Speichern fehlgeschlagen")));
  avLogWrite({ day: td.dataset.day, player: td.dataset.name, from: cur, to: next || "u", by });
}

document.getElementById("availTable").addEventListener("click", e => {
  const td = e.target.closest("td.av");
  if (td) cycleAv(td);
});
document.getElementById("availTable").addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const td = e.target.closest("td.av");
  if (td) { e.preventDefault(); cycleAv(td); }
});

/* ---- notifications (this device only, opt-in) ----
   Fires only while the page/PWA is running — there is no real push server here. */
const NOTIF_KEY = "termine-notify";
const NOTIF_LAST_KEY = "termine-notify-last";
const notifBtn = document.getElementById("notifBtn");

function notifEnabled() {
  return localStorage.getItem(NOTIF_KEY) === "1" && window.Notification && Notification.permission === "granted";
}
function renderNotifBtn() {
  notifBtn.hidden = false;
  notifBtn.textContent = notifEnabled() ? t("🔔 an") : t("🔔 aus");
  notifBtn.classList.toggle("on", notifEnabled());
}
notifBtn.addEventListener("click", async () => {
  if (!window.Notification) {
    toast(t("Auf diesem Gerät nur in der installierten App möglich — Seite über „Zum Home-Bildschirm“ hinzufügen"));
    return;
  }
  if (notifEnabled()) {
    localStorage.setItem(NOTIF_KEY, "0");
    renderNotifBtn();
    toast(t("Benachrichtigungen aus"));
    return;
  }
  if (Notification.permission === "denied") {
    toast(t("Benachrichtigungen im Browser blockiert — in den Website-Einstellungen erlauben"));
    return;
  }
  const perm = await Notification.requestPermission();
  if (perm !== "granted") { toast(t("Keine Berechtigung erteilt")); return; }
  localStorage.setItem(NOTIF_KEY, "1");
  renderNotifBtn();
  toast(t("Benachrichtigungen an — solange die App läuft"));
});
renderNotifBtn();

function showNotif(body) {
  const title = "Team 4";
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready
      .then(reg => reg.showNotification(title, { body, icon: "icons/icon-192.png", tag: "avail-" + Date.now() }))
      .catch(() => { try { new Notification(title, { body }); } catch {} });
  } else {
    try { new Notification(title, { body }); } catch {}
  }
}

function notifyNewEntries(items) {
  /* items: newest first, with _k (push keys sort chronologically) */
  if (!items.length) return;
  const newest = items[0]._k;
  const last = localStorage.getItem(NOTIF_LAST_KEY);
  localStorage.setItem(NOTIF_LAST_KEY, newest);
  if (!last || !notifEnabled()) return;
  const me = whoami();
  const fresh = items.filter(it => it._k > last && it.by && it.by !== me);
  fresh.slice(0, 3).forEach(it => {
    const dayShort = it.day ? it.day.slice(8, 10) + "." + it.day.slice(5, 7) + ". " + (it.day.slice(11, 13) ? it.day.slice(11, 13) + ":" + it.day.slice(13) : "") : "";
    const body = it.action === "add"
      ? tt("{0} hat {1} zur Liste hinzugefügt", it.by, it.player)
      : `${it.player} ${dayShort}: ${avSym(it.from)} → ${avSym(it.to)} (${it.by})`;
    showNotif(body);
  });
  if (fresh.length > 3) showNotif(tt("… und {0} weitere Änderungen", fresh.length - 3));
}

/* ---- Firebase connection ---- */
(async function initAvailSync() {
  const db = window.fbReady ? await window.fbReady : null;
  if (!db) {
    avStatus(t("○ offline — keine Verbindung"));
    renderAvail();
    return;
  }
  avDb = db;
  avDb.ref(".info/connected").on("value", s => avStatus(s.val() ? "● live" : "○ offline"));

  /* A cancelled listener (e.g. a token race at startup) would otherwise stay dead forever
     and the table freezes while the history keeps updating — hence the retry. */
  let availTries = 0;
  (function attachAvail() {
    avDb.ref("avail").on("value", snap => {
      availTries = 0;
      const v = snap.val() || {};
      const players = Array.isArray(v.players) ? v.players.filter(n => typeof n === "string") : [];
      if (!players.length && !avSeeded) {
        avSeeded = true;
        avDb.ref("avail/players").set(AV_DEFAULT_PLAYERS).catch(() => {});
        return;
      }
      av.players = players;
      av.marks = v.marks || {};
      renderAvail();
      renderWho();
    }, err => {
      console.error("[avail] listener cancelled:", err);
      if (++availTries <= 5) setTimeout(attachAvail, 1000 * availTries);
      else avStatus(t("○ Zugriff verweigert — DB-Regeln prüfen"));
    });
  })();

  /* the log itself has no UI here (history lives in the main app) —
     the listener only feeds the notifications */
  let logTries = 0;
  (function attachLog() {
    avDb.ref("avail/log").limitToLast(200).on("value", snap => {
      logTries = 0;
      const items = [];
      snap.forEach(ch => { items.push({ _k: ch.key, ...ch.val() }); });
      items.reverse();
      notifyNewEntries(items);
    }, err => {
      console.error("[avail/log] listener cancelled:", err);
      if (++logTries <= 5) setTimeout(attachLog, 1000 * logTries);
    });
  })();
})();

renderAvail();
})();

/* ================= TAB 2: Aufstellung (lineup) ================= */
(function () {
const ORIGINAL = [
  { name: "Huber, Ronald",               rank: 1,  g: "m" },
  { name: "Schuba, Leon",                rank: 2,  g: "m" },
  { name: "Garalbatin, Rares-Stefan",    rank: 3,  g: "m" },
  { name: "Gramm, Lukas",                rank: 4,  g: "m" },
  { name: "von Ey, Mathias",             rank: 5,  g: "m" },
  { name: "Ezeoke, Jeff",                rank: 6,  g: "m" },
  { name: "Beutel, Christian",           rank: 7,  g: "m" },
  { name: "Herrmann, Tobias",            rank: 8,  g: "m" },
  { name: "Zimmermann, Sven",            rank: 9,  g: "m" },
  { name: "Demir, Ergin",                rank: 10, g: "m" },
  { name: "Paulachan, Eby",              rank: 11, g: "m" },
  { name: "Kovar, Peter",                rank: 12, g: "m" },
  { name: "Scheuermann, Michael",        rank: 13, g: "m" },
  { name: "Rudolph, Kevin",              rank: 14, g: "m" },
  { name: "Gebauer, Rainer",             rank: 15, g: "m" },
  { name: "Gummadi, Naveen Kumar",       rank: 16, g: "m" },
  { name: "Buck, Max",                   rank: 17, g: "m" },
  { name: "Eppinger, Nick",              rank: 18, g: "m" },
  { name: "Schebesch, Marc",             rank: 19, g: "m" },
  { name: "Alavala, Rohit Sai Kumar",    rank: 20, g: "m" },
  { name: "Umminger, Markus",            rank: 21, g: "m" },
  { name: "Bolt-Bevilacqua, Nicolas",    rank: 22, g: "m" },
  { name: "Rajendraprasad, Anurag",      rank: 23, g: "m" },
  { name: "Chu, Cuong Xuan",             rank: 24, g: "m" },
  { name: "Mathew Jose, Shinto",         rank: 25, g: "m" },
  { name: "Banik, Udayan",               rank: 26, g: "m" },
  { name: "Oechsle, Marc",               rank: 27, g: "m" },
  { name: "Vogt, Alexander",             rank: 28, g: "m" },
  { name: "Mayer, Tom",                  rank: 29, g: "m" },
  { name: "Eppinger, Fabian",            rank: 30, g: "m" },
  { name: "Bisping, Tim",                rank: 31, g: "m" },
  { name: "Stemper, Rouven",             rank: 32, g: "m" },
  { name: "Li, Haowen",                  rank: 33, g: "m" },
  { name: "Koppenhöfer, Markus",         rank: 34, g: "m" },
  { name: "Pelzl, Oskar",                rank: 35, g: "m" },
  { name: "Doopadahalli, Varun",         rank: 36, g: "m" },
  { name: "Guda Vadla, Sai Kumar Reddy", rank: 37, g: "m" },
  { name: "Regorz, Martin",              rank: 38, g: "m" },
  { name: "Küster, Christian",           rank: 39, g: "m" },
  { name: "Küster, Matthias",            rank: 40, g: "m" },
  { name: "Küster, Thomas",              rank: 41, g: "m" },
  { name: "Prabhala, Shreyash Mohit",    rank: 42, g: "m" },
  { name: "Mauz, Tilo",                  rank: 43, g: "m" },
  { name: "Goch, Gregor",                rank: 44, g: "m" },
  { name: "Krieger, Michael",            rank: 45, g: "m" },
  { name: "Wagner, Klaus",               rank: 46, g: "m" },
  { name: "Haidar, Florian",             rank: 47, g: "m" },
  { name: "Keller, Christoph",           rank: 48, g: "m" },
  { name: "Ngadi, Adrian",               rank: 49, g: "m" },
  { name: "Soni, Pranjal",               rank: 50, g: "m" },
  { name: "Narendran, Vyarn Ravi",       rank: 51, g: "m" },
  { name: "Zornik, Ewald",               rank: 52, g: "m" },
  { name: "Cherian, Sanju",              rank: 53, g: "m" },
  { name: "Glück, Wolfgang",             rank: 54, g: "m" },
  { name: "Hockenholz, Simon",           rank: 55, g: "m" },
  { name: "Schuster, Ralf",              rank: 56, g: "m" },
  { name: "Narendran, Vasud",            rank: 57, g: "m" },
  { name: "Hehn, Roland",                rank: 58, g: "m" },
  { name: "Engmann, Ralf Max",           rank: 59, g: "m" },
  { name: "Albrecht, Sabrina",           rank: 1,  g: "f" },
  { name: "Poppe, Janina",               rank: 2,  g: "f" },
  { name: "Lenard, Vivien",              rank: 3,  g: "f" },
  { name: "Seeling, Carolin",            rank: 4,  g: "f" },
  { name: "Gräßle, Charlotte",           rank: 5,  g: "f" },
  { name: "Wenninger, Carolin",          rank: 6,  g: "f" },
  { name: "Gamalov, Helen Mari",         rank: 7,  g: "f" },
  { name: "Schuba, Maya",                rank: 8,  g: "f" },
  { name: "Altin, Elifnaz",              rank: 9,  g: "f" },
  { name: "Dujic, Lucija",               rank: 10, g: "f" },
  { name: "Schebesch, Carolin",          rank: 11, g: "f" },
  { name: "Croll, Alessia",              rank: 12, g: "f" },
  { name: "Pflugfelder, Susanne",        rank: 13, g: "f" },
  { name: "Nagel, Jarupan",              rank: 14, g: "f" },
  { name: "Heichel-Ott, Erika",          rank: 15, g: "f" },
  { name: "Mally, Elke",                 rank: 16, g: "f" },
  { name: "Petersen, Josy",              rank: 17, g: "f" },
  { name: "Amalraj, Gnana",              rank: 18, g: "f" },
  { name: "Gräßle, Theresa",             rank: 19, g: "f" },
  { name: "Hannikeri, Sarah",            rank: 20, g: "f" },
  { name: "Ruck, Martina",               rank: 21, g: "f" },
  { name: "Gräßle, Luise",               rank: 22, g: "f" },
  { name: "Vöhringer, Hannah",           rank: 23, g: "f" },
  { name: "Schmidt, Annabell",           rank: 24, g: "f" },
  { name: "Zhao, Chengchen",             rank: 25, g: "f" },
  { name: "Zhou, Lina",                  rank: 26, g: "f" },
];

window.LU_ROSTER = ORIGINAL.map(p => p.name);
window.LU_ROSTER_MAP = Object.fromEntries(ORIGINAL.map(p => [p.name, p.g]));

const STORE_KEY = "nuliga-lineup-v4";
/* This app is the 4th Mannschaft — the number is hard-wired. */
const TEAM_NO = 4;

function defaultState(chem) {
  const players = ORIGINAL.map(p => ({...p}));
  const selected = teamMembers(TEAM_NO).filter(n => players.some(p => p.name === n));
  return {
    players, selected, team: TEAM_NO,
    chem: chem || {},
    hd1: null, hd2: null, dd: null, gd: null,
    he: null, de: null,
  };
}

let state = load();

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && Array.isArray(s.players)
        && s.players.every(p => p && typeof p.name === "string" && typeof p.rank === "number" && (p.g === "m" || p.g === "f"))
        && Array.isArray(s.selected) && typeof s.chem === "object") {
      s.players.forEach(p => {
        const o = ORIGINAL.find(x => x.name === p.name);
        if (o) p.rank = o.rank;
      });
      if (!("he" in s)) s.he = null;
      if (!("de" in s)) s.de = null;
      /* Migration: the old numeric `hd` (index of a fixed doubles option) is gone —
         men's doubles are stored as two pair keys now. */
      if ("hd" in s) delete s.hd;
      if (typeof s.hd1 !== "string") s.hd1 = null;
      if (typeof s.hd2 !== "string") s.hd2 = null;
      if (s.team !== TEAM_NO) {
        /* Saved state comes from the sister app or an old version:
           reset the selection to Mannschaft 4, discard the picks. */
        s.team = TEAM_NO;
        s.hd1 = null; s.hd2 = null; s.dd = null; s.gd = null;
        s.he = null; s.de = null;
      }
      /* the team assignment (shared via Firebase) is the source: re-apply the selection */
      s.selected = teamMembers(TEAM_NO).filter(n => s.players.some(p => p.name === n));
      return s;
    }
  } catch {}
  return defaultState();
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

function chemKey(a, b) { return [a, b].sort().join("|"); }
function chemOf(a, b) { return state.chem[chemKey(a, b)] || 0; }
function pairKey(a, b) { return [a, b].sort().join("|"); }
function isSel(name) { return state.selected.includes(name); }

function availMen()   { return state.players.filter(p => p.g === "m" && isSel(p.name)).sort((a, b) => a.rank - b.rank); }
function availWomen() { return state.players.filter(p => p.g === "f" && isSel(p.name)).sort((a, b) => a.rank - b.rank); }

function renderSquad() {
  for (const [paneId, g] of [["luPaneM", "m"], ["luPaneF", "f"]]) {
    const group = state.players.filter(p => p.g === g).sort((a, b) => a.rank - b.rank);
    const selCount = group.filter(p => isSel(p.name)).length;
    document.getElementById(g === "m" ? "luCountM" : "luCountF").textContent =
      `${selCount}/${group.length}`;
    const pane = document.getElementById(paneId);
    pane.innerHTML = "";
    const mkRow = p => {
      const li = document.createElement("li");
      li.className = "row " + (isSel(p.name) ? "checked" : "off");
      li.dataset.name = p.name;
      li.innerHTML = `
        <input type="checkbox" class="avail" data-name="${esc(p.name)}" ${isSel(p.name) ? "checked" : ""}
          aria-label="${tt("{0} verfügbar", esc(p.name))}">
        <span class="rank">${p.rank}</span>
        <span class="name">${esc(p.name)}</span>
        <button class="del" data-del="${esc(p.name)}" aria-label="${tt("{0} löschen", esc(p.name))}">×</button>`;
      return li;
    };
    const selUl = document.createElement("ul");
    selUl.className = "rows pinned";
    const restUl = document.createElement("ul");
    restUl.className = "rows";
    group.forEach(p => (isSel(p.name) ? selUl : restUl).appendChild(mkRow(p)));
    if (selUl.children.length) pane.appendChild(selUl);
    pane.appendChild(restUl);
  }
}

for (const id of ["luPaneM", "luPaneF"]) {
  const ul = document.getElementById(id);
  ul.addEventListener("change", e => {
    const cb = e.target.closest("input.avail");
    if (!cb) return;
    const name = cb.dataset.name;
    if (cb.checked) { if (!isSel(name)) state.selected.push(name); }
    else state.selected = state.selected.filter(n => n !== name);
    save();
    renderAll();
  });
  ul.addEventListener("click", e => {
    const del = e.target.closest("button[data-del]");
    if (!del) return;
    const name = del.dataset.del;
    const idx = state.players.findIndex(p => p.name === name);
    const removed = state.players[idx];
    const wasSel = isSel(name);
    state.players.splice(idx, 1);
    state.selected = state.selected.filter(n => n !== name);
    save();
    renderAll();
    toast(tt("{0} gelöscht", name), {
      label: t("Rückgängig"),
      action() {
        state.players.push(removed);
        if (wasSel) state.selected.push(removed.name);
        save();
        renderAll();
      }
    });
  });
}

document.getElementById("luAddForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("luAddName").value.trim();
  const g = document.getElementById("luAddGender").value;
  if (!name) return;
  if (state.players.some(p => p.name === name)) { toast(t("Spieler existiert bereits")); return; }
  const rank = state.players.filter(p => p.g === g)
    .reduce((mx, p) => Math.max(mx, p.rank || 0), 0) + 1;
  state.players.push({ name, rank, g });
  state.selected.push(name);
  save();
  renderAll();
  e.target.reset();
  document.getElementById("luAddName").focus();
});

function pairLabel(p) { return `${esc(p[0].name)} + ${esc(p[1].name)}`; }
function pairSum(p) { return p[0].rank + p[1].rank; }
function starsHtml(p) {
  const val = chemOf(p[0].name, p[1].name);
  let h = `<span class="stars" aria-label="Chemie ${pairLabel(p)}">`;
  for (let s = 1; s <= 5; s++) {
    h += `<button type="button" class="${s <= val ? "on" : ""}"
      data-star="${s}" data-a="${esc(p[0].name)}" data-b="${esc(p[1].name)}"
      aria-label="${s} Sterne">★</button>`;
  }
  return h + `</span>`;
}

/* all C(n,2) pairs of a rank-sorted player list */
function allPairs(list) {
  const out = [];
  for (let i = 0; i < list.length; i++)
    for (let j = i + 1; j < list.length; j++)
      out.push([list[i], list[j]]);
  return out;
}
/* men's doubles pairs: smallest rank sum first, then stable by singles ranks */
function hdPairs(men) {
  return allPairs(men).sort((a, b) =>
    pairSum(a) - pairSum(b) || a[0].rank - b[0].rank || a[1].rank - b[1].rank);
}
function ddOptions(women) { return allPairs(women); }
function pairByKey(pairs, key) {
  return key ? (pairs.find(p => pairKey(p[0].name, p[1].name) === key) || null) : null;
}
function pairNames(key) { return key ? key.split("|") : []; }

function chosenHE(men) {
  if (Array.isArray(state.he)) {
    const picked = men.filter(p => state.he.includes(p.name));
    if (picked.length) return picked.slice(0, 3);
  }
  return men.slice(0, 3);
}
function chosenDE(women) {
  if (state.de) {
    const w = women.find(p => p.name === state.de);
    if (w) return w;
  }
  return women[0] || null;
}

function disciplineCount(name, men, women, hd, ddPair) {
  let n = 0;
  if (chosenHE(men).some(p => p.name === name)) n++;
  const de = chosenDE(women);
  if (de && de.name === name) n++;
  if (hd) {
    if (hd.p1 && hd.p1.some(p => p.name === name)) n++;
    if (hd.p2 && hd.p2.some(p => p.name === name)) n++;
  }
  if (ddPair && ddPair.some(p => p.name === name)) n++;
  return n;
}

/* Chosen men's doubles. p2 may be null while only HD1 is set;
   null when nothing is picked at all. */
function currentHd(men) {
  const pairs = hdPairs(men);
  const p1 = pairByKey(pairs, state.hd1);
  const p2 = pairByKey(pairs, state.hd2);
  if (!p1 && !p2) return null;
  return { p1, p2, tie: !!(p1 && p2 && pairSum(p1) === pairSum(p2)) };
}
/* League rule: HD1 carries the lower rank sum — swap the two picks if needed. */
function normalizeHdOrder(men) {
  const pairs = hdPairs(men);
  const a = pairByKey(pairs, state.hd1), b = pairByKey(pairs, state.hd2);
  if (!a || !b) return;
  if (pairSum(b) < pairSum(a)) { const k = state.hd1; state.hd1 = state.hd2; state.hd2 = k; }
}

function currentDd(women) {
  return pairByKey(ddOptions(women), state.dd);
}

function renderSingles(men, women) {
  const el = document.getElementById("luSinglesOut");
  const he = chosenHE(men);
  const de = chosenDE(women);

  const menPick = men.map(p => {
    const on = he.some(x => x.name === p.name);
    const full = he.length >= 3 && !on;
    return `<label class="pick${on ? " on" : ""}${full ? " disabled" : ""}">
      <input type="checkbox" data-he="${esc(p.name)}" ${on ? "checked" : ""} ${full ? "disabled" : ""}>
      ${esc(p.name)} <span class="pr">${p.rank}</span></label>`;
  }).join("");
  const womenPick = women.map(p => {
    const on = de && de.name === p.name;
    return `<label class="pick${on ? " on" : ""}">
      <input type="radio" name="luDePick" data-de="${esc(p.name)}" ${on ? "checked" : ""}>
      ${esc(p.name)} <span class="pr">${p.rank}</span></label>`;
  }).join("");

  const rows = [];
  ["HE1", "HE2", "HE3"].forEach((pos, i) => {
    rows.push(he[i]
      ? `<tr><td class="pos">${t(pos)}</td><td class="pname">${esc(he[i].name)}</td><td class="prank">${tt("Rang {0}", he[i].rank)}</td></tr>`
      : `<tr><td class="pos">${t(pos)}</td><td class="pname" style="color:var(--warn, #C2410C)">${t("— Spieler wählen")}</td><td></td></tr>`);
  });
  rows.push(de
    ? `<tr><td class="pos">${t("DE")}</td><td class="pname">${esc(de.name)}</td><td class="prank">${tt("Rang {0}", de.rank)}</td></tr>`
    : `<tr><td class="pos">${t("DE")}</td><td class="pname" style="color:var(--warn, #C2410C)">${t("— keine Dame verfügbar")}</td><td></td></tr>`);

  el.innerHTML = `
    <div class="pick-group"><span class="pick-label">${t("Einzel-Herren (3):")}</span>${menPick || "—"}</div>
    <div class="pick-group"><span class="pick-label">${t("Dameneinzel:")}</span>${womenPick || "—"}</div>
    <table class="fixed">${rows.join("")}</table>`;
}

document.getElementById("luSinglesOut").addEventListener("change", e => {
  const heBox = e.target.closest("input[data-he]");
  if (heBox) {
    const men = availMen();
    const cur = chosenHE(men).map(p => p.name);
    const name = heBox.dataset.he;
    state.he = heBox.checked ? [...cur, name] : cur.filter(n => n !== name);
    save();
    renderAll();
    return;
  }
  const deRadio = e.target.closest("input[data-de]");
  if (deRadio) {
    state.de = deRadio.dataset.de;
    save();
    renderAll();
  }
});

/* Long pair lists get capped; the expand state is pure UI and
   deliberately not persisted. */
const PAIR_CAP = 12;
const expanded = { hd1: false, hd2: false, dd: false, gd: false };

/* One card list (HD1/HD2/DD/GD) with a cap and a "show all N" button.
   The current selection always stays visible, even far down the list. */
function cardList(listKey, cards, selIdx) {
  let vis = cards;
  if (!expanded[listKey] && cards.length > PAIR_CAP) {
    vis = cards.slice(0, PAIR_CAP);
    if (selIdx >= PAIR_CAP) vis.push(cards[selIdx]);
  }
  const more = vis.length < cards.length
    ? `<div class="more-row"><button type="button" class="btn small" data-more="${listKey}">${tt("Alle {0} anzeigen", cards.length)}</button></div>`
    : "";
  return `<div class="options">${vis.join("")}</div>${more}`;
}

/* One pair option as a card. `attr` is the data attribute the click handler reads. */
function pairCard(p, { slot, attr, radio, selKey, best, disabled, note, sumHtml }) {
  const key = pairKey(p[0].name, p[1].name);
  const on = selKey === key;
  const sum = sumHtml || `${p[0].rank}+${p[1].rank} = ${pairSum(p)}`;
  return `
    <div class="option${on ? " selected" : ""}${disabled ? " disabled" : ""}"
      ${disabled ? "" : `data-${attr}="${esc(key)}"`}>
      <div class="option-head">
        <label><input type="radio" name="${radio}" value="${esc(key)}"
          ${on ? "checked" : ""} ${disabled ? "disabled" : ""}> ${t(slot)}</label>
        ${best ? `<span class="badge-best">${t("Beste Chemie")}</span>` : ""}
      </div>
      <div class="pair">
        <span class="slot">${t(slot)}</span><span class="names">${pairLabel(p)}</span>
        <span class="sum">${sum}</span>
        ${starsHtml(p)}
      </div>
      ${note ? `<div class="opt-note">${note}</div>` : ""}
    </div>`;
}

function pairChem(p) { return chemOf(p[0].name, p[1].name); }

function renderHd(men) {
  const el = document.getElementById("luHdOut");
  const pairs = hdPairs(men);
  if (!pairs.length) {
    el.innerHTML = `<div class="empty-note">${t("Mindestens 2 Herren anhaken.")}</div>`;
    return;
  }

  /* HD1: all pairs of the checked men */
  const best1 = Math.max(0, ...pairs.map(pairChem));
  const cards1 = pairs.map(p => pairCard(p, {
    slot: "HD1", attr: "hd1", radio: "luHd1", selKey: state.hd1,
    best: best1 > 0 && pairChem(p) === best1,
  }));
  const sel1 = pairs.findIndex(p => pairKey(p[0].name, p[1].name) === state.hd1);
  let html = `<h3>${t("HD1")}</h3>` + cardList("hd1", cards1, sel1);

  /* HD2: only pairs without a player from HD1 */
  const hd1 = pairByKey(pairs, state.hd1);
  html += `<h3>${t("HD2")}</h3>`;
  if (!hd1) {
    html += `<div class="empty-note">${t("Zuerst HD1 wählen — dann erscheinen die möglichen HD2-Paare.")}</div>`;
  } else {
    const used = hd1.map(p => p.name);
    const rest = pairs.filter(p => !used.includes(p[0].name) && !used.includes(p[1].name));
    if (!rest.length) {
      html += `<div class="empty-note">${t("Keine freien Paare mehr — mehr Herren anhaken.")}</div>`;
    } else {
      const best2 = Math.max(0, ...rest.map(pairChem));
      const cards2 = rest.map(p => pairCard(p, {
        slot: "HD2", attr: "hd2", radio: "luHd2", selKey: state.hd2,
        best: best2 > 0 && pairChem(p) === best2,
      }));
      const sel2 = rest.findIndex(p => pairKey(p[0].name, p[1].name) === state.hd2);
      html += cardList("hd2", cards2, sel2);
    }
  }

  /* League rule stays visible: HD1 has the lower rank sum (swapped automatically
     on pick), on a tie the captain decides. */
  const hd = currentHd(men);
  if (hd && hd.tie) {
    html += `<div class="tie">${t("⚖ Rangsummen gleich — Kapitän entscheidet die Reihenfolge.")}</div>`;
  }
  el.innerHTML = html;
}

function renderDd(women) {
  const el = document.getElementById("luDdOut");
  const opts = ddOptions(women);
  if (!opts.length) {
    el.innerHTML = `<div class="empty-note">${t("Mindestens 2 Damen anhaken.")}</div>`;
    return;
  }
  const cards = opts.map(p => pairCard(p, {
    slot: "DD", attr: "dd", radio: "luDd", selKey: state.dd,
  }));
  const sel = opts.findIndex(p => pairKey(p[0].name, p[1].name) === state.dd);
  el.innerHTML = cardList("dd", cards, sel);
}

/* All mixed combinations, sorted by rank sum. The max-2-events rule is not
   filtered away but shown as a disabled card. */
function gdCombos(men, women) {
  const combos = [];
  men.forEach(m => women.forEach(w => combos.push([m, w])));
  return combos.sort((a, b) =>
    pairSum(a) - pairSum(b) || a[0].rank - b[0].rank || a[1].rank - b[1].rank);
}
/* Names of a mixed pair's players who already hold 2 events (excluding GD itself) */
function gdBlockedBy(p, men, women, hd, ddPair) {
  return p.filter(x => disciplineCount(x.name, men, women, hd, ddPair) >= 2)
          .map(x => x.name);
}

function renderGd(men, women) {
  const el = document.getElementById("luGdOut");
  if (!men.length || !women.length) {
    el.innerHTML = `<div class="empty-note">${t("Herren und Damen anhaken.")}</div>`;
    return;
  }
  const hd = currentHd(men);
  const ddPair = currentDd(women);
  const combos = gdCombos(men, women);
  const cards = combos.map(p => {
    const blocked = gdBlockedBy(p, men, women, hd, ddPair);
    return pairCard(p, {
      slot: "GD", attr: "gd", radio: "luGd", selKey: state.gd,
      disabled: blocked.length > 0,
      note: blocked.length ? esc(tt("— schon 2 Disziplinen: {0}", blocked.join(" · "))) : "",
      sumHtml: `${t("Rang")} ${p[0].rank} / ${p[1].rank}`,
    });
  });
  const sel = combos.findIndex(p => pairKey(p[0].name, p[1].name) === state.gd);
  el.innerHTML = cardList("gd", cards, sel);
}

function sheetRows(men, women) {
  const hd = currentHd(men);
  const hd1 = hd && hd.p1, hd2 = hd && hd.p2;
  const tie = hd && hd.tie;
  const ddPair = currentDd(women);
  const he = chosenHE(men);
  const de = chosenDE(women);
  const gdPair = pairByKey(gdCombos(men, women), state.gd);
  return [
    ["HD1", hd1 ? `${hd1[0].name} + ${hd1[1].name}` : null, hd1 ? `Σ ${pairSum(hd1)}${tie ? " ⚖" : ""}` : ""],
    ["HD2", hd2 ? `${hd2[0].name} + ${hd2[1].name}` : null, hd2 ? `Σ ${pairSum(hd2)}${tie ? " ⚖" : ""}` : ""],
    ["DD",  ddPair ? `${ddPair[0].name} + ${ddPair[1].name}` : null, ddPair ? `Σ ${pairSum(ddPair)}` : ""],
    ["HE1", he[0] ? he[0].name : null, he[0] ? tt("Rang {0}", he[0].rank) : ""],
    ["HE2", he[1] ? he[1].name : null, he[1] ? tt("Rang {0}", he[1].rank) : ""],
    ["HE3", he[2] ? he[2].name : null, he[2] ? tt("Rang {0}", he[2].rank) : ""],
    ["DE",  de ? de.name : null, de ? tt("Rang {0}", de.rank) : ""],
    ["GD",  gdPair ? `${gdPair[0].name} + ${gdPair[1].name}` : null, ""],
  ];
}

function renderSheet(men, women) {
  const el = document.getElementById("luSheetOut");
  const rows = sheetRows(men, women).map(([pos, val, extra]) =>
    `<tr><td class="pos" style="font-weight:700;color:var(--teal-ink, currentColor)">${t(pos)}</td>
     ${val ? `<td class="pname" style="color:var(--text-strong);font-weight:500">${esc(val)}</td>`
           : `<td class="missing">${t("— noch nicht gewählt")}</td>`}
     <td class="prank" style="color:var(--text-muted);text-align:right">${extra}</td></tr>`
  ).join("");
  el.innerHTML = `<table class="sheet">${rows}</table>`;
}

document.getElementById("luRight").addEventListener("click", e => {
  const star = e.target.closest("button[data-star]");
  if (star) {
    const k = chemKey(star.dataset.a, star.dataset.b);
    const v = +star.dataset.star;
    state.chem[k] = (state.chem[k] === v) ? 0 : v;
    save();
    renderAll();
    return;
  }
  const more = e.target.closest("button[data-more]");
  if (more) { expanded[more.dataset.more] = true; renderAll(); return; }
  const hd1 = e.target.closest("[data-hd1]");
  if (hd1 && !e.target.closest(".stars")) { state.hd1 = hd1.dataset.hd1; save(); renderAll(); return; }
  const hd2 = e.target.closest("[data-hd2]");
  if (hd2 && !e.target.closest(".stars")) { state.hd2 = hd2.dataset.hd2; save(); renderAll(); return; }
  const dd = e.target.closest("[data-dd]");
  if (dd && !e.target.closest(".stars")) { state.dd = dd.dataset.dd; save(); renderAll(); return; }
  const gd = e.target.closest("[data-gd]");
  if (gd && !e.target.closest(".stars")) { state.gd = gd.dataset.gd; save(); renderAll(); return; }
});

document.getElementById("luCopyBtn").addEventListener("click", async () => {
  const men = availMen(), women = availWomen();
  const lines = [t("Aufstellung")].concat(
    sheetRows(men, women).map(([pos, val, extra]) =>
      `${t(pos)}: ${val || "—"}${extra ? ` (${extra})` : ""}`)
  );
  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    toast(t("Aufstellung kopiert"));
  } catch { toast(t("Kopieren fehlgeschlagen")); }
});

for (const [btnId, paneId] of [["luTabM", "luPaneM"], ["luTabF", "luPaneF"]]) {
  document.getElementById(btnId).addEventListener("click", () => {
    for (const [b, p] of [["luTabM", "luPaneM"], ["luTabF", "luPaneF"]]) {
      const on = b === btnId;
      document.getElementById(b).setAttribute("aria-selected", on);
      document.getElementById(p).hidden = !on;
    }
  });
}

/* take the squad of Mannschaft 4 from the shared team assignment */
function teamMembers(n) {
  let groups = null;
  try {
    const s = JSON.parse(localStorage.getItem("bwbv-ranking-v5"));
    if (s && s.m && Array.isArray(s.m.players) && Array.isArray(s.m.sizes)
        && s.f && Array.isArray(s.f.players) && Array.isArray(s.f.sizes)) groups = s;
  } catch {}
  const names = [];
  if (groups) {
    for (const g of ["m", "f"]) {
      const gr = groups[g];
      let start = 0;
      for (let t = 0; t < n - 1; t++) start += Math.max(0, gr.sizes[t] | 0);
      names.push(...gr.players.slice(start, start + Math.max(0, gr.sizes[n - 1] | 0)).map(p => p.name));
    }
  } else {
    /* no team assignment stored: ranking blocks (5 Herren / 2 Damen per team) */
    for (const [g, size] of [["m", 5], ["f", 2]]) {
      const grp = ORIGINAL.filter(p => p.g === g).sort((a, b) => a.rank - b.rank);
      names.push(...grp.slice((n - 1) * size, n * size).map(p => p.name));
    }
  }
  return names;
}

/* called when the shared team assignment arrives from the cloud */
window.luRefreshTeamSelection = function () {
  if (!state.team) return;
  const members = teamMembers(state.team).filter(n => state.players.some(p => p.name === n));
  if (JSON.stringify(members) === JSON.stringify(state.selected)) return;
  state.selected = members;
  save();
  renderAll();
};

document.getElementById("luClearBtn").addEventListener("click", () => {
  state.selected = [];
  /* team stays 4 so the cloud assignment can refill the squad */
  state.team = TEAM_NO;
  state.hd1 = null; state.hd2 = null; state.dd = null; state.gd = null;
  state.he = null; state.de = null;
  save();
  renderAll();
  toast(t("Auswahl geleert"));
});

document.getElementById("luResetBtn").addEventListener("click", () => {
  state = defaultState(state.chem);
  save();
  renderAll();
  toast(t("Kader zurückgesetzt (Chemie-Sterne bleiben)"));
});

function renderAll() {
  const men = availMen(), women = availWomen();
  /* The cleanup rules below may drop or swap picks — that must reach storage
     too, otherwise localStorage diverges from the screen. */
  const picksBefore = JSON.stringify([state.he, state.de, state.hd1, state.hd2, state.dd, state.gd]);
  if (Array.isArray(state.he)) {
    state.he = state.he.filter(n => men.some(p => p.name === n)).slice(0, 3);
    if (!state.he.length) state.he = null;
  }
  if (state.de && !women.some(p => p.name === state.de)) state.de = null;
  /* Men's doubles: pairs containing deselected/removed players fall out … */
  const hdAll = hdPairs(men);
  if (!pairByKey(hdAll, state.hd1)) state.hd1 = null;
  if (!pairByKey(hdAll, state.hd2)) state.hd2 = null;
  /* … HD2 without HD1 moves up (the HD2 picker is invisible without HD1) … */
  if (!state.hd1 && state.hd2) { state.hd1 = state.hd2; state.hd2 = null; }
  /* … no player may stand in both doubles … */
  if (state.hd1 && state.hd2 && pairNames(state.hd2).some(n => pairNames(state.hd1).includes(n)))
    state.hd2 = null;
  /* … and HD1 keeps the lower rank sum. */
  normalizeHdOrder(men);
  if (state.dd && !currentDd(women)) state.dd = null;
  if (state.gd) {
    const hd = currentHd(men), ddPair = currentDd(women);
    const names = pairNames(state.gd);
    const m = men.find(p => names.includes(p.name));
    const w = women.find(p => names.includes(p.name));
    /* Mixed falls out when a player is missing or reaches 2 events via later picks */
    const ok = m && w
      && disciplineCount(m.name, men, women, hd, ddPair) < 2
      && disciplineCount(w.name, men, women, hd, ddPair) < 2;
    if (!ok) state.gd = null;
  }
  if (JSON.stringify([state.he, state.de, state.hd1, state.hd2, state.dd, state.gd]) !== picksBefore) save();
  renderSquad();
  renderSingles(men, women);
  renderHd(men);
  renderDd(women);
  renderGd(men, women);
  renderSheet(men, women);
}
renderAll();
})();

/* ================= team assignment: read only =================
   The Mannschaft assignment is maintained in the sister app. This app only
   mirrors it into the local cache and refreshes the squad.
   It NEVER writes to "teams". */
(function () {
const STORE_KEY = "bwbv-ranking-v5";
const MAX_TEAMS = 5;

function validGroup(x) {
  return x && Array.isArray(x.players) && Array.isArray(x.sizes)
    && x.sizes.length === MAX_TEAMS
    && x.players.every(p => p && typeof p.name === "string");
}

if (!window.fbReady) return;
window.fbReady.then(db => {
  if (!db) return;
  let tries = 0;
  (function attachTeams() {
    db.ref("teams").on("value", snap => {
      tries = 0;
      const v = snap.val();
      if (!v) return;                       /* nothing in the cloud: do not seed */
      if (!(validGroup(v.m) && validGroup(v.f))) return;
      const next = JSON.stringify({ m: v.m, f: v.f });
      if (next === localStorage.getItem(STORE_KEY)) return;
      localStorage.setItem(STORE_KEY, next);
      if (window.luRefreshTeamSelection) window.luRefreshTeamSelection();
    }, err => {
      console.error("[teams] listener cancelled:", err);
      if (++tries <= 5) setTimeout(attachTeams, 1000 * tries);
    });
  })();
});
})();
