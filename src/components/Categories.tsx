import { FactoryImg } from "./FactoryImg";
import { CATEGORY } from "../lib/images";
import { Reveal } from "./Reveal";

const categories = [
  { key: "gym" as const, title: "Gym", zh: "健身训练", src: CATEGORY.gym },
  { key: "running" as const, title: "Running", zh: "跑步", src: CATEGORY.running },
  { key: "yoga" as const, title: "Yoga", zh: "瑜伽", src: CATEGORY.yoga },
  { key: "casual" as const, title: "Casual", zh: "运动休闲", src: CATEGORY.casual },
];

export function Categories() {
  return (
    <section className="categories section" id="categories">
      <div className="section-heading">
        <p className="eyebrow">Product focus</p>
        <h2>Buyers see the lane instantly — no guessing</h2>
        <p className="section-lede">
          用清晰的品类视觉语言，让美国 DTC 买手在 3 秒内判断：这是不是我要找的供应商。
        </p>
      </div>
      <div className="category-grid">
        {categories.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.05}>
            <article className="category-card">
              <div className="category-media">
                <FactoryImg src={c.src} alt={`${c.title} apparel`} />
                <div className="category-shade" />
                <div className="category-label">
                  <strong>{c.title}</strong>
                  <span>{c.zh}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
