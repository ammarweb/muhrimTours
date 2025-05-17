'use client';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Instagram, MessageCircle } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+25195 151 5123",
      link: "tel:+251951515123",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "themuhrimtours@gmail.com",
      link: "mailto:themuhrimtours@gmail.com",
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Telegram",
      value: "@themuhrimtours",
      link: "https://t.me/themuhrimtours",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      value: "@themuhrimtours",
      link: "https://www.instagram.com/themuhrimtours?igsh=bXpoMjYyZXYzeno",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+25195 151 5123",
      link: "https://wa.me/251951515123",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "AddissAbaba, Ethiopia",
      link: "https://www.google.com/maps/place/The+Muhrim+Tours/@8.9893214,38.7241729,17z/data=!3m1!4b1!4m6!3m5!1s0x164b874ccdb62b8d:0xb40e4b1c18e68a7a!8m2!3d8.9893214!4d38.7241729!16s%2Fg%2F11vpsbdcn3?hl=en-EE&entry=ttu",
    }
  ];

  return (
    <section id="contact" className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FFD700]/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
            style={{
              background: 'linear-gradient(90deg, #FFD700, #FFFFFF, #FFD700)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '200% auto'
            }}
            animate={{
              backgroundPosition: ['0% center', '100% center']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            Contact <span className="text-white">Our Team</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We&apos;re available 24/7 to assist with your spiritual journey
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(255, 215, 0, 0.05)',
                borderColor: '#FFD700'
              }}
              transition={{ 
                duration: 0.4, 
                delay: i * 0.05,
                ease: 'easeOut'
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 border border-[#333333] rounded-xl bg-[#111111]/50 backdrop-blur-sm transition-all duration-300 group relative"
            >
              <motion.div 
                className="p-3 bg-[#FFD700]/10 rounded-lg mr-4 border border-[#FFD700]/20 group-hover:bg-[#FFD700]/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.05 }}
              >
                {method.icon}
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                <p className="text-gray-300">{method.value}</p>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#FFD700]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.6, delay: i * 0.05 + 0.2 }}
                viewport={{ once: true }}
              />
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#111111] border border-[#FFD700]/20 rounded-2xl p-8 md:p-12"
          id="contact-form"
        >
          <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-6">Send Us a Message</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="https://formspree.io/f/xldbbgll" method="POST">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-[#0A0A0A] border border-[#333333] rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-[#FFD700] text-black font-bold py-3 px-6 rounded-lg transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Floating Teleagarm Button */}
        <motion.a
          href="https://t.me/themuhrimtours"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          className="fixed bottom-8 right-8 bg-[#0088cc] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
        >
          <FaTelegram className="w-8 h-8" />
          <span className="sr-only">Telegram</span>
        </motion.a>

      </div>
    </section>
  );
}


