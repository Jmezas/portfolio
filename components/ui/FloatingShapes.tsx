'use client';

import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    { size: 300, color: 'from-indigo-500/20 to-purple-500/20', duration: 20, delay: 0, x: '10%', y: '20%' },
    { size: 400, color: 'from-purple-500/20 to-pink-500/20', duration: 25, delay: 2, x: '80%', y: '60%' },
    { size: 250, color: 'from-pink-500/20 to-indigo-500/20', duration: 22, delay: 4, x: '60%', y: '10%' },
    { size: 350, color: 'from-indigo-500/30 to-blue-500/20', duration: 18, delay: 1, x: '20%', y: '70%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
