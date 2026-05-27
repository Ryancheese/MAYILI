import { BRAND_LOGOS } from "../lib/brandLogos";
import { useI18n } from "../i18n/context";

type BrandLogoStripProps = {
  variant?: "dark" | "light";
};

export function BrandLogoStrip({ variant = "dark" }: BrandLogoStripProps) {
  const { t } = useI18n();

  return (
    <ul
      className={`brand-logos brand-logos--${variant}`}
      aria-label={t("social.partnerLogos")}
    >
      {BRAND_LOGOS.map((brand) => (
        <li key={brand.name}>
          <span
            className={
              brand.frameDark ? "brand-logo-frame brand-logo-frame--dark" : "brand-logo-frame"
            }
          >
            <img src={brand.src} alt={brand.name} loading="lazy" decoding="async" />
          </span>
        </li>
      ))}
    </ul>
  );
}
