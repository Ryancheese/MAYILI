import { useI18n } from "../i18n/context";

export const US_CONTACT_EMAIL = "joesonko@machineny.com";

export function ContactDetails() {
  const { t } = useI18n();

  return (
    <div className="contact-details">
      <p>
        <strong>{t("contact.usLabel")}</strong>
        <a className="contact-email" href={`mailto:${US_CONTACT_EMAIL}`}>
          {US_CONTACT_EMAIL}
        </a>
      </p>
      <p>
        <strong>{t("contact.addrLabel")}</strong>
        {t("contact.addrValue")}
      </p>
      <p>
        <strong>{t("contact.factoryLabel")}</strong>
        {t("contact.factoryValue")}
      </p>
      <p>
        <strong>{t("contact.coLabel")}</strong>
        {t("contact.coValue")}
      </p>
      <p>
        <strong>{t("contact.enLabel")}</strong>
        {t("contact.enValue")}
      </p>
    </div>
  );
}
