import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fontFamily } from "./theme";

const FPS = 30;

/* ── shared helpers ── */

function fade(frame: number, start: number, end: number, fadeLen = 15) {
  const inOpacity = interpolate(frame, [start, start + fadeLen], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outOpacity = interpolate(frame, [end - fadeLen, end], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.min(inOpacity, outOpacity);
}

function KenBurnsImage({ src, frame, start }: { src: string; frame: number; start: number }) {
  const local = frame - start;
  const scale = interpolate(local, [0, 90], [1.08, 1.18], { extrapolateRight: "clamp" });
  const x = interpolate(local, [0, 90], [0, -30], { extrapolateRight: "clamp" });
  return (
    <Img
      src={staticFile(src)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: `scale(${scale}) translateX(${x}px)`,
      }}
    />
  );
}

function Overlay({ opacity = 0.55 }: { opacity?: number }) {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, rgba(17,19,21,${opacity}) 0%, rgba(47,57,66,${opacity * 0.85}) 100%)`,
      }}
    />
  );
}

/* ── Scene 1: Hero intro (0–120) ── */
function SceneHero() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = fade(frame, 0, 120);

  const titleY = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const titleOpacity = interpolate(titleY, [0, 1], [0, 1]);

  const eyebrowOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <KenBurnsImage src="photos/hero-factory.jpg" frame={frame} start={0} />
      <Overlay opacity={0.62} />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          padding: "80px 100px",
          fontFamily,
        }}
      >
        <p
          style={{
            color: colors.paper,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
            opacity: eyebrowOpacity,
            fontWeight: 500,
          }}
        >
          YOUR PERFORMANCE APPAREL PARTNER
        </p>
        <h1
          style={{
            color: "#fff",
            fontSize: 72,
            fontWeight: 900,
            margin: "16px 0 0",
            lineHeight: 1.08,
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleY, [0, 1], [40, 0])}px)`,
          }}
        >
          上海马亿里服装贸易有限公司
        </h1>
        <p
          style={{
            color: "rgba(247,245,239,0.85)",
            fontSize: 28,
            margin: "20px 0 0",
            maxWidth: 900,
            opacity: interpolate(frame, [40, 65], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          您的性能服饰制造伙伴
        </p>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 12,
            alignItems: "center",
            opacity: interpolate(frame, [55, 80], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span
            style={{
              background: colors.blue,
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 6,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            MACHINE
          </span>
          <span style={{ color: colors.paper, fontSize: 18, opacity: 0.8 }}>
            Performance Apparel Manufacturing
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ── Scene 2: 21-day hook (120–210) ── */
function SceneHook() {
  const frame = useCurrentFrame();
  const local = frame;
  const opacity = fade(local, 0, 90);

  const numberScale = spring({
    frame: local - 10,
    fps: FPS,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <AbsoluteFill style={{ background: colors.paper, opacity, fontFamily }}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 80,
        }}
      >
        <p
          style={{
            color: colors.muted,
            fontSize: 24,
            letterSpacing: "0.12em",
            margin: 0,
            opacity: interpolate(local, [0, 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          从设计稿到上架
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            marginTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 180,
              fontWeight: 900,
              color: colors.blue,
              lineHeight: 1,
              transform: `scale(${numberScale})`,
              display: "inline-block",
            }}
          >
            21
          </span>
          <span style={{ fontSize: 64, fontWeight: 800, color: colors.ink }}>天</span>
        </div>
        <p
          style={{
            color: colors.muted,
            fontSize: 22,
            marginTop: 24,
            opacity: interpolate(local, [25, 45], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          视款式与面辅料确认进度而定
        </p>
        <p
          style={{
            color: colors.ink,
            fontSize: 26,
            maxWidth: 800,
            textAlign: "center",
            marginTop: 48,
            lineHeight: 1.6,
            opacity: interpolate(local, [40, 65], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          帮助新兴性能服饰品牌与行业巨头同台竞争——配套打样、低起订量，以及美国初创团队真正在意的上市节奏。
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ── Scene 3: Stats (210–300) ── */
const STATS = [
  { value: "2088m²", label: "厂房面积" },
  { value: "120+", label: "员工团队" },
  { value: "300k+", label: "年产能力（件）" },
  { value: "120", label: "主要设备" },
] as const;

function SceneStats() {
  const frame = useCurrentFrame();
  const opacity = fade(frame, 0, 90);

  return (
    <AbsoluteFill style={{ background: colors.steel, opacity, fontFamily }}>
      <KenBurnsImage src="photos/sewing-floor.jpg" frame={frame} start={0} />
      <Overlay opacity={0.72} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 80,
        }}
      >
        <p
          style={{
            color: colors.paper,
            fontSize: 20,
            letterSpacing: "0.14em",
            margin: "0 0 48px",
            opacity: interpolate(frame, [0, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          生产实力一览
        </p>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
          {STATS.map((stat, i) => {
            const delay = i * 8;
            const itemOpacity = interpolate(frame, [delay, delay + 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const itemY = interpolate(frame, [delay, delay + 20], [30, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  minWidth: 200,
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  borderLeft: i > 0 ? `1px solid rgba(247,245,239,0.25)` : "none",
                  paddingLeft: i > 0 ? 48 : 0,
                }}
              >
                <div style={{ fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 18, color: "rgba(247,245,239,0.75)", marginTop: 8 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ── Scene 4: Categories (300–420) ── */
const CATEGORIES = [
  { src: "categories/gym-generated.png", title: "健身训练服", sub: "速干 T · 训练裤 · 运动 Bra" },
  { src: "categories/running-generated.png", title: "跑步服", sub: "轻量上衣 · 压缩裤" },
  { src: "categories/yoga-generated.png", title: "瑜伽服", sub: "高弹 Legging · 无缝套装" },
  { src: "categories/casual-generated.png", title: "运动休闲", sub: "卫衣 · Jogger · Athleisure" },
] as const;

function SceneCategories() {
  const frame = useCurrentFrame();
  const opacity = fade(frame, 0, 120);

  return (
    <AbsoluteFill style={{ background: colors.paper, opacity, fontFamily }}>
      <AbsoluteFill style={{ padding: "60px 80px" }}>
        <p style={{ color: colors.blue, fontSize: 18, letterSpacing: "0.12em", margin: 0, fontWeight: 600 }}>
          生产品类
        </p>
        <h2 style={{ color: colors.ink, fontSize: 48, fontWeight: 800, margin: "12px 0 40px" }}>
          四大针织赛道，具备量产交付能力
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            flex: 1,
          }}
        >
          {CATEGORIES.map((cat, i) => {
            const delay = 15 + i * 12;
            const itemOpacity = interpolate(frame, [delay, delay + 18], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const itemScale = interpolate(frame, [delay, delay + 18], [0.92, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={cat.title}
                style={{
                  position: "relative",
                  borderRadius: 8,
                  overflow: "hidden",
                  opacity: itemOpacity,
                  transform: `scale(${itemScale})`,
                  boxShadow: "0 16px 48px rgba(17,19,21,0.12)",
                }}
              >
                <Img
                  src={staticFile(cat.src)}
                  style={{ width: "100%", height: 340, objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px 28px",
                    background: "linear-gradient(transparent, rgba(17,19,21,0.85))",
                  }}
                >
                  <div style={{ color: "#fff", fontSize: 26, fontWeight: 800 }}>{cat.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginTop: 4 }}>
                    {cat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ── Scene 5: Factory montage (420–510) ── */
const FACTORY_PHOTOS = [
  "photos/equipment-juki.jpg",
  "photos/cutting-room.jpg",
  "photos/showroom-wide.jpg",
  "photos/entrance.jpg",
] as const;

function SceneFactory() {
  const frame = useCurrentFrame();
  const opacity = fade(frame, 0, 90);
  const photoIndex = Math.min(Math.floor(frame / 22), FACTORY_PHOTOS.length - 1);
  const photoOpacity = interpolate(frame % 22, [0, 8, 18, 22], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <AbsoluteFill>
        <Img
          src={staticFile(FACTORY_PHOTOS[photoIndex])}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <AbsoluteFill style={{ opacity: photoOpacity }}>
          {photoIndex < FACTORY_PHOTOS.length - 1 && (
            <Img
              src={staticFile(FACTORY_PHOTOS[photoIndex + 1])}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </AbsoluteFill>
      </AbsoluteFill>
      <Overlay opacity={0.5} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 100px",
        }}
      >
        <p
          style={{
            color: colors.paper,
            fontSize: 20,
            letterSpacing: "0.14em",
            margin: 0,
            opacity: interpolate(frame, [5, 25], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          生产现场
        </p>
        <h2
          style={{
            color: "#fff",
            fontSize: 56,
            fontWeight: 800,
            margin: "16px 0 0",
            maxWidth: 700,
            lineHeight: 1.15,
            opacity: interpolate(frame, [15, 35], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          从车间到样衣，能力看得见
        </h2>
        <p
          style={{
            color: "rgba(247,245,239,0.8)",
            fontSize: 22,
            marginTop: 20,
            maxWidth: 600,
            opacity: interpolate(frame, [30, 50], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          120+ 台设备协同 · 四向拉伸测试 · 样衣远程评审
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ── Scene 6: CTA (510–600) ── */
function SceneCTA() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = fade(frame, 0, 90, 20);

  const logoScale = spring({ frame: frame - 5, fps, config: { damping: 16, stiffness: 100 } });

  return (
    <AbsoluteFill style={{ background: colors.ink, opacity, fontFamily }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${colors.blue}33 0%, transparent 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            transform: `scale(${logoScale})`,
            opacity: interpolate(logoScale, [0, 1], [0, 1]),
          }}
        >
          <span
            style={{
              background: colors.blue,
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 8,
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: "0.1em",
            }}
          >
            MACHINE
          </span>
        </div>
        <h2
          style={{
            color: "#fff",
            fontSize: 52,
            fontWeight: 800,
            margin: "32px 0 0",
            textAlign: "center",
            opacity: interpolate(frame, [20, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          上海马亿里服装贸易有限公司
        </h2>
        <p
          style={{
            color: colors.blue,
            fontSize: 36,
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: "0.04em",
            opacity: interpolate(frame, [35, 55], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          www.mayili.com.cn
        </p>
        <p
          style={{
            color: "rgba(247,245,239,0.6)",
            fontSize: 20,
            marginTop: 32,
            opacity: interpolate(frame, [50, 70], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          OEM/ODM · 低起订量 · 出口美国 · 英国 · 澳大利亚 · 加拿大
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ── Main composition ── */
export const MayiliPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.ink }}>
      <Sequence from={0} durationInFrames={120}>
        <SceneHero />
      </Sequence>
      <Sequence from={120} durationInFrames={90}>
        <SceneHook />
      </Sequence>
      <Sequence from={210} durationInFrames={90}>
        <SceneStats />
      </Sequence>
      <Sequence from={300} durationInFrames={120}>
        <SceneCategories />
      </Sequence>
      <Sequence from={420} durationInFrames={90}>
        <SceneFactory />
      </Sequence>
      <Sequence from={510} durationInFrames={90}>
        <SceneCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
