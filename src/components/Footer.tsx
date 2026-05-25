import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n/context";
import { FOOTNOTE_IDS, scrollToFootnoteAnchor } from "../lib/footnotes";

const pageLinks = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/contact", key: "nav.contact" },
] as const;

const sectionLinks = [
  { id: "categories", key: "nav.categories" },
  { id: "tech", key: "nav.tech" },
  { id: "capacity", key: "nav.capacity" },
  { id: "quality", key: "nav.quality" },
  { id: "gallery", key: "nav.gallery" },
] as const;

export function Footer() {
  const { t } = useI18n();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    navigate("/", { state: { scrollTo: id } });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <aside className="footer-notes" aria-label={t("footnote.aria")}>
          <p className="footer-notes-title">{t("footnote.title")}</p>
          <ol className="footer-notes-list">
            {FOOTNOTE_IDS.map((id) => (
              <li key={id} id={`fn-${id}`}>
                <span className="fn-marker">[{id}]</span>
                <span>{t(`footnote.${id}`)}</span>
                <button
                  type="button"
                  className="fn-back"
                  aria-label={t("footnote.back")}
                  onClick={() => scrollToFootnoteAnchor(`fn-ref-${id}`)}
                >
                  ↩
                </button>
              </li>
            ))}
          </ol>
        </aside>

        <div className="footer-body">
          <div className="footer-main">
            <div className="footer-brand">
              <strong>MACHINE</strong>
              <span>{t("brand.sub")}</span>
              <p>{t("footer.copy")}</p>
            </div>
            <nav className="footer-nav" aria-label={t("footer.navAria")}>
              <div>
                <strong>{t("footer.pages")}</strong>
                <ul>
                  {pageLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{t(link.key)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>{t("footer.sections")}</strong>
                <ul>
                  {sectionLinks.map((link) => (
                    <li key={link.id}>
                      <button type="button" onClick={() => goToSection(link.id)}>
                        {t(link.key)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          <button
            type="button"
            className="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("footer.top")}
          </button>
        </div>
      </div>
    </footer>
  );
}
