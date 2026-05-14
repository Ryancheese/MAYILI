/**
 * Refreshes distinct placeholder JPEGs (picsum.photos, one seed per slot).
 * Requires curl in PATH. Run: npm run photos:fetch
 */
import { spawnSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));

const PHOTOS = [
  ["hero-factory.jpg", 1920, 1080, "mayili-hero"],
  ["meeting-workshop.jpg", 1600, 1000, "mayili-meeting"],
  ["cutting-room.jpg", 1600, 1000, "mayili-cutting"],
  ["fabric-prep.jpg", 1600, 1000, "mayili-fabric"],
  ["equipment-juki.jpg", 1400, 1000, "mayili-juki"],
  ["equipment-flatlock.jpg", 1400, 1000, "mayili-flatlock"],
  ["equipment-detail.jpg", 1400, 1000, "mayili-detail"],
  ["equipment-line.jpg", 1600, 1000, "mayili-line"],
  ["entrance.jpg", 1600, 1000, "mayili-entrance"],
  ["signage.jpg", 1200, 900, "mayili-signage"],
  ["sewing-floor.jpg", 1600, 1000, "mayili-sewing"],
  ["showroom-wide.jpg", 1600, 1000, "mayili-showwide"],
  ["showroom-racks.jpg", 1400, 1000, "mayili-racks"],
  ["office.jpg", 1600, 1000, "mayili-office"],
  ["corridor.jpg", 1600, 1000, "mayili-corridor"],
];

const CATEGORIES = [
  ["gym.jpg", "mayili-cat-gym"],
  ["running.jpg", "mayili-cat-run"],
  ["yoga.jpg", "mayili-cat-yoga"],
  ["casual.jpg", "mayili-cat-casual"],
];

function curl(out, url) {
  const r = spawnSync("curl", ["-L", "--max-time", "90", "-o", out, url], {
    encoding: "utf-8",
    stdio: ["ignore", "inherit", "inherit"],
  });
  if (r.error) throw r.error;
  if (r.status !== 0) throw new Error(`curl exit ${r.status} for ${url}`);
}

async function main() {
  for (const [name, w, h, seed] of PHOTOS) {
    const dest = join(root, "src", "assets", "photos", name);
    await mkdir(join(root, "src", "assets", "photos"), { recursive: true });
    const url = `https://picsum.photos/seed/${seed}/${w}/${h}.jpg`;
    process.stdout.write(`photos/${name} … `);
    curl(dest, url);
    console.log("ok");
  }
  for (const [name, seed] of CATEGORIES) {
    const dest = join(root, "src", "assets", "categories", name);
    await mkdir(join(root, "src", "assets", "categories"), { recursive: true });
    const url = `https://picsum.photos/seed/${seed}/1000/1200.jpg`;
    process.stdout.write(`categories/${name} … `);
    curl(dest, url);
    console.log("ok");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
