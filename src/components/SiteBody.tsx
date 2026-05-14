import { FactoryImg } from "./FactoryImg";
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

      <section className="equipment-strip" aria-label={t("equipment.aria")}>
        <FactoryImg src={PHOTO.juki} alt="" />
        <FactoryImg src={PHOTO.flatlock} alt="" />
        <FactoryImg src={PHOTO.detail} alt="" />
        <FactoryImg src={PHOTO.line} alt="" />
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
          <h2>{t("gallery.title")}</h2>
        </div>
        <div className="gallery-grid">
          <figure className="wide">
            <FactoryImg src={PHOTO.entrance} alt={t("gallery.altEntrance")} />
            <figcaption>{t("gallery.cEntrance")}</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.signage} alt={t("gallery.altSignage")} />
            <figcaption>{t("gallery.cSignage")}</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.sewing} alt={t("gallery.altSewing")} />
            <figcaption>{t("gallery.cSewing")}</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.showroomWide} alt={t("gallery.altShow")} />
            <figcaption>{t("gallery.cShow")}</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.showroomRacks} alt={t("gallery.altRacks")} />
            <figcaption>{t("gallery.cRacks")}</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.office} alt={t("gallery.altOffice")} />
            <figcaption>{t("gallery.cOffice")}</figcaption>
          </figure>
          <figure className="wide">
            <FactoryImg src={PHOTO.corridor} alt={t("gallery.altCorridor")} />
            <figcaption>{t("gallery.cCorridor")}</figcaption>
          </figure>
        </div>
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
