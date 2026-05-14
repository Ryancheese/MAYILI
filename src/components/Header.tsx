import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n/context";
import { LANGS, LANG_LABEL } from "../i18n/types";

const navKeys: { href: string; key: string }[] = [
  { href: "#about", key: "nav.about" },
  { href: "#categories", key: "nav.categories" },
  { href: "#tech", key: "nav.tech" },
  { href: "#services", key: "nav.services" },
  { href: "#capacity", key: "nav.capacity" },
  { href: "#quality", key: "nav.quality" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#contact", key: "nav.contact" },
];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = scrolled || open ? "site-header is-scrolled" : "site-header";

  return (
    <header className={`${headerClass}${open ? " is-open" : ""}`}>
      <a className="brand" href="#home" aria-label={t("header.homeAria")}>
        <span className="brand-mark">M</span>
        <span>
          <strong>MACHINE</strong>
          <small>{t("brand.sub")}</small>
        </span>
      </a>
      <nav className="nav-links" aria-label={t("header.navAria")}>
        {navKeys.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span className="nav-primary">{t(l.key)}</span>
          </a>
        ))}
      </nav>
      <div className="lang-switch" role="group" aria-label={t("lang.aria")}>
        {LANGS.map((code) => (
          <button
            key={code}
            type="button"
            className={`lang-btn${lang === code ? " is-active" : ""}`}
            onClick={() => setLang(code)}
            lang={code === "zh" ? "zh-CN" : code}
            aria-pressed={lang === code}
          >
            {LANG_LABEL[code]}
          </button>
        ))}
      </div>
      <motion.button
        className="menu-button"
        type="button"
        aria-label={open ? t("header.menuClose") : t("header.menuOpen")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        whileTap={reduce ? undefined : { scale: 0.96 }}
      >
        <span className={open ? "bar is-open" : "bar"} />
        <span className={open ? "bar is-open" : "bar"} />
      </motion.button>
    </header>
  );
}
