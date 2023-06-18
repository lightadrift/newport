/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 test.glb --transform --types -k
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    cube: THREE.Mesh
    cube_1: THREE.Mesh
  }
  materials: {}
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/test-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="cube" geometry={nodes.cube.geometry} material={nodes.cube.material} position={[0, 0.02, 0]} rotation={[-1.57, 0.01, 0.01]} />
      <mesh name="cube_1" geometry={nodes.cube_1.geometry} material={nodes.cube_1.material} />
    </group>
  )
}

useGLTF.preload('/test-transformed.glb')
