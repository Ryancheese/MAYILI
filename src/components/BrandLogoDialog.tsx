import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { BrandLogo } from "../lib/brandLogos";
import { useI18n } from "../i18n/context";

type Props = {
  brands: readonly BrandLogo[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function BrandLogoDialog({ brands, index, onClose, onChange }: Props) {
  const { t } = useI18n();
  const brand = brands[index];
  const hasPrev = index > 0;
  const hasNext = index < brands.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onChange(index - 1);
  }, [hasPrev, index, onChange]);

  const goNext = useCallback(() => {
    if (hasNext) onChange(index + 1);
  }, [hasNext, index, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [goNext, goPrev, onClose]);

  if (!brand) return null;

  const title = t(`brand.${brand.id}.name`);
  const category = t(`brand.${brand.id}.category`);
  const bio = t(`brand.${brand.id}.bio`);

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="brand-dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brand-dialog-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
      >
        <button
          type="button"
          className="lightbox-close brand-dialog-close"
          aria-label={t("brand.dialog.close")}
          onClick={onClose}
        >
          ×
        </button>

        {hasPrev && (
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label={t("lightbox.prev")}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            ‹
          </button>
        )}

        <motion.article
          className="brand-dialog-card"
          key={brand.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.24 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={
              brand.frameDark
                ? "brand-dialog-logo brand-dialog-logo--dark"
                : "brand-dialog-logo"
            }
          >
            <img src={brand.src} alt="" />
          </div>
          <p className="brand-dialog-category">{category}</p>
          <h2 id="brand-dialog-title">{title}</h2>
          <p className="brand-dialog-bio">{bio}</p>
        </motion.article>

        {hasNext && (
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label={t("lightbox.next")}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            ›
          </button>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
