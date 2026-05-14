export type Lang = "zh" | "en" | "ja" | "ko";

export const LANGS: Lang[] = ["zh", "en", "ja", "ko"];

export const LANG_LABEL: Record<Lang, string> = {
  zh: "中文",
  en: "EN",
  ja: "日本語",
  ko: "한국어",
};

export const HTML_LANG: Record<Lang, string> = {
  zh: "zh-CN",
  en: "en",
  ja: "ja",
  ko: "ko",
};
