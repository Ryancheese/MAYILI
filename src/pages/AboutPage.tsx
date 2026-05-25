import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FounderStory } from "../components/FounderStory";
import { FactoryImg } from "../components/FactoryImg";
import { PHOTO } from "../lib/images";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

const milestoneKeys = ["page.about.m1", "page.about.m2", "page.about.m3", "page.about.m4"] as const;
const valueKeys = [
  { title: "page.about.v1t", desc: "page.about.v1d" },
  { title: "page.about.v2t", desc: "page.about.v2d" },
  { title: "page.about.v3t", desc: "page.about.v3d" },
] as const;

export function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="subpage">
      <PageHero
        eyebrowKey="page.about.eyebrow"
        titleKey="page.about.title"
        ledeKey="page.about.lede"
        ctaKey="page.about.cta"
        ctaTo="/contact"
      />
      <FounderStory />
      <section className="section page-stats">
        <div className="section-heading">
          <p className="eyebrow">{t("page.about.statsEyebrow")}</p>
          <h2>{t("page.about.statsTitle")}</h2>
        </div>
        <div className="stats-grid">
          {milestoneKeys.map((key) => (
            <article key={key}>
              <strong>{t(`${key}v`)}</strong>
              <span>{t(`${key}l`)}</span>
              <p>{t(`${key}d`)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section page-values">
        <div className="section-heading">
          <p className="eyebrow">{t("page.about.valuesEyebrow")}</p>
          <h2>{t("page.about.valuesTitle")}</h2>
        </div>
        <div className="values-grid">
          {valueKeys.map((item) => (
            <Reveal key={item.title}>
              <article>
                <h3>{t(item.title)}</h3>
                <p>{t(item.desc)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section page-gallery-preview">
        <Reveal>
          <div className="split">
            <div>
              <p className="eyebrow">{t("gallery.eyebrow")}</p>
              <h2>{t("page.about.galleryTitle")}</h2>
              <p>{t("page.about.galleryLede")}</p>
              <Link className="button primary page-hero-btn" to="/" state={{ scrollTo: "gallery" }}>
                {t("page.about.galleryCta")}
              </Link>
            </div>
            <div className="photo-stack">
              <FactoryImg src={PHOTO.entrance} alt={t("gallery.altEntrance")} />
              <FactoryImg src={PHOTO.sewing} alt={t("gallery.altSewing")} />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
