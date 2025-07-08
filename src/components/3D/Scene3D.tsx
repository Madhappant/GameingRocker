import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Box } from '@mui/material';

interface Scene3DProps {
  children: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  height?: string | number;
}

const Scene3D: React.FC<Scene3DProps> = ({
  children,
  enableControls = false,
  cameraPosition = [0, 0, 5],
  height = '100vh',
}) => {
  return (
    <Box sx={{ width: '100%', height }}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={75}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4FF" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#FF006E" />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Controls */}
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        )}
        
        {/* Scene Content */}
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Scene3D;