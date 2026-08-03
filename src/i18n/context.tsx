import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { bundles } from "./bundles";
import type { Lang } from "./types";
import { HTML_LANG, LANGS } from "./types";

const STORAGE_KEY = "mayili-lang";

/** Map a BCP 47 tag (e.g. en-US, zh-TW) to a supported site language. */
function matchLang(tag: string): Lang | null {
  const lower = tag.trim().toLowerCase().replace(/_/g, "-");
  if (!lower) return null;

  const [base, region] = lower.split("-");

  if (base === "zh") {
    // Traditional: Taiwan, Hong Kong, Macau, or explicit Hant script
    if (
      region === "tw" ||
      region === "hk" ||
      region === "mo" ||
      region === "hant" ||
      lower.includes("-hant")
    ) {
      return "tw";
    }
    return "zh";
  }
  if (base === "en") return "en";
  if (base === "ja") return "ja";
  if (base === "ko") return "ko";
  return null;
}

/** Prefer navigator.languages order; fall back to navigator.language. */
function detectDeviceLang(): Lang {
  if (typeof navigator === "undefined") return "en";

  const candidates: string[] = [];
  if (Array.isArray(navigator.languages)) {
    candidates.push(...navigator.languages);
  }
  if (navigator.language) candidates.push(navigator.language);

  for (const tag of candidates) {
    const matched = matchLang(tag);
    if (matched) return matched;
  }
  return "en";
}

function readInitialLang(): Lang {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s && LANGS.includes(s as Lang)) return s as Lang;
  } catch {
    /* ignore */
  }
  return detectDeviceLang();
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = HTML_LANG[l];
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const pack = bundles[lang];
      const zhFallback = lang === "tw" ? bundles.zh : null;
      return pack[key] ?? zhFallback?.[key] ?? bundles.en[key] ?? key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
