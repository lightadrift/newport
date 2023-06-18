"use client";

import {
  Box,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Suspense, useState } from "react";
import Ground from "../models/ground";

import { Pokemon } from "@models/Scenarios/Pokemon";
import { Model } from "@models/Scenarios/Test";
import { useLoader } from "@react-three/fiber";
import {
  DoubleSide,
  NearestFilter,
  SRGBColorSpace,
  TextureLoader,
} from "three";
import Player from "@models/Player/Player";
import Test from "@models/Player/test";

export default function Scene() {
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
  const src = "./sprites/Warrior.png";

  const texture = useLoader(TextureLoader, src);
  texture.repeat.set(1 / 6, 1 / 17);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.colorSpace = SRGBColorSpace;
  return (
    <>
      <Suspense fallback={null}>
        {/* <Environment files={"http://localhost:3000/envmap.hdr"} background /> */}
        {/* <PerspectiveCamera makeDefault fov={40}  position={[0, 2, 10]}  /> */}
        <OrbitControls target={[-2.64, -0.71, 0.03]} />
        <OrthographicCamera
          makeDefault
          zoom={250}
          position={[5, 1, 0]}
          getObjectsByProperty={undefined}
        />

        <Player scale={[20,20,20]}/>
        {/* <Test /> */}
        <Box scale={0.5} castShadow receiveShadow position={[0, 0.5, 1]}>
          <meshStandardMaterial attach="material" color="white" />
        </Box>
        <Ground />
        {/* 
        <RigidBody type="fixed" colliders="trimesh">
          <Pokemon />
        </RigidBody> */}
      </Suspense>
    </>
  );
}
