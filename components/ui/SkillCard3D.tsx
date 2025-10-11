'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { getSkillIcon } from '@/lib/skillIcons';

interface SkillCard3DProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillCard3D({ name, level, index }: SkillCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = getSkillIcon(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="relative p-6 md:p-7 rounded-2xl bg-gradient-to-br from-white/90 to-white/80 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/20 overflow-hidden"
        animate={{
          rotateX: isHovered ? -10 : 0,
          rotateY: isHovered ? 10 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Efecto de brillo en hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"
          animate={{
            x: isHovered ? ['-100%', '100%'] : '-100%',
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Contenido */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 bg-indigo-200 dark:bg-indigo-500/20 rounded-lg backdrop-blur-sm"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <IconComponent className="text-indigo-600 dark:text-indigo-400" size={20} />
              </motion.div>
              <motion.h3
                className="text-sm md:text-base font-bold text-gray-900 dark:text-white"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {name}
              </motion.h3>
            </div>
            <motion.span
              className="text-indigo-600 dark:text-indigo-400 font-bold text-base md:text-lg"
              animate={{
                scale: isHovered ? 1.1 : 1,
                color: isHovered ? '#EC4899' : undefined,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {level}%
            </motion.span>
          </div>

          {/* Barra de progreso 3D */}
          <div className="relative w-full h-3 md:h-4 bg-gray-300 dark:bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: 'easeOut' }}
              style={{
                boxShadow: isHovered
                  ? '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)'
                  : '0 0 10px rgba(99, 102, 241, 0.5)',
              }}
            />

            {/* Efecto de brillo en la barra */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${level}%`,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              }}
              animate={{
                x: isHovered ? ['-100%', '100%'] : '-100%',
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: 'linear',
              }}
            />
          </div>
        </div>

        {/* Partículas flotantes */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
                style={{
                  left: `${20 + i * 20}%`,
                  bottom: 0,
                }}
              />
            ))}
          </>
        )}

        {/* Borde brillante */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-50" />
        </div>
      </motion.div>
    </motion.div>
  );
}
