import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FactoryImg } from "./FactoryImg";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { PHOTO } from "../lib/images";
import { useI18n } from "../i18n/context";

const galleryDefs = [
  { src: PHOTO.entrance, altKey: "gallery.altEntrance", capKey: "gallery.cEntrance", wide: true },
  { src: PHOTO.signage, altKey: "gallery.altSignage", capKey: "gallery.cSignage" },
  { src: PHOTO.sewing, altKey: "gallery.altSewing", capKey: "gallery.cSewing" },
  { src: PHOTO.showroomWide, altKey: "gallery.altShow", capKey: "gallery.cShow" },
  { src: PHOTO.showroomRacks, altKey: "gallery.altRacks", capKey: "gallery.cRacks" },
  { src: PHOTO.office, altKey: "gallery.altOffice", capKey: "gallery.cOffice" },
  { src: PHOTO.corridor, altKey: "gallery.altCorridor", capKey: "gallery.cCorridor", wide: true },
] as const;

export function GalleryAlbum() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: LightboxItem[] = useMemo(
    () =>
      galleryDefs.map((def) => ({
        src: def.src,
        alt: t(def.altKey),
        caption: t(def.capKey),
      })),
    [t],
  );

  return (
    <motion.div className="gallery-album" layout>
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.div
            key="stack"
            className="gallery-stack-wrap"
            role="button"
            tabIndex={0}
            aria-label={t("gallery.expand")}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -12 }}
            transition={{ duration: 0.35 }}
            onClick={() => setExpanded(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpanded(true);
              }
            }}
          >
            <motion.div className="gallery-stack" aria-hidden>
              {items.map((item, i) => (
                <motion.div
                  key={item.src}
                  className="gallery-stack-card"
                  style={{ "--stack-i": i } as CSSProperties}
                  aria-hidden={i < items.length - 1}
                >
                  <FactoryImg src={item.src} alt="" />
                </motion.div>
              ))}
              <span className="gallery-stack-badge" aria-hidden>
                {items.length}
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            className="gallery-grid gallery-grid-expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {galleryDefs.map((def, i) => (
              <motion.figure
                key={def.src}
                className={"wide" in def && def.wide ? "wide photo-tile" : "photo-tile"}
                initial={{ opacity: 0, y: 28, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  className="photo-tile-btn"
                  aria-label={t(def.altKey)}
                  onClick={() => setLightboxIndex(i)}
                >
                  <FactoryImg src={def.src} alt={t(def.altKey)} />
                </button>
                <figcaption>{t(def.capKey)}</figcaption>
              </motion.figure>
            ))}
            <button
              type="button"
              className="gallery-collapse"
              onClick={() => setExpanded(false)}
            >
              {t("gallery.collapse")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </motion.div>
  );
}
