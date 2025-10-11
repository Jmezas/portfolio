'use client';

import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Box, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3 } from 'three';

// Detectar si es dispositivo móvil
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
}

// Tecnologías para mostrar - reducidas para móvil
const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Nest.js', color: '#E0234E' },
  { name: '.NET', color: '#512BD4' },
  { name: 'Java', color: '#007396' },
  { name: 'Spring', color: '#6DB33F' },
];

// Detectar soporte WebGL
function detectWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}
  
type TechBoxProps = {
  position: Vector3 | [number, number, number];
  name: string;
  color: string;
  speed: number;
  isMobile: boolean;
};

function TechBox({ position, name, color, speed, isMobile }: TechBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<typeof Text>(null);

  // Tamaños adaptativos para móvil
  const boxSize = isMobile ? 1.0 : 1.3;
  const wireframeSize = isMobile ? 1.02 : 1.32;
  const fontSize = isMobile ? 0.22 : 0.28;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.008;
    }
    if (textRef.current) {
      (textRef.current as unknown as THREE.Object3D).quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.5}>
      <group position={position}>
        <Box ref={meshRef} args={[boxSize, boxSize, boxSize]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.5}
            wireframe={false}
            emissive={color}
            emissiveIntensity={0.6}
            metalness={0.5}
            roughness={0.3}
          />
        </Box>
        <Box args={[wireframeSize, wireframeSize, wireframeSize]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.9}
            wireframe={true}
          />
        </Box>
        <Text
          ref={textRef}
          position={[0, 0, boxSize * 0.6]}
          fontSize={fontSize}
          color={color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
          fontWeight="bold"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

function ParticleField({ isMobile }: { isMobile: boolean }) {
  const particlesRef = useRef<THREE.Points>(null);

  // Menos partículas en móvil para mejor rendimiento
  const particlesCount = isMobile ? 200 : 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const spread = isMobile ? 8 : 10;
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * spread;
    }
    return pos;
  }, [isMobile, particlesCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={isMobile ? 0.025 : 0.03} color="#8B5CF6" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function FloatingTechBoxes({ isMobile }: { isMobile: boolean }) {
  const techPositions = useMemo(() => {
    // Radio más compacto y altura reducida
    const radius = isMobile ? 3.2 : 3.8;
    const heightMultiplier = isMobile ? 0.8 : 1.2;

    return technologies.map((tech, i) => {
      const angle = (i / technologies.length) * Math.PI * 2;
      const height = Math.sin(angle * 2) * heightMultiplier;
      return {
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ] as [number, number, number],
        speed: 1.8 + (i % 3) * 0.3,
        ...tech
      };
    });
  }, [isMobile]);

  return (
    <group>
      {techPositions.map((tech, i) => (
        <TechBox
          key={`tech-${i}-${tech.name}`}
          position={tech.position}
          name={tech.name}
          color={tech.color}
          speed={tech.speed}
          isMobile={isMobile}
        />
      ))}
    </group>
  );
}

function CameraController({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  useFrame(() => {
    if (!isMobile) {
      // Movimiento de cámara más sutil en desktop
      camera.position.x += (mousePosition.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mousePosition.y * 0.5 - camera.position.y) * 0.05;
    }
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Fallback component for browsers without WebGL
function FallbackAnimation({ isDark, isMobile }: { isDark: boolean; isMobile: boolean }) {
  const orbSize = isMobile ? 'w-48 h-48' : 'w-72 h-72';

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden" style={{
      background: isDark
        ? 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)'
        : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.15) 70%)',
      minHeight: '100vh',
      pointerEvents: 'none'
    }}>
      {/* Animated gradient orbs as fallback */}
      <div
        className={`absolute ${orbSize} rounded-full blur-3xl opacity-40 animate-pulse`}
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)',
          top: '20%',
          left: isMobile ? '5%' : '10%',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div
        className={`absolute ${orbSize} rounded-full blur-3xl opacity-40 animate-pulse`}
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
          top: '60%',
          right: isMobile ? '5%' : '15%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />
      <div
        className={`absolute ${orbSize} rounded-full blur-3xl opacity-40 animate-pulse`}
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%)',
          bottom: '20%',
          left: isMobile ? '25%' : '40%',
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
    </div>
  );
}

export default function Hero3D() {
  const [isDark, setIsDark] = useState(true);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar tema
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Detectar WebGL y dispositivo móvil
    setHasWebGL(detectWebGLSupport());
    setIsMobile(isMobileDevice());

    return () => observer.disconnect();
  }, []);

  // Show loading state
  if (hasWebGL === null) {
    return (
      <div className="w-full h-full absolute inset-0" style={{
        background: isDark
          ? 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)'
          : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.15) 70%)',
        minHeight: '100vh',
        pointerEvents: 'none'
      }} />
    );
  }

  // Fallback for browsers without WebGL
  if (!hasWebGL || error) {
    return <FallbackAnimation isDark={isDark} isMobile={isMobile} />;
  }

  return (
    <div className="w-full h-full absolute inset-0" style={{
      background: isDark
        ? 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)'
        : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.15) 70%)',
      minHeight: '100vh',
      pointerEvents: 'none'
    }}>
      <Suspense fallback={<FallbackAnimation isDark={isDark} isMobile={isMobile} />}>
        <Canvas
          camera={{ position: [0, 0, isMobile ? 8 : 9], fov: isMobile ? 70 : 60 }}
          style={{
            background: 'transparent',
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          gl={{
            antialias: !isMobile, // Desactivar antialiasing en móvil para rendimiento
            alpha: true,
            powerPreference: isMobile ? "low-power" : "default",
            preserveDrawingBuffer: false,
            failIfMajorPerformanceCaveat: false,
          }}
          dpr={isMobile ? [1, 1] : [1, 1.5]} // Menor resolución en móvil
          frameloop="always"
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
            gl.outputColorSpace = THREE.SRGBColorSpace;
          }}
          onError={() => setError(true)}
        >
          {/* Iluminación más intensa para mejor visibilidad */}
          <ambientLight intensity={isDark ? 1.5 : 2.2} />
          <directionalLight position={[10, 10, 5]} intensity={isDark ? 2.0 : 2.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={isDark ? 1.5 : 2.0} color="#4F46E5" />
          <pointLight position={[10, -10, -5]} intensity={isDark ? 1.3 : 1.8} color="#EC4899" />
          <pointLight position={[0, 10, 5]} intensity={isDark ? 1.1 : 1.5} color="#8B5CF6" />

          {/* Menos estrellas en móvil */}
          <Stars radius={100} depth={50} count={isMobile ? 1000 : 1800} factor={isMobile ? 2 : 3} saturation={0} fade speed={1} />

          <FloatingTechBoxes isMobile={isMobile} />
          <ParticleField isMobile={isMobile} />
          <CameraController isMobile={isMobile} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={isMobile ? 0.4 : 0.6}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableDamping={!isMobile} // Desactivar damping en móvil
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
