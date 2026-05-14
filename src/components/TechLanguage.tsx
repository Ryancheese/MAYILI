import { Reveal } from "./Reveal";

const terms = [
  "Flatlock Construction",
  "4-Way Stretch",
  "Moisture Wicking",
  "Bonded Seams",
  "Anti-Odor Finish",
  "Reflective Transfer",
  "Laser Cut Ventilation",
  "Brushed Back Fleece",
  "Compression Fit Engineering",
  "Durable Water Repellent (DWR)",
];

export function TechLanguage() {
  return (
    <section className="tech section" id="tech">
      <div className="section-heading">
        <p className="eyebrow">Technical storytelling</p>
        <h2>Speak the buyer&apos;s language — and help SEO understand you</h2>
        <p className="section-lede">
          这些关键词不是“堆词”，而是把你们的真实工艺能力翻译成采购与产品团队一眼能懂的语言。
        </p>
      </div>
      <Reveal>
        <div className="tech-marquee" aria-label="Technical keywords">
          <div className="tech-track">
            {[...terms, ...terms].map((t, i) => (
              <span key={`${t}-${i}`} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
        <ul className="tech-grid">
          {terms.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
