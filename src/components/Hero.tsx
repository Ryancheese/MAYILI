import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { PHOTO } from "../lib/images";
import { FactoryImg } from "./FactoryImg";

function heroVideoSrc(): string | undefined {
  const env = import.meta.env.VITE_HERO_VIDEO_URL;
  if (env) return env;
  return "/media/hero.mp4";
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [videoVisible, setVideoVisible] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  const src = heroVideoSrc();

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-media" style={{ y, scale }}>
        <div className="hero-kenburns" aria-hidden>
          <FactoryImg src={PHOTO.hero} alt="" />
        </div>
        {src && videoVisible ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={PHOTO.hero}
            aria-label="Hero manufacturing video"
            onError={() => setVideoVisible(false)}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : null}
        <div className="hero-shade" />
        <div className="hero-grain" aria-hidden />
      </motion.div>

      <div className="hero-content">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          YOUR PERFORMANCE APPAREL PARTNER
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          上海马亿里服装贸易有限公司
        </motion.h1>
        <motion.p
          className="hero-lede"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          We help emerging performance brands compete with industry giants — from sketch to shelf, with sampling,
          low MOQ, and launch timing that U.S. startups actually need.
        </motion.p>
        <motion.div
          className="hero-hook"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hook-kicker">From Sketch to Shelf</span>
          <span className="hook-value">21 Days</span>
          <span className="hook-note">（视款式与面辅料确认进度而定）</span>
        </motion.div>
        <motion.div
          className="hero-actions"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="button primary" href="#contact">
            Start a project
          </a>
          <a className="button ghost" href="#motion">
            See how we build
          </a>
        </motion.div>
      </div>

      <div className="hero-metrics" aria-label="Factory highlights">
        <article>
          <strong>2088m²</strong>
          <span>厂房面积</span>
        </article>
        <article>
          <strong>120+</strong>
          <span>员工团队</span>
        </article>
        <article>
          <strong>300k+</strong>
          <span>年产能力（件）</span>
        </article>
        <article>
          <strong>120</strong>
          <span>主要设备</span>
        </article>
      </div>
    </section>
  );
}
