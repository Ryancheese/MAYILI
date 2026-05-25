import { scrollToFootnoteAnchor } from "../lib/footnotes";

type FootnoteRefProps = {
  id: number;
};

export function FootnoteRef({ id }: FootnoteRefProps) {
  return (
    <sup className="fn-ref">
      <a
        href="#"
        id={`fn-ref-${id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToFootnoteAnchor(`fn-${id}`);
        }}
      >
        [{id}]
      </a>
    </sup>
  );
}
