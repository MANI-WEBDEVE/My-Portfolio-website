import { Suspense } from "react";
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function ShapesContent() {
  return (
    <Canvas
      className="z-0"
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
    >
      <Suspense fallback={null}>
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.65}
          scale={40}
          blur={1}
          far={9}
        />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

export { ShapesContent };
