import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import { useTheme } from '../../Context/ThemeContext';

function Geometry({ isDarkMode }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float floatIntensity={3} rotationIntensity={1.5} speed={2}>
      <Icosahedron args={[1.5, 2]} ref={meshRef}>
        <MeshDistortMaterial 
          color={isDarkMode ? "#6b26d9" : "#a855f7"} 
          emissive={isDarkMode ? "#f6339a" : "#ec4899"} 
          emissiveIntensity={isDarkMode ? 0.6 : 0.2} 
          wireframe 
          distort={0.4} 
          speed={2} 
        />
      </Icosahedron>
    </Float>
  );
}

export default function Floating3DGeometry() {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full h-full min-h-[300px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={isDarkMode ? 0.8 : 1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
        <Geometry isDarkMode={isDarkMode} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
