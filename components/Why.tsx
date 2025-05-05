'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Star, Calendar, Plane } from 'lucide-react';

const reasons = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Excellence",
    description: "Recognized by Saudi Ministry of Hajj with 14 international awards for pilgrimage services"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Excellence",
    description: "Recognized by Saudi Ministry of Hajj with 14 international awards for pilgrimage services"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Zero Visa Rejections",
    description: "100% visa approval rate through our government-certified documentation system"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "5-Star Luxury",
    description: "Exclusive contracts with Haram-view hotels within 500m of the Grand Mosque"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Perfect Timing",
    description: "AI-powered itinerary optimization for crowd avoidance at holy sites"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Seamless Travel",
    description: "Private airport terminals with direct Haram transfers in luxury vehicles"
  }
  
];

export default function WhyChooseUs() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#FFD700]/30"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Title Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-28"
        >
          <motion.h2 
            className="text-2xl md:text-5xl font-bold mb-6"
            style={{
              background: 'linear-gradient(90deg, #FFD700, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Why <span className='text-white'>Choose Us?</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-[#FFD700] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Where centuries-old tradition meets cutting-edge pilgrimage technology
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence>
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0, rotateX: -45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(255, 215, 0, 0.1)'
                }}
                className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-[#FFD700]/20 rounded-2xl p-8 relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 bg-[#FFD700]/10 rounded-bl-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                />
                
                <div className="flex items-start mb-6">
                  <motion.div 
                    className="p-3 bg-[#FFD700]/10 rounded-lg mr-4 border border-[#FFD700]/20"
                    whileHover={{ rotate: 15 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-[#FFD700] mt-2"
                    whileHover={{ x: 5 }}
                  >
                    {reason.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {reason.description}
                </motion.p>

                {/* Hover Effect */}
                <motion.div 
                  className="absolute inset-0 -z-10 bg-[#FFD700]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {[
            { value: "14", label: "Years Experience" },
            { value: "2,867+", label: "Pilgrims Served" },
            { value: "100%", label: "Visa Success" },
            { value: "500m", label: "From Haram" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111111] border border-[#FFD700]/20 rounded-xl p-6"
            >
              <motion.p 
                className="text-4xl font-bold text-[#FFD700] mb-2"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}