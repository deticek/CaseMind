/* CaseMind — case workspace, evidence, analysis, accusation and verdict */
(function () {
  "use strict";

  const UI = () => window.CaseMind.UI;
  const Storage = () => window.CaseMind.Storage;
  const Scoring = () => window.CaseMind.Scoring;
  const Cases = () => window.CaseMind.Cases;

  const TABS = [
    { id: "overview", label: "Overview", icon: "dashboard" },
    { id: "evidence", label: "Evidence", icon: "flask" },
    { id: "people", label: "People", icon: "users" },
    { id: "timeline", label: "Timeline", icon: "clock" },
    { id: "interrogation", label: "Interrogation", icon: "chat" },
    { id: "analysis", label: "Analysis", icon: "search" },
    { id: "notes", label: "Notes", icon: "edit" }
  ];

  const CATEGORY_ICONS = {
    digital: "bolt",
    forensic: "fingerprint",
    documentary: "file",
    physical: "flask",
    testimonial: "chat",
    financial: "scale",
    medical: "shield"
  };

  const state = {
    current: null,
    evidenceFilter: "all",
    analysis: {},
    timelineOpen: null,
    notesTimer: null
  };

  let bound = false;

  function escape(value) {
    return UI().escapeHtml(value);
  }

  function progressFor(c) {
    const p = Storage().getCase(c.id) || Storage().startCase(c.id);
    return { p, pr: Scoring().progressFor(c, p) };
  }

  function statusOf(c) {
    const p = Storage().getCase(c.id);
    if (!p) return { key: "new", label: "Unopened" };
    if (p.status === "solved") return { key: "solved", label: "Solved" };
    if (p.status === "failed") return { key: "closed", label: "Closed" };
    return { key: "active", label: "Active" };
  }

  function categoryIcon(category) {
    const key = String(category || "").toLowerCase();
    return CATEGORY_ICONS[key] || "file";
  }

  function suspectById(c, id) {
    return (c.suspects || []).find((s) => s.id === id) || null;
  }

  function evidenceById(c, id) {
    return (c.evidence || []).find((e) => e.id === id) || null;
  }

  function witnessById(c, id) {
    return (c.witnesses || []).find((w) => w.id === id) || null;
  }

  function scanAchievements() {
    const unlocked = Scoring().checkAchievements();
    unlocked.forEach((achievement) => {
      UI().toast(achievement.description, { type: "achievement", title: `Achievement · ${achievement.name}` });
    });
    return unlocked;
  }

  function notifyProgress() {
    scanAchievements();
    if (window.CaseMind.App && window.CaseMind.App.syncChrome) window.CaseMind.App.syncChrome();
  }

  function updateProgressUI(c) {
    const { p, pr } = progressFor(c);
    const root = document.querySelector(".workspace");
    if (!root) return;
    const bar = root.querySelector("[data-progress-bar]");
    if (bar) bar.style.width = `${pr.percent}%`;
    const copy = root.querySelector("[data-progress-copy]");
    if (copy) copy.innerHTML = `<strong>${pr.percent}%</strong> case file complete`;
    const ring = root.querySelector("[data-progress-ring]");
    if (ring) {
      ring.style.setProperty("--p", String(pr.percent));
      ring.innerHTML = `<span>${pr.percent}<small>%</small></span>`;
    }
    root.querySelectorAll("[data-metric]").forEach((el) => {
      const key = el.getAttribute("data-metric");
      if (key === "evidence") el.textContent = `${pr.seen}/${pr.totalEvidence}`;
      if (key === "questions") el.textContent = `${pr.asked}/${pr.totalQuestions}`;
      if (key === "witnesses") el.textContent = `${pr.read}/${pr.totalWitnesses}`;
      if (key === "contradictions") el.textContent = `${pr.found}/${pr.totalContradictions}`;
      if (key === "hints") el.textContent = String(p.hintsUsed || 0);
    });
    const evidenceCount = root.querySelector('[data-tab-count="evidence"]');
    if (evidenceCount) evidenceCount.textContent = `${pr.seen}/${pr.totalEvidence}`;
    const questionCount = root.querySelector('[data-tab-count="interrogation"]');
    if (questionCount) questionCount.textContent = `${pr.asked}/${pr.totalQuestions}`;
    const leadCount = root.querySelector("[data-lead-count]");
    if (leadCount) leadCount.innerHTML = `<strong>${pr.found}</strong> / ${pr.totalContradictions} recorded`;
    updateAside(c);
    notifyProgress();
  }

  /* ---------- workspace shell ---------- */

  function render(root, c, tab) {
    const safeTab = TABS.some((t) => t.id === tab) ? tab : "overview";
    state.current = { case: c, tab: safeTab };
    if (safeTab !== "analysis") {
      state.timelineOpen = null;
    }
    Storage().startCase(c.id);
    const { p, pr } = progressFor(c);
    root.innerHTML = `<div class="workspace" style="--case-accent:${escape(c.accent)}">
      ${caseHeader(c, p, pr)}
      <nav class="case-tabs" aria-label="Case sections">
        ${TABS.map((t) => tabLink(c, t, safeTab, pr)).join("")}
      </nav>
      <div class="workspace-layout">
        <div class="workspace-main" id="workspace-main">${tabBody(c, p, pr, safeTab)}</div>
        <aside class="workspace-aside" id="workspace-aside">${aside(c, p, pr)}</aside>
      </div>
    </div>`;
    document.documentElement.style.setProperty("--case-accent", c.accent);
    if (safeTab === "interrogation") {
      const el = root.querySelector("#interrogation-root");
      if (el) {
        window.CaseMind.Interrogation.bind(el, c, {
          onProgress: () => updateProgressUI(c)
        });
      }
    }
    if (window.CaseMind.Assistant) window.CaseMind.Assistant.setCase(c.id);
    notifyProgress();
  }

  function caseHeader(c, p, pr) {
    const status = statusOf(c);
    return `<header class="case-header">
      <div class="case-header-main">
        <div class="case-header-left">
          <span class="case-header-emblem">${UI().icon("folder")}</span>
          <div class="case-header-copy">
            <div class="case-header-label">
              <span>CASE ${escape(c.number)}</span>
              <i>·</i>
              <strong>${escape(c.difficultyLabel)}</strong>
              <i>·</i>
              <span>${escape(c.estimatedMinutes)} MIN</span>
              <i>·</i>
              <span>${escape(status.label)}</span>
            </div>
            <h1>${escape(c.title)}</h1>
            <p>${escape(c.location)} · ${escape(c.date)} · window ${escape(c.timeWindow)}</p>
          </div>
        </div>
        <div class="case-header-actions">
          <a class="btn btn-ghost btn-sm" href="#/brief/${escape(c.id)}">${UI().icon("file")} Brief</a>
          <button class="btn btn-ghost btn-sm" type="button" data-morgan-open>${UI().icon("spark")} MORGAN</button>
        </div>
      </div>
      <div class="workspace-progress">
        <div class="workspace-progress-bar"><span data-progress-bar style="width:${pr.percent}%"></span></div>
        <div class="workspace-progress-copy" data-progress-copy><strong>${pr.percent}%</strong> case file complete</div>
      </div>
    </header>`;
  }

  function tabLink(c, tab, active, pr) {
    let count = "";
    if (tab.id === "evidence") count = `<span class="tab-count" data-tab-count="evidence">${pr.seen}/${pr.totalEvidence}</span>`;
    if (tab.id === "interrogation") count = `<span class="tab-count" data-tab-count="interrogation">${pr.asked}/${pr.totalQuestions}</span>`;
    if (tab.id === "analysis") count = `<span class="tab-count">${pr.found}</span>`;
    return `<a class="case-tab${tab.id === active ? " active" : ""}" href="#/case/${escape(c.id)}/${tab.id}"${tab.id === active ? ' aria-current="page"' : ""}>
      ${UI().icon(tab.icon)}<span>${tab.label}</span>${count}
    </a>`;
  }

  function aside(c, p, pr) {
    const status = statusOf(c);
    const complete = p.status === "solved" || p.status === "failed";
    return `
      <div class="aside-card">
        <div class="aside-card-head"><span>Case progress</span><strong>${pr.percent}%</strong></div>
        <div class="aside-card-body">
          <div class="progress-ring-row">
            <div class="progress-ring" data-progress-ring style="--p:${pr.percent}"><span>${pr.percent}<small>%</small></span></div>
            <div class="progress-copy">
              <strong>${status.label} case</strong>
              <p>${complete ? "The verdict is on file." : "Evidence drives the file forward."}</p>
            </div>
          </div>
          <div class="aside-metrics">
            <div class="aside-metric"><span>Evidence logged</span><span data-metric="evidence">${pr.seen}/${pr.totalEvidence}</span></div>
            <div class="aside-metric"><span>Questions asked</span><span data-metric="questions">${pr.asked}/${pr.totalQuestions}</span></div>
            <div class="aside-metric"><span>Witnesses read</span><span data-metric="witnesses">${pr.read}/${pr.totalWitnesses}</span></div>
            <div class="aside-metric"><span>Contradictions</span><span data-metric="contradictions">${pr.found}/${pr.totalContradictions}</span></div>
            <div class="aside-metric"><span>Hints used</span><span data-metric="hints">${p.hintsUsed || 0}</span></div>
          </div>
        </div>
        <div class="aside-actions">
          ${complete
            ? `<a class="btn btn-primary btn-sm btn-block" href="#/results/${escape(c.id)}">${UI().icon("gavel")} Review verdict</a>`
            : `<button class="btn btn-primary btn-sm btn-block" type="button" data-accuse>${UI().icon("gavel")} Final accusation</button>`}
          <button class="btn btn-ghost btn-sm btn-block" type="button" data-restart-case>${UI().icon("refresh")} Restart case</button>
          <a class="btn btn-ghost btn-sm btn-block" href="#/cases">${UI().icon("folder")} Case archive</a>
        </div>
      </div>
      <div class="aside-card aside-morgan">
        <div class="aside-morgan-title">
          <span class="morgan-orb small" aria-hidden="true">M</span>
          <div>
            <strong>MORGAN</strong>
            <small>${window.CaseMind.Assistant && window.CaseMind.Assistant.isLive() ? "Live AI · experimental" : "Simulated analytical assistant"}</small>
          </div>
        </div>
        <p>Ask for a lead, a contradiction review, or an alibi check. MORGAN will not name the culprit.</p>
        <button class="btn btn-ghost btn-sm btn-block" type="button" data-morgan-open>${UI().icon("chat")} Consult assistant</button>
      </div>
      <div class="aside-card">
        <div class="aside-card-head"><span>Subjects</span><strong>${c.suspects.length}</strong></div>
        <div class="aside-card-body">
          <div class="suspect-mini-list">
            ${c.suspects.map((s) => {
              const asked = (s.questions || []).filter((q) => (p.questionsAsked || []).includes(`${s.id}:${q.id}`)).length;
              const total = (s.questions || []).length;
              return `<button class="suspect-mini-row" type="button" data-person="${escape(s.id)}" style="width:100%;background:none;border:0;border-bottom:1px solid rgba(255,255,255,.035);text-align:left;color:inherit">
                <span class="suspect-avatar">${escape(UI().initials(s.name))}</span>
                <span><strong>${escape(s.name)}</strong><small>${escape(s.role)}</small></span>
                <span class="mini-dots" aria-label="${asked} of ${total} questions asked">
                  ${Array.from({ length: total }).map((_, i) => `<i class="${i < asked ? "on" : ""}"></i>`).join("")}
                </span>
              </button>`;
            }).join("")}
          </div>
        </div>
      </div>
      <div class="aside-card aside-tip">
        <div class="eyebrow">FIELD NOTE</div>
        <p>An alibi is only as strong as its independent witness. Compare the exact time a suspect gives with the time on the record.</p>
      </div>`;
  }

  function updateAside(c) {
    const el = document.getElementById("workspace-aside");
    if (!el) return;
    const { p, pr } = progressFor(c);
    el.innerHTML = aside(c, p, pr);
  }

  function refreshTab(c, tab) {
    const host = document.getElementById("workspace-main");
    if (!host) return;
    const { p, pr } = progressFor(c);
    host.innerHTML = tabBody(c, p, pr, tab);
    if (tab === "interrogation") {
      const el = host.querySelector("#interrogation-root");
      if (el) {
        window.CaseMind.Interrogation.bind(el, c, { onProgress: () => updateProgressUI(c) });
      }
    }
    updateProgressUI(c);
  }

  /* ---------- tab bodies ---------- */

  function tabBody(c, p, pr, tab) {
    if (tab === "evidence") return evidenceTab(c, p);
    if (tab === "people") return peopleTab(c, p);
    if (tab === "timeline") return timelineTab(c);
    if (tab === "interrogation") return interrogationTab(c);
    if (tab === "analysis") return analysisTab(c, p, pr);
    if (tab === "notes") return notesTab(c, p);
    return overviewTab(c, p);
  }

  function overviewTab(c, p) {
    const victim = c.victim || {};
    return `
      <div class="overview-scene">
        <section class="panel scene-panel">
          <div class="panel-head"><h2>${UI().icon("pin")} Scene report</h2><span class="panel-kicker">${escape(c.location)}</span></div>
          <div class="panel-body">
            <p class="scene-summary">${escape(c.scene.summary)}</p>
            <ul class="scene-details">
              ${(c.scene.details || []).map((detail) => `<li>${escape(detail)}</li>`).join("")}
            </ul>
          </div>
        </section>
        <div style="display:flex;flex-direction:column;gap:16px">
          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("eye")} First observations</h2></div>
            <div class="panel-body">
              <div class="observation-list">
                ${(c.scene.initialObservations || []).map((ob) => `<div class="observation">${escape(ob)}</div>`).join("")}
              </div>
            </div>
          </section>
          <section class="panel victim-card">
            <div class="victim-banner">
              <div class="victim-avatar">${escape(UI().initials(victim.name || "?"))}</div>
              <h3>${escape(victim.name || "Unknown")}</h3>
              <p>${escape(victim.label || "")}</p>
              <div class="victim-tags">
                <span class="badge badge-neutral">${escape(victim.status || "On file")}</span>
              </div>
            </div>
            <div class="victim-info">
              <div class="meta-row"><span>Age</span><span>${escape(victim.age || "—")}</span></div>
              <div class="meta-row"><span>Occupation</span><span>${escape(victim.occupation || "—")}</span></div>
              <div class="meta-row"><span>Forensic</span><span>${escape(victim.forensic || "—")}</span></div>
            </div>
          </section>
        </div>
      </div>
      <section class="panel">
        <div class="panel-head"><h2>${UI().icon("compass")} Investigative actions</h2><span class="panel-kicker">Choose a thread</span></div>
        <div class="panel-body">
          <div class="quick-actions">
            <a class="quick-action" href="#/case/${escape(c.id)}/evidence">${UI().icon("flask")} Log the physical evidence</a>
            <a class="quick-action" href="#/case/${escape(c.id)}/interrogation">${UI().icon("chat")} Interview a subject</a>
            <a class="quick-action" href="#/case/${escape(c.id)}/timeline">${UI().icon("clock")} Reconstruct the window</a>
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><h2>${UI().icon("clip")} Background</h2></div>
        <div class="panel-body">
          <p>${escape(c.victim.background || c.description)}</p>
        </div>
      </section>`;
  }

  function evidenceTab(c, p) {
    const categories = Array.from(new Set(c.evidence.map((ev) => ev.category)));
    const filter = state.evidenceFilter;
    const cards = c.evidence.map((ev, index) => {
      const seen = (p.evidenceSeen || []).includes(ev.id);
      return `<button class="evidence-card${seen ? " seen" : ""}" type="button" data-evidence="${escape(ev.id)}" data-category="${escape(ev.category)}">
        <div class="evidence-card-top">
          <span class="evidence-index">EXHIBIT ${String(index + 1).padStart(2, "0")}</span>
          <span class="evidence-cat">${UI().icon(categoryIcon(ev.category))} ${escape(ev.category)}</span>
        </div>
        <h3>${escape(ev.name)}</h3>
        <p>${escape(ev.summary)}</p>
        <div class="evidence-card-foot">
          <span>${seen ? "LOGGED" : `FOUND ${escape(ev.foundAt || "—")}`}</span>
          <span class="evidence-open">${seen ? "Review" : "Examine"} ${UI().icon("arrow")}</span>
        </div>
      </button>`;
    }).join("");

    return `<div class="evidence-toolbar">
        <div class="evidence-filters">
          <button class="evidence-filter${filter === "all" ? " active" : ""}" type="button" data-evfilter="all">All ${c.evidence.length}</button>
          ${categories.map((cat) => `<button class="evidence-filter${filter === cat ? " active" : ""}" type="button" data-evfilter="${escape(cat)}">${escape(cat)}</button>`).join("")}
        </div>
        <span class="lead-count" data-evidence-toolbar-count>${UI().icon("flask")} <strong>${(p.evidenceSeen || []).length}</strong> / ${c.evidence.length} logged</span>
      </div>
      <div class="evidence-grid" data-evidence-grid>${cards}</div>
      <div class="evidence-note" style="margin-top:12px">
        ${UI().icon("info")}
        <span>Open an exhibit to log it. Evidence is never hidden behind a paywall — every item in this case is available now.</span>
      </div>`;
  }

  function peopleTab(c, p) {
    const suspects = c.suspects.map((s) => {
      const asked = (s.questions || []).filter((q) => (p.questionsAsked || []).includes(`${s.id}:${q.id}`)).length;
      const total = (s.questions || []).length;
      const found = (c.contradictions || []).filter((x) => x.suspectId === s.id && (p.contradictionsFound || []).includes(x.id)).length;
      return `<button class="suspect-card" type="button" data-person="${escape(s.id)}">
        <span class="suspect-avatar">${escape(UI().initials(s.name))}</span>
        <span class="suspect-copy">
          <h3>${escape(s.name)}</h3>
          <div class="suspect-role">${escape(s.role)}</div>
          <p>${escape(s.summary)}</p>
          <div class="suspect-status">
            <span class="${asked ? "done" : ""}"><i></i>${asked}/${total} interview</span>
            <span class="${found ? "done" : ""}"><i></i>${found} contradiction${found === 1 ? "" : "s"}</span>
          </div>
        </span>
      </button>`;
    }).join("");

    const witnesses = c.witnesses.map((w, index) => {
      const read = (p.witnessesRead || []).includes(w.id);
      return `<div class="witness-item${read ? " open" : ""}" data-witness-item="${escape(w.id)}">
        <button class="witness-toggle" type="button" data-witness="${escape(w.id)}" aria-expanded="${read ? "true" : "false"}">
          <span class="witness-num">W${String(index + 1).padStart(2, "0")}</span>
          <span class="witness-copy"><strong>${escape(w.name)}</strong><small>${escape(w.role)}</small></span>
          <span class="witness-rel">${escape(w.reliability)} reliability</span>
          ${UI().icon("chevron")}
        </button>
        <div class="witness-detail">
          <blockquote class="witness-quote">“${escape(w.statement)}”</blockquote>
          <p class="witness-note">${escape(w.notes)}</p>
        </div>
      </div>`;
    }).join("");

    return `<section class="people-section">
        <div class="section-head"><div><h2>Persons of interest</h2><p>Every subject has a public account. Test it against the record.</p></div><span class="lead-count">${c.suspects.length} subjects</span></div>
        <div class="suspect-grid">${suspects}</div>
      </section>
      <section class="people-section">
        <div class="section-head"><div><h2>Witness statements</h2><p>Independent accounts, recorded before conclusions.</p></div><span class="lead-count"><strong data-witness-count>${(p.witnessesRead || []).length}</strong> / ${c.witnesses.length} read</span></div>
        <div class="witness-list">${witnesses}</div>
      </section>`;
  }

  function timelineTab(c) {
    const disputed = c.timeline.filter((t) => t.disputed).length;
    const verified = c.timeline.filter((t) => t.verified).length;
    return `<div class="timeline-toolbar">
        <div>
          <div class="eyebrow">CASE WINDOW · ${escape(c.timeWindow)}</div>
          <p style="color:var(--faint);font-size:10px;margin-top:4px">Click an event to expand its detail and source.</p>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span class="badge badge-success">${verified} verified</span>
          <span class="badge badge-warning">${disputed} disputed</span>
        </div>
      </div>
      <div class="timeline-wrap">
        <div class="timeline-list">
          ${c.timeline.map((event) => `<div class="timeline-event ${event.verified ? "verified" : ""} ${event.disputed ? "disputed" : ""}${state.timelineOpen === event.id ? " open" : ""}" data-timeline="${escape(event.id)}" role="button" tabindex="0">
            <span class="timeline-time">${escape(event.time)}</span>
            <span class="timeline-dot"></span>
            <div class="timeline-card">
              <h3>${escape(event.title)}
                ${event.disputed ? '<span class="badge badge-warning">Disputed</span>' : ""}
                ${event.verified ? '<span class="badge badge-success">Verified</span>' : ""}
              </h3>
              <p>${escape(event.detail)}</p>
              <span class="timeline-source"><i></i>${escape(event.source)}</span>
              <div class="timeline-more">
                ${(event.actors || []).map((id) => {
                  const s = suspectById(c, id);
                  return s ? `Recorded actor: <strong>${escape(s.name)}</strong> (${escape(s.role)}).` : "";
                }).filter(Boolean).join(" ") || "No named actor recorded for this event."}
                ${event.disputed ? " This entry conflicts with at least one statement on file." : ""}
              </div>
            </div>
          </div>`).join("")}
        </div>
      </div>`;
  }

  function interrogationTab(c) {
    return `<div id="interrogation-root">${window.CaseMind.Interrogation.render(c)}</div>`;
  }

  function analysisState(c, p) {
    if (!state.analysis[c.id]) {
      const seen = p.evidenceSeen || [];
      state.analysis[c.id] = {
        suspectId: (c.suspects[0] || {}).id || "",
        evidenceId: (c.evidence.find((ev) => seen.includes(ev.id)) || c.evidence[0] || {}).id || "",
        html: ""
      };
    } else if (!state.analysis[c.id].html) {
      // Recompute the panel from the current record on tab entry.
      state.analysis[c.id].html = compareHtml(c, p, state.analysis[c.id].suspectId, state.analysis[c.id].evidenceId, false);
    }
    return state.analysis[c.id];
  }

  function analysisTab(c, p, pr) {
    const a = analysisState(c, p);
    const found = c.contradictions.filter((x) => (p.contradictionsFound || []).includes(x.id));
    return `<div class="analysis-grid">
        <section class="panel compare-panel">
          <div class="panel-head"><h2>${UI().icon("search")} Evidence comparison</h2><span class="panel-kicker">Test a link</span></div>
          <div class="panel-body">
            <div class="compare-selects">
              <div>
                <label class="select-label" for="compare-suspect">Subject</label>
                <select class="select-input" id="compare-suspect" data-compare-suspect>
                  ${c.suspects.map((s) => `<option value="${escape(s.id)}"${s.id === a.suspectId ? " selected" : ""}>${escape(s.name)} — ${escape(s.role)}</option>`).join("")}
                </select>
              </div>
              <span class="compare-vs">VS</span>
              <div>
                <label class="select-label" for="compare-evidence">Exhibit</label>
                <select class="select-input" id="compare-evidence" data-compare-evidence>
                  ${c.evidence.map((ev) => {
                    const seen = (p.evidenceSeen || []).includes(ev.id);
                    return `<option value="${escape(ev.id)}"${ev.id === a.evidenceId ? " selected" : ""}>${seen ? "" : "[unread] "}${escape(ev.name)}</option>`;
                  }).join("")}
                </select>
              </div>
            </div>
            <button class="btn btn-primary btn-sm" type="button" data-compare-run>${UI().icon("bolt")} Run comparison</button>
            <div class="compare-results" id="compare-results" aria-live="polite">${a.html || ""}</div>
            <div class="scan-callout">
              ${UI().icon("info")}
              <span>A comparison is recorded only when a subject's statement conflicts with a logged exhibit. Unread evidence is still available in the Evidence tab.</span>
            </div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-head">
            <h2>${UI().icon("alert")} Contradictions</h2>
            <span class="lead-count" data-lead-count><strong>${found.length}</strong> / ${c.contradictions.length} recorded</span>
          </div>
          <div class="panel-body">
            <div class="contradiction-list" id="contradiction-list">${contradictionList(c, p)}</div>
          </div>
        </section>
      </div>`;
  }

  function contradictionList(c, p) {
    const found = c.contradictions.filter((x) => (p.contradictionsFound || []).includes(x.id));
    if (!found.length) {
      return `<div class="locked-lead">${UI().icon("lock")}<span>No contradictions are on the record yet. Ask the linked question, then log the exhibit that challenges it.</span></div>`;
    }
    return found.map((x) => {
      const suspect = suspectById(c, x.suspectId);
      const evidence = (x.evidenceIds || []).map((id) => evidenceById(c, id)).filter(Boolean);
      return `<div class="contradiction-item">
        <div class="contradiction-label">${UI().icon("alert")} Contradiction recorded</div>
        <h4>${escape(x.title)}</h4>
        <p>${escape(x.detail)}</p>
        <div class="contradiction-source">${escape(suspect ? suspect.name : "Unknown")}${evidence.length ? ` · ${evidence.map((ev) => escape(ev.name)).join(" · ")}` : ""}</div>
      </div>`;
    }).join("");
  }

  function compareHtml(c, p, suspectId, evidenceId, isRun) {
    const suspect = suspectById(c, suspectId);
    const evidence = evidenceById(c, evidenceId);
    if (!suspect || !evidence) return "";
    const seen = (p.evidenceSeen || []).includes(evidence.id);
    const matched = c.contradictions.find((x) => x.suspectId === suspect.id && (x.evidenceIds || []).includes(evidence.id));
    const related = (evidence.relatedSuspects || []).includes(suspect.id);
    let analysis;
    let cls = "";
    if (matched) {
      cls = " alert";
      analysis = `<strong>${escape(matched.title)}</strong> — ${escape(matched.detail)}${matched.hint ? `<br><br>Lead: ${escape(matched.hint)}` : ""}`;
    } else if (!seen) {
      analysis = `This exhibit is not logged yet. Open it in the Evidence tab before drawing a conclusion.`;
    } else if (related) {
      analysis = `The exhibit references ${escape(suspect.name)} but does not document a direct contradiction with their recorded statement. Read the exact wording again.`;
    } else {
      analysis = `No documented link exists between ${escape(suspect.name)} and this exhibit. That does not prove innocence — but it does not support a charge either.`;
    }
    return `<div class="compare-card">
        <div class="compare-kicker">Subject record</div>
        <h4>${escape(suspect.name)}</h4>
        <p>${escape(suspect.alibi)}</p>
        <div class="compare-tags"><span>${escape(suspect.role)}</span><span>${escape(suspect.age)} yrs</span></div>
      </div>
      <div class="compare-card">
        <div class="compare-kicker">${seen ? "Exhibit logged" : "Exhibit unread"}</div>
        <h4>${escape(evidence.name)}</h4>
        <p>${escape(evidence.summary)}</p>
        <div class="compare-tags"><span>${escape(evidence.category)}</span>${(evidence.tags || []).slice(0, 2).map((t) => `<span>${escape(t)}</span>`).join("")}</div>
      </div>
      <div class="compare-analysis${cls}" style="grid-column:1 / -1">${analysis}</div>`;
  }

  function notesTab(c, p) {
    const prompts = ["Theory:", "Opportunity:", "Motive:", "Key evidence:", "Unanswered:"];
    return `<section class="panel">
        <div class="panel-head"><h2>${UI().icon("edit")} Investigation notes</h2><span class="panel-kicker">Saved locally</span></div>
        <div class="panel-body">
          <div class="notes-head"><span class="notes-status" id="notes-status">AUTO-SAVE READY</span><span class="mono" style="font-size:7px;color:var(--dim)">LOCAL ONLY</span></div>
          <div class="notes-prompts">
            ${prompts.map((label) => `<button class="note-prompt" type="button" data-note-prompt="${escape(label)}">+ ${escape(label.replace(":", ""))}</button>`).join("")}
          </div>
          <textarea class="notes-area" id="case-notes" data-notes maxlength="12000" placeholder="Record the timeline, the alibis, and the contradictions you can prove…&#10;&#10;Theory:&#10;Opportunity:&#10;Motive:&#10;Key evidence:">${escape(p.notes || "")}</textarea>
          <div class="notes-foot"><span id="notes-count">${(p.notes || "").length} / 12000 characters</span><span>Saved to this browser · not uploaded</span></div>
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><h2>${UI().icon("eye")} Record summary</h2></div>
        <div class="panel-body">
          <div class="meta-list">
            <div class="meta-row"><span>Evidence logged</span><span>${(p.evidenceSeen || []).length} of ${c.evidence.length}</span></div>
            <div class="meta-row"><span>Questions asked</span><span>${(p.questionsAsked || []).length}</span></div>
            <div class="meta-row"><span>Witnesses read</span><span>${(p.witnessesRead || []).length} of ${c.witnesses.length}</span></div>
            <div class="meta-row"><span>Hints used</span><span>${p.hintsUsed || 0} (max penalty 15)</span></div>
          </div>
        </div>
      </section>`;
  }

  /* ---------- evidence modal ---------- */

  function openEvidence(c, evidenceId) {
    const evidence = evidenceById(c, evidenceId);
    if (!evidence) return;
    const isNew = Storage().markEvidence(c.id, evidenceId);
    if (isNew) {
      UI().toast(`Exhibit logged · ${evidence.name}`, "info");
      const card = document.querySelector(`[data-evidence="${evidenceId}"]`);
      if (card) {
        card.classList.add("seen");
        const footer = card.querySelector(".evidence-card-foot span");
        if (footer) footer.textContent = "LOGGED";
        const open = card.querySelector(".evidence-open");
        if (open) open.innerHTML = `Review ${UI().icon("arrow")}`;
      }
      const toolbarCount = document.querySelector("[data-evidence-toolbar-count]");
      if (toolbarCount) {
        const now = (Storage().getCase(c.id).evidenceSeen || []).length;
        toolbarCount.innerHTML = `${UI().icon("flask")} <strong>${now}</strong> / ${c.evidence.length} logged`;
      }
      if (window.CaseMind.Interrogation) window.CaseMind.Interrogation.syncContradictions(c);
      updateProgressUI(c);
    }
    const related = (evidence.relatedSuspects || []).map((id) => suspectById(c, id)).filter(Boolean);
    UI().openModal({
      size: "wide",
      kicker: `EXHIBIT · ${evidence.category.toUpperCase()} · FOUND ${evidence.foundAt || "—"}`,
      title: evidence.name,
      flush: true,
      body: `<div class="evidence-detail-head">
          <div class="evidence-cat">${UI().icon(categoryIcon(evidence.category))} ${escape(evidence.category)}</div>
          <h2>${escape(evidence.name)}</h2>
          <div class="evidence-location">${UI().icon("pin")} ${escape(evidence.location)}</div>
        </div>
        <div class="evidence-detail-body">
          <div class="detail-label">Finding</div>
          <p>${escape(evidence.description)}</p>
          <div class="evidence-analysis-box">
            <h4>${UI().icon("spark")} Analytical note</h4>
            <p>${escape(evidence.analysis)}</p>
          </div>
          <div class="evidence-tags">
            ${(evidence.tags || []).map((tag) => `<span class="chip">${escape(tag)}</span>`).join("")}
          </div>
          ${related.length ? `<div class="evidence-related">
            <strong>Connected subjects</strong>
            <div class="related-links">${related.map((s) => `<button class="related-person" type="button" data-person="${escape(s.id)}">${escape(s.name)}</button>`).join("")}</div>
          </div>` : ""}
        </div>`,
      footer: `<button class="btn btn-ghost btn-sm" type="button" data-evidence-note>${UI().icon("edit")} Add to notes</button>
        <button class="btn btn-primary btn-sm" type="button" data-ui-close>Close exhibit</button>`,
      onMount: (modal, close) => {
        const noteBtn = modal.querySelector("[data-evidence-note]");
        if (noteBtn) {
          noteBtn.addEventListener("click", () => {
            const p = Storage().getCase(c.id, true);
            const block = `\n\n[EXHIBIT] ${evidence.name} (${evidence.category})\n${evidence.summary}\n`;
            Storage().setNotes(c.id, `${p.notes || ""}${block}`);
            noteBtn.textContent = "Added to notes";
            noteBtn.disabled = true;
            UI().toast("Exhibit saved to your notes.", "info");
          });
        }
        modal.querySelectorAll("[data-person]").forEach((btn) => {
          btn.addEventListener("click", () => {
            close();
            openSuspect(c, btn.getAttribute("data-person"));
          });
        });
      }
    });
  }

  function openSuspect(c, suspectId) {
    const s = suspectById(c, suspectId);
    if (!s) return;
    const p = Storage().getCase(c.id) || { questionsAsked: [], contradictionsFound: [] };
    const asked = (s.questions || []).filter((q) => (p.questionsAsked || []).includes(`${s.id}:${q.id}`)).length;
    const found = (c.contradictions || []).filter((x) => x.suspectId === s.id && (p.contradictionsFound || []).includes(x.id));
    UI().openModal({
      size: "wide",
      kicker: `PERSON OF INTEREST · ${s.role.toUpperCase()}`,
      title: s.name,
      flush: true,
      body: `<div class="suspect-detail-hero">
          <span class="suspect-avatar">${escape(UI().initials(s.name))}</span>
          <div>
            <h2>${escape(s.name)}</h2>
            <div class="subject-role">${escape(s.role)} · ${escape(s.age)} years</div>
            <p>${escape(s.summary)}</p>
          </div>
        </div>
        <div class="evidence-detail-body">
          <div class="detail-label">Background</div>
          <p>${escape(s.background)}</p>
          <div class="suspect-facts">
            <div class="fact-box"><span>Declared alibi</span><p>${escape(s.alibi)}</p></div>
            <div class="fact-box"><span>Stated pressure</span><p>${escape(s.pressure)}</p></div>
            <div class="fact-box"><span>Relationship</span><p>${escape(s.relationship)}</p></div>
            <div class="fact-box"><span>Public context</span><p>${escape(s.motive)}</p></div>
          </div>
          <div class="evidence-related">
            <strong>Interview status</strong>
            <div class="related-links">
              <span class="chip">${asked} of ${(s.questions || []).length} questions asked</span>
              <span class="chip${found.length ? " chip-accent" : ""}">${found.length} contradiction${found.length === 1 ? "" : "s"} recorded</span>
            </div>
          </div>
        </div>`,
      footer: `<button class="btn btn-ghost btn-sm" type="button" data-ui-close>Close</button>
        <button class="btn btn-primary btn-sm" type="button" data-goto-interrogation>${UI().icon("chat")} Open interrogation</button>`,
      onMount: (modal, close) => {
        const btn = modal.querySelector("[data-goto-interrogation]");
        if (btn) {
          btn.addEventListener("click", () => {
            close();
            window.location.hash = `#/case/${c.id}/interrogation`;
          });
        }
      }
    });
  }

  /* ---------- accusation ---------- */

  function openAccusation(c) {
    const p = Storage().getCase(c.id, true);
    if (p.status === "solved" || p.status === "failed") {
      window.location.hash = `#/results/${c.id}`;
      return;
    }
    const chosen = { culpritId: "", motiveId: "", methodId: "", evidenceIds: [] };

    const stepLabels = ["Culprit", "Motive", "Method", "Evidence"];
    const stepsHtml = () => stepLabels.map((label, i) => {
      const done = i === 0 ? !!chosen.culpritId : i === 1 ? !!chosen.motiveId : i === 2 ? !!chosen.methodId : chosen.evidenceIds.length > 0;
      return `<div class="accusation-step${done ? " done" : ""}"><span>${done ? "✓" : String(i + 1).padStart(2, "0")}</span>${label}</div>`;
    }).join("");

    const culpritChoices = c.suspects.map((s) => `<label class="choice-card${chosen.culpritId === s.id ? " selected" : ""}" data-choice="culprit">
        <input type="radio" name="culprit" value="${escape(s.id)}">
        <span class="choice-radio"></span>
        <span class="choice-avatar">${escape(UI().initials(s.name))}</span>
        <span><strong>${escape(s.name)}</strong><small>${escape(s.role)}</small></span>
      </label>`).join("");

    const motiveChoices = c.motiveOptions.map((m) => `<label class="choice-card" data-choice="motive">
        <input type="radio" name="motive" value="${escape(m.id)}">
        <span class="choice-radio"></span>
        <span class="choice-text">${escape(m.text)}</span>
      </label>`).join("");

    const methodChoices = c.methodOptions.map((m) => `<label class="choice-card" data-choice="method">
        <input type="radio" name="method" value="${escape(m.id)}">
        <span class="choice-radio"></span>
        <span class="choice-text">${escape(m.text)}</span>
      </label>`).join("");

    const evidenceChoices = c.evidence.map((ev) => `<label class="evidence-choice">
        <input type="checkbox" name="evidence" value="${escape(ev.id)}">
        <span class="evidence-check"></span>
        <span>${escape(ev.name)}</span>
      </label>`).join("");

    const body = `<div class="acc-section">
        <div class="acc-section-head">
          <div class="acc-section-title"><span>01</span><div><h3>Who committed the crime?</h3><p>Name the person the evidence supports.</p></div></div>
          <span class="acc-hint">45 PTS</span>
        </div>
        <div class="choice-grid">${culpritChoices}</div>
      </div>
      <div class="acc-section">
        <div class="acc-section-head">
          <div class="acc-section-title"><span>02</span><div><h3>What was the motive?</h3><p>Choose the explanation the record supports.</p></div></div>
          <span class="acc-hint">20 PTS</span>
        </div>
        <div class="choice-grid">${motiveChoices}</div>
      </div>
      <div class="acc-section">
        <div class="acc-section-head">
          <div class="acc-section-title"><span>03</span><div><h3>How was it done?</h3><p>Select the method that matches the physical and digital traces.</p></div></div>
          <span class="acc-hint">20 PTS</span>
        </div>
        <div class="choice-grid">${methodChoices}</div>
      </div>
      <div class="acc-section">
        <div class="acc-section-head">
          <div class="acc-section-title"><span>04</span><div><h3>Which evidence proves it?</h3><p>Select up to three exhibits. Each correct exhibit earns 5 points.</p></div></div>
          <span class="acc-hint" data-acc-evidence-count>0 / 3 SELECTED</span>
        </div>
        <div class="evidence-choice-grid">${evidenceChoices}</div>
      </div>`;

    const footer = `<div class="acc-warning">${UI().icon("alert")}<span>This submits your final accusation. The hidden solution will be revealed on the verdict screen. Hints already used: ${p.hintsUsed || 0} (−${Math.min(15, (p.hintsUsed || 0) * 5)} pts).</span></div>
      <div class="acc-actions">
        <button class="btn btn-ghost btn-sm" type="button" data-ui-close>Cancel</button>
        <button class="btn btn-danger btn-sm" type="button" data-submit-accusation disabled>${UI().icon("gavel")} Submit accusation</button>
      </div>`;

    UI().openModal({
      size: "wide",
      kicker: "FINAL ACCUSATION · SEALED RECORD",
      title: "Present your case",
      subtitle: "The verdict is final for this attempt. You can replay the case afterwards.",
      steps: stepsHtml(),
      flush: true,
      body,
      footer,
      dismissible: true,
      onMount: (modal, close) => {
        const submit = modal.querySelector("[data-submit-accusation]");
        const stepsEl = modal.querySelector(".accusation-steps");
        const warning = modal.querySelector(".acc-warning span");

        const refresh = () => {
          stepsEl.innerHTML = stepsHtml();
          submit.disabled = !(chosen.culpritId && chosen.motiveId && chosen.methodId);
          const count = modal.querySelector("[data-acc-evidence-count]");
          if (count) count.textContent = `${chosen.evidenceIds.length} / 3 SELECTED`;
          const selectedEvidence = chosen.evidenceIds.length;
          if (warning) {
            warning.textContent = selectedEvidence
              ? `${selectedEvidence} exhibit${selectedEvidence === 1 ? "" : "s"} selected. Check that each one directly supports the charge.`
              : "No exhibits selected. You can still submit, but evidence accounts for 15 points.";
          }
        };

        modal.addEventListener("change", (event) => {
          const input = event.target;
          if (!input || !input.name) return;
          if (input.name === "culprit") {
            chosen.culpritId = input.value;
            modal.querySelectorAll('[data-choice="culprit"]').forEach((label) => label.classList.toggle("selected", label.querySelector("input").checked));
          }
          if (input.name === "motive") {
            chosen.motiveId = input.value;
            modal.querySelectorAll('[data-choice="motive"]').forEach((label) => label.classList.toggle("selected", label.querySelector("input").checked));
          }
          if (input.name === "method") {
            chosen.methodId = input.value;
            modal.querySelectorAll('[data-choice="method"]').forEach((label) => label.classList.toggle("selected", label.querySelector("input").checked));
          }
          if (input.name === "evidence") {
            if (input.checked && chosen.evidenceIds.length >= 3) {
              input.checked = false;
              UI().toast("Select at most three exhibits.", "error");
            } else {
              chosen.evidenceIds = Array.from(modal.querySelectorAll('input[name="evidence"]:checked')).map((el) => el.value);
            }
            modal.querySelectorAll(".evidence-choice").forEach((label) => label.classList.toggle("selected", label.querySelector("input").checked));
          }
          refresh();
        });

        submit.addEventListener("click", () => {
          if (!chosen.culpritId || !chosen.motiveId || !chosen.methodId) return;
          submit.disabled = true;
          submit.innerHTML = "Recording verdict…";
          const result = Scoring().evaluateAccusation(c, {
            culpritId: chosen.culpritId,
            motiveId: chosen.motiveId,
            methodId: chosen.methodId,
            evidenceIds: chosen.evidenceIds,
            hintsUsed: p.hintsUsed || 0
          });
          Storage().completeCase(c.id, result);
          const unlocked = Scoring().checkAchievements();
          close();
          if (window.CaseMind.App && window.CaseMind.App.syncChrome) window.CaseMind.App.syncChrome();
          window.location.hash = `#/results/${c.id}`;
          setTimeout(() => {
            if (result.correctCulprit) {
              UI().toast(`Accusation upheld · ${result.score}/100`, { type: "success", title: "Case solved" });
            } else {
              UI().toast("The evidence did not support that charge.", { type: "error", title: "Accusation rejected" });
            }
            unlocked.forEach((a) => UI().toast(a.description, { type: "achievement", title: `Achievement · ${a.name}` }));
          }, 400);
        });
        refresh();
      }
    });
  }

  /* ---------- results ---------- */

  function nextUnsolved(c) {
    const list = Cases().all();
    const index = list.findIndex((x) => x.id === c.id);
    for (let i = 1; i <= list.length; i += 1) {
      const candidate = list[(index + i) % list.length];
      const p = Storage().getCase(candidate.id);
      if (!p || p.status !== "solved") return candidate;
    }
    return list.find((x) => x.id !== c.id) || null;
  }

  function renderResults(root, c) {
    const p = Storage().getCase(c.id);
    if (!p || !p.accusation) {
      window.location.hash = `#/case/${c.id}/overview`;
      return;
    }
    const a = p.accusation;
    const solution = c.solution;
    const culprit = suspectById(c, solution.culpritId);
    const chosen = suspectById(c, a.culpritId);
    const motive = (c.motiveOptions || []).find((m) => m.id === solution.motiveId);
    const method = (c.methodOptions || []).find((m) => m.id === solution.methodId);
    const submittedEvidence = (a.evidenceIds || []).map((id) => evidenceById(c, id)).filter(Boolean);
    const verdictTitle = a.solved ? solution.headline : "The accusation did not hold.";
    const verdictCopy = a.solved
      ? `You named ${culprit ? culprit.name : "the culprit"} and the evidence supported the charge. Final score: ${a.score}/100.`
      : `You named ${chosen ? chosen.name : "a suspect"}. The record instead supports a different charge. Read the solution below, then replay the case if you want a cleaner verdict.`;
    const next = nextUnsolved(c);

    const scoreItem = (iconName, label, value, max, ok) => `<div class="score-item ${ok ? "correct" : "wrong"}">
      <span class="score-item-icon">${UI().icon(ok ? "check" : "x")}</span>
      <div><small>${escape(label)}</small><strong>${value}<span> / ${max}</span></strong></div>
    </div>`;

    root.innerHTML = `<div class="results-page" style="--case-accent:${escape(c.accent)}">
      <section class="verdict-hero${a.solved ? "" : " imperfect"}">
        <div class="score-ring" style="--p:${a.score}">
          <div class="score-ring-copy"><strong>${a.score}</strong><small>/ 100 PTS</small></div>
        </div>
        <div class="verdict-copy">
          <div class="eyebrow">${a.solved ? "CASE SOLVED" : "ACCUSATION REJECTED"} · CASE ${escape(c.number)}</div>
          <h1>${escape(verdictTitle)}</h1>
          <p>${escape(verdictCopy)}</p>
          <div class="verdict-tags">
            <span class="badge badge-neutral">${escape(c.title)}</span>
            <span class="badge ${a.solved ? "badge-success" : "badge-warning"}">${escape(a.verdict.toUpperCase())}</span>
            ${a.hintPenalty ? `<span class="badge badge-warning">−${a.hintPenalty} hint penalty</span>` : `<span class="badge badge-success">No hint penalty</span>`}
          </div>
        </div>
        <div class="verdict-stamp">${a.solved ? "SOLVED" : "CLOSED"}</div>
      </section>

      <div class="score-breakdown">
        ${scoreItem("user", "Culprit", a.culpritPoints, 45, a.correctCulprit)}
        ${scoreItem("scale", "Motive", a.motivePoints, 20, a.correctMotive)}
        ${scoreItem("bolt", "Method", a.methodPoints, 20, a.correctMethod)}
        ${scoreItem("flask", "Evidence", a.evidencePoints, 15, a.correctEvidence.length > 0)}
      </div>

      <div class="results-grid">
        <div class="results-main">
          <section class="solution-banner">
            <div class="eyebrow">CLOSED FILE · THE TRUTH</div>
            <h2>${escape(solution.headline)}</h2>
            <p>${escape(solution.summary)}</p>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("file")} What actually happened</h2><span class="panel-kicker">${escape(culprit ? culprit.name : "")}</span></div>
            <div class="panel-body">
              <div class="solution-details">
                ${(solution.explanation || []).map((para, i) => `<div class="solution-detail">
                  <span class="s-num">${String(i + 1).padStart(2, "0")}</span>
                  <div><h4>${i === 0 ? "The decisive evidence" : i === 1 ? "The corroboration" : i === 2 ? "The broken alibi" : "The wider pattern"}</h4><p>${escape(para)}</p></div>
                </div>`).join("")}
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("clock")} Reconstruction</h2><span class="panel-kicker">${escape(c.timeWindow)}</span></div>
            <div class="panel-body">
              <div class="reconstruction-list">
                ${(solution.timelineReconstruction || []).map((row) => `<div class="reconstruction-row"><span>${escape(row.time)}</span><p>${escape(row.event)}</p></div>`).join("")}
              </div>
            </div>
          </section>

          <div class="result-actions">
            ${next ? `<a class="btn btn-primary btn-sm" href="#/brief/${escape(next.id)}">${UI().icon("arrow")} Next case · ${escape(next.title)}</a>` : ""}
            <button class="btn btn-ghost btn-sm" type="button" data-replay="${escape(c.id)}">${UI().icon("refresh")} Replay this case</button>
            <a class="btn btn-ghost btn-sm" href="#/cases">${UI().icon("folder")} Case archive</a>
          </div>
        </div>

        <div class="results-side">
          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("flask")} Your evidence</h2></div>
            <div class="panel-body">
              <div class="result-evidence-list">
                ${submittedEvidence.length ? submittedEvidence.map((ev) => {
                  const correct = (a.correctEvidence || []).includes(ev.id);
                  return `<div class="result-evidence ${correct ? "correct" : "wrong"}">${UI().icon(correct ? "check" : "x")}<span>${escape(ev.name)}</span><small>${correct ? "SUPPORTED" : "NOT DECISIVE"}</small></div>`;
                }).join("") : `<div class="result-evidence missed">${UI().icon("info")}<span>No exhibits submitted</span><small>0 PTS</small></div>`}
                ${(a.missedEvidence || []).map((id) => {
                  const ev = evidenceById(c, id);
                  return ev ? `<div class="result-evidence missed">${UI().icon("alert")}<span>${escape(ev.name)}</span><small>MISSED</small></div>` : "";
                }).join("")}
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h2>${UI().icon("scale")} Official finding</h2></div>
            <div class="panel-body">
              <div class="meta-list">
                <div class="meta-row"><span>Culprit</span><span>${escape(culprit ? culprit.name : "—")}</span></div>
                <div class="meta-row"><span>Motive</span><span>${escape(motive ? motive.text : "—")}</span></div>
                <div class="meta-row"><span>Method</span><span>${escape(method ? method.text : "—")}</span></div>
                <div class="meta-row"><span>Attempts</span><span>${p.attempt || 1}</span></div>
                <div class="meta-row"><span>Hints used</span><span>${p.hintsUsed || 0}</span></div>
              </div>
            </div>
          </section>

          <div class="red-herring"><strong>Red herrings:</strong> ${escape(solution.redHerring)}</div>
        </div>
      </div>
    </div>`;
    state.current = { case: c, tab: "results" };
    document.documentElement.style.setProperty("--case-accent", c.accent);
    notifyProgress();
  }

  /* ---------- events ---------- */

  function bind(root) {
    if (bound) return;
    bound = true;

    root.addEventListener("click", (event) => {
      const c = state.current && state.current.case;
      if (!c) return;

      const target = event.target;

      if (target.closest("[data-accuse]")) {
        openAccusation(c);
        return;
      }
      if (target.closest("[data-morgan-open]")) {
        if (window.CaseMind.Assistant) window.CaseMind.Assistant.open(c.id);
        return;
      }
      if (target.closest("[data-restart-case]")) {
        confirmRestart(c);
        return;
      }
      const replay = target.closest("[data-replay]");
      if (replay) {
        const id = replay.getAttribute("data-replay");
        const targetCase = Cases().byId(id);
        if (targetCase) confirmRestart(targetCase, true);
        return;
      }
      const evidenceBtn = target.closest("[data-evidence]");
      if (evidenceBtn) {
        openEvidence(c, evidenceBtn.getAttribute("data-evidence"));
        return;
      }
      const personBtn = target.closest("[data-person]");
      if (personBtn) {
        openSuspect(c, personBtn.getAttribute("data-person"));
        return;
      }
      const witnessBtn = target.closest("[data-witness]");
      if (witnessBtn) {
        toggleWitness(c, witnessBtn);
        return;
      }
      const timelineEl = target.closest("[data-timeline]");
      if (timelineEl) {
        const id = timelineEl.getAttribute("data-timeline");
        state.timelineOpen = state.timelineOpen === id ? null : id;
        document.querySelectorAll("[data-timeline]").forEach((el) => {
          el.classList.toggle("open", el.getAttribute("data-timeline") === state.timelineOpen);
        });
        return;
      }
      const filter = target.closest("[data-evfilter]");
      if (filter) {
        state.evidenceFilter = filter.getAttribute("data-evfilter");
        document.querySelectorAll("[data-evfilter]").forEach((btn) => btn.classList.toggle("active", btn === filter));
        document.querySelectorAll("[data-evidence-grid] .evidence-card").forEach((card) => {
          card.hidden = state.evidenceFilter !== "all" && card.getAttribute("data-category") !== state.evidenceFilter;
        });
        return;
      }
      if (target.closest("[data-compare-run]")) {
        const s = document.querySelector("[data-compare-suspect]");
        const ev = document.querySelector("[data-compare-evidence]");
        runComparison(c, s ? s.value : "", ev ? ev.value : "");
        return;
      }
      const prompt = target.closest("[data-note-prompt]");
      if (prompt) {
        const area = document.getElementById("case-notes");
        if (!area) return;
        const label = prompt.getAttribute("data-note-prompt");
        const prefix = area.value && !area.value.endsWith("\n") ? "\n" : "";
        area.value = `${area.value}${prefix}${label} `;
        area.focus();
        saveNotes(c, area.value);
        return;
      }
    });

    root.addEventListener("change", (event) => {
      const c = state.current && state.current.case;
      if (!c || state.current.tab !== "analysis") return;
      if (event.target.matches("[data-compare-suspect]") || event.target.matches("[data-compare-evidence]")) {
        const a = analysisState(c, Storage().getCase(c.id, true));
        const s = document.querySelector("[data-compare-suspect]");
        const ev = document.querySelector("[data-compare-evidence]");
        a.suspectId = s ? s.value : a.suspectId;
        a.evidenceId = ev ? ev.value : a.evidenceId;
        a.html = "";
      }
    });

    root.addEventListener("input", (event) => {
      if (!event.target.matches("[data-notes]")) return;
      const c = state.current && state.current.case;
      if (!c) return;
      const area = event.target;
      saveNotes(c, area.value);
      const count = document.getElementById("notes-count");
      if (count) count.textContent = `${area.value.length} / 12000 characters`;
    });

    root.addEventListener("keydown", (event) => {
      const timeline = event.target.closest("[data-timeline]");
      if (timeline && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        timeline.click();
      }
    });
  }

  function toggleWitness(c, btn) {
    const id = btn.getAttribute("data-witness");
    const item = btn.closest(".witness-item");
    if (!item || !id) return;
    const isOpen = item.classList.contains("open");
    if (!isOpen) {
      const isNew = Storage().markWitness(c.id, id);
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      if (isNew) {
        UI().toast("Witness statement recorded.", "info");
        const count = document.querySelector("[data-witness-count]");
        if (count) count.textContent = String((Storage().getCase(c.id).witnessesRead || []).length);
        updateProgressUI(c);
      }
    } else {
      item.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  }

  function runComparison(c, suspectId, evidenceId) {
    if (!suspectId || !evidenceId) return;
    const p = Storage().getCase(c.id, true);
    const a = analysisState(c, p);
    a.suspectId = suspectId;
    a.evidenceId = evidenceId;
    const evidence = evidenceById(c, evidenceId);
    const seen = (p.evidenceSeen || []).includes(evidenceId);
    if (!seen && window.CaseMind.Interrogation) {
      // A comparison is still allowed, but it explicitly reports the exhibit as unread.
      UI().toast("This exhibit has not been logged yet.", "info");
    }
    const matched = c.contradictions.find((x) => x.suspectId === suspectId && (x.evidenceIds || []).includes(evidenceId));
    if (matched && seen) {
      const isNew = Storage().markContradiction(c.id, matched.id);
      if (isNew) {
        UI().toast(matched.title, { type: "info", title: "Contradiction recorded" });
        scanAchievements();
      }
    }
    a.html = compareHtml(c, p, suspectId, evidenceId, true);
    const results = document.getElementById("compare-results");
    if (results) results.innerHTML = a.html;
    const list = document.getElementById("contradiction-list");
    if (list) list.innerHTML = contradictionList(c, Storage().getCase(c.id, true));
    updateProgressUI(c);
  }

  function saveNotes(c, value) {
    clearTimeout(state.notesTimer);
    const status = document.getElementById("notes-status");
    if (status) {
      status.textContent = "SAVING…";
      status.classList.remove("saved");
    }
    state.notesTimer = setTimeout(() => {
      Storage().setNotes(c.id, value);
      const label = document.getElementById("notes-status");
      if (label) {
        label.textContent = "SAVED LOCALLY";
        label.classList.add("saved");
      }
      notifyProgress();
    }, 450);
  }

  function confirmRestart(c, goToBrief) {
    const p = Storage().getCase(c.id);
    const hasProgress = p && (p.status === "solved" || p.status === "failed" || (p.evidenceSeen || []).length || (p.questionsAsked || []).length);
    const message = hasProgress
      ? "This will erase every logged exhibit, question, contradiction and note for this case. Your achievements and other cases are kept."
      : "Start this case from a clean file?";
    UI().confirm({
      kicker: "RESTART CASE",
      title: "Erase this case file?",
      message,
      confirmLabel: "Restart case",
      danger: true
    }).then((yes) => {
      if (!yes) return;
      Storage().resetCase(c.id);
      if (window.CaseMind.Interrogation) window.CaseMind.Interrogation.resetSelection(c.id);
      state.analysis[c.id] = null;
      state.timelineOpen = null;
      if (window.CaseMind.App && window.CaseMind.App.syncChrome) window.CaseMind.App.syncChrome();
      UI().toast("Case file reset. A clean record awaits.", "info");
      window.location.hash = goToBrief ? `#/brief/${c.id}` : `#/case/${c.id}/overview`;
      if (window.location.hash === `#/case/${c.id}/overview`) {
        // Hash may not change when already on the same route.
        const currentCase = Cases().byId(c.id);
        const root = document.getElementById("view");
        if (currentCase && root) render(root, currentCase, "overview");
      }
    });
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.Investigation = {
    render,
    renderResults,
    bind,
    openAccusation,
    openEvidence,
    openSuspect,
    statusOf,
    scanAchievements,
    nextUnsolved
  };
})();
