'use client'
import React from 'react';
import Hero from "@/components/index"
import Recent from "@/components/Recent"
import Testimonials from "@/components/Testimonial"
import Why from "@/components/Why"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Recent />
      <Testimonials />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
