import { FactoryImg } from "./FactoryImg";
import { CATEGORY } from "../lib/images";
import { useI18n } from "../i18n/context";
import { Reveal } from "./Reveal";

const categoryKeys = ["gym", "running", "yoga", "casual"] as const;

export function Categories() {
  const { t } = useI18n();

  return (
    <section className="categories section" id="categories">
      <div className="section-heading">
        <p className="eyebrow">{t("cat.eyebrow")}</p>
        <h2>{t("cat.title")}</h2>
        <p className="section-lede">{t("cat.lede")}</p>
      </div>
      <div className="category-grid">
        {categoryKeys.map((key, i) => (
          <Reveal key={key} delay={i * 0.05}>
            <article className="category-card">
              <div className="category-media">
                <FactoryImg
                  src={CATEGORY[key]}
                  alt={`${t(`cat.${key}`)} ${t("cat.imgAlt")}`}
                />
                <div className="category-shade" />
                <div className="category-label">
                  <strong>{t(`cat.${key}`)}</strong>
                  <span>{t(`cat.${key}Sub`)}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
