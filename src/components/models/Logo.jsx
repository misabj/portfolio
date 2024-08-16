"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Logo(props) {
  const { nodes, materials } = useGLTF("/models/zlatni.glb");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.35;
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Gold}
        position={[0.031, 1.600, 0.114]}
        rotation={[1.569, 0.005, 0]}
        scale={[2.4, 0.1, 0.50]}
      />
    </group>
  );
}

useGLTF.preload("/models/zlatni.glb");
