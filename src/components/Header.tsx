import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import machineHeaderLogoUrl from "@assets/machine-header-logo.png?url";
import { useI18n } from "../i18n/context";
import { LANGS, LANG_LABEL, HTML_LANG } from "../i18n/types";

const navLinks = [
  { to: "/", key: "nav.home", end: true },
  { to: "/about", key: "nav.about", end: false },
  { to: "/services", key: "nav.services", end: false },
  { to: "/contact", key: "nav.contact", end: false },
] as const;

export function Header() {
  const { lang, setLang, t } = useI18n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const headerClass =
    scrolled || open || location.pathname !== "/" ? "site-header is-scrolled" : "site-header";

  const isActive = (to: string, end: boolean) => {
    if (end) return location.pathname === "/";
    return location.pathname === to;
  };

  return (
    <header className={`${headerClass}${open ? " is-open" : ""}`}>
      <Link className="brand" to="/" aria-label={t("header.homeAria")}>
        <img
          className="brand-logo"
          src={machineHeaderLogoUrl}
          alt=""
          width={220}
          height={48}
          decoding="async"
        />
      </Link>
      <nav className="nav-links" aria-label={t("header.navAria")}>
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={isActive(l.to, l.end) ? "is-active" : undefined}
            onClick={() => setOpen(false)}
          >
            <span className="nav-primary">{t(l.key)}</span>
          </Link>
        ))}
        <div className="lang-switch" role="group" aria-label={t("lang.aria")}>
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn${lang === code ? " is-active" : ""}`}
              onClick={() => setLang(code)}
              lang={HTML_LANG[code]}
              aria-pressed={lang === code}
            >
              {LANG_LABEL[code]}
            </button>
          ))}
        </div>
      </nav>
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
