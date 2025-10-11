'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  index: number;
}

export default function ExperienceCard({
  company,
  position,
  period,
  location,
  description,
  technologies,
  index,
}: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Línea de tiempo */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full">
        <motion.div
          className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-1.5 top-8"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            boxShadow: isHovered
              ? ['0 0 0 0 rgba(99, 102, 241, 0.7)', '0 0 0 10px rgba(99, 102, 241, 0)', '0 0 0 0 rgba(99, 102, 241, 0)']
              : '0 0 0 0 rgba(99, 102, 241, 0)',
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        />
      </div>

      {/* Tarjeta principal */}
      <motion.div
        className="ml-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/90 to-white/80 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/20 overflow-hidden"
        animate={{
          y: isHovered ? -10 : 0,
          boxShadow: isHovered
            ? '0 20px 60px -15px rgba(99, 102, 241, 0.5)'
            : '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Efecto de brillo de fondo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1">
              <motion.div
                className="flex items-center gap-3 mb-4"
                animate={{ x: isHovered ? 10 : 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="p-3 bg-indigo-200 dark:bg-indigo-500/20 rounded-xl backdrop-blur-sm">
                  <Briefcase className="text-indigo-600 dark:text-indigo-400" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">{position}</h3>
              </motion.div>

              <motion.p
                className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4 leading-relaxed"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {company}
              </motion.p>
            </div>

            <div className="text-gray-700 dark:text-gray-300 space-y-2 md:text-right mt-3 md:mt-0 text-sm">
              <motion.div
                className="flex items-center gap-2 md:justify-end"
                animate={{ x: isHovered ? -10 : 0 }}
              >
                <Calendar size={16} className="text-indigo-600 dark:text-indigo-400" />
                <span className="font-medium">{period}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 md:justify-end"
                animate={{ x: isHovered ? -10 : 0 }}
              >
                <MapPin size={16} className="text-pink-600 dark:text-pink-400" />
                <span>{location}</span>
              </motion.div>
            </div>
          </div>

          {/* Descripción */}
          <ul className="space-y-3 mb-6">
            {description.map((item, i) => (
              <motion.li
                key={i}
                className="text-gray-700 dark:text-gray-300 flex items-start gap-3 group/item leading-relaxed text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <span className="text-indigo-600 dark:text-indigo-400 text-lg font-bold mt-0.5 group-hover/item:scale-125 transition-transform flex-shrink-0">
                  ▹
                </span>
                <span className="flex-1 pr-2">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2">
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
                  scale: 1.1,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Borde brillante en hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30" />
        </div>
      </motion.div>
    </motion.div>
  );
}
