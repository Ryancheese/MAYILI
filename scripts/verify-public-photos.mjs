/**
 * Verifies bundled factory JPEGs exist under src/assets/photos/ (used by Vite ?url imports).
 * Run: npm run check:photos
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = join(root, "src", "assets", "photos");

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
  console.error("\n[photos] 缺少 src/assets/photos/ 下的 JPEG（构建会失败）：");
  console.error(missing.map((m) => `  - ${m}`).join("\n"));
  console.error("\n请把工厂照片放到 src/assets/photos/ 并保持上述文件名，然后 git add / push。\n");
  process.exit(1);
}

console.log("[photos] OK —", REQUIRED.length, "files under src/assets/photos/");
