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

function readStoredLang(): Lang {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s && LANGS.includes(s as Lang)) return s as Lang;
  } catch {
    /* ignore */
  }
  return "zh";
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

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
