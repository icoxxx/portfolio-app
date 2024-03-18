import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
      <group>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <ambientLight
        intensity={2}
        position={[-20, 50, 10]}
        />
        <pointLight intensity={1} />
        <primitive
          object={scene}
          scale={isMobile ? 0.4 : 0.7}
          position={isMobile ? [0, -2.5, -0.8] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </group>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

