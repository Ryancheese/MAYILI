import { Link } from "react-router-dom";
import { ContactDetails } from "../components/ContactDetails";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

const checklistKeys = ["page.contact.c1", "page.contact.c2", "page.contact.c3", "page.contact.c4", "page.contact.c5"] as const;

export function ContactPage() {
  const { t } = useI18n();

  return (
    <main className="subpage">
      <PageHero
        eyebrowKey="page.contact.eyebrow"
        titleKey="page.contact.title"
        ledeKey="page.contact.lede"
      />

      <section className="contact section" id="contact">
        <Reveal>
          <div className="contact-card">
            <div>
              <p className="eyebrow">{t("contact.eyebrow")}</p>
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.intro")}</p>
            </div>
            <ContactDetails />
          </div>
        </Reveal>
      </section>

      <section className="section page-checklist">
        <div className="section-heading">
          <p className="eyebrow">{t("page.contact.checkEyebrow")}</p>
          <h2>{t("page.contact.checkTitle")}</h2>
          <p className="section-lede">{t("page.contact.checkLede")}</p>
        </div>
        <ul className="check-list contact-checklist">
          {checklistKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </section>

      <section className="section page-contact-links">
        <Reveal>
          <div className="home-more-card">
            <h2>{t("page.contact.exploreTitle")}</h2>
            <p>{t("page.contact.exploreLede")}</p>
            <div className="home-more-links">
              <Link className="button primary page-hero-btn" to="/services">
                {t("page.contact.exploreServices")}
              </Link>
              <Link className="button ghost page-hero-btn ghost-dark" to="/about">
                {t("page.contact.exploreAbout")}
              </Link>
              <Link className="button ghost page-hero-btn ghost-dark" to="/" state={{ scrollTo: "gallery" }}>
                {t("page.contact.exploreGallery")}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
