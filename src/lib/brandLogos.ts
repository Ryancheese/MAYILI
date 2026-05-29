import academyUrl from "@assets/brand-logos/academy.svg?url";
import battleUrl from "@assets/brand-logos/battle.png?url";
import bobbyJonesUrl from "@assets/brand-logos/bobby-jones.png?url";
import brooklynUrl from "@assets/brand-logos/brooklyn.svg?url";
import costcoUrl from "@assets/brand-logos/costco.png?url";
import cutAndSewUrl from "@assets/brand-logos/cut-and-sew.svg?url";
import eckoUrl from "@assets/brand-logos/ecko.svg?url";
import m71Url from "@assets/brand-logos/m71.svg?url";
import machineUrl from "@assets/brand-logos/machine.png?url";
import marcUrl from "@assets/brand-logos/marc.svg?url";
import matixUrl from "@assets/brand-logos/matix.svg?url";
import planetUrl from "@assets/brand-logos/planet.svg?url";
import saltLifeUrl from "@assets/brand-logos/salt-life.png?url";
import suniceUrl from "@assets/brand-logos/sunice.png?url";
import tommyUrl from "@assets/brand-logos/tommy.png?url";

export type BrandLogoId =
  | "machine"
  | "planet"
  | "brooklyn"
  | "academy"
  | "matix"
  | "marc"
  | "ecko"
  | "cut-and-sew"
  | "m71"
  | "battle"
  | "bobby-jones"
  | "costco"
  | "salt-life"
  | "sunice"
  | "tommy";

export type BrandLogo = {
  id: BrandLogoId;
  name: string;
  src: string;
  /** White artwork — needs a dark card */
  frameDark?: boolean;
  /** Wide logo — spans two grid columns on the brand wall */
  wallSpan?: 2;
};

export const BRAND_LOGOS: readonly BrandLogo[] = [
  { id: "machine", name: "Machine", src: machineUrl, wallSpan: 2 },
  { id: "planet", name: "Planet", src: planetUrl, wallSpan: 2 },
  { id: "brooklyn", name: "Brooklyn", src: brooklynUrl, wallSpan: 2 },
  { id: "academy", name: "Academy", src: academyUrl, wallSpan: 2 },
  { id: "matix", name: "Matix", src: matixUrl },
  { id: "marc", name: "Marc", src: marcUrl },
  { id: "ecko", name: "Ecko", src: eckoUrl, wallSpan: 2 },
  { id: "cut-and-sew", name: "Cut & Sew", src: cutAndSewUrl, wallSpan: 2 },
  { id: "m71", name: "M71", src: m71Url, frameDark: true },
  { id: "battle", name: "Battle", src: battleUrl, frameDark: true },
  { id: "bobby-jones", name: "Bobby Jones", src: bobbyJonesUrl, wallSpan: 2 },
  { id: "costco", name: "Costco", src: costcoUrl, wallSpan: 2 },
  { id: "salt-life", name: "Salt Life", src: saltLifeUrl, wallSpan: 2 },
  { id: "sunice", name: "Sunice", src: suniceUrl, wallSpan: 2 },
  { id: "tommy", name: "Tommy Hilfiger", src: tommyUrl, wallSpan: 2 },
] as const;
