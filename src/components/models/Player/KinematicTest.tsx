import { Box, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

function Player2() {
  const playerRef = useRef<RapierRigidBody>(null);
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame(() => {
    const { forward, backward, left, right, jump } = getKeys();


    // if (playerRef.current) {
    //     const dist = distance(currentPosition, targetPosition);
    //     if (dist > 0.01) {
    //       const direction = {
    //         x: (targetPosition.x - currentPosition.x) / dist,
    //         y: (targetPosition.y - currentPosition.y) / dist,
    //         z: (targetPosition.z - currentPosition.z) / dist,
    //       };
    
    //       const newPosition = {
    //         x: currentPosition.x + direction.x * velocity * delta,
    //         y: currentPosition.y + direction.y * velocity * delta,
    //         z: currentPosition.z + direction.z * velocity * delta,
    //       };
    
    //       playerRef.current.setTranslation(newPosition, true);
    //     }
    //   }
  });
  return (
    <>
      <RigidBody
        position={[0, 2, 0]}
        ref={playerRef}
        colliders="cuboid"
        type="kinematicVelocity"
      >
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color="blue" />
        </Box>
      </RigidBody>
    </>
  );
}

export default Player2;
