/** Local paths under `public/assets/photos/`. Fallbacks when files are missing in dev. */
export const PHOTO = {
  hero: "/assets/photos/hero-factory.jpg",
  meeting: "/assets/photos/meeting-workshop.jpg",
  cutting: "/assets/photos/cutting-room.jpg",
  fabric: "/assets/photos/fabric-prep.jpg",
  juki: "/assets/photos/equipment-juki.jpg",
  flatlock: "/assets/photos/equipment-flatlock.jpg",
  detail: "/assets/photos/equipment-detail.jpg",
  line: "/assets/photos/equipment-line.jpg",
  entrance: "/assets/photos/entrance.jpg",
  signage: "/assets/photos/signage.jpg",
  sewing: "/assets/photos/sewing-floor.jpg",
  showroomWide: "/assets/photos/showroom-wide.jpg",
  showroomRacks: "/assets/photos/showroom-racks.jpg",
  office: "/assets/photos/office.jpg",
  corridor: "/assets/photos/corridor.jpg",
} as const;

export const FALLBACK: Record<string, string> = {
  [PHOTO.hero]:
    "https://images.unsplash.com/photo-1581092160562-40aa08e66837?auto=format&fit=crop&w=1920&q=80",
  [PHOTO.meeting]:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  [PHOTO.cutting]:
    "https://images.unsplash.com/photo-1558171813-3c0888c0efb7?auto=format&fit=crop&w=1200&q=80",
  [PHOTO.fabric]:
    "https://images.unsplash.com/photo-1558171813-3c0888c0efb7?auto=format&fit=crop&w=1200&q=80",
  [PHOTO.juki]:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
  [PHOTO.flatlock]:
    "https://images.unsplash.com/photo-1620799140408-ed534f99a329?auto=format&fit=crop&w=900&q=80",
  [PHOTO.detail]:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  [PHOTO.line]:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80",
  [PHOTO.entrance]:
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1400&q=80",
  [PHOTO.signage]:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  [PHOTO.sewing]:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
  [PHOTO.showroomWide]:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  [PHOTO.showroomRacks]:
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
  [PHOTO.office]:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  [PHOTO.corridor]:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
};

export const CATEGORY = {
  gym: "/assets/categories/gym.jpg",
  running: "/assets/categories/running.jpg",
  yoga: "/assets/categories/yoga.jpg",
  casual: "/assets/categories/casual.jpg",
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
