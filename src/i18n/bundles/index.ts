import type { Lang } from "../types";
import en from "./en";
import ja from "./ja";
import ko from "./ko";
import tw from "./tw";
import zh from "./zh";

function asMap(m: object): Record<string, string> {
  return { ...(m as Record<string, string>) };
}

export const bundles: Record<Lang, Record<string, string>> = {
  zh: asMap(zh),
  tw: asMap(tw),
  en: asMap(en),
  ja: asMap(ja),
  ko: asMap(ko),
};
