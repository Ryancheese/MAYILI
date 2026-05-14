import { useCallback, useState, type ImgHTMLAttributes } from "react";
import { ALL_FALLBACK } from "../lib/images";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

export function FactoryImg({ src, alt, onError, ...rest }: Props) {
  const fb = ALL_FALLBACK[src];
  const [current, setCurrent] = useState(src);

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (fb && current !== fb) {
        setCurrent(fb);
        return;
      }
      onError?.(e);
    },
    [current, fb, onError],
  );

  return <img src={current} alt={alt} loading="lazy" decoding="async" onError={handleError} {...rest} />;
}
