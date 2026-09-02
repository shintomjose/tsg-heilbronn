# Team 4 — SG Heilbronn/Leingarten

Progressive Web App for the 4th team: match dates, availability, league standings and lineup.
No build step — plain HTML/CSS/JS, runs directly in the browser and works offline (service worker).

## The two tabs

| Tab | Content |
| --- | --- |
| **01 Termine** | Match days (first/second half of the season), availability matrix (card view on phones), staffing progress, and the current league standings. |
| **02 Aufstellung** | Squad, available players, doubles/singles suggestions with chemistry rating, and the finished lineup sheet. |

## Data

The app uses **the same Firebase Realtime Database as the main "Badminton Tools" app**.
Availability marks, the change log and the team assignment are shared: a change here is
immediately visible in the main app — and vice versa. There is no separate copy of the data.
Availability changes made here are still written to the shared change log, but the log UI
(Verlauf) only exists in the main app.

The league standings are deliberately **not** in the database — they are maintained
statically in `standings.js`.

## Updating the standings after a match day

**Automatic:** the GitHub Action `.github/workflows/update-standings.yml` fetches the
nuLiga table every Sunday and Monday morning (results appear there the day after the
Saturday matches), rewrites `standings.js` and pushes — GitHub Pages then publishes it.
It can also be started by hand: repo → Actions → "Update standings" → Run workflow.
Local run: `node scripts/update-standings.mjs`.

**Manual fallback** (nuLiga layout change, network trouble):

1. Open `standings.js`.
2. Edit the entries in `rows` — array order = display order:
   `rang` (rank), `team`, `beg` (matches played), `s`/`u`/`n` (wins/draws/losses),
   `punkte` (points), `spiele` (games), `saetze` (sets), each score as `"x:y"`.
3. Set `updated` to the match-day date (format `YYYY-MM-DD`).
4. Commit and push — GitHub Pages publishes the change automatically.
   Already-open apps show the "Neue Version verfügbar — Aktualisieren" update button.

The source (nuLiga) is linked in the header of `standings.js`. On load the app also tries
to fetch the table live; when that fails (CORS usually blocks it) the values from
`standings.js` are shown — which is why the upkeep matters.

Note: the Firebase Hosting mirror (tsg-badminton-our-team.web.app) is NOT updated by the
Action — run `firebase deploy --only hosting:team4` to refresh it.

Our own team is highlighted in the table: its row gets the `own-team` class and a green tint.

## Running locally

**One click:** double-click `start-local.cmd` (Windows). It serves the app at
http://localhost:8000 in its own console window and opens the browser; close the
console window to stop the server.

Manually: any static web server works — `file://` does not, because of the service worker.

```bash
python -m http.server 8000
# then open: http://localhost:8000
```

Alternatives: `npx serve`, `php -S localhost:8000`, or the Live Server extension in VS Code.

When testing PWA changes locally, enable *Application → Service Workers → "Update on reload"*
in DevTools, otherwise the old cached version keeps being served.

## Deployment

GitHub Pages: **Settings → Pages → Source: Deploy from a branch → Branch `main` / folder `/ (root)`**.
Every push to `main` goes live directly.

## Files

```
index.html            App shell and markup of the two tabs
app.js                Logic: match dates, availability, lineup, Firebase sync
standings.js          League standings (maintained by hand)
style.css             Design (green/grey, light/dark mode)
pwa.js                Manifest/meta injection, service worker registration, update prompt
sw.js                 Service worker (precache, offline fallback)
manifest.webmanifest  PWA manifest
icons/                App icons (192, 512, maskable, apple-touch)
start-local.cmd       One-click local server + browser (Windows)
HANDOVER.md           Session handover notes for continuing development
```
