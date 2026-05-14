import { FactoryImg } from "./FactoryImg";
import { PHOTO } from "../lib/images";
import { useI18n } from "../i18n/context";
import { Reveal } from "./Reveal";

export function FounderStory() {
  const { t } = useI18n();
  return (
    <section className="founder section" id="about">
      <div className="founder-grid">
        <Reveal>
          <div className="founder-copy">
            <p className="eyebrow">{t("founder.eyebrow")}</p>
            <h2>{t("founder.title")}</h2>
            <p>{t("founder.p1")}</p>
            <p>{t("founder.p2")}</p>
            <p>{t("founder.p3")}</p>
            <p className="founder-pull">
              {t("founder.pull")} <strong>{t("founder.pullStrong")}</strong>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="founder-figure">
            <FactoryImg src={PHOTO.meeting} alt={t("founder.imgAlt")} />
            <figcaption>{t("founder.caption")}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
