import { useMemo, useState } from "react";
import { FactoryImg } from "./FactoryImg";
import { FootnoteRef } from "./FootnoteRef";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { CATEGORY } from "../lib/images";
import { useI18n } from "../i18n/context";
import { Reveal } from "./Reveal";

const categoryKeys = ["gym", "running", "yoga", "casual"] as const;

export function Categories() {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: LightboxItem[] = useMemo(
    () =>
      categoryKeys.map((key) => ({
        src: CATEGORY[key],
        alt: `${t(`cat.${key}`)} — ${t("cat.aiAlt")}`,
        caption: `${t(`cat.${key}`)} · ${t(`cat.${key}Sub`)}`,
      })),
    [t],
  );

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
              <figure className="category-media photo-tile">
                <button
                  type="button"
                  className="photo-tile-btn"
                  aria-label={items[i].alt}
                  onClick={() => setLightboxIndex(i)}
                >
                  <FactoryImg src={CATEGORY[key]} alt={items[i].alt} />
                </button>
                <figcaption className="category-caption">
                  <strong>
                    {t(`cat.${key}`)}
                    <FootnoteRef id={1} />
                  </strong>
                  <span>{t(`cat.${key}Sub`)}</span>
                </figcaption>
              </figure>
            </article>
          </Reveal>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
