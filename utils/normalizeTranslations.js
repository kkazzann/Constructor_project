const normalizeTranslations = (translations) => {
  return translations.flat().map((t) => t.replaceAll("\n", "<br />"));
};

export default normalizeTranslations;
