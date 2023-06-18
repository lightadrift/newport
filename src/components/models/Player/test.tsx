import {
  Mesh,
  MeshBasicMaterial,
  NearestFilter,
  TextureLoader,
  DoubleSide,
  Vector3,
} from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const fragmentShader = `...`;

import vertexShader from "./shaders/vertexShader";

function Test() {
  const three = useThree();
  const th = 6;
  const tv = 17;
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (meshRef.current && three.camera) {
      meshRef.current.lookAt(three.camera.position);
    }
  });
  const texture = new TextureLoader().load("/sprites/Warrior.png");
  texture.repeat.set(1 / th, 1 / tv);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.center.set(0.5, 0.5)
  console.log(texture);
  return (
    <>
      <mesh renderOrder={1} scale={[1.2, 1.2, 1.2]} ref={meshRef} castShadow>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshLambertMaterial
          side={DoubleSide}
          map={texture}
          transparent
          alphaTest={0.5}
        />
      </mesh>
    </>
  );
}

export default Test;
