import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction } from "react";

type keys2 = {
  jump: boolean;
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};

export const usePlayerAnimation = (
  setState: Dispatch<SetStateAction<AnimationKeys>>,
  grounded: () => boolean | undefined
) => {

  const actions = {
    jump: () => {
      setState("jump");
    },
    forward: () => {
      setState("run");
    },
    backward: () => {
      setState("run");
    },
    left: () => {
      setState("run");
    },
    right: () => {
      setState("run");
    },
  };
  const [subscribeKeys, getKeys] = useKeyboardControls();

  function CheckKeys() {
    const keys = getKeys();
    const movements = [keys.forward, keys.backward, keys.left, keys.right];
    const t = movements.some((value) => value);
    const key = Object.keys(keys).find((k) => keys[k]) as keyof typeof actions;
    if (key && actions[key]) {
      actions[key]();
    } else if (!keys.jump && !grounded()) {
      setState("falling");
    } else if (!keys.jump && grounded() && t === false) {
      setState("idle");
    } else {
      setState("idle");
    }
  }
  useFrame((_, delta) => {
    CheckKeys();
  });
};
