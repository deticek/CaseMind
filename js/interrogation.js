/* CaseMind — suspect interrogation room */
(function () {
  "use strict";

  const UI = () => window.CaseMind.UI;
  const Storage = () => window.CaseMind.Storage;

  const selected = {};

  const QUESTION_ICON = '<path d="M4 4h16v12H8l-4 4V4Z"/><path d="M8 9h8M8 12h5"/>';

  function escape(value) {
    return UI().escapeHtml(value);
  }

  function progress(c) {
    return Storage().getCase(c.id) || { evidenceSeen: [], questionsAsked: [], contradictionsFound: [] };
  }

  function subjectFor(c) {
    const p = progress(c);
    const stored = selected[c.id];
    let subject = (c.suspects || []).find((s) => s.id === stored);
    if (!subject) subject = (c.suspects || [])[0] || null;
    if (subject) selected[c.id] = subject.id;
    return subject;
  }

  function askedIn(c, p) {
    return new Set(p.questionsAsked || []);
  }

  function askedCount(suspect, asked) {
    return (suspect.questions || []).filter((q) => asked.has(`${suspect.id}:${q.id}`)).length;
  }

  /* Records contradictions whose linked questions are all answered and whose
     linked evidence is all logged. Never touches the hidden solution. */
  function syncContradictions(c, options) {
    const opts = options || {};
    const p = progress(c);
    const asked = new Set(p.questionsAsked || []);
    const seen = new Set(p.evidenceSeen || []);
    const already = new Set(p.contradictionsFound || []);
    const newly = [];
    (c.contradictions || []).forEach((item) => {
      if (already.has(item.id)) return;
      const questionsDone = (item.questions || []).every((key) => asked.has(key));
      const evidenceDone = (item.evidenceIds || []).every((id) => seen.has(id));
      if (questionsDone && evidenceDone) {
        Storage().markContradiction(c.id, item.id);
        already.add(item.id);
        newly.push(item);
      }
    });
    if (newly.length && opts.toast !== false) {
      newly.forEach((item) => {
        UI().toast(item.title, { type: "info", title: "Contradiction recorded" });
      });
      if (window.CaseMind.Scoring) {
        const unlocked = window.CaseMind.Scoring.checkAchievements();
        unlocked.forEach((a) => UI().toast(a.name, { type: "achievement", title: "Achievement unlocked" }));
      }
    }
    return newly;
  }

  function contradictionForQuestion(c, key) {
    const p = progress(c);
    const found = p.contradictionsFound || [];
    return (c.contradictions || []).find((x) => found.includes(x.id) && (x.questions || []).includes(key)) || null;
  }

  function renderQuestion(suspect, question, index, asked) {
    const key = `${suspect.id}:${question.id}`;
    const isAsked = asked.has(key);
    return `<button class="question-btn${isAsked ? " asked" : ""}" type="button" data-question="${escape(question.id)}" data-suspect="${escape(suspect.id)}">
      <svg viewBox="0 0 24 24" aria-hidden="true">${QUESTION_ICON}</svg>
      <span class="q-index">Q${String(index + 1).padStart(2, "0")}</span>
      <span>${escape(question.text)}</span>
      ${isAsked ? '<span class="q-check">ASKED</span>' : ""}
    </button>`;
  }

  function renderTranscript(c, suspect, asked) {
    const p = progress(c);
    const entries = (suspect.questions || []).filter((q) => asked.has(`${suspect.id}:${q.id}`));
    if (!entries.length) {
      return `<div class="transcript-empty">
        The interview room is silent. Select a question above to begin the formal record.<br><br>
        <span class="mono" style="font-size:8px;color:var(--dim)">STATEMENTS ARE RECORDED IN THIS BROWSER ONLY</span>
      </div>`;
    }
    return entries.map((q, index) => {
      const key = `${suspect.id}:${q.id}`;
      const contradiction = contradictionForQuestion(c, key);
      return `<div class="qa">
        <div class="qa-question"><span>Q${String((suspect.questions || []).indexOf(q) + 1).padStart(2, "0")}</span><div>${escape(q.text)}</div></div>
        <div class="qa-answer${contradiction ? " contradiction" : ""}">
          <span class="answer-name">${contradiction ? "Contradiction recorded · " : ""}${escape(suspect.name)}</span>
          ${escape(q.answer)}
        </div>
      </div>`;
    }).join("") + `<div class="transcript-end">End of current record · ${entries.length} of ${(suspect.questions || []).length} questions</div>`;
  }

  function render(c) {
    const p = progress(c);
    const asked = askedIn(c, p);
    const subject = subjectFor(c);
    if (!subject) return `<div class="empty-state"><h3>No interrogation subjects</h3><p>This case file has no suspects on record.</p></div>`;
    const total = (subject.questions || []).length;
    const done = askedCount(subject, asked);

    const list = (c.suspects || []).map((s) => {
      const sc = askedCount(s, asked);
      return `<button class="interrogation-person${s.id === subject.id ? " active" : ""}" type="button" data-suspect="${escape(s.id)}">
        <span class="suspect-avatar">${escape(UI().initials(s.name))}</span>
        <span>
          <strong>${escape(s.name)}</strong>
          <small>${escape(s.role)}</small>
        </span>
        <span class="person-progress">${sc}/${(s.questions || []).length}</span>
      </button>`;
    }).join("");

    const questions = (subject.questions || []).map((q, index) => renderQuestion(subject, q, index, asked)).join("");

    return `<div class="interrogation-layout">
      <div>
        <div class="question-board-label"><span>Interview subjects</span><span>${done}/${total}</span></div>
        <div class="interrogation-list">${list}</div>
      </div>
      <div class="interrogation-room">
        <div class="interrogation-subject">
          <span class="suspect-avatar">${escape(UI().initials(subject.name))}</span>
          <div>
            <h2>${escape(subject.name)}</h2>
            <div class="subject-role">${escape(subject.role)} · ${escape(subject.age)} years</div>
            <div class="subject-alibi"><strong>Declared alibi</strong>${escape(subject.alibi)}</div>
          </div>
        </div>
        <div class="question-board">
          <div class="question-board-label"><span>Available questions</span><span>${done} asked</span></div>
          <div class="question-list">${questions}</div>
        </div>
        <div class="transcript" aria-live="polite">${renderTranscript(c, subject, asked)}</div>
      </div>
    </div>`;
  }

  function bind(container, c, helpers) {
    const opts = helpers || {};
    if (!container || container.dataset.interrogationBound === "1") return;
    container.dataset.interrogationBound = "1";

    container.addEventListener("click", (event) => {
      const person = event.target.closest("[data-suspect]");
      if (person && !event.target.closest("[data-question]")) {
        const id = person.getAttribute("data-suspect");
        if (!id) return;
        selected[c.id] = id;
        container.innerHTML = render(c);
        const transcript = container.querySelector(".transcript");
        if (transcript) transcript.scrollIntoView({ block: "nearest", behavior: "smooth" });
        return;
      }

      const questionBtn = event.target.closest("[data-question]");
      if (!questionBtn) return;
      const suspectId = questionBtn.getAttribute("data-suspect");
      const questionId = questionBtn.getAttribute("data-question");
      const suspect = (c.suspects || []).find((s) => s.id === suspectId);
      const question = suspect && (suspect.questions || []).find((q) => q.id === questionId);
      if (!suspect || !question) return;

      const isNew = Storage().markQuestion(c.id, suspect.id, question.id);
      if (isNew) Storage().updateCase(c.id, { status: "in_progress" });
      syncContradictions(c);
      container.innerHTML = render(c);
      const transcript = container.querySelector(".transcript");
      if (transcript) transcript.scrollTop = transcript.scrollHeight;
      if (typeof opts.onProgress === "function") opts.onProgress();
    });
  }

  function resetSelection(caseId) {
    if (caseId) delete selected[caseId];
    else Object.keys(selected).forEach((key) => delete selected[key]);
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.Interrogation = {
    render,
    bind,
    syncContradictions,
    contradictionForQuestion,
    resetSelection
  };
})();
