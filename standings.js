/* ============================================================================
   STANDINGS — Bezirksliga „Neckar-Odenwald" (3-4) 2026/27
   ----------------------------------------------------------------------------
   Update after each match day.
   On load the app tries to fetch the live table from nuLiga. When that
   fails (CORS usually blocks it) the values below are shown instead.
   So: type the numbers in by hand and set "updated" to today's date.

   Source:
   https://bwbv-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupPage?championship=NB+26%2F27&group=40186

   Fields:
     rang   = rank                   beg    = matches played
     s/u/n  = win, draw, loss
     punkte = points "x:y"           spiele = games "x:y"    saetze = sets "x:y"
   ========================================================================== */
window.STANDINGS = {
  updated: "2026-09-01",
  rows: [
    { rang: 1, team: "SG Brackenheim/Schwaigern",    beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
    { rang: 2, team: "SF Zaberfeld",                 beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
    { rang: 3, team: "TV Bad Rappenau",              beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
    { rang: 4, team: "TSV Pfedelbach",               beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
    { rang: 5, team: "Spfr. Affaltrach II",          beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
    { rang: 6, team: "SG Heilbronn/Leingarten V",    beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
    { rang: 7, team: "SG Heilbronn/Leingarten IV",   beg: 0, s: 0, u: 0, n: 0, punkte: "0:0", spiele: "0:0", saetze: "0:0" },
  ],
};
