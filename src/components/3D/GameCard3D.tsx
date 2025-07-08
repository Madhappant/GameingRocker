import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface GameCard3DProps {
  position: [number, number, number];
  title: string;
  image?: string;
  onClick?: () => void;
}

const GameCard3D: React.FC<GameCard3DProps> = ({
  position,
  title,
  image,
  onClick,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Card Background */}
      <RoundedBox
        args={[2, 3, 0.1]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color={hovered ? "#1A1A2E" : "#0F0F1A"}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? "#00D4FF" : "#000000"}
          emissiveIntensity={hovered ? 0.1 : 0}
        />
      </RoundedBox>

      {/* Game Image Placeholder */}
      <mesh position={[0, 0.5, 0.06]}>
        <planeGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#2A2A3E"
          map={image ? new THREE.TextureLoader().load(image) : undefined}
        />
      </mesh>

      {/* Glowing Border */}
      <mesh position={[0, 0, 0.05]}>
        <ringGeometry args={[1.4, 1.5, 32]} />
        <meshBasicMaterial
          color={hovered ? "#00D4FF" : "#FF006E"}
          transparent
          opacity={hovered ? 0.8 : 0.3}
        />
      </mesh>

      {/* Title Text */}
      <Text
        position={[0, -0.8, 0.06]}
        fontSize={0.2}
        color={hovered ? "#00D4FF" : "#FFFFFF"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron-bold.woff"
      >
        {title}
      </Text>

      {/* Interactive Particles */}
      {hovered && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 1.2,
                Math.sin((i / 8) * Math.PI * 2) * 1.2,
                0.1,
              ]}
            >
              <sphereGeometry args={[0.02]} />
              <meshBasicMaterial
                color="#00D4FF"
                emissive="#00D4FF"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
};

export default GameCard3D;