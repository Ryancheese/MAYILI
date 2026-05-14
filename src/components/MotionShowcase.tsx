import { motion, useReducedMotion } from "framer-motion";
import { FactoryImg } from "./FactoryImg";
import { PHOTO } from "../lib/images";
import { Reveal } from "./Reveal";

const tiles = [
  {
    title: "Sewing floor rhythm",
    subtitle: "平缝 / 包缝 / 绷缝协同节拍",
    img: PHOTO.sewing,
    caption: "Replace with your hero sewing-machine loop for maximum conversion.",
  },
  {
    title: "Fabric & stretch",
    subtitle: "面辅料测试与弹力表现",
    img: PHOTO.fabric,
    caption: "Show a 4-way stretch pull test clip here when available.",
  },
  {
    title: "Heat transfer & trims",
    subtitle: "热转印 / 标类 / 装饰工艺",
    img: PHOTO.detail,
    caption: "Short process macro of heat transfer application reads premium on scroll.",
  },
  {
    title: "Finished product on body",
    subtitle: "成衣试穿与版型确认",
    img: PHOTO.showroomWide,
    caption: "Model-on-body b-roll closes the loop for buyers who buy with their eyes.",
  },
] as const;

export function MotionShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="motion-showcase section" id="motion">
      <div className="section-heading">
        <p className="eyebrow">Cinematic proof</p>
        <h2>Motion that performance brands expect</h2>
        <p className="section-lede">
          首页动效不是“炫技”，而是用镜头语言回答买家真正关心的问题：你们会不会做、做得像不像品牌、交期稳不稳。
        </p>
      </div>
      <div className="motion-grid">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.06}>
            <motion.article
              className="motion-card"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <div className="motion-card-media">
                <FactoryImg src={t.img} alt="" />
                <div className="motion-card-shade" />
                <span className="motion-card-tag">B-roll slot</span>
              </div>
              <div className="motion-card-body">
                <h3>{t.title}</h3>
                <p className="motion-sub">{t.subtitle}</p>
                <p className="motion-caption">{t.caption}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
