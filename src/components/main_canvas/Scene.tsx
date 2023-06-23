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

import Player from "@models/Player/Player";

export default function Scene() {

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
