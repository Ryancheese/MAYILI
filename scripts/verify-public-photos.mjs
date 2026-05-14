/**
 * Lists required factory photos under public/assets/photos/.
 * Run: npm run check:photos
 * Exits 1 if any file is missing (use before git push / CI).
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = join(root, "public", "assets", "photos");

const REQUIRED = [
  "hero-factory.jpg",
  "meeting-workshop.jpg",
  "cutting-room.jpg",
  "fabric-prep.jpg",
  "equipment-juki.jpg",
  "equipment-flatlock.jpg",
  "equipment-detail.jpg",
  "equipment-line.jpg",
  "entrance.jpg",
  "signage.jpg",
  "sewing-floor.jpg",
  "showroom-wide.jpg",
  "showroom-racks.jpg",
  "office.jpg",
  "corridor.jpg",
];

const missing = REQUIRED.filter((name) => !existsSync(join(dir, name)));

if (missing.length) {
  console.error("\n[photos] 以下文件在 public/assets/photos/ 中不存在或未提交到 Git：");
  console.error(missing.map((m) => `  - ${m}`).join("\n"));
  console.error("\n说明：");
  console.error("  - Vite 只会打包仓库里的 public/ 文件；GitHub Pages 上若缺少这些 JPG，");
  console.error("    页面会 404，组件会改用 Unsplash 占位图，看起来就像「图片错了」。");
  console.error("  - 请把相机/选片后的文件按上述文件名放入 public/assets/photos/，然后执行：");
  console.error("    git add public/assets/photos/*.jpg && git commit -m \"chore: add factory photos\" && git push");
  console.error("\n（本仓库没有 @assets 别名；请使用 public/assets/photos/，与 src/lib/images.ts 中一致。）\n");
  process.exit(1);
}

console.log("[photos] OK — all", REQUIRED.length, "factory JPEGs present under public/assets/photos/");
