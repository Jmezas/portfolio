'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Main Carousel */}
      <div className="relative min-h-[400px] md:min-h-[350px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="absolute w-full"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/95 to-white/85 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-3xl border border-gray-300 dark:border-white/20 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote size={60} className="text-indigo-600 dark:text-indigo-400" />
              </div>

              {/* Stars Rating */}
              <div className="flex justify-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <Star
                      size={24}
                      className={`${
                        i < currentTestimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-center mb-8 leading-relaxed italic relative z-10"
              >
                "{currentTestimonial.content}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-4 relative z-10"
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {currentTestimonial.name.charAt(0)}
                </div>

                {/* Name and Position */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {currentTestimonial.company}
                  </p>
                  {currentTestimonial.relationship && (
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                      {currentTestimonial.relationship}
                    </p>
                  )}
                  {currentTestimonial.date && (
                    <p className="text-gray-400 dark:text-gray-600 text-xs mt-1">
                      {currentTestimonial.date}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-white dark:bg-white/10 rounded-full shadow-lg hover:shadow-xl border border-gray-300 dark:border-white/20 transition-all duration-300 group"
        >
          <ChevronLeft className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" size={24} />
        </motion.button>

        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-white dark:bg-white/10 rounded-full shadow-lg hover:shadow-xl border border-gray-300 dark:border-white/20 transition-all duration-300 group"
        >
          <ChevronRight className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" size={24} />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-gradient-to-r from-indigo-600 to-purple-600'
                : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
