"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { navlinks } from '../constants/constant';
import Image from 'next/image';
import Link from 'next/link';

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown] = useState<number | null>(null);
  const router = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const handleNavigation = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    if (link.startsWith('#')) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(link);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="The Muhrim Tours Logo"
            className="h-10 w-auto md:h-12"
            width={120}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navlinks.map((link) => (
            <div key={link.id} className="relative group">
              <a
                href={link.url}
                className="text-white hover:text-yellow-500 transition-colors duration-300 flex items-center"
                onClick={(e) => handleNavigation(e, link.url)}
              >
                {link.label}
                {link.subLinks && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {link.subLinks && activeDropdown === link.id && (
                <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-90 border border-yellow-500 rounded-lg shadow-lg py-2 z-50">
                  {link.subLinks.map((subLink) => (
                    <a
                      key={subLink.label}
                      href={subLink.url}
                      className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition-all duration-200"
                      onClick={(e) => handleNavigation(e, subLink.url)}
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact-form"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            onClick={(e) => handleNavigation(e, '#contact-form')}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 border-t border-yellow-500">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navlinks.map((link) => (
              <div key={link.id}>
                <a
                  href={link.url}
                  className="block text-white hover:text-yellow-500 py-2 transition-colors duration-300"
                  onClick={(e) => {
                    handleNavigation(e, link.url);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
                {link.subLinks && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-yellow-500">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.label}
                        href={subLink.url}
                        className="block text-gray-300 hover:text-yellow-500 py-1 transition-colors duration-300"
                        onClick={(e) => {
                          handleNavigation(e, subLink.url);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact-form"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-medium text-center transition-all duration-300 mt-4"
              onClick={(e) => {
                handleNavigation(e, '#contact-form');
                setIsMobileMenuOpen(false);
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;