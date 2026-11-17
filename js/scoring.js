/* CaseMind — scoring, progress and achievements */
(function () {
  "use strict";

  const ACHIEVEMENTS = [
    {
      id: "first-case",
      name: "First Case",
      description: "Close your first investigation — right or wrong.",
      icon: "badge",
      test: ({ stats }) => stats.completed >= 1
    },
    {
      id: "sharp-eye",
      name: "Sharp Eye",
      description: "Solve a case without asking MORGAN for a single hint.",
      icon: "eye",
      test: ({ allProgress }) => Object.values(allProgress).some((p) => p.status === "solved" && (p.hintsUsed || 0) === 0)
    },
    {
      id: "truth-seeker",
      name: "Truth Seeker",
      description: "Read every witness statement in a single case.",
      icon: "book",
      test: ({ cases, allProgress }) => cases.some((c) => {
        const p = allProgress[c.id];
        return p && c.witnesses.length > 0 && c.witnesses.every((w) => (p.witnessesRead || []).includes(w.id));
      })
    },
    {
      id: "evidence-tech",
      name: "Evidence Technician",
      description: "Examine every piece of evidence in one case.",
      icon: "flask",
      test: ({ cases, allProgress }) => cases.some((c) => {
        const p = allProgress[c.id];
        return p && c.evidence.length > 0 && c.evidence.every((e) => (p.evidenceSeen || []).includes(e.id));
      })
    },
    {
      id: "interrogator",
      name: "Interrogator",
      description: "Ask every available question to every suspect in one case.",
      icon: "chat",
      test: ({ cases, allProgress }) => cases.some((c) => {
        const p = allProgress[c.id];
        if (!p) return false;
        return c.suspects.every((s) => s.questions.every((q) => (p.questionsAsked || []).includes(`${s.id}:${q.id}`)));
      })
    },
    {
      id: "contradiction-hunter",
      name: "Contradiction Hunter",
      description: "Surface every documented contradiction in a single case.",
      icon: "puzzle",
      test: ({ cases, allProgress }) => cases.some((c) => {
        const p = allProgress[c.id];
        return p && c.contradictions.length > 0 && c.contradictions.every((x) => (p.contradictionsFound || []).includes(x.id));
      })
    },
    {
      id: "perfect-case",
      name: "Perfect Investigation",
      description: "Earn a perfect 100 score on a final accusation.",
      icon: "star",
      test: ({ allProgress }) => Object.values(allProgress).some((p) => p.accusation && p.accusation.score === 100)
    },
    {
      id: "master-detective",
      name: "Master Detective",
      description: "Solve all ten case files in the archive.",
      icon: "crown",
      test: ({ cases, allProgress }) => cases.length > 0 && cases.every((c) => {
        const p = allProgress[c.id];
        return p && p.status === "solved";
      })
    }
  ];

  function evaluateAccusation(caseData, answer) {
    const solution = caseData.solution;
    const selectedEvidence = Array.isArray(answer.evidenceIds) ? answer.evidenceIds.slice(0, 3) : [];
    const wantedEvidence = solution.evidenceIds || [];

    const correctCulprit = answer.culpritId === solution.culpritId;
    const correctMotive = answer.motiveId === solution.motiveId;
    const correctMethod = answer.methodId === solution.methodId;
    const evidenceMatched = selectedEvidence.filter((id) => wantedEvidence.includes(id));
    const evidenceMissed = wantedEvidence.filter((id) => !selectedEvidence.includes(id));
    const evidenceWrong = selectedEvidence.filter((id) => !wantedEvidence.includes(id));

    const culpritPoints = correctCulprit ? 45 : 0;
    const motivePoints = correctMotive ? 20 : 0;
    const methodPoints = correctMethod ? 20 : 0;
    const evidencePoints = evidenceMatched.length * 5;
    const base = culpritPoints + motivePoints + methodPoints + evidencePoints;
    const hintPenalty = Math.min(15, (answer.hintsUsed || 0) * 5);
    const score = Math.max(0, base - hintPenalty);

    return {
      culpritId: answer.culpritId,
      motiveId: answer.motiveId,
      methodId: answer.methodId,
      evidenceIds: selectedEvidence,
      correctCulprit,
      correctMotive,
      correctMethod,
      correctEvidence: evidenceMatched,
      missedEvidence: evidenceMissed,
      wrongEvidence: evidenceWrong,
      culpritPoints,
      motivePoints,
      methodPoints,
      evidencePoints,
      hintPenalty,
      score,
      maxScore: 100,
      solved: correctCulprit,
      verdict: correctCulprit && score === 100 ? "perfect" : correctCulprit ? "solved" : "failed",
      submittedAt: new Date().toISOString()
    };
  }

  function progressFor(caseData, progress) {
    if (!progress || !caseData) {
      return { percent: 0, evidence: 0, questions: 0, contradictions: 0, witnesses: 0, totalQuestions: 0, asked: 0, totalEvidence: 0, seen: 0, totalWitnesses: 0, read: 0, totalContradictions: 0, found: 0 };
    }
    const totalEvidence = caseData.evidence.length;
    const seen = caseData.evidence.filter((e) => (progress.evidenceSeen || []).includes(e.id)).length;
    const totalQuestions = caseData.suspects.reduce((sum, s) => sum + s.questions.length, 0);
    const asked = caseData.suspects.reduce((sum, s) => sum + s.questions.filter((q) => (progress.questionsAsked || []).includes(`${s.id}:${q.id}`)).length, 0);
    const totalWitnesses = caseData.witnesses.length;
    const read = caseData.witnesses.filter((w) => (progress.witnessesRead || []).includes(w.id)).length;
    const totalContradictions = caseData.contradictions.length;
    const found = caseData.contradictions.filter((c) => (progress.contradictionsFound || []).includes(c.id)).length;

    const evidencePart = totalEvidence ? (seen / totalEvidence) * 35 : 0;
    const questionPart = totalQuestions ? (asked / totalQuestions) * 35 : 0;
    const witnessPart = totalWitnesses ? (read / totalWitnesses) * 15 : 0;
    const contradictionPart = totalContradictions ? (found / totalContradictions) * 15 : 0;

    return {
      percent: Math.round(Math.min(100, evidencePart + questionPart + witnessPart + contradictionPart)),
      evidence: totalEvidence ? Math.round((seen / totalEvidence) * 100) : 0,
      questions: totalQuestions ? Math.round((asked / totalQuestions) * 100) : 0,
      witnesses: totalWitnesses ? Math.round((read / totalWitnesses) * 100) : 0,
      contradictions: totalContradictions ? Math.round((found / totalContradictions) * 100) : 0,
      totalQuestions,
      asked,
      totalEvidence,
      seen,
      totalWitnesses,
      read,
      totalContradictions,
      found
    };
  }

  function rankFor(solvedCount) {
    const ranks = [
      { min: 10, name: "Master Detective", note: "Every file in the archive is closed." },
      { min: 9, name: "Chief Inspector", note: "One case from a perfect archive." },
      { min: 7, name: "Detective", note: "A formidable record of closed cases." },
      { min: 5, name: "Senior Investigator", note: "Patterns and motives are becoming familiar." },
      { min: 3, name: "Investigator", note: "The evidence is starting to speak." },
      { min: 1, name: "Field Agent", note: "Your first closed case. Keep going." },
      { min: 0, name: "Case Cadet", note: "The archive is waiting." }
    ];
    return ranks.find((r) => solvedCount >= r.min) || ranks[ranks.length - 1];
  }

  function checkAchievements() {
    const Storage = window.CaseMind.Storage;
    const Cases = window.CaseMind.Cases;
    const cases = Cases.all();
    const allProgress = Storage.allProgress();
    const stats = Storage.getStats();
    const context = { cases, allProgress, stats };
    const newly = [];

    ACHIEVEMENTS.forEach((achievement) => {
      let passed = false;
      try { passed = achievement.test(context); } catch (err) { passed = false; }
      if (passed && Storage.unlockAchievement(achievement.id)) {
        newly.push(achievement);
      }
    });
    return newly;
  }

  function achievementById(id) {
    return ACHIEVEMENTS.find((a) => a.id === id) || null;
  }

  function getAchievements() {
    return ACHIEVEMENTS;
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.Scoring = {
    evaluateAccusation,
    progressFor,
    rankFor,
    checkAchievements,
    achievementById,
    getAchievements
  };
})();
