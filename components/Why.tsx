'use client';
import { Globe, Shield, Star, Calendar, Plane } from 'lucide-react';

const reasons = [
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
      <div className="relative z-10 container mx-auto px-6 py-32">
        {/* Title Section */}
        <div className="text-center mb-28">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent">
              Why
            </span>{' '}
            <span className="text-white">Choose Us?</span>
          </h2>
          
          <div className="w-32 h-1 bg-[#FFD700] mx-auto mb-8" />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where centuries-old tradition meets cutting-edge pilgrimage technology
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-[#FFD700]/20 rounded-2xl p-8 relative overflow-hidden
                        hover:-translate-y-2 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all duration-300"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD700]/10 rounded-bl-full" />
              
              <div className="flex items-start mb-6">
                <div className="p-3 bg-[#FFD700]/10 rounded-lg mr-4 border border-[#FFD700]/20 hover:rotate-12 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700] mt-2 hover:translate-x-2 transition-transform">
                  {reason.title}
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-[#FFD700]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "14", label: "Years Experience" },
            { value: "2,867+", label: "Pilgrims Served" },
            { value: "100%", label: "Visa Success" },
            { value: "500m", label: "From Haram" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#FFD700]/20 rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <p className="text-4xl font-bold text-[#FFD700] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}