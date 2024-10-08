import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

interface ThreeDViewerProps {
  modelPath?: string;
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath || "/images/demo_three.glb");

  return (
    <Canvas camera={{ position: [0, 1, 2], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDViewer;
