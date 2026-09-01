# Team 4 — SG Heilbronn/Leingarten

Progressive Web App for the 4th team: match dates, availability, league standings and lineup.
No build step — plain HTML/CSS/JS, runs directly in the browser and works offline (service worker).

## The two tabs

| Tab | Content |
| --- | --- |
| **01 Termine** | Match days (first/second half of the season), availability matrix (card view on phones), staffing progress, change log, and the current league standings. |
| **02 Aufstellung** | Squad, available players, doubles/singles suggestions with chemistry rating, and the finished lineup sheet. |

## Data

The app uses **the same Firebase Realtime Database as the main "Badminton Tools" app**.
Availability marks, the change log and the team assignment are shared: a change here is
immediately visible in the main app — and vice versa. There is no separate copy of the data.
Players are added to the availability list in the main app only; this app intentionally has
no add-player form.

The league standings are deliberately **not** in the database — they are maintained
statically in `standings.js`.

## Updating the standings after a match day

1. Open `standings.js`.
2. Edit the entries in `rows` — array order = display order:
   `rang` (rank), `team`, `beg` (matches played), `s`/`u`/`n` (wins/draws/losses),
   `punkte` (points), `spiele` (games), `saetze` (sets), each score as `"x:y"`.
3. Set `updated` to the match-day date (format `YYYY-MM-DD`).
4. Commit and push — GitHub Pages publishes the change automatically.
   Already-open apps show the "Neue Version verfügbar — Aktualisieren" update button.

The source (nuLiga) is linked in the header of `standings.js`. On load the app tries to
fetch the table live; when that fails (CORS usually blocks it) the values from
`standings.js` are shown — which is why manual upkeep matters.

Our own team is highlighted in the table: its row gets the `own-team` class and a blue tint.

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
style.css             Design (royal blue, light/dark mode)
pwa.js                Manifest/meta injection, service worker registration, update prompt
sw.js                 Service worker (precache, offline fallback)
manifest.webmanifest  PWA manifest
icons/                App icons (192, 512, maskable, apple-touch)
start-local.cmd       One-click local server + browser (Windows)
HANDOVER.md           Session handover notes for continuing development
```
