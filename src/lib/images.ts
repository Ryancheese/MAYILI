/**
 * Factory & category images: bundled from `src/assets/**` via `?url`.
 * In Cursor you can refer to this folder as @assets/photos — same as `src/assets/photos/`.
 * Run `node scripts/fetch-semantic-photos.mjs` to refresh themed placeholders from Unsplash.
 */
import casualUrl from "@assets/categories/casual-generated.png?url";
import gymUrl from "@assets/categories/gym-generated.png?url";
import runningUrl from "@assets/categories/running-generated.png?url";
import yogaUrl from "@assets/categories/yoga-generated.png?url";

import corridorUrl from "@assets/photos/corridor.jpg?url";
import cuttingUrl from "@assets/photos/cutting-room.jpg?url";
import detailUrl from "@assets/photos/equipment-detail.jpg?url";
import flatlockUrl from "@assets/photos/equipment-flatlock.jpg?url";
import jukiUrl from "@assets/photos/equipment-juki.jpg?url";
import lineUrl from "@assets/photos/equipment-line.jpg?url";
import entranceUrl from "@assets/photos/entrance.jpg?url";
import fabricUrl from "@assets/photos/fabric-prep.jpg?url";
import heroUrl from "@assets/photos/hero-factory.jpg?url";
import meetingUrl from "@assets/photos/meeting-workshop.jpg?url";
import officeUrl from "@assets/photos/office.jpg?url";
import sewingUrl from "@assets/photos/sewing-floor.jpg?url";
import racksUrl from "@assets/photos/showroom-racks.jpg?url";
import wideUrl from "@assets/photos/showroom-wide.jpg?url";
import signageUrl from "@assets/photos/signage.jpg?url";

/** Optional `public/` files (e.g. hero video). Still needs `BASE_URL` when not using bundled assets. */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\/+/, "");
  return `${base}${normalized}`;
}

export const PHOTO = {
  hero: heroUrl,
  meeting: meetingUrl,
  cutting: cuttingUrl,
  fabric: fabricUrl,
  juki: jukiUrl,
  flatlock: flatlockUrl,
  detail: detailUrl,
  line: lineUrl,
  entrance: entranceUrl,
  signage: signageUrl,
  sewing: sewingUrl,
  showroomWide: wideUrl,
  showroomRacks: racksUrl,
  office: officeUrl,
  corridor: corridorUrl,
} as const;

export const FALLBACK: Record<string, string> = {
  [heroUrl]:
    "https://images.unsplash.com/photo-1581092160562-40aa08e66837?auto=format&fit=crop&w=1920&q=80",
  [meetingUrl]:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  [cuttingUrl]:
    "https://images.unsplash.com/photo-1558171813-3c0888c0efb7?auto=format&fit=crop&w=1200&q=80",
  [fabricUrl]:
    "https://images.unsplash.com/photo-1620799140408-ed534f99a329?auto=format&fit=crop&w=1200&q=80",
  [jukiUrl]:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
  [flatlockUrl]:
    "https://images.unsplash.com/photo-1620799140408-ed534f99a329?auto=format&fit=crop&w=900&q=80",
  [detailUrl]:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  [lineUrl]:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
  [entranceUrl]:
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1400&q=80",
  [signageUrl]:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  [sewingUrl]:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
  [wideUrl]:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  [racksUrl]:
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
  [officeUrl]:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  [corridorUrl]:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
};

export const CATEGORY = {
  gym: gymUrl,
  running: runningUrl,
  yoga: yogaUrl,
  casual: casualUrl,
} as const;

export const CATEGORY_FALLBACK = {
  gym: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  running: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
  yoga: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
  casual: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
} as const;

export const CATEGORY_IMG_FALLBACK: Record<string, string> = {
  [CATEGORY.gym]: CATEGORY_FALLBACK.gym,
  [CATEGORY.running]: CATEGORY_FALLBACK.running,
  [CATEGORY.yoga]: CATEGORY_FALLBACK.yoga,
  [CATEGORY.casual]: CATEGORY_FALLBACK.casual,
};

export const ALL_FALLBACK: Record<string, string> = { ...FALLBACK, ...CATEGORY_IMG_FALLBACK };
