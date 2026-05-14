import { Reveal } from "./Reveal";
import { useI18n } from "../i18n/context";

const badges = [
  { code: "ISO 9001", noteKey: "cert.iso" },
  { code: "BSCI", noteKey: "cert.bsci" },
  { code: "WRAP", noteKey: "cert.wrap" },
  { code: "OEKO-TEX", noteKey: "cert.oeko" },
] as const;

export function Certifications() {
  const { t } = useI18n();
  return (
    <section className="certs section-tight" aria-label={t("cert.eyebrow")}>
      <Reveal>
        <div className="certs-inner">
          <p className="eyebrow certs-eyebrow">{t("cert.eyebrow")}</p>
          <ul className="certs-list">
            {badges.map((b) => (
              <li key={b.code}>
                <span className="certs-code">{b.code}</span>
                <span className="certs-note">{t(b.noteKey)}</span>
              </li>
            ))}
          </ul>
          <p className="certs-disclaimer">{t("cert.disclaimer")}</p>
        </div>
      </Reveal>
    </section>
  );
}
