// Shared helpers load before the existing app; credentials never enter backup payloads.
let rpRequestBusy = false;
function getAiModel() {
  const value = lsGet('speakup_ai_model', 'gemini-3.6-flash');
  return /^[a-zA-Z0-9._-]+$/.test(value) ? value : 'gemini-3.6-flash';
}
function sanitizeBackup(payload) {
  const clean = { ...payload, data: { ...(payload.data || {}) } };
  Object.keys(clean.data).forEach(key => {
    if (!key.startsWith('speakup_') || /apikey|token|secret|credential/i.test(key)) delete clean.data[key];
  });
  return clean;
}
function isItemMastered(en) {
  const record = practiced[en];
  return !!record && record.lastScore >= .85 && record.masteryReps >= 2;
}
