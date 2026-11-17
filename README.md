# CaseMind

A complete, static detective-investigation game built for a school technology fair. Ten fictional cases, evidence analysis, suspect interrogations, contradiction tracking, a case assistant, scoring, achievements, and saved progress — all in the browser, with no build step and no backend.

CaseMind runs from plain HTML, CSS, vanilla JavaScript, and JSON. It deploys unchanged to Cloudflare Pages, GitHub Pages, or any static web host.

---

## Features

- **10 playable cases** across three difficulty levels (Rookie, Detective, Inspector).
- **Full investigation workspace** — scene brief, evidence exhibits, persons of interest, witness statements, timeline, analysis comparison, and a free-form notebook.
- **Interrogation room** — per-suspect question sets, recorded transcripts, and automatic contradiction detection when the right question meets the right exhibit.
- **MORGAN assistant** — a clearly labelled rule-based simulated assistant by default. Optional live-AI mode can be enabled in Settings.
- **Final accusation** — culprit, motive, method, and up to three supporting exhibits. The hidden solution is only revealed on the verdict screen.
- **Scoring and ranks** — 100-point case scoring plus a persistent rank based on solved cases.
- **8 achievements** that persist across replays.
- **Local progress** — every exhibit, statement, question, contradiction, note, hint, verdict, setting, and achievement is stored in `localStorage`.
- **Dashboard and archive** — resume the current case, jump into a recommended next case, filter by difficulty/status, or replay any closed file.
- **Responsive dark interface** — desktop, tablet, and mobile layouts with a keyboard-accessible modal and drawer system.
- **No registration, no keys, no paywall** — open the app and start the first case immediately.

---

## Quick start

### Option 1 — open the file directly

Double-click `index.html`. CaseMind includes an offline case archive (`data/cases/bundle.js`) so it still loads when the browser blocks local JSON requests from `file://`.

### Option 2 — run a tiny local server (recommended)

From the project folder:

```bash
# Python 3
python -m http.server 4173

# or Node.js
npx serve .
```

Then open <http://localhost:4173>.

Serving over HTTP also lets the app load the case JSON files individually, which is useful while editing cases.

---

## Deployment

### Cloudflare Pages

1. Create a new Pages project and choose **Direct Upload** (drag the `casemind` folder) or connect a Git repository.
2. If you use a build step, leave the build command empty and set the output directory to the folder that contains `index.html`.
3. Deploy. No environment variables or server runtime are required.

### GitHub Pages

1. Push the project to a GitHub repository.
2. In **Settings → Pages**, deploy from the branch/folder that contains `index.html`.
3. If the site lives under `https://user.github.io/repo/`, all paths in CaseMind are relative, so it works without changes.

The app has no server-side routes. Hash routing (`#/dashboard`, `#/case/...`) is used throughout, so no rewrite rules are needed.

---

## Case library

| # | Case | Difficulty | Approx. time |
|---|------|------------|--------------|
| 01 | Midnight at the Museum | Rookie | 6 min |
| 02 | The Blackout | Rookie | 6 min |
| 03 | The Last Passenger | Rookie | 6 min |
| 04 | Death at the Manor | Detective | 7 min |
| 05 | The Glasshouse Murder | Detective | 7 min |
| 06 | The Lighthouse Signal | Detective | 8 min |
| 07 | The Missing Formula | Detective | 7 min |
| 08 | Echoes in Studio 4 | Inspector | 9 min |
| 09 | The Sable Portrait | Inspector | 9 min |
| 10 | The Vanishing at Vesper Lake | Inspector | 9 min |

Case numbers are assigned by difficulty and then by title when the archive loads, so the order above is the in-app order.

Every case contains:

- a scene brief and victim report,
- 7–8 evidence exhibits,
- 3–4 suspects with question sets and alibis,
- 3 witness statements,
- a timeline,
- 3 documentable contradictions,
- 4 motive choices, 4 method choices, and 3 graded hints,
- a sealed solution object that is never rendered before the final accusation.

All characters, locations, and events are fictional.

---

## Scoring

A perfect case is worth **100 points**:

| Component | Points |
|-----------|--------|
| Correct culprit | 45 |
| Correct motive | 20 |
| Correct method | 20 |
| Supporting evidence (3 correct exhibits × 5) | 15 |
| Hint penalty (5 per hint, capped at 15) | −15 max |

The accusation is **solved** when the culprit is correct. Motive, method, and evidence still affect the final score. After submission, the verdict screen shows the full solution, the reconstructed timeline, the supported exhibits, and the red herrings. The case can then be replayed from a clean file; achievements and other cases are preserved.

Case-file completion in the workspace is a separate progress meter based on exhibits logged, questions asked, witness statements read, and contradictions recorded.

### Achievements

1. **First Case** — close your first investigation.
2. **Sharp Eye** — solve a case without using a hint.
3. **Truth Seeker** — read every witness statement in one case.
4. **Evidence Technician** — examine every exhibit in one case.
5. **Interrogator** — ask every question to every suspect in one case.
6. **Contradiction Hunter** — surface every contradiction in one case.
7. **Perfect Investigation** — score 100 on a final accusation.
8. **Master Detective** — solve all ten cases.

