/** Footnote ids used across the site — definitions live in i18n `footnote.N`. */
export const FOOTNOTE_IDS = [1, 2, 3, 4] as const;
export type FootnoteId = (typeof FOOTNOTE_IDS)[number];

/** HashRouter owns the URL hash — use scroll instead of `#anchor` links. */
export function scrollToFootnoteAnchor(elementId: string) {
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function goToHomeSection(
  navigate: (to: string, options?: { state?: { scrollTo: string } }) => void,
  pathname: string,
  sectionId: string,
) {
  if (pathname === "/") {
    scrollToFootnoteAnchor(sectionId);
    return;
  }
  navigate("/", { state: { scrollTo: sectionId } });
}
