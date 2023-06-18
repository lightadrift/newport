import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { BoxGeometry } from "three/src/geometries/BoxGeometry";
import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial";

const boxGeometry = new BoxGeometry(1, 1, 1);

const floor1Material = new MeshStandardMaterial({
  color: "#3b9779",
  metalness: 0,
  roughness: 0,
});

export default function Ground() {
  const groundCollider = useRef<RapierRigidBody>(null);
  return (
    <>
      <RigidBody type="fixed">
        <group>
          <mesh
            geometry={boxGeometry}
            material={floor1Material}
            position={[0, -0.1, 0]}
            scale={[4, 0.2, 4]}
            receiveShadow
          />
        </group>
      </RigidBody>
    </>
  );
}
