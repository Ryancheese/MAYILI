import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";

type PageHeroProps = {
  eyebrowKey: string;
  titleKey: string;
  ledeKey: string;
  ctaKey?: string;
  ctaTo?: string;
};

export function PageHero({ eyebrowKey, titleKey, ledeKey, ctaKey, ctaTo }: PageHeroProps) {
  const { t } = useI18n();

  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <p className="eyebrow">{t(eyebrowKey)}</p>
        <h1>{t(titleKey)}</h1>
        <p className="page-hero-lede">{t(ledeKey)}</p>
        {ctaKey && ctaTo ? (
          <div className="page-hero-actions">
            <Link className="button primary page-hero-btn" to={ctaTo}>
              {t(ctaKey)}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
