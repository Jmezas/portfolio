'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectCard3DProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  impact?: { metric: string; value: string }[];
  duration?: string;
  team?: string;
}

export default function ProjectCard3D({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  index,
  fullDescription,
  challenges,
  solutions,
  impact,
  duration,
  team,
}: ProjectCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative group"
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/90 to-white/80 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/20 overflow-hidden h-full flex flex-col"
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
        {/* Imagen de fondo si existe */}
        {image && (
          <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Efecto de brillo en hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative z-10 flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-6 flex-1">
            <motion.h3
              className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight"
              animate={{ scale: isHovered ? 1.03 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">{description}</p>
          </div>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-300 dark:border-indigo-500/30 backdrop-blur-sm hover:bg-indigo-200 dark:hover:bg-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + i * 0.03,
                  type: 'spring',
                  stiffness: 300,
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Info size={16} />
              <span>Ver Más</span>
            </motion.button>
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg font-semibold border border-gray-400 dark:border-white/20 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg font-semibold border border-gray-400 dark:border-white/20 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>Código</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Borde brillante en hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30" />
        </div>
      </motion.div>
    </motion.div>

    {/* Modal - Fuera de la tarjeta para renderizado correcto */}
    <ProjectModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      project={{
        title,
        description,
        technologies,
        liveUrl,
        githubUrl,
        fullDescription,
        challenges,
        solutions,
        impact,
        duration,
        team,
      }}
    />
  </>
  );
}
