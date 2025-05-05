'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Keep for specific interactions
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  // State to trigger CSS transitions after component mounts
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Basic transition classes (ensure these are defined in your global CSS or Tailwind config)
  const baseTransition = "transition-all ease-out duration-700";
  const fadeInClass = isMounted ? "opacity-100" : "opacity-0";
  const slideUpClass = isMounted ? "translate-y-0" : "translate-y-5";
  const scaleInXClass = isMounted ? "scale-x-100" : "scale-x-0";
  const scaleInClass = isMounted ? "scale-100" : "scale-0";

  return (
    <div className="relative min-h-screen overflow-hidden font-serif">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg" // *** ENSURE THIS SOURCE IMAGE IS OPTIMIZED ***
          alt="Kaaba"
          fill
          className="object-cover object-center"
          quality={75} // Adjust quality as needed
          // Removed priority - add back ONLY if essential for LCP AND image is optimized
        />
      </div>

      {/* Static Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Subtle Animated Islamic Pattern Overlay (using CSS Animation) */}
      <div
        className="absolute inset-0 z-20 opacity-[0.08] bg-repeat pattern-bg" // Use a class for animation
        style={{
          backgroundImage: `url('/images/patterns/islamic-pattern.svg')`, // *** YOU MUST CREATE & OPTIMIZE this SVG file ***
          backgroundSize: '60px 60px', // Adjust size as needed
        }}
      />

      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col justify-center items-center min-h-screen text-center pt-16 pb-24">

        {/* Gold Symbol / Logo - Keeping framer-motion for spring/hover */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.1
          }}
        >
          <motion.svg /* ... SVG path remains the same ... */
            className="w-20 h-20 mx-auto"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
             <path
              d="M50 5L60 15L70 5L60 -5L50 5ZM30 5L40 15L50 5L40 -5L30 5ZM40 15L50 25L60 15L50 5L40 15ZM20 25L30 35L40 25L30 15L20 25ZM60 25L70 35L80 25L70 15L60 25ZM10 45L20 55L30 45L20 35L10 45ZM70 45L80 55L90 45L80 35L70 45ZM30 45L40 55L50 45L40 35L30 45ZM50 45L60 55L70 45L60 35L50 45ZM40 65L50 75L60 65L50 55L40 65Z"
              fill="#FFD700"
            />
          </motion.svg>
        </motion.div>

        {/* Main Heading - CSS Transition */}
        <h1
          className={`text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-wide ${baseTransition} ${fadeInClass} ${slideUpClass}`}
          style={{ transitionDelay: isMounted ? '0.2s' : '0s' }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
            Muhrim
          </span> Tours
        </h1>

        {/* Tagline - CSS Transition */}
        <p
          className={`text-xl md:text-2xl text-white/80 mb-6 max-w-2xl ${baseTransition} ${fadeInClass} ${slideUpClass}`}
          style={{ transitionDelay: isMounted ? '0.4s' : '0s' }}
        >
          Experience the sacred journey of a lifetime with our premium Umrah packages
        </p>

        {/* Divider - CSS Transition (scale-x animation) */}
        <div
          className={`w-24 h-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 rounded-full mb-8 transform origin-left ${baseTransition} ${scaleInXClass}`}
           style={{
             transitionDelay: isMounted ? '0.6s' : '0s',
             transitionProperty: 'transform, opacity' // Ensure transform is part of transition
            }}
        />

        {/* Call-to-Action Buttons - Fade in container, motion for interaction */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-12 ${baseTransition} ${fadeInClass}`}
          style={{ transitionDelay: isMounted ? '0.8s' : '0s', transitionProperty: 'opacity' }}
        >
          <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-black px-8 py-6 rounded-md shadow-lg transition-colors duration-300 text-xl font-bold"
              onClick={() => {
                const recentSection = document.getElementById('recent-section');
                if (recentSection) {
                  recentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Packages
            </Button>
          </motion.div>
          <motion.div /* ... Button 2 ... */
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="border-[#FFD700] hover:bg-[#FFD700]/10 text-[#FFD700] px-8 py-6 rounded-md transition-colors duration-300 text-xl font-bold">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Trust Section - Fade in container, CSS transitions for stars */}
        <div
          className={`flex flex-wrap justify-center items-center gap-1 text-[#FFD700] text-center ${baseTransition} ${fadeInClass}`}
          style={{ transitionDelay: isMounted ? '1.0s' : '0s', transitionProperty: 'opacity' }}
        >
          {[...Array(5)].map((_, i) => (
            <div /* ... Star ... */
              key={i}
              className={`transform transition-transform duration-300 ease-out ${scaleInClass}`}
              style={{ transitionDelay: isMounted ? `${1.1 + i * 0.1}s` : '0s' }}
            >
              <Star className="fill-[#FFD700]" size={18} />
            </div>
          ))}
          <span /* ... Trust text ... */
            className={`w-full sm:w-auto text-white/80 text-sm sm:text-base mt-1 sm:mt-0 ${baseTransition} ${fadeInClass}`}
            style={{ transitionDelay: isMounted ? '1.6s' : '0s', transitionProperty: 'opacity' }}
          >
            Trusted by 10,000+ pilgrims
          </span>
        </div>
      </div>

       {/* Bottom Gradient Border - Fade In */}
       <div
         className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent z-30 ${baseTransition} ${fadeInClass}`}
          style={{ transitionDelay: isMounted ? '1.8s' : '0s', transitionProperty: 'opacity' }}
       />

       {/* Add CSS for the pattern animation */}
      
    </div>
  );
};

export default Hero;