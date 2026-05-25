import { motion, useReducedMotion } from "framer-motion";
import { FactoryImg } from "./FactoryImg";
import { FootnoteRef } from "./FootnoteRef";
import { PHOTO } from "../lib/images";
import { useI18n } from "../i18n/context";
import { Reveal } from "./Reveal";

const tileImgs = [PHOTO.sewing, PHOTO.fabric, PHOTO.detail, PHOTO.showroomWide] as const;

export function MotionShowcase() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section className="motion-showcase section" id="motion">
      <div className="section-heading">
        <p className="eyebrow">{t("motion.eyebrow")}</p>
        <h2>
          {t("motion.title")}
          <FootnoteRef id={2} />
        </h2>
        <p className="section-lede">{t("motion.lede")}</p>
      </div>
      <div className="motion-grid">
        {[0, 1, 2, 3].map((i) => (
          <Reveal key={i} delay={i * 0.06}>
            <motion.article
              className="motion-card"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <div className="motion-card-media">
                <FactoryImg src={tileImgs[i]} alt="" />
                <div className="motion-card-shade" />
              </div>
              <div className="motion-card-body">
                <h3>{t(`motion.t${i}t`)}</h3>
                <p className="motion-sub">{t(`motion.t${i}s`)}</p>
                <p className="motion-caption">{t(`motion.t${i}c`)}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
