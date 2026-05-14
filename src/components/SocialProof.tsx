import { Reveal } from "./Reveal";

export function SocialProof() {
  return (
    <section className="social-proof section-tight" aria-label="Social proof">
      <Reveal>
        <div className="social-inner">
          <p className="social-line">
            <strong>Trusted by 50+ global activewear brands</strong>
            <span className="social-sub">全球运动休闲与性能服饰品牌长期合作供应商</span>
          </p>
          <p className="social-line muted">
            Exporting to <strong>USA</strong>, <strong>UK</strong>, <strong>Australia</strong>,{" "}
            <strong>Canada</strong> — and growing with DTC founders who care about speed, MOQ, and QC.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
