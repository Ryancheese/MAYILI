import { Composition } from "remotion";
import { MayiliPromo } from "./MayiliPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MayiliPromo"
      component={MayiliPromo}
      durationInFrames={600}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