---

## MORGAN assistant

MORGAN is **simulated by default**. Its answers come from a local rule set that reads only the current case facts: evidence, alibis, witness statements, recorded contradictions, and progress. It is labelled `SIM` throughout the interface and never names the culprit.

### Optional live AI

Open **Settings → MORGAN assistant** and choose **Live AI** if you want real model responses. Two configurations are supported:

1. **Pollinations (no key)** — the default live endpoint:
   - Endpoint: `https://text.pollinations.ai/openai`
   - Model: `openai-fast`
   - The free service is rate-limited (currently one reply every 45 seconds per IP) and may return HTTP 402/429. CaseMind automatically falls back to the simulated rule set and explains why.
2. **Bring your own OpenAI-compatible endpoint** — any service that accepts `POST /chat/completions` with a `model` and `messages` array, for example a local llama.cpp server, Ollama's OpenAI-compatible API, or a hosted provider.
   - Enter the endpoint URL and model name in Settings.
   - Add an API key if the endpoint requires one.
   - Keys are optional and are stored in `sessionStorage` by default. Enabling **Remember key** stores the key in `localStorage` on that device.

Live mode only sends case facts and the conversation. The hidden `solution` object is deliberately excluded from every live prompt. Live responses are still experimental and may be inaccurate; the verdict and scoring always use the local case data.

---

## Privacy and storage

- Progress is stored under the `casemind.state.v1` key in `localStorage`.
- The app has no backend, analytics, accounts, or tracking.
- Optional live AI requests go directly from the browser to the endpoint you configure.
- The optional reading-room panel uses the public [Gutendex](https://gutendex.com/) API and falls back to bundled suggestions if the API is unavailable.
- **Settings → Data** can export progress as JSON or reset everything.
- Clearing browser storage removes all CaseMind progress.

---

## Project structure

```text
casemind/
├── index.html                  App shell, navigation, MORGAN drawer
├── css/
│   └── style.css               Complete responsive dark theme
├── js/
│   ├── app.js                  Boot, hash router, dashboard, archive, settings
│   ├── cases.js                Case loading/normalisation and cover artwork
│   ├── storage.js              localStorage schema and progress API
│   ├── scoring.js              Accusation scoring, ranks, achievements
│   ├── investigation.js        Workspace tabs, exhibits, people, accusation, verdict
│   ├── interrogation.js        Interrogation room and contradiction sync
│   ├── assistant.js            MORGAN drawer, simulated intents, live fallback
│   ├── api.js                  Gutendex and OpenAI-compatible request helpers
│   └── ui.js                   Icons, escaping, toasts, modals, confirm dialogs
├── data/cases/
│   ├── index.json              Case manifest
│   ├── *.json                  Ten case files with sealed solutions
│   └── bundle.js               Offline fallback archive for file:// use
├── assets/
│   ├── favicon.svg
│   └── logo.svg
└── tools/
    └── build-bundle.mjs        Regenerates bundle.js from the JSON cases
```

---

## Editing cases

Case files are plain JSON. Keep the existing top-level shape (`id`, `title`, `difficulty`, `suspects`, `evidence`, `witnesses`, `timeline`, `contradictions`, `motiveOptions`, `methodOptions`, `hints`, `solution`) and make sure:

- contradiction entries reference existing `suspectId` values and question keys in the form `suspect-id:q-id`;
- `solution.evidenceIds` contains three exhibit IDs;
- motive and method IDs exist in their option arrays;
- the manifest lists the file.

After editing JSON, regenerate the offline archive:

```bash
node tools/build-bundle.mjs
```

That command rewrites `data/cases/bundle.js` with the current date and all manifest cases.

---

## Browser support

CaseMind targets current versions of Chrome, Edge, Firefox, and Safari. It uses standard ES2020 features, CSS custom properties, `localStorage`, and `fetch`. JavaScript must be enabled.

Accessibility notes: the app includes a skip link, keyboard-focusable controls, labelled dialogs and drawers, `aria-live` regions for transcripts and toasts, and reduced-motion support.

---

## Troubleshooting

**The loading screen does not finish.**  
Open the browser console. If the JSON files cannot be fetched, CaseMind should fall back to `data/cases/bundle.js`. If both fail, confirm that the folder structure is intact and that `bundle.js` is present.

**Opening `index.html` directly shows a console warning about fetch.**  
That is expected on `file://`; the app switches to the bundled archive. For the cleanest setup, serve the folder over HTTP.

**Live AI falls back to simulation.**  
The free endpoint is rate-limited. Wait about 45 seconds and try again, or configure your own endpoint in Settings. A missing or rejected key also causes a fallback; the reason appears in the reply.

**Progress disappeared.**  
Progress belongs to the browser and origin that stored it. Opening the app from a different port, host, or browser profile starts a fresh record.

---

## Disclaimer

CaseMind is a work of fiction created for educational and demonstration purposes. All cases, people, organisations, and events are invented. No real investigation, legal, or forensic conclusions should be drawn from the game.

Third-party services (Google Fonts, Pollinations, Gutendex, or a custom AI endpoint) are optional and governed by their own terms and privacy policies.
"# CaseMind" 
