import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Certifications } from "./components/Certifications";
import { Categories } from "./components/Categories";
import { MotionShowcase } from "./components/MotionShowcase";
import { TechLanguage } from "./components/TechLanguage";
import { FounderStory } from "./components/FounderStory";
import { SiteBody } from "./components/SiteBody";
import { useI18n } from "./i18n/context";

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <span>{t("footer.copy")}</span>
      <a href="#home">{t("footer.top")}</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Certifications />
        <Categories />
        <MotionShowcase />
        <TechLanguage />
        <FounderStory />
        <SiteBody />
      </main>
      <Footer />
    </>
  );
}
