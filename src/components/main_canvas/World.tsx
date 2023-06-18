"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Stats } from "@react-three/drei";
import { useRef } from "react";
import { VSMShadowMap, PCFSoftShadowMap } from "three";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { KeyWrapper } from "components/control_wrapper";

export default function World() {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }} shadows={{ type: PCFSoftShadowMap}} shadow-bias={0.0001}>
      <color attach="background" args={["#c1ddef"]} />
      <Perf />
      <Stats />
      <ambientLight intensity={0.3} />
      {/* <directionalLight intensity={1} position={[1, 1, 1]} /> */}
      <directionalLight
      color={"red"}
        position={[2,1,0]}
        intensity={2}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512 }
      />
      <Physics debug gravity={[0, -9.08, 0]}>
        <KeyWrapper>
          <Scene />
        </KeyWrapper>
      </Physics>
    </Canvas>
  );
}
