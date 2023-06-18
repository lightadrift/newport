import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Texture } from "three";

type animationsProps = [
  {
    idle: {
      length: number;
      initial: number;
    };
    run: {
      length: number;
      initial: number;
    };
    attack: {
      length: number;
      initial: number;
    };
    jump: {
      length: number;
      initial: number;
    };
    falling: {
      length: number;
      initial: number;
    };
  }
];

export const useSprite = (
  texture: Texture,
  frameTime: number,
  th: number,
  tv: number,
  animation: string,
  animations: animationsProps,
  loop: boolean
) => {
  let frameCount: number;
  let initialFrame: number;
  const t = useRef(0);
  const framesCounted = useRef(0);
  const currentFrame = useRef<number>(0);

  switch (animation) {
    case "idle":
      initialFrame = animations[0].idle.initial;
      frameCount = animations[0].idle.length;
      currentFrame.current = initialFrame;
      break;
    case "run":
      initialFrame = animations[0].run.initial;
      frameCount = animations[0].run.length;
      currentFrame.current = initialFrame;
      break;
    case "attack":
      if (animations[0].attack) {
        initialFrame = animations[0].attack.initial;
        frameCount = animations[0].attack.length;
        currentFrame.current = initialFrame;
      }
      break;
    case "jump":
      if (animations[0].attack) {
        initialFrame = animations[0].jump.initial;
        frameCount = animations[0].jump.length;
        currentFrame.current = initialFrame;
      }
      break;
    case "falling":
      if (animations[0].attack) {
        initialFrame = animations[0].falling.initial;
        frameCount = animations[0].falling.length;
        currentFrame.current = initialFrame;
      }
      break;
    default:
      console.log("não há");
  }

  useFrame((_, delta) => {
    t.current += delta * 1000;
    if (t.current >= frameTime) {
      framesCounted.current += 1;
      if (framesCounted.current <= frameCount) {
        currentFrame.current += 1;
      } else {
        framesCounted.current = 0;
        currentFrame.current = initialFrame;
      }
      t.current = 0;
      const offsetx = (currentFrame.current % th) / th;
      const offsety = (tv - Math.floor(currentFrame.current / th) - 1) / tv;
      texture.offset.x = offsetx;
      texture.offset.y = offsety;
    }
  });

  return { t, currentFrame };
};
