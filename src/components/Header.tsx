import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "#about", labelEn: "About", labelZh: "工厂简介" },
  { href: "#categories", labelEn: "Categories", labelZh: "品类" },
  { href: "#tech", labelEn: "Build", labelZh: "工艺" },
  { href: "#services", labelEn: "Services", labelZh: "业务" },
  { href: "#capacity", labelEn: "Capacity", labelZh: "产能" },
  { href: "#quality", labelEn: "QC", labelZh: "质量" },
  { href: "#gallery", labelEn: "Gallery", labelZh: "实景" },
  { href: "#contact", labelEn: "Contact", labelZh: "联系" },
];

export function Header() {
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
      <a className="brand" href="#home" aria-label="Mayili Clothing Trade home">
        <span className="brand-mark">M</span>
        <span>
          <strong>MACHINE</strong>
          <small>Mayili Clothing Trade</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            title={l.labelZh}
          >
            <span className="nav-en">{l.labelEn}</span>
            <span className="nav-zh">{l.labelZh}</span>
          </a>
        ))}
      </nav>
      <motion.button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
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
