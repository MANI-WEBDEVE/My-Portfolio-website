"use client";
import * as THREE from "three";
import { Suspense, useEffect, useState, useRef } from "react";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";

function Shapes() {

  
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <ambientLight intensity={0.5} />
        <Geometries />
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

function Geometries() {

  const geometries = [
    {
      position: [0.35, 0, 3],
      r: 0.4,
      geometry: new THREE.IcosahedronGeometry(2),
    },
    {
      position: [1, -0.75, 5],
      r: 0.6,
      geometry: new THREE.CapsuleGeometry(0.47, 1.4, 2, 16),
    },
    {
      position: [1.9, 0.7, 0.7],
      r: 0.4,
      geometry: new THREE.DodecahedronGeometry(1),
    },
    {
      position: [-1, -1, 1],
      r: 0.8,
      geometry: new THREE.TorusGeometry(0.9, 0.4, 16, 100),
    },
    {
      position: [-1, 1.2, 0.7],
      r: 0.8,
      geometry: new THREE.OctahedronGeometry(1),
    },
    {
      position: [0.6, 1.8, 0.5],
      r: 0.8,
      geometry: new THREE.ConeGeometry( 1, 2, 32 )
    },
  ];

  const material = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({
      color: 0x1abc9c, // Lighter green
      roughness: 0,
      metalness: 0.7,
      flatShading: true,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50, // Deep blue-gray
      roughness: 0,
      metalness: 0.9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x05fff7, // Bright cyan
      roughness: 1,
      metalness: 1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xe67e22, // Orange
      roughness: 0,
      metalness: 0,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xe74c3c, // Bright red
      roughness: 1,
      metalness: 0,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x27ae60, // Lighter green
      roughness: 0,
      metalness: 1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2ecc71, // Light green with vertex colors
      roughness: 0,
      metalness: 1,
      vertexColors: true,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x4eb500, // Bright green
      roughness: 0.1,
      metalness: 0.9,
      flatShading: true,
    }),
  ];




  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={[position[0] * 2, position[1] * 2, position[2] * 2] as [number, number, number]}
      geometry={geometry}
      materials={material}
      r={r}
    />
  ));
}

interface GeometryProps {
  r: number;
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  materials: THREE.Material[];
}

function Geometry({ r, position, geometry, materials }: GeometryProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);

  const getRandomMaterials = () => {
    return gsap.utils.random(materials);
  };

  const startingMaterial = getRandomMaterials();

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    const mesh = e.object as THREE.Mesh<THREE.BufferGeometry, THREE.Material>;
    if (mesh.geometry.type === "IcosahedronGeometry") {
      new Audio("/sounds/m4.ogg").play();
      new Audio("/sounds/voice.mp3").play();
      
    } else if (mesh.geometry.type === "CapsuleGeometry") {
      new Audio("/sounds/m1.mp3").play();
    } else if (mesh.geometry.type === "DodecahedronGeometry") {
      new Audio("/sounds/m2.mp3").play();
    } else if (mesh.geometry.type === "TorusGeometry") {
      new Audio("/sounds/cp.mp3").play();
    } else if (mesh.geometry.type === "OctahedronGeometry") {
      new Audio("/sounds/dim1.mp3").play();
    }

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, Math.PI / 4)}`,
      y: `+=${gsap.utils.random(0, Math.PI / 4)}`,
      z: `+=${gsap.utils.random(0, Math.PI / 4)}`,
      duration: 1,
      ease: "elastic.out(2, 0.6)",
    });

    mesh.material = getRandomMaterials();
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    setVisible(true);
    const ctx = gsap.context(() => {
      if (!meshRef.current) return;
      
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.9,
        delay: 1.5,
        ease: "elastic.out(2, 0.4)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={r * 5} rotationIntensity={6 * r} floatIntensity={r * 0.1}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial as THREE.Material}
        />
      </Float>
    </group>
  );
}
