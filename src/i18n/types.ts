export type Lang = "zh" | "tw" | "en" | "ja" | "ko";

export const LANGS: Lang[] = ["zh", "tw", "en", "ja", "ko"];

export const LANG_LABEL: Record<Lang, string> = {
  zh: "简体",
  tw: "繁體",
  en: "EN",
  ja: "日本語",
  ko: "한국어",
};

export const HTML_LANG: Record<Lang, string> = {
  zh: "zh-CN",
  tw: "zh-TW",
  en: "en",
  ja: "ja",
  ko: "ko",
};
