import battleUrl from "@assets/brand-logos/battle.png?url";
import bobbyJonesUrl from "@assets/brand-logos/bobby-jones.png?url";
import costcoUrl from "@assets/brand-logos/costco.png?url";
import eckoUrl from "@assets/brand-logos/ecko.svg?url";
import saltLifeUrl from "@assets/brand-logos/salt-life.png?url";
import suniceUrl from "@assets/brand-logos/sunice.png?url";
import tommyUrl from "@assets/brand-logos/tommy.png?url";

export type BrandLogo = {
  name: string;
  src: string;
  /** White artwork — needs a dark card */
  frameDark?: boolean;
};

export const BRAND_LOGOS: readonly BrandLogo[] = [
  { name: "Battle", src: battleUrl, frameDark: true },
  { name: "Bobby Jones", src: bobbyJonesUrl },
  { name: "Costco", src: costcoUrl },
  { name: "Ecko", src: eckoUrl },
  { name: "Salt Life", src: saltLifeUrl },
  { name: "Sunice", src: suniceUrl },
  { name: "Tommy", src: tommyUrl },
] as const;
