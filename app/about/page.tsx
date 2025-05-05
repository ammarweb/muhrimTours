'use client';
import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const AboutPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle scroll after navigation
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, searchParams]);
  return (


    <section className="bg-black min-h-screen w-full flex items-center justify-center">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
        Need Information About Muhrim Tours
      </h1>
    </section>
  );
};



export default AboutPage; 