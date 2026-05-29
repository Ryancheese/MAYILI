import { useI18n } from "../i18n/context";
import { BrandLogoStrip } from "./BrandLogoStrip";
import { Reveal } from "./Reveal";

export function SocialProof() {
  const { t } = useI18n();
  return (
    <>
      <section className="social-proof section-tight" aria-label={t("social.line1Strong")}>
        <Reveal>
          <div className="social-inner">
            <p className="social-line">
              <strong>{t("social.line1Strong")}</strong>
              <span className="social-sub">{t("social.line1Sub")}</span>
            </p>
            <p className="social-line muted">{t("social.line2")}</p>
          </div>
        </Reveal>
      </section>
      <BrandLogoStrip variant="wall" />
    </>
  );
}
