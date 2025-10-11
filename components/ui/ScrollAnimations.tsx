'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = ''
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollScaleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollScale({ children, delay = 0, className = '' }: ScrollScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = '' }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = motion.div;

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 100
    }
  }
};

interface ScrollProgressBarProps {
  color?: string;
}

export function ScrollProgressBar({ color = 'indigo' }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-${color}-500 via-purple-500 to-pink-500 origin-left z-50`}
      style={{ scaleX }}
    />
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  offset?: number;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, offset = 0, speed = 1, className = '' }: ParallaxLayerProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [offset, offset + (1000 * speed)]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface SlideInOnScrollProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

export function SlideInOnScroll({
  children,
  direction = 'left',
  delay = 0,
  className = ''
}: SlideInOnScrollProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === 'left' ? -100 : 100
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 80,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  className = ''
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RotateInOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RotateInOnScroll({ children, delay = 0, className = '' }: RotateInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
