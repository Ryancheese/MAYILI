import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { PHOTO } from "../lib/images";
import { useI18n } from "../i18n/context";
import { FactoryImg } from "./FactoryImg";

/** Only load hero video when explicitly configured. A missing MP4 often renders as a black plane above the poster image. */
function heroVideoSrc(): string | undefined {
  return import.meta.env.VITE_HERO_VIDEO_URL || undefined;
}

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [videoVisible, setVideoVisible] = useState(Boolean(heroVideoSrc()));
  const src = heroVideoSrc();

  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <div className="hero-kenburns" aria-hidden>
          <FactoryImg src={PHOTO.hero} alt="" loading="eager" fetchPriority="high" decoding="async" />
        </div>
        {src && videoVisible ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={PHOTO.hero}
            aria-label={t("hero.videoAria")}
            onError={() => setVideoVisible(false)}
            onLoadedData={(e) => {
              e.currentTarget.classList.add("is-ready");
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : null}
        <div className="hero-shade" />
        <div className="hero-grain" aria-hidden />
      </div>

      <div className="hero-content">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.eyebrow")}
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          className="hero-lede"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.lede")}
        </motion.p>
        <motion.div
          className="hero-hook"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hook-kicker">{t("hero.hookKicker")}</span>
          <span className="hook-value">{t("hero.hookValue")}</span>
          <span className="hook-note">{t("hero.hookNote")}</span>
        </motion.div>
        <motion.div
          className="hero-actions"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="button primary" href="#contact">
            {t("hero.ctaPrimary")}
          </a>
          <a className="button ghost" href="#motion">
            {t("hero.ctaSecondary")}
          </a>
        </motion.div>
      </div>

      <div className="hero-metrics" aria-label={t("hero.eyebrow")}>
        <article>
          <strong>2088m²</strong>
          <span>{t("hero.m1")}</span>
        </article>
        <article>
          <strong>120+</strong>
          <span>{t("hero.m2")}</span>
        </article>
        <article>
          <strong>300k+</strong>
          <span>{t("hero.m3")}</span>
        </article>
        <article>
          <strong>120</strong>
          <span>{t("hero.m4")}</span>
        </article>
      </div>
    </section>
  );
}
