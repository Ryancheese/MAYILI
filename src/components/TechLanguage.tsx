import { Reveal } from "./Reveal";
import { useI18n } from "../i18n/context";

const termKeys = ["tech.t0", "tech.t1", "tech.t2", "tech.t3", "tech.t4", "tech.t5", "tech.t6", "tech.t7", "tech.t8", "tech.t9"] as const;

export function TechLanguage() {
  const { t } = useI18n();
  const terms = termKeys.map((k) => t(k));

  return (
    <section className="tech section" id="tech">
      <div className="section-heading">
        <p className="eyebrow">{t("tech.eyebrow")}</p>
        <h2>{t("tech.title")}</h2>
        <p className="section-lede">{t("tech.lede")}</p>
      </div>
      <Reveal>
        <div className="tech-marquee" aria-label={t("tech.marqueeAria")}>
          <div className="tech-track">
            {[...terms, ...terms].map((label, i) => (
              <span key={`${label}-${i}`} className="tech-pill">
                {label}
              </span>
            ))}
          </div>
        </div>
        <ul className="tech-grid">
          {terms.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
