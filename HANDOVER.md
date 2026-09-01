# Session Handover — Team 4 App (tsg-heilbronn)

Context for continuing development in this repo. Written 2026-09-01, after the initial
build session (run from the `badminton-tools` repo). Nothing has been committed yet —
the whole app is uncommitted work in the working tree, pending local verification.

## What this project is

A stripped-down, Team-4-only sibling of `C:\Users\shintappan\Desktop\PROJECTS\badminton-tools`
(github.com/shintomjose/badminton-tools). Same architecture: vanilla JS, no build step,
Firebase compat SDK 10.12.2, anonymous auth, German default + EN toggle, light/dark theme,
installable PWA. Deployed later via GitHub Pages (github.com/shintomjose/tsg-heilbronn,
branch `main`, root folder). Intended audience: Team 4 members only.

## Current state (all done, verified locally in Chrome)

- **Two tabs only**: `termine` (default) and `lineup`. Teams/ranking UI, Anfahrt, Shop,
  cart and lightbox from the main app are fully removed.
- **Termine tab**: match tables (Vorrunde/Rückrunde for SG Heilbronn/Leingarten IV,
  Bezirksliga "Neckar-Odenwald" 2026/27), NEW standings panel ("Tabelle"), availability
  (cards + table view), in-app notifications bell. NO change-log (Verlauf) UI and NO PIN
  code in this app — both removed on the owner's request; the Verlauf lives in the main
  app only. Changes made here are still written to `avail/log` so the main app's Verlauf
  and this app's notifications keep working.
- **Aufstellung tab**: full club roster (59 men / 26 women), Team 4 hard-pinned
  (`TEAM_NO = 4` in app.js) — team pills removed; selection auto-follows the shared
  team assignment from the cloud.
- **Standings**: `standings.js` → `window.STANDINGS` (static, hand-edited after each
  match day). On load, app tries a live fetch of the nuLiga group page (URL in
  standings.js header) with a 6 s timeout and DOMParser parsing; CORS normally blocks
  it, so the static data is the effective source. Own team row highlighted
  (`tr.own-team`). Cell classes: `st-rank`, `st-team`, `st-pts` (+ positional CSS
  fallbacks).
- **Theme**: royal blue. Light bg `#F2F4FA`, dark bg `#0D1322`, brand `#2B59D9`
  (dark: `#6C93F5`). CSS variable NAMES were kept from the main app (`--brand-teal`,
  `--teal-ink`, …) so shared code keeps working — only the VALUES are blue now.
  Meta theme-color values are set in BOTH app.js (`applyTheme`) and pwa.js — keep in sync.
- **Icons**: `icons/` — blue gradient, white shuttlecock + big "4"
  (192, 512, 512-maskable, 180 apple-touch). `showNotif` references
  `icons/icon-192.png` — keep that filename.
- **Branding**: DE "4. Mannschaft" / EN "Team 4"; `<title>` switches accordingly;
  manifest name "Team 4 — SG Heilbronn/Leingarten", short_name "Team 4".
- **Removed on purpose**: the "Spieler hinzufügen" form in the Verfügbarkeit panel
  (later also removed from badminton-tools — it exists in NEITHER app now; the player
  list is edited via the Firebase console if ever needed), the whole Verlauf panel,
  and all PIN-gate code (no PIN anywhere in this app). Related note: in
  badminton-tools the PIN protection is currently disabled via a `PIN_DISABLED = true`
  flag in its app.js (flip to false to re-enable).

## Data sharing with the main app (requirement: two-way sync)

Same `FB_CONFIG` (project badminton-tools-c6b27, europe-west1 RTDB). Paths:

| Path | This app | Notes |
| --- | --- | --- |
| `avail/players` | read | list of names in the availability matrix (add/remove only in main app) |
| `avail/marks/{matchId}/{nameKey}` | read/write | own marks only (honesty principle via "Ich bin" select) |
| `avail/log` | write + read (no UI) | entries pushed on every change; the read listener only feeds notifications — the Verlauf UI is main-app-only |
| `teams` | READ-ONLY | team assignment; cached to localStorage `bwbv-ranking-v5`, then `luRefreshTeamSelection()`. This app must NEVER write/seed `teams` (the main app has a seed-on-empty branch; this one deliberately does not). |

localStorage: UI prefs are `t4-`-prefixed (`t4-theme`, `t4-tab`, `t4-termine-round`,
`t4-termine-view`) to avoid clashes with the main app on the same github.io origin.
Data keys are intentionally SHARED with the main app: `bwbv-ranking-v5` (teams cache),
`nuliga-lineup-v4` (lineup state; `load()` forces team back to 4 and discards picks if
the sibling app stored a different team), `termine-whoami`, `termine-notify`,
`termine-notify-last`, `bwbv-lang`.

## Conventions / gotchas

- README and all code comments must be in **English** (owner's requirement, this session).
  UI strings stay German-first with the EN dictionary (`EN` map + `STATIC_EN*` tables in app.js).
- When editing shared features (availability, lineup logic, roster, matches), mirror the
  change in `badminton-tools` too — the owner wants both apps to behave consistently.
- The roster (`ORIGINAL` in app.js) is duplicated from the main app's lineup module;
  a roster change means editing both repos.
- i18n: every user-visible dynamic string goes through `t()`/`tt()`; static DOM text is
  translated via the `STATIC_EN*` selector tables — check selectors still match after
  markup changes (heading rewrites resolve via `#avStatus`/`#stTabStatus` → `closest("h2")`,
  not nth-child).
- app.js re-runs `applyTheme` on `window.load` because pwa.js (deferred) injects the
  theme-color meta after app.js runs. Don't remove that call.
- sw.js precaches the shell; bump `VERSION` when you want to force-refresh caches.
  `file://` won't work locally — use a static server (`python -m http.server`).
- Verify with `node --check app.js` after JS edits; no test suite exists.
- Do NOT commit/push without the owner's explicit go-ahead; they verify locally first.
  Note: `.idea/.gitignore` was already staged by the owner's IDE before this session.

## Open items

- Owner verifies locally, then commits/pushes and enables GitHub Pages
  (Settings → Pages → main / root).
- Standings upkeep after each match day (see README).
- Optional future: shared Firebase security rules review (both apps use anonymous auth;
  access is governed by DB rules in the Firebase console, not in these repos).
