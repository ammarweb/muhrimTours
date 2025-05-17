'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, X, Phone, Calendar, Users } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(false);

  useEffect(() => {
    // Mount animation
    const mountTimer = setTimeout(() => setIsMounted(true), 100);

    // Show popup after 6 seconds
    const popupTimer = setTimeout(() => {
      setShowEventPopup(true);
    }, 5000);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  const upcomingEvent = {
    title: "Upcoming Summer Umrah 2024",
    date: "March 10 - April 10, 2024",
    discount: " Early Bird Discount",
    seats: "Only Few seats remaining",
    phone: "+25195 151 5123",
    image: "/images/upcoming.jpg",
    
    includes: [
      "With your family",
      "Married couple",
      "Students",
    ]
  };

  const handleClosePopup = () => {
    setShowEventPopup(false);
  };

  const baseTransition = "transition-all ease-out duration-700";
  const fadeInClass = isMounted ? "opacity-100" : "opacity-0";
  const slideUpClass = isMounted ? "translate-y-0" : "translate-y-5";
  const scaleInXClass = isMounted ? "scale-x-100" : "scale-x-0";
  const scaleInClass = isMounted ? "scale-100" : "scale-0";

  return (
    <div id='home' className="relative min-h-screen overflow-hidden font-serif">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Kaaba"
          fill
          className="object-cover object-center"
          quality={75}
          priority
          sizes="100vw"
        />
      </div>

      {/* Static Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col justify-center items-center min-h-screen text-center pt-16 pb-24">
        {/* Gold Symbol / Logo */}
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
          <motion.svg
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

        {/* Main Heading */}
        <h1
          className={`text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-wide ${baseTransition} ${fadeInClass} ${slideUpClass}`}
          style={{ transitionDelay: isMounted ? '0.2s' : '0s' }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
            Muhrim
          </span> Tours
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl md:text-2xl text-white/80 mb-6 max-w-2xl ${baseTransition} ${fadeInClass} ${slideUpClass}`}
          style={{ transitionDelay: isMounted ? '0.4s' : '0s' }}
        >
          Experience the sacred journey of a lifetime with our premium Umrah packages
        </p>

        {/* Divider */}
        <div
          className={`w-24 h-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 rounded-full mb-8 transform origin-left ${baseTransition} ${scaleInXClass}`}
          style={{
            transitionDelay: isMounted ? '0.6s' : '0s',
            transitionProperty: 'transform, opacity'
          }}
        />

        {/* Call-to-Action Buttons */}
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
                const recentSection = document.getElementById('packages');
                if (recentSection) {
                  recentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Packages
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="border-[#FFD700] hover:bg-[#FFD700]/10 text-[#FFD700] px-8 py-6 rounded-md transition-colors duration-300 text-xl font-bold">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Trust Section */}
        <div
          className={`flex flex-wrap justify-center items-center gap-1 text-[#FFD700] text-center ${baseTransition} ${fadeInClass}`}
          style={{ transitionDelay: isMounted ? '1.0s' : '0s', transitionProperty: 'opacity' }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`transform transition-transform duration-300 ease-out ${scaleInClass}`}
              style={{ transitionDelay: isMounted ? `${1.1 + i * 0.1}s` : '0s' }}
            >
              <Star className="fill-[#FFD700]" size={18} />
            </div>
          ))}
          <span
            className={`w-full sm:w-auto text-white/80 text-sm sm:text-base mt-1 sm:mt-0 ${baseTransition} ${fadeInClass}`}
            style={{ transitionDelay: isMounted ? '1.6s' : '0s', transitionProperty: 'opacity' }}
          >
            Trusted by 10,000+ pilgrims
          </span>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent z-30 ${baseTransition} ${fadeInClass}`}
        style={{ transitionDelay: isMounted ? '1.8s' : '0s', transitionProperty: 'opacity' }}
      />

      {/* New Simple Popup */}
      {showEventPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-[95vw] sm:max-w-2xl overflow-hidden">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-2/5 max-h-48 sm:max-h-64 md:max-h-none overflow-hidden">
  <Image
    src={upcomingEvent.image}
    alt="Upcoming Umrah Group"
    width={720}
    height={900}
    className="w-full h-full object-cover object-top"
    quality={80}
  />
</div>



              {/* Content Section */}
              <div className="p-4 sm:p-6 md:w-3/5">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {upcomingEvent.title}
                </h3>
                
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-amber-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{upcomingEvent.date}</span>
                </div>

                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-amber-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{upcomingEvent.seats}</span>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Come With:</h4>
                  <ul className="space-y-1 text-gray-600">
                    {upcomingEvent.includes.map((item, index) => (
                      <li key={index} className="flex items-start text-sm sm:text-base">
                        <span className="text-amber-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-4 sm:py-6 text-sm sm:text-base"
                    onClick={() => {
                      handleClosePopup();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-500 text-amber-600 hover:bg-amber-50 py-4 sm:py-6 text-sm sm:text-base"
                    asChild
                  >
                    <a href="tel:+251951515123">
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
