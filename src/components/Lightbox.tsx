import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "../i18n/context";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onChange }: Props) {
  const { t } = useI18n();
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

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

  if (!item) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        role="dialog"
        aria-modal="true"
        aria-label={item.alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
      >
        <button
          type="button"
          className="lightbox-close"
          aria-label={t("lightbox.close")}
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

        <motion.figure
          className="lightbox-figure"
          key={item.src}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.24 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img className="lightbox-img site-photo" src={item.src} alt={item.alt} />
          {item.caption && <figcaption>{item.caption}</figcaption>}
        </motion.figure>

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
