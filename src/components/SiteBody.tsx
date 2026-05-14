import { FactoryImg } from "./FactoryImg";
import { PHOTO } from "../lib/images";

export function SiteBody() {
  return (
    <>
      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>面向品牌与渠道的全流程服装制造服务</h2>
        </div>
        <div className="service-grid">
          <article>
            <span>01</span>
            <h3>ODM 设计生产</h3>
            <p>提供款式开发、工艺建议与样衣打样，帮助客户把企划快速落到可生产版本。</p>
          </article>
          <article>
            <span>02</span>
            <h3>OEM 代工</h3>
            <p>承接品牌贴牌生产，按客户版型、面辅料、包装和验货标准完成批量交付。</p>
          </article>
          <article>
            <span>03</span>
            <h3>来图来样定制</h3>
            <p>支持图片、样衣、工艺单等多种输入方式，完成面料匹配、打版和试样。</p>
          </article>
          <article>
            <span>04</span>
            <h3>小批量快反</h3>
            <p>50 件起订，适合新品测试、直播电商补单和多款少量的柔性生产节奏。</p>
          </article>
        </div>
      </section>

      <section className="capacity section" id="capacity">
        <div className="split">
          <div>
              <p className="eyebrow">Production Capacity</p>
              <h2>专业设备与清晰分区支撑稳定产能</h2>
              <p>
                工厂配备平缝车、包缝机、绷缝机、四针六线机、锁眼机、钉扣机、套结机、热转印设备及后整车间，覆盖整烫、检针、包装等后道流程。
              </p>
              <ul className="check-list">
                <li>1-3 天出样，1000 件以内订单可 2-3 天交付</li>
                <li>自有面辅料供应商、印花厂、绣花厂与热转移标协同资源</li>
                <li>支持男装、运动 T 恤、职业球服等针织与运动休闲品类</li>
              </ul>
            </div>
            <div className="photo-stack">
              <FactoryImg src={PHOTO.cutting} alt="裁剪车间与操作台" />
              <FactoryImg src={PHOTO.fabric} alt="面料整理与裁片准备" />
            </div>
          </div>
      </section>

      <section className="equipment-strip" aria-label="Production equipment">
        <FactoryImg src={PHOTO.juki} alt="JUKI 包缝设备特写" />
        <FactoryImg src={PHOTO.flatlock} alt="专业缝纫设备侧面" />
        <FactoryImg src={PHOTO.detail} alt="特种缝纫设备细节" />
        <FactoryImg src={PHOTO.line} alt="JUKI 平缝机设备" />
      </section>

      <section className="quality section" id="quality">
        <div className="section-heading">
          <p className="eyebrow">Quality Control</p>
          <h2>AQL 标准贯穿来料、过程、成品与出货</h2>
        </div>
        <div className="quality-flow">
          <article>
            <strong>IQC</strong>
            <span>来料检验</span>
          </article>
          <article>
            <strong>IPQC</strong>
            <span>过程巡检</span>
          </article>
          <article>
            <strong>FQC</strong>
            <span>成品检验</span>
          </article>
          <article>
            <strong>OQC</strong>
            <span>出货检验</span>
          </article>
        </div>
        <p className="quality-note">
          按 AQL 2.5 / 4.0 或客户标准执行，结合中期验货与出货前复核，确保订单品质、尺寸、工艺与包装要求一致。
        </p>
      </section>

      <section className="process section">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>合作流程清晰，便于控期与验货</h2>
        </div>
        <ol className="timeline">
          <li>
            <span>需求沟通</span>
          </li>
          <li>
            <span>报价确认</span>
          </li>
          <li>
            <span>确认样衣</span>
          </li>
          <li>
            <span>签订合同</span>
          </li>
          <li>
            <span>排产生产</span>
          </li>
          <li>
            <span>中期验货</span>
          </li>
          <li>
            <span>出货交付</span>
          </li>
          <li>
            <span>售后跟踪</span>
          </li>
        </ol>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Factory Gallery</p>
          <h2>工厂实景精选</h2>
        </div>
        <div className="gallery-grid">
          <figure className="wide">
            <FactoryImg src={PHOTO.entrance} alt="马亿里工厂门头" />
            <figcaption>工厂门头</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.signage} alt="马亿里服装贸易公司招牌" />
            <figcaption>公司招牌</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.sewing} alt="缝制车间全景" />
            <figcaption>缝制车间</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.showroomWide} alt="样衣展示间全景" />
            <figcaption>样衣展示</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.showroomRacks} alt="样衣陈列架" />
            <figcaption>款式陈列</figcaption>
          </figure>
          <figure>
            <FactoryImg src={PHOTO.office} alt="办公室空间" />
            <figcaption>办公空间</figcaption>
          </figure>
          <figure className="wide">
            <FactoryImg src={PHOTO.corridor} alt="厂区通道与管理制度展示" />
            <figcaption>厂区通道</figcaption>
          </figure>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>欢迎咨询 OEM / ODM 订单合作</h2>
            <p>
              可发送产品图、样衣、工艺单、尺码表、预计数量与交期要求，我们将据此评估打样、报价与排产方案。
            </p>
          </div>
          <div className="contact-details">
            <p>
              <strong>公司地址</strong>上海市长宁区仙霞路 137 号盛高国际大厦
            </p>
            <p>
              <strong>工厂地址</strong>江苏省泰州市泰兴市元竹镇镇北村工业园区
            </p>
            <p>
              <strong>公司名称</strong>上海马亿里服装贸易有限公司
            </p>
            <p>
              <strong>英文名称</strong>Mayili Clothing Trade (Taizhou) Co., Ltd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
