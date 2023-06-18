"use client";

import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useState, useEffect, Ref, RefObject } from "react";
import {
  TextureLoader,
  DoubleSide,
  NearestFilter,
  Vector2,
  Vector3,
  SRGBColorSpace,
  Mesh,
} from "three";
import { useSprite } from "../../../utils/useSprite";
import {
  CuboidCollider,
  RigidBody,
  CapsuleCollider,
  useRapier,
  RapierRigidBody,
} from "@react-three/rapier";
import type {} from "@react-three/rapier";
import { lerp } from "three/src/math/MathUtils";
import { useControls } from "@utils/Controls_System";
import { usePlayerAnimation } from "@utils/usePlayerAnimation";

type MapKeys<T, K> = {
  [P in keyof T]: T[P] extends K ? P : never;
}[keyof T];

type TransformValues<T, K> = {
  [P in MapKeys<T, K>]: T[P];
};

type UpdatePlayerAnimations<T> = T extends animationsProps
  ? TransformValues<animationsProps, keyof T>
  : never;

type AnimationProps = {
  length: number;
  initial: number;
};

type AnimationKeys = "idle" | "run" | "attack" | "jump" | "falling";

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

//

interface PlayerProps {
  scale: number[];
}

const animations: animationsProps = [
  {
    idle: {
      length: 5,
      initial: 0,
    },
    run: {
      length: 7,
      initial: 6,
    },
    attack: {
      length: 11,
      initial: 14,
    },
    jump: {
      length: 2,
      initial: 41,
    },
    falling: {
      length: 4,
      initial: 44,
    },
  },
];

export default function Player({ scale }: PlayerProps) {
  const three = useThree();
  const player_center = new Vector2(0.4, 0.45);
  const meshRef = useRef<Mesh>(null);
  const t = useRef(0);
  let frametime = 100;

  //
  const [animation, setAnimation] = useState<AnimationKeys>("idle");
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const [jumps, setJumps] = useState(0);
  //
  const player = useRef<RapierRigidBody>(null);
  const th = 6;
  const tv = 17;
  const src = "./sprites/Warrior.png";

  const texture = useLoader(TextureLoader, src);
  texture.repeat.set(1 / th, 1 / tv);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.colorSpace = SRGBColorSpace;
  // meshRef.current?.position.set(-0.1,0.04,-0.1)
  //
  const ctx = useRapier();
  const rapier = ctx.rapier;
  const world = ctx.world.raw();
  const SPEED = 2;
  const a = rapier.QueryFilterFlags.ONLY_DYNAMIC;
  //
  const direction = new Vector3();
  const frontVector = new Vector3();
  const sideVector = new Vector3();
  const rotation = new Vector3();

  //Controls

  const Jump = () => {
    if (jumps < 1) {
      player.current?.setLinvel({ x: 0, y: 4, z: 0 }, true);
      setJumps(jumps + 1);
    }
  };

  //não sei se vou usar

  // const run = () => {
  //   const newPos = player.current?.translation()!;
  //   // newPos.y += 0.3;
  //   player.current?.setLinvel({ x: 0, y: 0, z: 1 }, true);
  //   console.log(player.current?.linvel());
  //   // newPos.z += -lerp(0.1, 0.2, 0.1);
  //   // player.current?.setNextKinematicTranslation(newPos);
  // };

  const grounded = () => {
    if (!player.current || !ctx.world || !ctx.rapier) {
      return undefined;
    }
    const origin = player.current?.translation()!;
    const direction = new Vector3(0, -1, 0);
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, false);
    if (hit) {
      const grounded = hit.collider && Math.abs(hit.toi) <= 0.519;
      return grounded;
    }
  };

  // useControls({ subscribeKeys, getKeys });

  // useEffect(() => {
  //   subscribeKeys(
  //     (state) => state,
  //     (value) => {
  //       const actions = {
  //         jump: () => {
  //           setAnimation("jump");
  //           jump();
  //         },
  //         forward: () => {
  //           console.log("forward");
  //           setAnimation("run");
  //         },
  //         backward: () => {
  //           console.log("backward");
  //           setAnimation("run");
  //         },
  //         left: () => {
  //           setAnimation("run");
  //         },
  //         right: () => {
  //           console.log("right");
  //           setAnimation("run");
  //         },
  //       };

  //       const key = Object.keys(value).find(
  //         (k) => value[k]
  //       ) as keyof typeof actions;
  //       if (key && actions[key]) {
  //         actions[key]();
  //       } else {
  //         setAnimation("idle");
  //       }
  //     }
  //   );
  // }, []);

  usePlayerAnimation(setAnimation, grounded);

  useSprite(texture, 140, 6, 17, animation, animations, true);

  // CONSERTAR MOVIMENTO INVERTIDO
  useFrame((_, delta) => {

    // look at sprite
    if (meshRef.current && three.camera) {
      meshRef.current.lookAt(three.camera.position);
    }
    const { forward, backward, left, right, jump } = getKeys();
    if (jump) {
      Jump();
    }
    if (grounded()) {
      setJumps(0);
    }
    const velocity = player.current?.linvel()!;
    // console.log(direction.x, direction.y, direction.z)
    sideVector.set(0, 0, Number(left) - Number(right));
    frontVector.set(Number(backward) - Number(forward), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED);

    console.log(Number(backward));
    player.current?.setLinvel(
      {
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      },
      true
    );
  });

  return (
    <>
      <RigidBody
        colliders={false}
        dominanceGroup={1}
        mass={10}
        // enabledRotations={[false, false, false]}
        ref={player}
        position={[1, 1, 1]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.3, 0.22]}>
          <mesh
            renderOrder={1}
            scale={[1.2, 1.2, 1.2]}
            ref={meshRef}
            castShadow
          >
            <planeBufferGeometry attach="geometry" args={[1, 1]} />
            <meshLambertMaterial
              side={DoubleSide}
              map={texture}
              transparent
              alphaTest={0.5}
              
            />
          </mesh>
        </CapsuleCollider>
      </RigidBody>
    </>
  );
}
