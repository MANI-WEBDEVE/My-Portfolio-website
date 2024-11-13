"use client";
import * as THREE from "three";
import { Suspense, useEffect, useState, useRef } from "react";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Shapes;

function Geometries () {
  const geometries = [
    {
      position: [0,0,0],
      r:0.3,
      geometry: new THREE.IcosahedronGeometry(3),
    }
  ];

  const material = [
    new THREE.MeshNormalMaterial(),
  ]
}

function Geometry({r, position, geometry, materials}){
  const meshRef = useRef();
  const [visible, setVisible] = useState(false)

  const startingMaterial = getRandomMaterials()

  const getRandomMaterials = () => {
    return gsap.utils.random(materials)
  }

  const handleClick = (e) => {
    const mesh = e.object;
  }
}