'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    fullDescription?: string;
    challenges?: string[];
    solutions?: string[];
    impact?: {
      metric: string;
      value: string;
    }[];
    duration?: string;
    team?: string;
    images?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-2 sm:px-4 py-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto"
              >
                {/* Header */}
                <div className="relative p-6 sm:p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-xl transition-all duration-300 group z-10"
                    aria-label="Cerrar modal"
                  >
                    <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={20} />
                  </button>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl sm:text-2xl md:text-2xl font-black text-white mb-1 sm:mb-2 pr-10 sm:pr-12 leading-tight"
                  >
                    {project.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Meta información */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                    {project.duration && (
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <Calendar className="text-white flex-shrink-0" size={14} />
                        <span className="text-white text-xs sm:text-sm font-medium">{project.duration}</span>
                      </div>
                    )}
                    {project.team && (
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <Users className="text-white flex-shrink-0" size={14} />
                        <span className="text-white text-xs sm:text-sm font-medium">{project.team}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6 sm:space-y-8 max-h-[52vh] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
                  {/* Descripción completa */}
                  {project.fullDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Target className="text-indigo-600 flex-shrink-0" size={24} />
                        <span>Descripción del Proyecto</span>
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </motion.div>
                  )}

                  {/* Tecnologías */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Stack Tecnológico
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-300 dark:border-indigo-500/30 rounded-full text-indigo-700 dark:text-indigo-300 font-medium text-xs sm:text-sm transition-shadow hover:shadow-md"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Desafíos */}
                  {project.challenges && project.challenges.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-red-50/50 dark:bg-red-900/10 rounded-2xl p-6 border border-red-200 dark:border-red-500/20"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Desafíos Técnicos
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        {project.challenges.map((challenge, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group"
                          >
                            <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 group-hover:scale-110 transition-transform">
                              {index + 1}
                            </span>
                            <span className="text-sm sm:text-base leading-relaxed">{challenge}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Soluciones */}
                  {project.solutions && project.solutions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-green-50/50 dark:bg-green-900/10 rounded-2xl p-6 border border-green-200 dark:border-green-500/20"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Soluciones Implementadas
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        {project.solutions.map((solution, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group"
                          >
                            <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 group-hover:scale-110 transition-transform">
                              ✓
                            </span>
                            <span className="text-sm sm:text-base leading-relaxed">{solution}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Impacto */}
                  {project.impact && project.impact.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="text-green-600" size={24} />
                        Impacto y Resultados
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.impact.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-500/30 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
                          >
                            {/* Icono decorativo */}
                            <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                              <TrendingUp size={40} className="text-green-600 dark:text-green-400" />
                            </div>

                            <div className="relative z-10">
                              <div className="text-3xl sm:text-4xl font-black text-green-600 dark:text-green-400 mb-2 leading-none break-words">
                                {item.value}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium leading-tight">
                                {item.metric}
                              </div>
                            </div>

                            {/* Brillo al hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer con botones */}
                <div className="p-4 sm:p-6 md:p-8 bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Ver Proyecto</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Github size={18} />
                        <span>Ver Código</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
