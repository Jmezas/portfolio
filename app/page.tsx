'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Download, Sparkles, Code2, Rocket } from 'lucide-react';
import dynamic from 'next/dynamic';
import { personalInfo, experiences, skills, projects, testimonials } from '@/lib/data';
import SkillCard3D from '@/components/ui/SkillCard3D';
import ExperienceCard from '@/components/ui/ExperienceCard';
import ThemeToggle from '@/components/ui/ThemeToggle';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import ProjectCard3D from '@/components/ui/ProjectCard3D';
import Testimonials from '@/components/ui/Testimonials';
import {
  ScrollReveal,
  ScrollScale,
  ParallaxSection,
  StaggerContainer,
  StaggerItem,
  staggerItemVariants,
  ScrollProgressBar,
  FadeInOnScroll
} from '@/components/ui/ScrollAnimations';
import { downloadCV } from '@/lib/downloadCV';
import { useState, useRef } from 'react';
import Image from 'next/image';

// Cargar el componente 3D de forma dinámica para evitar problemas de SSR
const Hero3D = dynamic(() => import('@/components/3d/Hero3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 animate-pulse" />
});

export default function Home() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const experiencesSectionRef = useRef<HTMLElement>(null);

  const handleToggleProjects = () => {
    if (showAllProjects) {
      // Si se va a ocultar, hacer scroll a la sección de proyectos
      projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAllProjects(!showAllProjects);
  };

  const handleToggleSkills = () => {
    if (showAllSkills) {
      // Si se va a ocultar, hacer scroll a la sección de skills
      skillsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAllSkills(!showAllSkills);
  };

  const handleToggleExperiences = () => {
    if (showAllExperiences) {
      // Si se va a ocultar, hacer scroll a la sección de experiencias
      experiencesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAllExperiences(!showAllExperiences);
  };

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar color="indigo" />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Smooth Scroll */}
      <SmoothScroll />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
        {/* 3D Background - SIEMPRE VISIBLE */}
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>

        {/* Contenido Hero - Texto con sombras para legibilidad */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-300 mb-10 leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.title}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Mail size={20} className="relative z-10" />
                <span className="relative z-10">Contactar</span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 100000, repeat: Infinity }}
                />
              </motion.a>

              <motion.button
                onClick={downloadCV}
                className="group relative px-8 py-4 bg-gray-800/80 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 text-white rounded-full font-semibold backdrop-blur-xl border-2 border-gray-700 dark:border-white/30 flex items-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Descargar CV</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="relative group">
                {/* Anillos animados */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-xl opacity-40"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Imagen */}
                <motion.div
                  className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-gray-300 dark:border-white/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src="/perfil.jpg"
                    alt="Jhaser Meza"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Overlay en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  >
                    <div className="flex gap-3">
                      <Sparkles className="text-white" size={24} />
                      <Code2 className="text-white" size={24} />
                      <Rocket className="text-white" size={24} />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Iconos de contacto */}
            <motion.div
              className="flex gap-8 justify-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Phone size={24} />
              </a>
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Github size={24} />
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-800 dark:border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-800 dark:bg-white/50 rounded-full mt-1" />
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section ref={experiencesSectionRef} id="experience" className="relative py-16 md:py-24 px-2 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-indigo-50 to-gray-100 dark:from-gray-900 dark:via-indigo-950/50 dark:to-gray-900" />
          <ParallaxSection speed={0.3}>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[50px]" />
          </ParallaxSection>
          <ParallaxSection speed={0.5}>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[50px]" />
          </ParallaxSection>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Header */}
          <ScrollReveal direction="up" className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full backdrop-blur-xl border border-indigo-300 dark:border-white/30 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Sparkles className="text-indigo-600 dark:text-indigo-400" size={18} />
              <span className="text-indigo-700 dark:text-indigo-300 font-bold text-sm">7+ Años de Evolución</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-300">
                Mi Viaje
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Tecnológico
              </span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto mb-14 leading-relaxed px-4 font-medium"
               
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {personalInfo.summary}
            </motion.p>
          </ScrollReveal>

          {/* Timeline Stats with Stagger Animation */}
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              { number: '7+', label: 'Años', color: 'from-indigo-500 to-indigo-600' },
              { number: '4', label: 'Empresas', color: 'from-purple-500 to-purple-600' },
              { number: '50+', label: 'Proyectos', color: 'from-pink-500 to-pink-600' },
              { number: '15+', label: 'Tecnologías', color: 'from-blue-500 to-blue-600' },
            ].map((stat) => (
              <StaggerItem
                key={stat.label}
                variants={staggerItemVariants}
                className="relative group"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${stat.color} backdrop-blur-xl shadow-2xl`}>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10`} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Journey Cards with alternating slide animations */}
          <div className="space-y-16 md:space-y-20">
            {/* Primera experiencia - sin animación de entrada */}
            {experiences.slice(0, 1).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 1, x: 0 }}
                className="opacity-100"
              >
                <ExperienceCard
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                  technologies={exp.technologies}
                  index={index}
                />
              </motion.div>
            ))}

            {/* Experiencias adicionales - con animación alternada */}
            {showAllExperiences && experiences.slice(1).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <ExperienceCard
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                  technologies={exp.technologies}
                  index={index + 1}
                />
              </motion.div>
            ))}
          </div>

          {/* Bot\u00f3n Ver m\u00e1s */}
          {experiences.length > 2 && (
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={handleToggleExperiences}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-2 overflow-hidden shadow-lg shadow-indigo-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Sparkles size={20} className="relative z-10" />
                <span className="relative z-10">
                  {showAllExperiences ? 'Ver menos' : `Ver toda mi experiencia (${experiences.length})`}
                </span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsSectionRef} id="skills" className="relative py-16 md:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-purple-50 to-gray-100 dark:from-gray-900 dark:via-purple-950/50 dark:to-gray-900" />
          <ParallaxSection speed={0.4}>
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          </ParallaxSection>
          <ParallaxSection speed={0.6}>
            <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[120px]" />
          </ParallaxSection>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up" className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-xl border border-purple-300 dark:border-white/30 mb-6"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Code2 className="text-purple-600 dark:text-purple-400" size={18} />
              <span className="text-purple-700 dark:text-purple-300 font-bold text-sm">Stack Tecnológico</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-700 to-pink-700 dark:from-white dark:via-purple-200 dark:to-pink-300">
                Arsenal
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400">
                De Herramientas
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Tecnologías modernas para soluciones excepcionales
            </motion.p>
          </ScrollReveal>

          {/* Skills Grid - Primeros 3 siempre visibles sin animación */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Primeros 3 skills - sin animación de entrada */}
            {skills.slice(0, 3).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 1, y: 0 }}
                className="opacity-100"
              >
                <SkillCard3D
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              </motion.div>
            ))}

            {/* Skills adicionales - con animación stagger */}
            {showAllSkills && skills.slice(3).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <SkillCard3D
                  name={skill.name}
                  level={skill.level}
                  index={index + 3}
                />
              </motion.div>
            ))}
          </div>

          {/* Bot\u00f3n Ver m\u00e1s */}
          {skills.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={handleToggleSkills}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold flex items-center gap-2 overflow-hidden shadow-lg shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Code2 size={20} className="relative z-10" />
                <span className="relative z-10">
                  {showAllSkills ? 'Ver menos' : `Ver todas (${skills.length})`}
                </span>
              </motion.button>
            </motion.div>
          )}

        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsSectionRef} id="projects" className="relative py-16 md:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-pink-50 to-gray-100 dark:from-gray-900 dark:via-pink-950/50 dark:to-gray-900" />
          <ParallaxSection speed={0.35}>
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[120px]" />
          </ParallaxSection>
          <ParallaxSection speed={0.55}>
            <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px]" />
          </ParallaxSection>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up" className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full backdrop-blur-xl border border-pink-300 dark:border-white/30 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Rocket className="text-pink-600 dark:text-pink-400" size={18} />
              <span className="text-pink-700 dark:text-pink-300 font-bold text-sm">Portafolio de Proyectos</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-pink-700 to-indigo-700 dark:from-white dark:via-pink-200 dark:to-indigo-300">
                Proyectos
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400">
                Destacados
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Soluciones innovadoras que transforman ideas en realidad
            </motion.p>
          </ScrollReveal>

          {/* Projects Grid - Primeros 3 siempre visibles sin animación */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Primeros 3 proyectos - sin animación de entrada */}
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 1, y: 0 }}
                className="opacity-100"
              >
                <ProjectCard3D
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  index={index}
                  fullDescription={project.fullDescription}
                  challenges={project.challenges}
                  solutions={project.solutions}
                  impact={project.impact}
                  duration={project.duration}
                  team={project.team}
                />
              </motion.div>
            ))}

            {/* Proyectos adicionales - con animación stagger */}
            {showAllProjects && projects.slice(3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <ProjectCard3D
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  index={index + 3}
                  fullDescription={project.fullDescription}
                  challenges={project.challenges}
                  solutions={project.solutions}
                  impact={project.impact}
                  duration={project.duration}
                  team={project.team}
                />
              </motion.div>
            ))}
          </div>

          {/* Botón Ver más */}
          {projects.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={handleToggleProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-indigo-600 text-white rounded-full font-semibold flex items-center gap-2 overflow-hidden shadow-lg shadow-pink-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Rocket size={20} className="relative z-10" />
                <span className="relative z-10">
                  {showAllProjects ? 'Ver menos' : `Ver todos los proyectos (${projects.length})`}
                </span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-16 md:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-green-50 to-gray-100 dark:from-gray-900 dark:via-green-950/50 dark:to-gray-900" />
          <ParallaxSection speed={0.4}>
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/30 rounded-full blur-[120px]" />
          </ParallaxSection>
          <ParallaxSection speed={0.6}>
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px]" />
          </ParallaxSection>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up" className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full backdrop-blur-xl border border-green-300 dark:border-white/30 mb-6"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Sparkles className="text-green-600 dark:text-green-400" size={18} />
              <span className="text-green-700 dark:text-green-300 font-bold text-sm">Testimonios</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-700 to-emerald-700 dark:from-white dark:via-green-200 dark:to-emerald-300">
                Lo Que Dicen
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
                De Mi Trabajo
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Opiniones de clientes, colegas y líderes que han trabajado conmigo
            </motion.p>
          </ScrollReveal>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Testimonials testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 md:py-20 px-3 sm:px-4 lg:px-12 overflow-hidden flex items-center">
        {/* Background Effects with Parallax */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950" />
        <div className="absolute inset-0">
          <ParallaxSection speed={0.2}>
            <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse" />
          </ParallaxSection>
          <ParallaxSection speed={0.4}>
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </ParallaxSection>
          <ParallaxSection speed={0.3}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          </ParallaxSection>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Header */}
          <ScrollReveal direction="up" className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full backdrop-blur-xl border border-indigo-300 dark:border-white/30 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Rocket className="text-indigo-600 dark:text-indigo-400" size={18} />
              <span className="text-indigo-700 dark:text-indigo-300 font-bold text-sm">Trabajemos Juntos</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-300">
                ¿Tienes un proyecto
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                en mente?
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Transformemos tus ideas en realidad
            </motion.p>
          </ScrollReveal>

          {/* Contact Methods with Scale Animation */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Email Card */}
            <ScrollScale delay={0.2} className="group relative">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="block relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/10 dark:to-purple-500/10 backdrop-blur-2xl border-2 border-indigo-300 dark:border-indigo-500/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 group-hover:translate-x-full transition-transform duration-1000" />

                {/* Icon */}
                <motion.div
                  className="relative w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/50"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 leading-tight">Email</h3>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      La mejor manera de contactarme para proyectos
                    </p>
                  </div>

                  <div className="p-4 bg-white/50 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-white/10">
                    <p className="text-indigo-700 dark:text-indigo-300 font-mono text-sm break-all leading-relaxed">{personalInfo.email}</p>
                  </div>

                  <motion.div
                    className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 text-base font-bold pt-2"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>Enviar mensaje</span>
                    <span className="text-xl">→</span>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </motion.a>
            </ScrollScale>

            {/* Phone Card */}
            <ScrollScale delay={0.3} className="group relative">
              <motion.a
                href={`tel:+51 ${personalInfo.phone}`}
                className="block relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-2xl border-2 border-purple-300 dark:border-purple-500/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 group-hover:translate-x-full transition-transform duration-1000" />

                {/* Icon */}
                <motion.div
                  className="relative w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/50"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 leading-tight">Teléfono</h3>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Llámame para consultas inmediatas
                    </p>
                  </div>

                  <div className="p-4 bg-white/50 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-white/10">
                    <p className="text-purple-700 dark:text-purple-300 font-mono text-sm leading-relaxed">+51{personalInfo.phone}</p>
                  </div>

                  <motion.div
                    className="flex items-center gap-3 text-purple-600 dark:text-purple-400 text-base font-bold pt-2"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>Llamar ahora</span>
                    <span className="text-xl">→</span>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </motion.a>
            </ScrollScale>
          </div>

          {/* Social Links with Fade In */}
          <FadeInOnScroll delay={0.4} className="text-center mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-medium px-6 leading-relaxed">También puedes encontrarme en</p>
            <div className="flex justify-center gap-6 flex-wrap">
              {personalInfo.github && (
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 backdrop-blur-xl border-2 border-gray-400 dark:border-white/20 rounded-2xl flex flex-col items-center justify-center gap-1.5 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/30">
                    <Github className="text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" size={24} />
                    <span className="text-[10px] text-gray-600 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-medium">GitHub</span>
                  </div>
                </motion.a>
              )}
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-800 backdrop-blur-xl border-2 border-blue-400 dark:border-white/20 rounded-2xl flex flex-col items-center justify-center gap-1.5 group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30">
                    <Linkedin className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" size={24} />
                    <span className="text-[10px] text-blue-700 dark:text-blue-500 group-hover:text-blue-800 dark:group-hover:text-blue-300 font-medium">LinkedIn</span>
                  </div>
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group relative"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-800 backdrop-blur-xl border-2 border-purple-400 dark:border-white/20 rounded-2xl flex flex-col items-center justify-center gap-1.5 group-hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/30">
                  <Mail className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" size={24} />
                  <span className="text-[10px] text-purple-700 dark:text-purple-500 group-hover:text-purple-800 dark:group-hover:text-purple-300 font-medium">Email</span>
                </div>
              </motion.a>
            </div>
          </FadeInOnScroll>

          {/* CTA Button with Scale */}
          <ScrollScale delay={0.5} className="text-center">
            <motion.a
              href={`https://wa.me/51${personalInfo.phone}`}
              className="group relative inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div className="relative flex items-center gap-3">
                  <Rocket className="text-white" size={20} />
                  <span className="text-white font-black text-xl">¡Comencemos Ya!</span>
                  <motion.span
                    className="text-white text-xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>  

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
            </motion.a>

            <motion.p
              className="mt-6 text-gray-600 dark:text-gray-400 text-base px-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Respondo en menos de 24 horas ⚡
            </motion.p>
          </ScrollScale>
        </div>
      </section>
    </main>
  );
}