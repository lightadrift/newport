"use client";

import { KeyboardControlsEntry, KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";

export function KeyWrapper({ children }: any) {
  enum Controls {
    forward = "forward",
    backward = "backward",
    left = "left",
    right = "right",
    jump = "jump",
  }

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <>
      <KeyboardControls map={map}>{children}</KeyboardControls>
    </>
  );
}
