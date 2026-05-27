import battleUrl from "@assets/brand-logos/battle.png?url";
import bobbyJonesUrl from "@assets/brand-logos/bobby-jones.png?url";
import costcoUrl from "@assets/brand-logos/costco.png?url";
import eckoUrl from "@assets/brand-logos/ecko.svg?url";
import saltLifeUrl from "@assets/brand-logos/salt-life.png?url";
import suniceUrl from "@assets/brand-logos/sunice.png?url";
import tommyUrl from "@assets/brand-logos/tommy.png?url";

export type BrandLogoId =
  | "battle"
  | "bobby-jones"
  | "costco"
  | "ecko"
  | "salt-life"
  | "sunice"
  | "tommy";

export type BrandLogo = {
  id: BrandLogoId;
  name: string;
  src: string;
  /** White artwork — needs a dark card */
  frameDark?: boolean;
};

export const BRAND_LOGOS: readonly BrandLogo[] = [
  { id: "battle", name: "Battle", src: battleUrl, frameDark: true },
  { id: "bobby-jones", name: "Bobby Jones", src: bobbyJonesUrl },
  { id: "costco", name: "Costco", src: costcoUrl },
  { id: "ecko", name: "Ecko", src: eckoUrl },
  { id: "salt-life", name: "Salt Life", src: saltLifeUrl },
  { id: "sunice", name: "Sunice", src: suniceUrl },
  { id: "tommy", name: "Tommy Hilfiger", src: tommyUrl },
] as const;
