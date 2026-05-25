import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { Certifications } from "../components/Certifications";
import { Categories } from "../components/Categories";
import { MotionShowcase } from "../components/MotionShowcase";
import { TechLanguage } from "../components/TechLanguage";
import { FounderStory } from "../components/FounderStory";
import { SiteBody } from "../components/SiteBody";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function HomePage() {
  const { t } = useI18n();

  return (
    <main>
      <Hero />
      <SocialProof />
      <Certifications />
      <Categories />
      <MotionShowcase />
      <TechLanguage />
      <FounderStory />
      <SiteBody />
      <section className="home-more section">
        <Reveal>
          <div className="home-more-card">
            <p className="eyebrow">{t("home.more.eyebrow")}</p>
            <h2>{t("home.more.title")}</h2>
            <p>{t("home.more.lede")}</p>
            <div className="home-more-links">
              <Link className="button primary page-hero-btn" to="/about">
                {t("home.more.about")}
              </Link>
              <Link className="button ghost page-hero-btn ghost-dark" to="/services">
                {t("home.more.services")}
              </Link>
              <Link className="button ghost page-hero-btn ghost-dark" to="/contact">
                {t("home.more.contact")}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
