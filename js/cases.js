/* CaseMind — scenario loader and artwork */
(function () {
  "use strict";

  const fallback = window.CASEMIND_FALLBACK || null;
  const state = {
    loaded: false,
    loading: null,
    all: [],
    byId: {},
    error: null,
    source: "json"
  };

  const DIFFICULTY_LABELS = {
    easy: "Rookie",
    medium: "Detective",
    hard: "Inspector"
  };

  function sortCases(cases) {
    const order = { easy: 0, medium: 1, hard: 2 };
    return cases.sort((a, b) => {
      const diff = (order[a.difficulty] ?? 9) - (order[b.difficulty] ?? 9);
      if (diff !== 0) return diff;
      return String(a.title).localeCompare(String(b.title));
    });
  }

  function normalize(raw, index) {
    const c = { ...raw };
    c.number = String(index + 1).padStart(2, "0");
    c.difficultyLabel = DIFFICULTY_LABELS[c.difficulty] || "Unknown";
    c.difficultyClass = `diff-${c.difficulty || "medium"}`;
    c.suspects = Array.isArray(c.suspects) ? c.suspects : [];
    c.witnesses = Array.isArray(c.witnesses) ? c.witnesses : [];
    c.evidence = Array.isArray(c.evidence) ? c.evidence : [];
    c.timeline = Array.isArray(c.timeline) ? c.timeline : [];
    c.contradictions = Array.isArray(c.contradictions) ? c.contradictions : [];
    c.hints = Array.isArray(c.hints) ? c.hints : [];
    c.cover = c.cover || {};
    c.accent = c.cover.accent || "#C43D4B";
    c.motif = c.cover.motif || "museum";
    return c;
  }

  async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    return response.json();
  }

  async function loadFromFiles() {
    const manifest = await fetchJson("data/cases/index.json");
    const files = Array.isArray(manifest.cases) ? manifest.cases : [];
    if (!files.length) throw new Error("Case manifest is empty.");
    const results = await Promise.all(
      files.map((file) => fetchJson(`data/cases/${file}`))
    );
    return { manifest: files, cases: results, source: "json" };
  }

  function loadFromFallback() {
    if (!fallback || !fallback.cases) throw new Error("No local case archive available.");
    const raw = Object.entries(fallback.cases).map(([file, data]) => ({ file, data }));
    return {
      manifest: raw.map((r) => r.file),
      cases: raw.map((r) => r.data),
      source: "archive"
    };
  }

  async function load() {
    if (state.loaded) return state.all;
    if (state.loading) return state.loading;

    state.loading = (async () => {
      let payload;
      try {
        payload = await loadFromFiles();
      } catch (err) {
        try {
          payload = loadFromFallback();
        } catch (fallbackErr) {
          state.error = "The case archive could not be loaded. Serve the folder over HTTP or check that data/cases/index.json exists.";
          state.loading = null;
          throw new Error(state.error);
        }
      }

      const cases = payload.cases.filter((c) => c && c.id);
      const normalized = sortCases(cases.map((c, index) => normalize(c, index)));
      state.all = normalized;
      state.byId = Object.fromEntries(normalized.map((c) => [c.id, c]));
      state.source = payload.source;
      state.loaded = true;
      state.loading = null;
      return state.all;
    })();

    return state.loading;
  }

  function all() {
    return state.all;
  }

  function byId(id) {
    return state.byId[id] || null;
  }

  function source() {
    return state.source;
  }

  function getError() {
    return state.error;
  }

  function isLoaded() {
    return state.loaded;
  }

  function getCaseOrder(caseId) {
    const c = byId(caseId);
    return c ? c.number : "—";
  }

  /* Line-art motifs for the atmospheric case covers. */
  const MOTIFS = {
    museum: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">
        <path d="M30 62 110 24l80 38H30Z" opacity=".55"/>
        <path d="M45 62v65M75 62v65M105 62v65M135 62v65M165 62v65M32 127h156M24 140h172" opacity=".7"/>
        <path d="M93 87h42v33H93zM101 96h26v24" opacity=".5"/>
        <circle cx="151" cy="49" r="5" opacity=".7"/>
        <path d="m177 30-7 8M188 43l-9 4M162 26l-2 10" opacity=".45"/>
        <path d="M14 140h192" opacity=".25"/>
      </svg>`,
    train: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round">
        <circle cx="174" cy="38" r="17" opacity=".45"/><path d="M157 38h34M174 21v34" opacity=".25"/>
        <path d="M38 74h118l20 31H25l13-31Z" opacity=".7"/>
        <path d="M53 82h28v15H53zM91 82h28v15H91zM129 82h20v15" opacity=".55"/>
        <path d="M25 105h151M39 105l-6 17M163 105l7 17M29 122h38M119 122h37" opacity=".7"/>
        <path d="M6 135h208M17 143h190" opacity=".25"/>
        <path d="M154 65c8-9 17-9 25 0M46 65h13" opacity=".5"/>
        <path d="m170 54 22-20M192 34l6 2-2 6" opacity=".4"/>
      </svg>`,
    manor: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linejoin="round">
        <path d="M46 140V76l24-18 24 18v64M118 140V58l28-20 28 20v82" opacity=".65"/>
        <path d="M32 140h160M54 93h14v16H54zM76 93h8v16M132 76h12v18h-12zM156 76h12v18h-12zM132 109h12v18h-12zM156 109h12v18h-12z" opacity=".55"/>
        <path d="M64 50V36h12v6M136 39V27h11v4" opacity=".4"/>
        <circle cx="180" cy="33" r="13" opacity=".4"/>
        <path d="M18 140h184M27 149h166" opacity=".25"/>
        <path d="M92 140v-17h17v17M160 140v-17h13v17" opacity=".5"/>
        <path d="M12 84c11-4 18-4 27 0M188 96c9-3 15-3 22 0" opacity=".18"/>
      </svg>`,
    blackout: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round">
        <path d="M110 16v44M102 28h16M103 39l15-9M103 30l15 9" opacity=".6"/>
        <path d="M64 92h92l-10 48H74L64 92Z" opacity=".55"/>
        <path d="M78 104h14v14H78zM110 104h14v14h-14zM94 126h14v14H94zM126 126h14v14h-14z" opacity=".4"/>
        <path d="M184 38l-12 15h13l-9 18" opacity=".6"/>
        <path d="M36 48l9 8M30 64h12M45 36l4 11" opacity=".4"/>
        <path d="M12 140h196M16 150h188" opacity=".22"/>
        <path d="M66 92 51 75M160 92l14-17" opacity=".35"/>
      </svg>`,
    lab: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">
        <path d="M84 34h30v28l18 65c2 8-3 13-11 13H77c-8 0-13-5-11-13l18-65V34Z" opacity=".65"/>
        <path d="M80 32h38M83 28h30M84 100h30" opacity=".45"/>
        <path d="M79 110h45l8 17c2 7-3 11-10 11H81c-7 0-12-4-10-11l8-17Z" opacity=".25"/>
        <circle cx="94" cy="121" r="3" opacity=".7"/><circle cx="111" cy="128" r="2" opacity=".7"/>
        <path d="M153 32c-11 13 11 20 0 33s11 20 0 33M174 32c-11 13 11 20 0 33s11 20 0 33" opacity=".4"/>
        <path d="M151 36h4M169 65h4M151 73h4M170 101h4" opacity=".45"/>
        <path d="M16 140h188M28 150h164" opacity=".22"/>
      </svg>`,
    glasshouse: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">
        <path d="M34 84c0-34 34-56 76-56s76 22 76 56M34 84h152M43 84v56M177 84v56M68 84v56M152 84v56M110 51v89" opacity=".55"/>
        <path d="M34 84c18-19 38-29 76-29s58 10 76 29" opacity=".3"/>
        <path d="M17 140h186M26 149h168" opacity=".25"/>
        <path d="M55 140v-22c0-8 7-13 13-13s12 5 12 13v22M73 118c-1-13-8-19-17-21M62 111c6-8 14-9 20-7" opacity=".5"/>
        <path d="M145 140v-29c0-9 8-15 15-15s14 6 14 15v29M160 112c0-16 8-23 19-26M152 120c9-8 18-8 25-3" opacity=".55"/>
        <path d="M110 84v56" opacity=".3"/>
      </svg>`,
    studio: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round">
        <rect x="83" y="29" width="54" height="72" rx="27" opacity=".6"/>
        <path d="M72 70c0 21 17 37 38 37s38-16 38-37M110 107v26M91 133h38M101 133v-26" opacity=".55"/>
        <path d="M45 48c-9 11-13 22-13 34s4 23 13 34M175 48c9 11 13 22 13 34s-4 23-13 34" opacity=".4"/>
        <path d="M28 61c-5 7-8 14-8 21s3 14 8 21M192 61c5 7 8 14 8 21s-3 14-8 21" opacity=".25"/>
        <path d="M14 140h192M25 150h170" opacity=".22"/>
        <path d="M155 29v22M164 34v12M173 37v6" opacity=".35"/>
      </svg>`,
    gallery: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linejoin="round">
        <path d="M57 29h106v94H57z" opacity=".65"/><path d="M66 38h88v76H66z" opacity=".4"/>
        <path d="M79 97c11-24 22-34 35-22 11 10 18 3 26-14" opacity=".45"/>
        <circle cx="140" cy="55" r="6" opacity=".5"/>
        <path d="M110 123v17M86 140h48" opacity=".5"/>
        <path d="M48 20 39 8M172 20l9-12M36 76h-12M184 76h12" opacity=".35"/>
        <path d="M72 66c8-8 20-8 28 0" opacity=".2"/>
        <path d="M14 152h192" opacity=".22"/>
      </svg>`,
    lighthouse: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">
        <path d="M91 132 101 60h18l10 72H91Z" opacity=".6"/>
        <path d="M98 60h24M95 78h30M92 96h37M89 114h42M86 132h48" opacity=".4"/>
        <path d="M104 48h12v12h-12zM110 36v12" opacity=".6"/>
        <path d="m116 44 58-19M116 52l58 19M174 25l8-6M182 77l-8-6" opacity=".28"/>
        <path d="M13 149c15-7 28-7 41 0 15-7 28-7 41 0 15-7 28-7 41 0 15-7 28-7 41 0 8-4 16-5 25-2" opacity=".38"/>
        <path d="M31 139c9-4 18-4 27 0M160 134c8-3 16-3 23 0" opacity=".25"/>
        <circle cx="43" cy="44" r="12" opacity=".3"/>
      </svg>`,
    lake: `
      <svg viewBox="0 0 220 170" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="170" cy="40" r="16" opacity=".35"/>
        <path d="M45 105V74l22-18 22 18v31M54 80h9v11h-9zM72 80h6v11M30 105h73" opacity=".55"/>
        <path d="M124 102c7-14 11-24 11-38M135 99c-4-8-7-14-7-24M126 77c-3-8-7-12-13-15M130 67c3-8 8-11 14-13" opacity=".5"/>
        <path d="M12 130c20-5 38-5 58 0 20-5 38-5 58 0 20-5 38-5 58 0 7-2 14-2 22 0" opacity=".35"/>
        <path d="M14 141c20-5 38-5 58 0 20-5 38-5 58 0 20-5 38-5 58 0" opacity=".22"/>
        <path d="M112 118c14-3 27-3 41 0l-6 7h-29l-6-7ZM126 114l7-6 7 6" opacity=".55"/>
        <path d="M55 52c8-8 17-8 25 0" opacity=".25"/>
      </svg>`
  };

  function motif(name) {
    return MOTIFS[name] || MOTIFS.museum;
  }

  function difficultyLabel(value) {
    return DIFFICULTY_LABELS[value] || "Unknown";
  }

  function findSuspect(caseData, suspectId) {
    return (caseData.suspects || []).find((s) => s.id === suspectId) || null;
  }

  function findEvidence(caseData, evidenceId) {
    return (caseData.evidence || []).find((e) => e.id === evidenceId) || null;
  }

  function findWitness(caseData, witnessId) {
    return (caseData.witnesses || []).find((w) => w.id === witnessId) || null;
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.Cases = {
    load,
    all,
    byId,
    source,
    getError,
    isLoaded,
    motivation: motif,
    motif,
    difficultyLabel,
    findSuspect,
    findEvidence,
    findWitness,
    getCaseOrder
  };
})();
