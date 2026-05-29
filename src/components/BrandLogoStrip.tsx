import { useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { BRAND_LOGOS } from "../lib/brandLogos";
import { useI18n } from "../i18n/context";
import { BrandLogoDialog } from "./BrandLogoDialog";

type BrandLogoStripProps = {
  variant?: "wall" | "light";
};

export function BrandLogoStrip({ variant = "wall" }: BrandLogoStripProps) {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleBrandClick = useCallback(
    (index: number) => {
      if (reduceMotion) {
        setFlippedIndex(index);
        setOpenIndex(index);
        return;
      }
      setFlippedIndex(index);
      window.setTimeout(() => setOpenIndex(index), 480);
    },
    [reduceMotion],
  );

  const handleDialogClose = useCallback(() => {
    setOpenIndex(null);
    setFlippedIndex(null);
  }, []);

  return (
    <>
      <section
        className={`brand-wall brand-wall--${variant}`}
        aria-label={t("social.partnerLogos")}
      >
        <header className="brand-wall-heading">
          <strong>{t("brand.wall.title")}</strong>
          <span>{t("brand.wall.subtitle")}</span>
        </header>

        <ul className="brand-wall-grid">
          {BRAND_LOGOS.map((brand, index) => (
            <li
              key={brand.id}
              className={brand.wallSpan === 2 ? "brand-wall-item--wide" : undefined}
            >
              <button
                type="button"
                className={[
                  "brand-wall-cell",
                  brand.frameDark ? "brand-wall-cell--dark" : "",
                  flippedIndex === index || openIndex === index ? "is-flipped" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label={`${t("brand.dialog.open")}: ${t(`brand.${brand.id}.name`)}`}
                aria-expanded={openIndex === index}
                onClick={() => handleBrandClick(index)}
              >
                <span className="brand-wall-flipper">
                  <span className="brand-wall-face brand-wall-face--front">
                    <img src={brand.src} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="brand-wall-face brand-wall-face--back">
                    <strong>{t(`brand.${brand.id}.name`)}</strong>
                    <small>{t(`brand.${brand.id}.category`)}</small>
                    <em>{t("brand.wall.flipHint")}</em>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {openIndex !== null && (
        <BrandLogoDialog
          brands={BRAND_LOGOS}
          index={openIndex}
          onClose={handleDialogClose}
          onChange={setOpenIndex}
        />
      )}
    </>
  );
}
