import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface GameControllerProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
}

const GameController: React.FC<GameControllerProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = false,
}) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  // Fallback geometry if GLTF model is not available
  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Controller Body */}
      <mesh>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial
          color="#2A2A2A"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Left Analog Stick */}
      <mesh position={[-0.5, 0.2, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial
          color="#1A1A1A"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      
      {/* Right Analog Stick */}
      <mesh position={[0.5, -0.2, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial
          color="#1A1A1A"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      
      {/* D-Pad */}
      <mesh position={[-0.5, -0.2, 0.3]}>
        <boxGeometry args={[0.3, 0.1, 0.05]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[-0.5, -0.2, 0.3]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.3, 0.1, 0.05]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Action Buttons */}
      <mesh position={[0.5, 0.2, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05]} />
        <meshStandardMaterial
          color="#FF006E"
          emissive="#FF006E"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.7, 0.1, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.3, 0.1, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.5, 0, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05]} />
        <meshStandardMaterial
          color="#FF4500"
          emissive="#FF4500"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

export default GameController;