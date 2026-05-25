import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FactoryImg } from "../components/FactoryImg";
import { PHOTO } from "../lib/images";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function ServicesPage() {
  const { t } = useI18n();

  return (
    <main className="subpage">
      <PageHero
        eyebrowKey="page.services.eyebrow"
        titleKey="page.services.title"
        ledeKey="page.services.lede"
        ctaKey="page.services.cta"
        ctaTo="/contact"
      />

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2>{t("services.title")}</h2>
        </div>
        <div className="service-grid">
          {[1, 2, 3, 4].map((n) => (
            <article key={n}>
              <span>{String(n).padStart(2, "0")}</span>
              <h3>{t(`services.s${n}t`)}</h3>
              <p>{t(`services.s${n}d`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capacity section" id="capacity">
        <Reveal>
          <div className="split">
            <div>
              <p className="eyebrow">{t("capacity.eyebrow")}</p>
              <h2>{t("capacity.title")}</h2>
              <p>{t("capacity.body")}</p>
              <ul className="check-list">
                <li>{t("capacity.li1")}</li>
                <li>{t("capacity.li2")}</li>
                <li>{t("capacity.li3")}</li>
              </ul>
            </div>
            <div className="photo-stack">
              <FactoryImg src={PHOTO.cutting} alt={t("capacity.altCut")} />
              <FactoryImg src={PHOTO.fabric} alt={t("capacity.altFabric")} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="quality section" id="quality">
        <div className="section-heading">
          <p className="eyebrow">{t("quality.eyebrow")}</p>
          <h2>{t("quality.title")}</h2>
        </div>
        <div className="quality-flow">
          {(["iqc", "ipqc", "fqc", "oqc"] as const).map((code) => (
            <article key={code}>
              <strong>{code.toUpperCase()}</strong>
              <span>{t(`quality.${code}`)}</span>
            </article>
          ))}
        </div>
        <p className="quality-note">{t("quality.note")}</p>
      </section>

      <section className="process section">
        <div className="section-heading">
          <p className="eyebrow">{t("process.eyebrow")}</p>
          <h2>{t("process.title")}</h2>
        </div>
        <ol className="timeline">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <li key={n}>
              <span>{t(`process.s${n}`)}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section page-cta-band">
        <Reveal>
          <div className="home-more-card">
            <h2>{t("page.services.ctaTitle")}</h2>
            <p>{t("page.services.ctaLede")}</p>
            <Link className="button primary page-hero-btn" to="/contact">
              {t("page.services.cta")}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
