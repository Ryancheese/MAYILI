import { FactoryImg } from "./FactoryImg";
import { FootnoteRef } from "./FootnoteRef";
import { GalleryAlbum } from "./GalleryAlbum";
import { PHOTO } from "../lib/images";
import { useI18n } from "../i18n/context";

export function SiteBody() {
  const { t } = useI18n();

  return (
    <>
      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2>{t("services.title")}</h2>
        </div>
        <div className="service-grid">
          <article>
            <span>01</span>
            <h3>{t("services.s1t")}</h3>
            <p>{t("services.s1d")}</p>
          </article>
          <article>
            <span>02</span>
            <h3>{t("services.s2t")}</h3>
            <p>{t("services.s2d")}</p>
          </article>
          <article>
            <span>03</span>
            <h3>{t("services.s3t")}</h3>
            <p>{t("services.s3d")}</p>
          </article>
          <article>
            <span>04</span>
            <h3>{t("services.s4t")}</h3>
            <p>{t("services.s4d")}</p>
          </article>
        </div>
      </section>

      <section className="capacity section" id="capacity">
        <div className="split">
          <div>
            <p className="eyebrow">{t("capacity.eyebrow")}</p>
            <h2>{t("capacity.title")}</h2>
            <p>{t("capacity.body")}</p>
            <ul className="check-list">
              <li>{t("capacity.li1")}</li>
              <li>{t("capacity.li2")}</li>
              <li>{t("capacity.li3")}</li>
            </ul>
          </div>
          <div className="photo-stack">
            <FactoryImg src={PHOTO.cutting} alt={t("capacity.altCut")} />
            <FactoryImg src={PHOTO.fabric} alt={t("capacity.altFabric")} />
          </div>
        </div>
      </section>

      <section className="equipment section-tight" aria-label={t("equipment.aria")}>
        <div className="equipment-strip">
          <FactoryImg src={PHOTO.juki} alt={t("equipment.altJuki")} />
          <FactoryImg src={PHOTO.flatlock} alt={t("equipment.altFlatlock")} />
          <FactoryImg src={PHOTO.detail} alt={t("equipment.altDetail")} />
          <FactoryImg src={PHOTO.line} alt={t("equipment.altLine")} />
        </div>
        <p className="equipment-lede">{t("equipment.lede")}</p>
      </section>

      <section className="quality section" id="quality">
        <div className="section-heading">
          <p className="eyebrow">{t("quality.eyebrow")}</p>
          <h2>{t("quality.title")}</h2>
        </div>
        <div className="quality-flow">
          <article>
            <strong>IQC</strong>
            <span>{t("quality.iqc")}</span>
          </article>
          <article>
            <strong>IPQC</strong>
            <span>{t("quality.ipqc")}</span>
          </article>
          <article>
            <strong>FQC</strong>
            <span>{t("quality.fqc")}</span>
          </article>
          <article>
            <strong>OQC</strong>
            <span>{t("quality.oqc")}</span>
          </article>
        </div>
        <p className="quality-note">{t("quality.note")}</p>
      </section>

      <section className="process section">
        <div className="section-heading">
          <p className="eyebrow">{t("process.eyebrow")}</p>
          <h2>{t("process.title")}</h2>
        </div>
        <ol className="timeline">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <li key={n}>
              <span>{t(`process.s${n}`)}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">{t("gallery.eyebrow")}</p>
          <h2>
            {t("gallery.title")}
            <FootnoteRef id={3} />
          </h2>
        </div>
        <GalleryAlbum />
      </section>

      <section className="contact section" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">{t("contact.eyebrow")}</p>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.intro")}</p>
          </div>
          <div className="contact-details">
            <p>
              <strong>{t("contact.addrLabel")}</strong>{" "}
              {t("contact.addrValue")}
            </p>
            <p>
              <strong>{t("contact.factoryLabel")}</strong>{" "}
              {t("contact.factoryValue")}
            </p>
            <p>
              <strong>{t("contact.coLabel")}</strong>{" "}
              {t("contact.coValue")}
            </p>
            <p>
              <strong>{t("contact.enLabel")}</strong>{" "}
              {t("contact.enValue")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
