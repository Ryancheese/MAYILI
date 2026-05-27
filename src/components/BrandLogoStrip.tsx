import { useState } from "react";
import type { BrandLogo } from "../lib/brandLogos";
import { BRAND_LOGOS } from "../lib/brandLogos";
import { useI18n } from "../i18n/context";
import { BrandLogoDialog } from "./BrandLogoDialog";

type BrandLogoStripProps = {
  variant?: "dark" | "light";
};

function BrandLogoGroup({
  brands,
  onSelect,
  ariaHidden,
  keyPrefix,
}: {
  brands: readonly BrandLogo[];
  onSelect: (index: number) => void;
  ariaHidden?: boolean;
  keyPrefix?: string;
}) {
  const { t } = useI18n();

  return (
    <ul className="brand-logos-group" aria-hidden={ariaHidden || undefined}>
      {brands.map((brand, index) => (
        <li key={keyPrefix ? `${keyPrefix}-${brand.id}` : brand.id}>
          <button
            type="button"
            className={
              brand.frameDark
                ? "brand-logo-frame brand-logo-frame--dark"
                : "brand-logo-frame"
            }
            aria-label={`${t("brand.dialog.open")}: ${t(`brand.${brand.id}.name`)}`}
            tabIndex={ariaHidden ? -1 : undefined}
            onClick={() => onSelect(index)}
          >
            <img src={brand.src} alt="" loading="lazy" decoding="async" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export function BrandLogoStrip({ variant = "dark" }: BrandLogoStripProps) {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={`brand-logos-marquee brand-logos--${variant}`}
        aria-label={t("social.partnerLogos")}
      >
        <div className="brand-logos-track">
          <BrandLogoGroup brands={BRAND_LOGOS} onSelect={setOpenIndex} />
          <BrandLogoGroup
            brands={BRAND_LOGOS}
            onSelect={setOpenIndex}
            ariaHidden
            keyPrefix="dup"
          />
        </div>
      </div>

      {openIndex !== null && (
        <BrandLogoDialog
          brands={BRAND_LOGOS}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </>
  );
}
