/* CaseMind — local persistence layer */
(function () {
  "use strict";

  const KEY = "casemind.state.v1";
  const SESSION_KEY = "casemind.sessionKey";

  const DEFAULT_SETTINGS = {
    assistantMode: "simulated",
    liveProvider: "pollinations",
    liveEndpoint: "https://text.pollinations.ai/openai",
    liveModel: "openai-fast",
    rememberKey: false,
    motion: "full"
  };

  function defaultState() {
    return {
      version: 1,
      createdAt: new Date().toISOString(),
      settings: { ...DEFAULT_SETTINGS },
      cases: {},
      achievements: {}
    };
  }

  let storageOK = true;
  let state = read();

  function safeParse(raw) {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (err) { return null; }
  }

  function mergeState(raw) {
    const base = defaultState();
    if (!raw || typeof raw !== "object") return base;
    return {
      ...base,
      ...raw,
      settings: { ...base.settings, ...(raw.settings || {}) },
      cases: raw.cases && typeof raw.cases === "object" ? raw.cases : {},
      achievements: raw.achievements && typeof raw.achievements === "object" ? raw.achievements : {}
    };
  }

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      return mergeState(safeParse(raw));
    } catch (err) {
      storageOK = false;
      return defaultState();
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      storageOK = true;
    } catch (err) {
      storageOK = false;
    }
    return state;
  }

  function now() {
    return new Date().toISOString();
  }

  function blankProgress(caseId) {
    return {
      caseId,
      status: "in_progress",
      startedAt: now(),
      updatedAt: now(),
      completedAt: null,
      evidenceSeen: [],
      witnessesRead: [],
      questionsAsked: [],
      contradictionsFound: [],
      notes: "",
      hintsUsed: 0,
      morganHistory: [],
      accusation: null,
      attempt: 0
    };
  }

  function sanitizeProgress(p) {
    if (!p || typeof p !== "object") return null;
    return {
      ...blankProgress(p.caseId || ""),
      ...p,
      evidenceSeen: Array.isArray(p.evidenceSeen) ? p.evidenceSeen : [],
      witnessesRead: Array.isArray(p.witnessesRead) ? p.witnessesRead : [],
      questionsAsked: Array.isArray(p.questionsAsked) ? p.questionsAsked : [],
      contradictionsFound: Array.isArray(p.contradictionsFound) ? p.contradictionsFound : [],
      morganHistory: Array.isArray(p.morganHistory) ? p.morganHistory : []
    };
  }

  function getCase(caseId, create) {
    const existing = state.cases[caseId];
    if (existing && typeof existing === "object") {
      const progress = sanitizeProgress(existing);
      progress.caseId = caseId;
      state.cases[caseId] = progress;
      return progress;
    }
    if (!create) return null;
    const progress = blankProgress(caseId);
    state.cases[caseId] = progress;
    save();
    return progress;
  }

  function startCase(caseId) {
    const existing = getCase(caseId);
    if (existing && existing.status === "in_progress") {
      existing.updatedAt = now();
      save();
      return existing;
    }
    if (existing && (existing.status === "solved" || existing.status === "failed")) {
      return existing;
    }
    const progress = blankProgress(caseId);
    state.cases[caseId] = progress;
    save();
    return progress;
  }

  function resetCase(caseId) {
    delete state.cases[caseId];
    save();
    return startCase(caseId);
  }

  function updateCase(caseId, patch) {
    const progress = getCase(caseId, true);
    Object.assign(progress, typeof patch === "function" ? patch(progress) : patch);
    progress.updatedAt = now();
    save();
    return progress;
  }

  function addUnique(caseId, field, value) {
    const progress = getCase(caseId, true);
    if (!Array.isArray(progress[field])) progress[field] = [];
    const isNew = !progress[field].includes(value);
    if (isNew) {
      progress[field].push(value);
      progress.updatedAt = now();
      save();
    }
    return isNew;
  }

  function markEvidence(caseId, evidenceId) {
    return addUnique(caseId, "evidenceSeen", evidenceId);
  }

  function markWitness(caseId, witnessId) {
    return addUnique(caseId, "witnessesRead", witnessId);
  }

  function markQuestion(caseId, suspectId, questionId) {
    return addUnique(caseId, "questionsAsked", `${suspectId}:${questionId}`);
  }

  function markContradiction(caseId, contradictionId) {
    return addUnique(caseId, "contradictionsFound", contradictionId);
  }

  function addHint(caseId) {
    return updateCase(caseId, (p) => ({ hintsUsed: (p.hintsUsed || 0) + 1 }));
  }

  function setNotes(caseId, notes) {
    return updateCase(caseId, { notes: String(notes || "") });
  }

  function setMorganHistory(caseId, history) {
    return updateCase(caseId, { morganHistory: (history || []).slice(-60) });
  }

  function completeCase(caseId, result) {
    const progress = getCase(caseId, true);
    progress.accusation = result;
    progress.attempt = (progress.attempt || 0) + 1;
    progress.completedAt = now();
    progress.status = result.correctCulprit ? "solved" : "failed";
    progress.updatedAt = now();
    save();
    return progress;
  }

  function unlockAchievement(id) {
    if (!id || state.achievements[id]) return false;
    state.achievements[id] = { unlockedAt: now() };
    save();
    return true;
  }

  function getSettings() {
    return { ...DEFAULT_SETTINGS, ...(state.settings || {}) };
  }

  function saveSettings(patch) {
    state.settings = { ...getSettings(), ...(patch || {}) };
    save();
    return getSettings();
  }

  function getLiveKey() {
    try {
      if (getSettings().rememberKey) return localStorage.getItem("casemind.liveKey") || "";
      return sessionStorage.getItem(SESSION_KEY) || "";
    } catch (err) {
      return "";
    }
  }

  function setLiveKey(key) {
    const settings = getSettings();
    try {
      if (settings.rememberKey) {
        localStorage.setItem("casemind.liveKey", key || "");
        sessionStorage.removeItem(SESSION_KEY);
      } else {
        sessionStorage.setItem(SESSION_KEY, key || "");
        localStorage.removeItem("casemind.liveKey");
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  function allProgress() {
    return state.cases || {};
  }

  function activeCases() {
    return Object.values(state.cases || {})
      .filter((p) => p && p.status === "in_progress")
      .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  }

  function getActiveCase() {
    return activeCases()[0] || null;
  }

  function getStats() {
    const all = Object.values(state.cases || {});
    const solved = all.filter((p) => p.status === "solved");
    const failed = all.filter((p) => p.status === "failed");
    const completed = solved.length + failed.length;
    const scores = all.filter((p) => p.accusation && typeof p.accusation.score === "number").map((p) => p.accusation.score);
    const totalHints = all.reduce((sum, p) => sum + (p.hintsUsed || 0), 0);
    const evidenceSeen = all.reduce((sum, p) => sum + (p.evidenceSeen ? p.evidenceSeen.length : 0), 0);
    const questionsAsked = all.reduce((sum, p) => sum + (p.questionsAsked ? p.questionsAsked.length : 0), 0);
    const contradictionsFound = all.reduce((sum, p) => sum + (p.contradictionsFound ? p.contradictionsFound.length : 0), 0);
    const accusations = all.filter((p) => p.accusation).length;
    return {
      solved: solved.length,
      failed: failed.length,
      completed,
      inProgress: activeCases().length,
      bestScore: scores.length ? Math.max(...scores) : 0,
      averageScore: scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
      accuracy: accusations ? Math.round((solved.length / accusations) * 100) : 0,
      totalHints,
      evidenceSeen,
      questionsAsked,
      contradictionsFound,
      achievements: Object.keys(state.achievements || {}).length
    };
  }

  function getAchievements() {
    return state.achievements || {};
  }

  function exportData() {
    return JSON.stringify({
      app: "CaseMind",
      exportedAt: now(),
      version: state.version,
      data: state
    }, null, 2);
  }

  function resetAll() {
    state = defaultState();
    try {
      localStorage.removeItem(KEY);
      localStorage.removeItem("casemind.liveKey");
      sessionStorage.removeItem(SESSION_KEY);
    } catch (err) { /* in-memory reset still applies */ }
    save();
    return state;
  }

  function getState() {
    return state;
  }

  function isStorageAvailable() {
    return storageOK;
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.Storage = {
    KEY,
    getState,
    getSettings,
    saveSettings,
    getLiveKey,
    setLiveKey,
    getCase,
    startCase,
    resetCase,
    updateCase,
    markEvidence,
    markWitness,
    markQuestion,
    markContradiction,
    addHint,
    setNotes,
    setMorganHistory,
    completeCase,
    unlockAchievement,
    allProgress,
    activeCases,
    getActiveCase,
    getStats,
    getAchievements,
    exportData,
    resetAll,
    isStorageAvailable,
    save
  };
})();
