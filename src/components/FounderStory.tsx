import { FactoryImg } from "./FactoryImg";
import { PHOTO } from "../lib/images";
import { Reveal } from "./Reveal";

export function FounderStory() {
  return (
    <section className="founder section" id="about">
      <div className="founder-grid">
        <Reveal>
          <div className="founder-copy">
            <p className="eyebrow">People buy from people</p>
            <h2>Founded in Shanghai, 2000 — built for brands that want to move fast</h2>
            <p>
              Founded in Shanghai in 2000, Mayili was built to help emerging performance brands compete with industry
              giants — with honest timelines, clear sampling gates, and manufacturing discipline that respects your
              launch calendar.
            </p>
            <p>
              上海马亿里服装贸易有限公司成立于 2000 年，前身为亿图代表处。我们以“上海对接客户 + 泰州稳定交付”的双城模式，把沟通效率与产能落地放在同一套流程里。
            </p>
            <p>
              公司地址位于上海虹桥开发区长宁区仙霞路 137 号盛高国际大厦，生产工厂坐落于江苏泰州泰兴市元竹镇镇北村工业园区。工厂以运动休闲服装生产为核心，覆盖款式开发、样衣确认、排产生产、后道包装和售后跟踪，适合品牌客户、电商渠道和贸易订单的多批次生产需求。
            </p>
            <p className="founder-pull">
              Not “we own machines” — <strong>we help build your business.</strong>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="founder-figure">
            <FactoryImg src={PHOTO.meeting} alt="会议室透过玻璃连接生产车间" />
            <figcaption>会议协同与生产现场紧密连接</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
