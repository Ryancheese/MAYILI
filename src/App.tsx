import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Certifications } from "./components/Certifications";
import { Categories } from "./components/Categories";
import { MotionShowcase } from "./components/MotionShowcase";
import { TechLanguage } from "./components/TechLanguage";
import { FounderStory } from "./components/FounderStory";
import { SiteBody } from "./components/SiteBody";

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
      <footer className="site-footer">
        <span>© 2026 Mayili Clothing Trade. All rights reserved.</span>
        <a href="#home">返回顶部</a>
      </footer>
    </>
  );
}
