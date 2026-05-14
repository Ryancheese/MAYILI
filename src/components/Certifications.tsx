import { Reveal } from "./Reveal";

const badges = [
  { code: "ISO 9001", note: "质量管理体系" },
  { code: "BSCI", note: "社会责任审核" },
  { code: "WRAP", note: "负责任生产" },
  { code: "OEKO-TEX", note: "STANDARD 100 纺织品安全" },
];

export function Certifications() {
  return (
    <section className="certs section-tight" aria-label="Certifications">
      <Reveal>
        <div className="certs-inner">
          <p className="eyebrow certs-eyebrow">Trust signals</p>
          <ul className="certs-list">
            {badges.map((b) => (
              <li key={b.code}>
                <span className="certs-code">{b.code}</span>
                <span className="certs-note">{b.note}</span>
              </li>
            ))}
          </ul>
          <p className="certs-disclaimer">
            证书与报告编号可在立项后按客户要求提供核验；页面展示为常见采购决策中的信任要素组合。
          </p>
        </div>
      </Reveal>
    </section>
  );
}
