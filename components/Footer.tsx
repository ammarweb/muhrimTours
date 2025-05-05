'use client';
import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  // Smooth scroll function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to Recent section
  const scrollToRecent = (e: React.MouseEvent) => {
    e.preventDefault();
    const recentSection = document.getElementById('recent-section');
    if (recentSection) {
      recentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Contact section
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <footer className="bg-black text-white py-10 px-4 border-t-4 border-yellow-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Muhrim Tours
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Embark on a spiritual journey with our premium Umrah packages designed for comfort and devotion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <a href="#home" className="hover:text-yellow-500 transition" onClick={scrollToTop}>Home</a>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
            <a href="#packages" className="hover:text-yellow-500 transition" onClick={scrollToRecent}>Packages</a>
            <a href="#contact" className="hover:text-yellow-500 transition" onClick={scrollToContact}>Contact</a>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-yellow-500 font-semibold mb-4 self-center md:self-end">Connect</h3>
          <div className="flex flex-col space-y-4">
            {/* Social Icons */}
            <div className="flex space-x-4 text-xl text-yellow-500">
              <a href="https://web.facebook.com/people/The-Muhrim-Tours/61555367463095/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-white transition cursor-pointer" />
              </a>
              <a href="https://x.com/themuhrimtours" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white transition cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/themuhrimtours?igsh=bXpoMjYyZXYzeno" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-white transition cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@MuhrimTalks" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-white transition cursor-pointer" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-gray-400">
              <FaPhoneAlt />
              <span>+25195 151 5123</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt />
              <span>AddissAbaba, Ethiopia</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <a href="mailto:themuhrimtours@gmail.com" className="hover:text-yellow-500 transition">
                themuhrimtours@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-full mt-8 md:mt-4 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Muhrim Tours. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;