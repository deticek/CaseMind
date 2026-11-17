/* CaseMind — application shell, routing and static pages */
(function () {
  "use strict";

  const UI = () => window.CaseMind.UI;
  const Storage = () => window.CaseMind.Storage;
  const Cases = () => window.CaseMind.Cases;
  const Scoring = () => window.CaseMind.Scoring;

  const state = {
    route: null,
    archiveFilter: "all",
    archiveQuery: "",
    booted: false,
    settingsOpen: false
  };

  let view = null;

  function escape(value) {
    return UI().escapeHtml(value);
  }

  function navigate(hash) {
    if (window.location.hash === hash) {
      route();
      return;
    }
    window.location.hash = hash;
  }

  function parseRoute() {
    const raw = String(window.location.hash || "").replace(/^#/, "") || "/dashboard";
    const parts = raw.split("/").filter(Boolean).map((p) => decodeURIComponent(p));
    if (!parts.length) return { name: "dashboard", parts };
    if (parts[0] === "dashboard") return { name: "dashboard", parts };
    if (parts[0] === "cases") return { name: "cases", parts };
    if (parts[0] === "achievements") return { name: "achievements", parts };
    if (parts[0] === "brief" && parts[1]) return { name: "brief", caseId: parts[1], parts };
    if (parts[0] === "case" && parts[1]) return { name: "workspace", caseId: parts[1], tab: parts[2] || "overview", parts };
    if (parts[0] === "results" && parts[1]) return { name: "results", caseId: parts[1], parts };
    return { name: "notfound", parts };
  }

  /* ---------- chrome ---------- */

  function syncChrome() {
    const all = Cases().all();
    const count = document.getElementById("nav-case-count");
    if (count) count.textContent = String(all.length);
    if (window.CaseMind.Assistant) window.CaseMind.Assistant.syncModeLabels();

    const r = state.route || parseRoute();
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const key = link.getAttribute("data-nav");
      const active = (key === "dashboard" && r.name === "dashboard")
        || (key === "cases" && ["cases", "brief", "workspace", "results"].includes(r.name))
        || (key === "achievements" && r.name === "achievements");
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    updateSidebarCurrent(r);
    updateBreadcrumb(r);
    updateTitle(r);
  }

  function updateSidebarCurrent(r) {
    const host = document.getElementById("sidebar-current");
    if (!host) return;
    const progress = Storage().allProgress();
    const active = Storage().getActiveCase();
    const activeCase = active ? Cases().byId(active.caseId) : null;
    let c = activeCase;
    let label = "ACTIVE INVESTIGATION";

    if (!c) {
      const next = Cases().all().find((x) => !progress[x.id] || progress[x.id].status === "failed");
      if (next) {
        c = next;
        label = "NEXT RECOMMENDED";
      }
    }

    if (!c) {
      host.innerHTML = `<div class="sidebar-case-card">
        <div class="sidebar-case-label"><span>ARCHIVE</span><span>CLOSED</span></div>
        <div class="sidebar-case-title">All files reviewed</div>
        <div class="sidebar-case-meta">Every solved case remains available to replay.</div>
        <div class="sidebar-case-actions">
          <a href="#/cases">Open archive</a>
          <a href="#/achievements">Record</a>
        </div>
      </div>`;
      return;
    }

    const p = progress[c.id];
    const pr = Scoring().progressFor(c, p);
    const closed = Boolean(p && (p.status === "solved" || p.status === "failed"));
    const action = closed ? "Review" : p && pr.percent > 0 ? "Resume" : "Start";
    host.innerHTML = `<div class="sidebar-case-card" style="--case-accent:${escape(c.accent)}">
      <div class="sidebar-case-label"><span>${label}</span><span>${escape(c.number)}</span></div>
      <div class="sidebar-case-title">${escape(c.title)}</div>
      <div class="sidebar-case-meta">${escape(c.difficultyLabel)} · ${pr.percent}% complete</div>
      <div class="sidebar-progress"><span style="width:${pr.percent}%"></span></div>
      <div class="sidebar-case-actions">
        <a href="#/case/${escape(c.id)}/overview">${action}</a>
        <a href="#/brief/${escape(c.id)}">Brief</a>
      </div>
    </div>`;
  }

  function updateBreadcrumb(r) {
    const el = document.getElementById("breadcrumb");
    if (!el) return;
    if (r.name === "dashboard") {
      el.innerHTML = `<span>CASEMIND</span><i>/</i><strong>INVESTIGATION DESK</strong>`;
    } else if (r.name === "cases") {
      el.innerHTML = `<span>CASEMIND</span><i>/</i><strong>CASE ARCHIVE</strong>`;
    } else if (r.name === "achievements") {
      el.innerHTML = `<span>CASEMIND</span><i>/</i><strong>DETECTIVE RECORD</strong>`;
    } else if (r.caseId) {
      const c = Cases().byId(r.caseId);
      const label = r.name === "brief" ? "BRIEFING" : r.name === "results" ? "VERDICT" : String(r.tab || "overview").toUpperCase();
      el.innerHTML = `<span>CASEMIND</span><i>/</i><strong>CASE ${c ? escape(c.number) : "—"}</strong><i>/</i><span>${escape(label)}</span>`;
    } else {
      el.innerHTML = `<span>CASEMIND</span><i>/</i><strong>NOT FOUND</strong>`;
    }
  }

  function updateTitle(r) {
    if (r.name === "dashboard") document.title = "CaseMind — Detective Investigation Platform";
    else if (r.name === "cases") document.title = "Case Archive — CaseMind";
    else if (r.name === "achievements") document.title = "Detective Record — CaseMind";
    else if (r.caseId) {
      const c = Cases().byId(r.caseId);
      const suffix = r.name === "brief" ? "Briefing" : r.name === "results" ? "Verdict" : String(r.tab || "Overview");
      document.title = c ? `${c.title} · ${suffix} — CaseMind` : "Case — CaseMind";
    } else document.title = "Not found — CaseMind";
  }

  /* ---------- shared case card ---------- */

  function caseStatus(c) {
    return window.CaseMind.Investigation.statusOf(c);
  }

  function renderCaseCard(c) {
    const status = caseStatus(c);
    const p = Storage().getCase(c.id);
    const pr = Scoring().progressFor(c, p);
    return `<a class="case-card" href="#/brief/${escape(c.id)}" style="--card-accent:${escape(c.accent)}">
      <div class="case-visual">
        <span class="case-number">CASE ${escape(c.number)}</span>
        <span class="case-status-pin ${status.key}"><i></i>${escape(status.label)}</span>
        <span class="case-motif">${Cases().motif(c.motif)}</span>
      </div>
      <div class="case-body">
        <div class="case-body-top">
          <span class="badge ${escape(c.difficultyClass)}">${escape(c.difficultyLabel)}</span>
          <span class="mono" style="font-size:7px;color:var(--faint);letter-spacing:.08em">${escape(c.estimatedMinutes)} MIN</span>
        </div>
        <h3>${escape(c.title)}</h3>
        <p class="case-sub">${escape(c.subtitle)}</p>
        <div class="case-foot">
          <div class="case-foot-meta">
            <span>${UI().icon("flask")} ${c.evidence.length}</span>
            <span>${UI().icon("users")} ${c.suspects.length}</span>
            <span>${UI().icon("clock")} ${escape(c.estimatedMinutes)}m</span>
          </div>
          <span class="case-arrow">${UI().icon("arrow")}</span>
        </div>
        ${p && p.status === "in_progress" ? `<div class="case-progress-mini"><span style="width:${pr.percent}%"></span></div>` : ""}
      </div>
    </a>`;
  }

  /* ---------- dashboard ---------- */

  function renderDashboard() {
    const all = Cases().all();
    const stats = Storage().getStats();
    const rank = Scoring().rankFor(stats.solved);
    const activeProgress = Storage().getActiveCase();
    const activeCase = activeProgress ? Cases().byId(activeProgress.caseId) : null;
    const unplayed = all.find((c) => !Storage().getCase(c.id));
    const heroCase = activeCase || unplayed || all[0];
    const hp = heroCase ? Storage().getCase(heroCase.id) : null;
    const hpr = heroCase ? Scoring().progressFor(heroCase, hp) : { percent: 0 };

    const priority = [];
    if (activeCase) priority.push(activeCase);
    if (heroCase && !priority.includes(heroCase)) priority.push(heroCase);
    all.forEach((c) => { if (!priority.includes(c) && priority.length < 6) priority.push(c); });
    const featured = priority.slice(0, 3);

    const achievements = Scoring().getAchievements().slice(0, 4);
    const unlocked = Storage().getAchievements();
    const now = new Date();
    const dateLine = now.toLocaleDateString(undefined, { weekday: "short", day: "2-digit", month: "short", year: "numeric" });

    view.innerHTML = `<div class="dash-head">
        <div>
          <div class="page-kicker">INVESTIGATION DESK · SECURE SESSION</div>
          <h1 class="page-title" style="margin-top:7px">Good ${now.getHours() < 12 ? "morning" : now.getHours() < 18 ? "afternoon" : "evening"}, Detective.</h1>
          <p class="page-subtitle">${stats.inProgress ? `${stats.inProgress} case${stats.inProgress === 1 ? "" : "s"} open. ${stats.solved} closed. The archive is waiting.` : "The archive holds ten fictional cases. Choose a brief, follow the evidence, and make the accusation."}</p>
        </div>
        <div class="dash-head-right">
          <div class="dash-date">CASE CLOCK<strong>${escape(dateLine)}</strong><span>LOCAL SESSION</span></div>
          <div class="rank-chip">
            ${UI().icon("shield")}
            <span><small>DETECTIVE RANK</small><strong>${escape(rank.name)}</strong></span>
          </div>
        </div>
      </div>

      ${heroCase ? `<section class="desk-hero" style="--case-accent:${escape(heroCase.accent)}">
        <div class="hero-copy">
          <div class="hero-case-line">
            <span class="hero-live">${activeCase ? "INVESTIGATION OPEN" : "RECOMMENDED FILE"}</span>
            <span>·</span><span>CASE ${escape(heroCase.number)}</span><span>·</span><span>${escape(heroCase.difficultyLabel)}</span>
          </div>
          <h1>${escape(heroCase.title)}</h1>
          <p>${escape(heroCase.subtitle)}</p>
          <div class="hero-meta">
            <span class="badge ${escape(heroCase.difficultyClass)}">${escape(heroCase.difficultyLabel)}</span>
            <span class="badge badge-neutral">${UI().icon("clock")} ${escape(heroCase.estimatedMinutes)} min</span>
            <span class="badge badge-neutral">${UI().icon("pin")} ${escape(heroCase.location)}</span>
          </div>
          ${activeCase ? `<div class="hero-progress">
            <div class="hero-progress-top"><span>Case file progress</span><strong>${hpr.percent}%</strong></div>
            <div class="hero-progress-bar"><span style="width:${hpr.percent}%"></span></div>
          </div>` : ""}
          <div class="hero-actions">
            ${activeCase
              ? `<a class="btn btn-primary" href="#/case/${escape(heroCase.id)}/overview">${UI().icon("play")} Resume investigation</a>`
              : `<button class="btn btn-primary" type="button" data-start-case="${escape(heroCase.id)}">${UI().icon("play")} Start case ${escape(heroCase.number)}</button>`}
            <a class="btn btn-ghost" href="#/brief/${escape(heroCase.id)}">${UI().icon("file")} Read briefing</a>
            <button class="btn btn-ghost" type="button" data-open-morgan>${UI().icon("chat")} Ask MORGAN</button>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <span class="motif-large">${Cases().motif(heroCase.motif)}</span>
          <span class="scan-line"></span>
          <div class="hero-art-label">CASE FILE ${escape(heroCase.number)}<br><strong>${escape(heroCase.victim && heroCase.victim.label ? heroCase.victim.label.toUpperCase() : "OPEN INVESTIGATION")}</strong><br>${escape(heroCase.timeWindow)}</div>
        </div>
      </section>` : ""}

      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-top"><span>Cases closed</span>${UI().icon("folder")}</div>
          <div class="stat-value">${stats.solved}<small>/ ${all.length}</small></div>
          <div class="stat-foot">${stats.failed ? `${stats.failed} failed accusation${stats.failed === 1 ? "" : "s"}` : "No failed accusations"}</div>
        </div>
        <div class="stat-card">
          <div class="stat-top"><span>Accusation accuracy</span>${UI().icon("scale")}</div>
          <div class="stat-value">${stats.accuracy}<small>%</small></div>
          <div class="stat-foot">${stats.completed ? `Across ${stats.completed} verdict${stats.completed === 1 ? "" : "s"}` : "No verdicts submitted yet"}</div>
        </div>
        <div class="stat-card">
          <div class="stat-top"><span>Evidence logged</span>${UI().icon("flask")}</div>
          <div class="stat-value">${stats.evidenceSeen}</div>
          <div class="stat-foot">${stats.contradictionsFound} contradictions recorded</div>
        </div>
        <div class="stat-card">
          <div class="stat-top"><span>Best verdict</span>${UI().icon("trophy")}</div>
          <div class="stat-value">${stats.bestScore}<small>/ 100</small></div>
          <div class="stat-foot"><span class="up">${escape(rank.name)}</span> · ${stats.achievements} achievements</div>
        </div>
      </div>

      <div class="dash-grid">
        <div class="dash-main">
          <div class="section-head">
            <div><h2>From the archive</h2><p>Three files selected for your current record.</p></div>
            <a class="section-link" href="#/cases">All case files ${UI().icon("arrow")}</a>
          </div>
          <div class="case-grid">${featured.map(renderCaseCard).join("")}</div>
          <div class="how-strip">
            <div class="how-step"><span>01 · READ</span><h3>Take the brief</h3><p>Scene, victim, suspects, and the window of opportunity. No solution is shown.</p></div>
            <div class="how-step"><span>02 · TEST</span><h3>Break the alibis</h3><p>Log every exhibit, interview every subject, compare the exact timestamps.</p></div>
            <div class="how-step"><span>03 · ACCUSE</span><h3>Submit the charge</h3><p>Culprit, motive, method, evidence. Then, and only then, the truth is unsealed.</p></div>
          </div>
        </div>
        <aside class="dash-side">
          <div class="side-panel">
            <div class="side-panel-head"><strong>Achievements</strong><span>${Object.keys(unlocked).length} / ${Scoring().getAchievements().length}</span></div>
            <div class="side-panel-body">
              <div class="achievement-strip">
                ${achievements.map((a) => `<a class="achievement-mini${unlocked[a.id] ? " unlocked" : ""}" href="#/achievements">
                  <span class="achievement-icon">${UI().icon(achievementIcon(a.icon))}</span>
                  <span><strong>${escape(a.name)}</strong><small>${escape(a.description.length > 42 ? `${a.description.slice(0, 42)}…` : a.description)}</small></span>
                  <span class="lock-mark">${UI().icon(unlocked[a.id] ? "check" : "lock")}</span>
                </a>`).join("")}
              </div>
            </div>
          </div>

          <div class="tip-card">
            <div class="eyebrow">MORGAN · FIELD ADVICE</div>
            <h3>Do not trust a clean alibi.</h3>
            <p>A clean alibi usually has a witness. A perfect alibi usually has a timestamp. Those are not the same thing.</p>
            <button class="btn btn-ghost btn-sm" type="button" data-open-morgan>${UI().icon("chat")} Consult MORGAN</button>
          </div>

          <div class="side-panel">
            <div class="side-panel-head"><strong>Reading room</strong><span>Gutendex</span></div>
            <div class="side-panel-body">
              <div class="reading-room" id="reading-room-list">
                <div class="book-row"><span class="book-spine"></span><div><strong>Loading catalogue…</strong><small>Public-domain detective fiction</small></div></div>
              </div>
              <div class="reading-source" id="reading-source">Optional public API</div>
            </div>
          </div>
        </aside>
      </div>`;

    loadReadingRoom();
  }

  function achievementIcon(name) {
    const map = { badge: "shield", eye: "eye", book: "book", flask: "flask", chat: "chat", puzzle: "puzzle", star: "star", crown: "crown" };
    return map[name] || "trophy";
  }

  async function loadReadingRoom() {
    const host = document.getElementById("reading-room-list");
    if (!host) return;
    const source = document.getElementById("reading-source");
    const settings = Storage().getSettings();
    let result;
    if (settings.readingRoom === false) {
      result = { books: window.CaseMind.API.FALLBACK_BOOKS, online: false };
    } else {
      result = await window.CaseMind.API.getBooks();
    }
    if (!document.body.contains(host)) return;
    host.innerHTML = result.books.slice(0, 4).map((book) => `<div class="book-row">
      <span class="book-spine"></span>
      <div style="min-width:0"><strong>${escape(book.title)}</strong><small>${escape(book.author)}</small></div>
      <a href="${escape(book.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escape(book.title)}">${UI().icon("external")}</a>
    </div>`).join("");
    if (source) {
      source.className = `reading-source${result.online ? " online" : ""}`;
      source.textContent = result.online ? "● GUTENDEX · PUBLIC CATALOGUE ONLINE" : "○ OFFLINE SELECTION · PROJECT GUTENBERG";
    }
  }

  /* ---------- archive ---------- */

  function matchesArchive(c) {
    const q = state.archiveQuery.trim().toLowerCase();
    if (q) {
      const haystack = [c.title, c.subtitle, c.location, c.difficultyLabel, c.victim && c.victim.name].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    const filter = state.archiveFilter;
    if (filter === "all") return true;
    if (["easy", "medium", "hard"].includes(filter)) return c.difficulty === filter;
    const p = Storage().getCase(c.id);
    if (filter === "solved") return p && p.status === "solved";
    if (filter === "active") return p && p.status === "in_progress";
    if (filter === "new") return !p;
    return true;
  }

  function archiveCardsHtml() {
    const cases = Cases().all().filter(matchesArchive);
    if (!cases.length) {
      return `<div class="empty-state">${UI().icon("search")}<h3>No files match this filter</h3><p>Try a different difficulty, status, or search term.</p></div>`;
    }
    return cases.map(renderCaseCard).join("");
  }

  function renderArchive() {
    const all = Cases().all();
    const filters = [
      { id: "all", label: "All" },
      { id: "easy", label: "Rookie" },
      { id: "medium", label: "Detective" },
      { id: "hard", label: "Inspector" },
      { id: "active", label: "Active" },
      { id: "solved", label: "Solved" }
    ];
    const matching = all.filter(matchesArchive).length;

    view.innerHTML = `<div class="archive-head">
        <div>
          <div class="page-kicker">CASE ARCHIVE · ${all.length} FILES</div>
          <h1 class="page-title" style="margin-top:7px">Choose a file.</h1>
          <p class="page-subtitle">Three difficulty tiers, ten self-contained fictional investigations. Each solution is sealed until you submit a final accusation.</p>
        </div>
        <div class="archive-tools">
          <div class="filter-group" role="group" aria-label="Filter cases">
            ${filters.map((f) => `<button class="filter-btn${state.archiveFilter === f.id ? " active" : ""}" type="button" data-archive-filter="${f.id}">${f.label}</button>`).join("")}
          </div>
          <div class="search-wrap">
            ${UI().icon("search")}
            <input class="search-input" type="search" id="archive-search" placeholder="Search cases, places, victims…" value="${escape(state.archiveQuery)}" aria-label="Search cases">
          </div>
        </div>
      </div>
      <div class="archive-meta">
        <span id="archive-count">${matching} file${matching === 1 ? "" : "s"} shown</span>
        <span>ALL SOLUTIONS SEALED</span>
      </div>
      <div class="case-grid" id="archive-grid">${archiveCardsHtml()}</div>`;

    view.querySelectorAll("[data-archive-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.archiveFilter = btn.getAttribute("data-archive-filter");
        renderArchive();
        const search = document.getElementById("archive-search");
        if (search) search.focus({ preventScroll: true });
      });
    });
    const search = document.getElementById("archive-search");
    if (search) {
      search.addEventListener("input", UI().debounce(() => {
        state.archiveQuery = search.value;
        const grid = document.getElementById("archive-grid");
        const count = document.getElementById("archive-count");
        if (grid) grid.innerHTML = archiveCardsHtml();
        if (count) {
          const n = Cases().all().filter(matchesArchive).length;
          count.textContent = `${n} file${n === 1 ? "" : "s"} shown`;
        }
      }, 140));
    }
  }

  /* ---------- case brief ---------- */

  function renderBrief(c) {
    const p = Storage().getCase(c.id);
    const complete = p && (p.status === "solved" || p.status === "failed");
    const pr = Scoring().progressFor(c, p);
    view.innerHTML = `<div class="brief-page" style="--case-accent:${escape(c.accent)}">
      <section class="brief-hero">
        <div class="brief-motif" aria-hidden="true">${Cases().motif(c.motif)}</div>
        <div class="brief-copy">
          <div class="brief-label">
            <span>CASE ${escape(c.number)}</span><i>·</i><strong>${escape(c.difficultyLabel)}</strong><i>·</i>
            <span>${escape(c.estimatedMinutes)} MIN</span><i>·</i><span>${escape(c.date)}</span>
          </div>
          <h1>${escape(c.title)}</h1>
          <p class="brief-sub">${escape(c.subtitle)}</p>
          <div class="hero-meta">
            <span class="badge ${escape(c.difficultyClass)}">${escape(c.difficultyLabel)}</span>
            <span class="badge badge-neutral">${UI().icon("pin")} ${escape(c.location)}</span>
            <span class="badge badge-neutral">${UI().icon("clock")} ${escape(c.timeWindow)}</span>
          </div>
          <div class="brief-actions">
            ${complete
              ? `<a class="btn btn-primary" href="#/results/${escape(c.id)}">${UI().icon("gavel")} Review verdict</a>
                 <a class="btn btn-ghost" href="#/case/${escape(c.id)}/overview">${UI().icon("folder")} Open case file</a>`
              : p && p.status === "in_progress"
                ? `<a class="btn btn-primary" href="#/case/${escape(c.id)}/overview">${UI().icon("play")} Resume investigation · ${pr.percent}%</a>`
                : `<button class="btn btn-primary" type="button" data-start-case="${escape(c.id)}">${UI().icon("play")} Begin investigation</button>`}
            <button class="btn btn-ghost" type="button" data-open-morgan>${UI().icon("chat")} Ask MORGAN</button>
            <span class="sealed-note">${UI().icon("lock")} Solution sealed until accusation</span>
          </div>
        </div>
      </section>

      <div class="brief-grid">
        <div class="brief-main">
          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("file")} Briefing</h2><span class="panel-kicker">READ BEFORE ENTERING</span></div>
            <div class="panel-body">
              <p class="brief-description">${escape(c.description)}</p>
              <p>${escape(c.briefing)}</p>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("pin")} The scene</h2><span class="panel-kicker">INITIAL OBSERVATIONS</span></div>
            <div class="panel-body">
              <p>${escape(c.scene.summary)}</p>
              <div class="scene-observations" style="margin-top:14px">
                ${(c.scene.initialObservations || []).map((o) => `<span>${escape(o)}</span>`).join("")}
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("scale")} Objectives</h2></div>
            <div class="panel-body">
              <ul class="brief-objectives">
                <li>Examine all ${c.evidence.length} exhibits and record what each one proves.</li>
                <li>Interview all ${c.suspects.length} persons of interest and test every alibi.</li>
                <li>Read the ${c.witnesses.length} witness statements for independent corroboration.</li>
                <li>Surface the documented contradictions before naming a charge.</li>
                <li>Submit a culprit, motive, method, and up to three supporting exhibits.</li>
              </ul>
            </div>
          </section>
        </div>

        <aside class="brief-side">
          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("clip")} Case data</h2></div>
            <div class="panel-body">
              <div class="meta-list">
                <div class="meta-row"><span>File</span><span>Case ${escape(c.number)}</span></div>
                <div class="meta-row"><span>Difficulty</span><span>${escape(c.difficultyLabel)}</span></div>
                <div class="meta-row"><span>Date</span><span>${escape(c.date)}</span></div>
                <div class="meta-row"><span>Window</span><span>${escape(c.timeWindow)}</span></div>
                <div class="meta-row"><span>Location</span><span>${escape(c.location)}</span></div>
                <div class="meta-row"><span>Est. time</span><span>${escape(c.estimatedMinutes)} minutes</span></div>
                <div class="meta-row"><span>Evidence</span><span>${c.evidence.length} exhibits</span></div>
                <div class="meta-row"><span>Subjects</span><span>${c.suspects.length} persons</span></div>
              </div>
            </div>
          </section>

          <section class="panel victim-card">
            <div class="victim-banner">
              <div class="victim-avatar">${escape(UI().initials(c.victim.name || "?"))}</div>
              <h3>${escape(c.victim.name)}</h3>
              <p>${escape(c.victim.label)}</p>
              <div class="victim-tags"><span class="badge badge-neutral">${escape(c.victim.status)}</span></div>
            </div>
            <div class="victim-info">
              <div class="meta-row"><span>Age</span><span>${escape(c.victim.age)}</span></div>
              <div class="meta-row"><span>Occupation</span><span>${escape(c.victim.occupation)}</span></div>
            </div>
          </section>

          <div class="tip-card">
            <div class="eyebrow">HOW THIS CASE SCORES</div>
            <h3>Culprit 45 · motive 20 · method 20 · evidence 15</h3>
            <p>Each hint costs 5 points, capped at 15. Achievements are tracked separately and persist across replays.</p>
          </div>
        </aside>
      </div>
    </div>`;
  }

  /* ---------- achievements ---------- */

  function renderAchievements() {
    const stats = Storage().getStats();
    const rank = Scoring().rankFor(stats.solved);
    const unlocked = Storage().getAchievements();
    const all = Scoring().getAchievements();
    const total = Cases().all().length;
    const pct = total ? Math.round((stats.solved / total) * 100) : 0;

    view.innerHTML = `<div class="achievements-head">
        <div>
          <div class="page-kicker">DETECTIVE RECORD · PERSISTENT</div>
          <h1 class="page-title" style="margin-top:7px">The record so far.</h1>
          <p class="page-subtitle">Achievements, ranks and case history are stored in this browser. Clearing site data resets them.</p>
        </div>
        <div class="rank-summary">
          <div class="rank-ring" style="--p:${pct}">${UI().icon("shield")}</div>
          <div><small>DETECTIVE RANK</small><strong>${escape(rank.name)}</strong><p>${escape(rank.note)}</p></div>
        </div>
      </div>

      <div class="panel" style="margin-bottom:16px">
        <div class="achievement-progress-wide">
          <div>
            <div class="big-score">${stats.solved}<small> / ${total}</small></div>
            <p>Case files solved</p>
          </div>
          <div>
            <div class="progress-track"><span style="width:${pct}%"></span></div>
            <div class="progress-track-label"><span>${pct}% COMPLETE</span><span>${stats.achievements} OF ${all.length} ACHIEVEMENTS</span></div>
            <p style="color:var(--faint);font-size:9.5px;margin-top:9px">Accuracy ${stats.accuracy}% · best verdict ${stats.bestScore}/100 · ${stats.evidenceSeen} exhibits logged · ${stats.questionsAsked} questions asked</p>
          </div>
        </div>
      </div>

      <div class="achievement-grid">
        ${all.map((a) => {
          const rec = unlocked[a.id];
          return `<article class="achievement-card${rec ? " unlocked" : ""}">
            <span class="achievement-state">${rec ? "UNLOCKED" : "LOCKED"}</span>
            <span class="achievement-icon">${UI().icon(achievementIcon(a.icon))}</span>
            <h3>${escape(a.name)}</h3>
            <p>${escape(a.description)}</p>
            ${rec ? `<div class="achievement-date">EARNED ${escape(UI().formatDateTime(rec.unlockedAt).toUpperCase())}</div>` : ""}
          </article>`;
        }).join("")}
      </div>`;
  }

  /* ---------- settings ---------- */

  function openSettings() {
    if (state.settingsOpen) return;
    const s = Storage().getSettings();
    const key = Storage().getLiveKey();
    state.settingsOpen = true;
    UI().openModal({
      size: "wide",
      kicker: "LOCAL SETTINGS",
      title: "Workspace settings",
      subtitle: "Everything here is stored in this browser unless noted.",
      flush: true,
      body: `<div style="padding:20px">
        <section class="settings-section">
          <div class="settings-section-head">
            <div><h3>MORGAN assistant</h3><p>Simulation is the default. Live AI is optional and never required to play.</p></div>
            <span class="badge badge-info">${s.assistantMode === "live" ? "LIVE" : "SIMULATED"}</span>
          </div>
          <div class="setting-row">
            <div><strong>Assistant mode</strong><small>Simulated uses the case's local rule set. Live AI sends a redacted case record to an external endpoint.</small></div>
            <div class="segmented" aria-label="Assistant mode">
              <button type="button" data-assistant-mode="simulated" class="${s.assistantMode !== "live" ? "active" : ""}">Simulated</button>
              <button type="button" data-assistant-mode="live" class="${s.assistantMode === "live" ? "active" : ""}">Live AI</button>
            </div>
          </div>
          <div class="ai-status simulated" id="assistant-mode-status">
            ${UI().icon(s.assistantMode === "live" ? "bolt" : "shield")}
            <span>${s.assistantMode === "live" ? "Live AI selected · a live endpoint will be contacted." : "Simulated assistant active · no external AI calls."}</span>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section-head">
            <div><h3>Live AI endpoint</h3><p>OpenAI-compatible chat endpoint. The default Pollinations endpoint works without a key.</p></div>
          </div>
          <div class="field-group">
            <label for="live-endpoint">Endpoint URL</label>
            <input class="field-input" id="live-endpoint" type="url" value="${escape(s.liveEndpoint)}" placeholder="https://text.pollinations.ai/openai" autocomplete="off" spellcheck="false">
            <div class="field-hint">POST body uses { model, messages }. Leave the default for a keyless public demo.</div>
          </div>
          <div class="form-row">
            <div class="field-group">
              <label for="live-model">Model</label>
              <input class="field-input" id="live-model" type="text" value="${escape(s.liveModel)}" placeholder="openai-fast" autocomplete="off" spellcheck="false">
            </div>
            <div class="field-group">
              <label for="live-key">API key (optional)</label>
              <input class="field-input" id="live-key" type="password" value="${escape(key)}" placeholder="Only for custom endpoints" autocomplete="off">
            </div>
          </div>
          <label class="toggle" style="margin-bottom:10px">
            <input type="checkbox" id="remember-key" ${s.rememberKey ? "checked" : ""}>
            <span>Remember key in localStorage (otherwise session only)</span>
          </label>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <button class="btn btn-ghost btn-sm" type="button" data-test-live>${UI().icon("bolt")} Test connection</button>
            <span class="ai-status simulated" id="live-test-status" style="margin-top:0">${UI().icon("info")} Not tested</span>
          </div>
          <div class="privacy-note">${UI().icon("shield")} The solution object is never included in live prompts. Case titles, scene facts, suspects, alibis and logged evidence may be sent to the endpoint you choose.</div>
        </section>

        <section class="settings-section">
          <div class="settings-section-head">
            <div><h3>Reading room</h3><p>Optional public catalogue of detective fiction.</p></div>
          </div>
          <div class="setting-row">
            <div><strong>Use Gutendex online</strong><small>Fetches four public-domain titles. Falls back to a local selection if the API is unavailable.</small></div>
            <label class="toggle"><input type="checkbox" id="reading-room-toggle" ${s.readingRoom === false ? "" : "checked"}><span>Enabled</span></label>
          </div>
        </section>

        <section class="settings-section">
          <div class="settings-section-head">
            <div><h3>Local data</h3><p>Progress is stored under one localStorage key on this device.</p></div>
            <span class="badge ${Storage().isStorageAvailable() ? "badge-success" : "badge-warning"}">${Storage().isStorageAvailable() ? "STORAGE READY" : "MEMORY ONLY"}</span>
          </div>
          <div class="setting-row">
            <div><strong>Export investigation record</strong><small>Download all progress, achievements and settings as JSON.</small></div>
            <button class="btn btn-ghost btn-sm" type="button" data-export>${UI().icon("download")} Export JSON</button>
          </div>
          <div class="setting-row">
            <div><strong>Reset all progress</strong><small>Removes cases, notes, achievements, hints and the remembered API key. Cannot be undone.</small></div>
            <button class="btn btn-danger btn-sm" type="button" data-reset-all>${UI().icon("trash")} Reset everything</button>
          </div>
        </section>
      </div>`,
      footer: `<span class="mono" style="font-size:7px;color:var(--dim);margin-right:auto">CASEMIND v2.6 · STATIC LOCAL BUILD</span>
        <button class="btn btn-ghost btn-sm" type="button" data-ui-close>Cancel</button>
        <button class="btn btn-primary btn-sm" type="button" data-save-settings>${UI().icon("check")} Save settings</button>`,
      onMount: (modal, close) => {
        let mode = s.assistantMode === "live" ? "live" : "simulated";
        const status = modal.querySelector("#assistant-mode-status");
        const setMode = (next) => {
          mode = next;
          modal.querySelectorAll("[data-assistant-mode]").forEach((btn) => btn.classList.toggle("active", btn.getAttribute("data-assistant-mode") === next));
          if (status) {
            status.className = `ai-status ${next === "live" ? "live" : "simulated"}`;
            status.innerHTML = `${UI().icon(next === "live" ? "bolt" : "shield")}<span>${next === "live" ? "Live AI selected · a live endpoint will be contacted." : "Simulated assistant active · no external AI calls."}</span>`;
          }
        };
        modal.querySelectorAll("[data-assistant-mode]").forEach((btn) => {
          btn.addEventListener("click", () => setMode(btn.getAttribute("data-assistant-mode")));
        });

        const testBtn = modal.querySelector("[data-test-live]");
        testBtn.addEventListener("click", async () => {
          const endpoint = modal.querySelector("#live-endpoint").value.trim();
          const model = modal.querySelector("#live-model").value.trim();
          const keyVal = modal.querySelector("#live-key").value.trim();
          const statusEl = modal.querySelector("#live-test-status");
          if (!endpoint) {
            statusEl.className = "ai-status error";
            statusEl.innerHTML = `${UI().icon("alert")} <span>Enter an endpoint URL first.</span>`;
            return;
          }
          testBtn.disabled = true;
          statusEl.className = "ai-status simulated";
          statusEl.innerHTML = `${UI().icon("bolt")} <span>Testing endpoint…</span>`;
          try {
            const reply = await window.CaseMind.API.testConnection({ liveEndpoint: endpoint, liveModel: model, liveKey: keyVal });
            statusEl.className = "ai-status live";
            statusEl.innerHTML = `${UI().icon("check")} <span>Connected · ${escape(String(reply).slice(0, 70))}</span>`;
          } catch (err) {
            statusEl.className = "ai-status error";
            statusEl.innerHTML = `${UI().icon("alert")} <span>${escape(err && err.message ? err.message : "Connection failed.")}</span>`;
          } finally {
            testBtn.disabled = false;
          }
        });

        modal.querySelector("[data-save-settings]").addEventListener("click", () => {
          const endpoint = modal.querySelector("#live-endpoint").value.trim();
          const model = modal.querySelector("#live-model").value.trim();
          const keyVal = modal.querySelector("#live-key").value.trim();
          const remember = modal.querySelector("#remember-key").checked;
          const readingRoom = modal.querySelector("#reading-room-toggle").checked;
          if (!endpoint) {
            UI().toast("A live endpoint URL is required if you enable live mode.", "error");
            return;
          }
          Storage().saveSettings({
            assistantMode: mode,
            liveEndpoint: endpoint,
            liveModel: model || "openai-fast",
            rememberKey: remember,
            readingRoom
          });
          Storage().setLiveKey(keyVal);
          if (window.CaseMind.Assistant) {
            window.CaseMind.Assistant.syncModeLabels();
            window.CaseMind.Assistant.refreshCase();
          }
          state.settingsOpen = false;
          close();
          UI().toast(`Settings saved · ${mode === "live" ? "live AI" : "simulated"} assistant.`, "success");
          syncChrome();
        });

        modal.querySelector("[data-export]").addEventListener("click", () => {
          const date = new Date().toISOString().slice(0, 10);
          UI().download(`casemind-record-${date}.json`, Storage().exportData(), "application/json");
          UI().toast("Investigation record exported.", "info");
        });

        modal.querySelector("[data-reset-all]").addEventListener("click", () => {
          UI().confirm({
            kicker: "RESET ALL DATA",
            title: "Erase the entire record?",
            message: "Every case, note, hint, achievement and saved setting will be deleted from this browser. This cannot be undone.",
            confirmLabel: "Erase everything",
            danger: true
          }).then((yes) => {
            if (!yes) return;
            Storage().resetAll();
            if (window.CaseMind.Assistant) {
              window.CaseMind.Assistant.setCase(null);
              window.CaseMind.Assistant.syncModeLabels();
            }
            if (window.CaseMind.Interrogation) window.CaseMind.Interrogation.resetSelection();
            state.settingsOpen = false;
            close();
            UI().toast("All local data erased. A fresh record.", "info");
            navigate("#/dashboard");
            syncChrome();
          });
        });
      },
      onClose: () => { state.settingsOpen = false; }
    });
  }

  /* ---------- not found ---------- */

  function renderNotFound() {
    view.innerHTML = `<div class="results-page" style="padding-top:40px">
      <div class="empty-state">
        ${UI().icon("search")}
        <h3>That case file is not in the archive.</h3>
        <p>The link may be incomplete, or the file was never registered. Return to the archive and choose a case.</p>
        <div style="margin-top:18px"><a class="btn btn-primary btn-sm" href="#/cases">${UI().icon("folder")} Back to case archive</a></div>
      </div>
    </div>`;
    state.route = { name: "notfound" };
    syncChrome();
  }

  /* ---------- routing ---------- */

  function route() {
    if (!state.booted) return;
    const r = parseRoute();
    state.route = r;
    state.settingsOpen = false;
    closeMobileNav();

    const c = r.caseId ? Cases().byId(r.caseId) : null;
    if (r.caseId && !c) {
      renderNotFound();
      window.scrollTo(0, 0);
      return;
    }

    if (r.name === "dashboard") renderDashboard();
    else if (r.name === "cases") renderArchive();
    else if (r.name === "achievements") renderAchievements();
    else if (r.name === "brief") renderBrief(c);
    else if (r.name === "workspace") {
      window.CaseMind.Investigation.render(view, c, r.tab);
      if (window.CaseMind.Assistant) window.CaseMind.Assistant.setCase(c.id);
    } else if (r.name === "results") {
      window.CaseMind.Investigation.renderResults(view, c);
    } else renderNotFound();

    syncChrome();
    window.scrollTo(0, 0);
    const main = document.getElementById("view");
    if (main && r.name !== "workspace") main.focus({ preventScroll: true });
  }

  /* ---------- global interactions ---------- */

  function closeMobileNav() {
    const sidebar = document.getElementById("sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    const menu = document.getElementById("mobile-menu");
    if (sidebar) sidebar.classList.remove("open");
    if (scrim) scrim.classList.remove("open");
    if (menu) menu.setAttribute("aria-expanded", "false");
  }

  function startCase(id) {
    const c = Cases().byId(id);
    if (!c) return;
    Storage().startCase(id);
    if (window.CaseMind.Assistant) window.CaseMind.Assistant.setCase(id);
    navigate(`#/case/${id}/overview`);
    UI().toast(`Case ${c.number} opened · ${c.title}`, "info");
  }

  function bindGlobal() {
    const menu = document.getElementById("mobile-menu");
    const sidebar = document.getElementById("sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    if (menu && sidebar && scrim) {
      menu.addEventListener("click", () => {
        const open = sidebar.classList.toggle("open");
        scrim.classList.toggle("open", open);
        menu.setAttribute("aria-expanded", String(open));
      });
      scrim.addEventListener("click", closeMobileNav);
      sidebar.querySelectorAll(".nav-link, .brand").forEach((link) => link.addEventListener("click", closeMobileNav));
    }

    document.querySelectorAll("[data-open-settings]").forEach((btn) => {
      btn.addEventListener("click", openSettings);
    });

    document.addEventListener("click", (event) => {
      const start = event.target.closest("[data-start-case]");
      if (start) {
        startCase(start.getAttribute("data-start-case"));
        return;
      }
      if (event.target.closest("[data-open-morgan]")) {
        const active = Storage().getActiveCase();
        if (window.CaseMind.Assistant) window.CaseMind.Assistant.open(active ? active.caseId : null);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (document.querySelector(".modal-backdrop")) {
        UI().closeModal();
        return;
      }
      if (window.CaseMind.Assistant) window.CaseMind.Assistant.close();
      closeMobileNav();
    });

    window.addEventListener("hashchange", route);
  }

  /* ---------- boot ---------- */

  async function boot() {
    view = document.getElementById("view");
    const bootScreen = document.getElementById("boot-screen");
    const bootStatus = document.getElementById("boot-status");
    const app = document.getElementById("app");

    try {
      if (bootStatus) bootStatus.textContent = "Decrypting case archive…";
      await Cases().load();
      if (bootStatus) bootStatus.textContent = "Preparing investigation desk…";
      if (window.CaseMind.Assistant) window.CaseMind.Assistant.init();
      window.CaseMind.Investigation.bind(view);
      bindGlobal();
      if (app) app.hidden = false;
      state.booted = true;
      if (!window.location.hash) {
        window.history.replaceState(null, "", "#/dashboard");
      }
      route();
      if (window.CaseMind.Assistant) window.CaseMind.Assistant.syncModeLabels();
      setTimeout(() => {
        if (bootScreen) bootScreen.classList.add("is-done");
      }, 420);
    } catch (err) {
      if (bootStatus) bootStatus.textContent = "Case archive unavailable.";
      if (bootScreen) bootScreen.classList.add("is-done");
      if (app) app.hidden = false;
      state.booted = true;
      view.innerHTML = `<div class="empty-state" style="margin-top:60px">
        ${UI().icon("alert")}
        <h3>The case archive could not be loaded.</h3>
        <p>${escape(Cases().getError() || (err && err.message) || "Unknown loading error.")}</p>
        <div style="margin-top:18px"><button class="btn btn-primary btn-sm" type="button" onclick="location.reload()">${UI().icon("refresh")} Retry</button></div>
      </div>`;
      if (window.CaseMind.Assistant) window.CaseMind.Assistant.init();
    }
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.App = {
    navigate,
    route,
    syncChrome,
    openSettings,
    startCase,
    renderCaseCard,
    state
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
