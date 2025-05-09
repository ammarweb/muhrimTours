'use client';
import { motion, useInView } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ahmed & Family",
    role: "First-Time Pilgrims",
    avatar: "/images/tg.png",
    rating: 5,
    content: "This package transformed our spiritual journey. The VIP access to Haram saved us hours, and our guide's knowledge of hidden prayer spots was priceless. Our kids still talk about the special children's program!",
    package: "Family Umrah Experience",
    highlight: "VIP Haram Access"
  },
  {
    id: 2,
    name: "Fatima K.",
    role: "Solo Traveler",
    avatar: "/images/tg.png",
    rating: 5,
    content: "As a woman traveling alone, I felt completely safe. The female guide assigned to me became like a sister. The hotel was literally 3 minutes from King Fahad Gate - I could pray Fajr in Haram every morning!",
    package: "Premium Umrah Package",
    highlight: "3-Minute Haram Walk"
  },
  {
    id: 3,
    name: "The Rahman Family",
    role: "Group of 12",
    avatar: "/images/tg.png",
    rating: 5,
    content: "Booking for our extended family was seamless. They arranged connected suites, private transportation for our elders, and even a chef for special dietary needs. The Ramadan iftar at our hotel overlooking Haram was unforgettable.",
    package: "Ramadan Special",
    highlight: "Private Family Suites"
  },
  {
    id: 4,
    name: "The Rahman Family",
    role: "Group of 12",
    avatar: "/images/tg.png",
    rating: 5,
    content: "Booking for our extended family was seamless. They arranged connected suites, private transportation for our elders, and even a chef for special dietary needs. The Ramadan iftar at our hotel overlooking Haram was unforgettable.",
    package: "Ramadan Special",
    highlight: "Private Family Suites"
  },
  {
    id: 5,
    name: "The Rahman Family",
    role: "Group of 12",
    avatar: "/images/tg.png",
    rating: 5,
    content: "Booking for our extended family was seamless. They arranged connected suites, private transportation for our elders, and even a chef for special dietary needs. The Ramadan iftar at our hotel overlooking Haram was unforgettable.",
    package: "Ramadan Special",
    highlight: "Private Family Suites"
  }
];

const AnimatedCounter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start: number;
    const increment = to / (duration * 60);

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const incrementCount = Math.min(from + Math.floor(increment * (progress / 1000)), to);

      setCount(incrementCount);

      if (incrementCount < to) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return { api, setApi, current, count };
};

export default function Testimonials() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const { api, setApi, current, count } = useCarousel();

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (current === count - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [api, current, count]);

  return (
    <section id="testimonials" className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#FFD700]/10">
      {/* Gold decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#FFD700]/10 blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Animated Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              style={{
                background: 'linear-gradient(90deg, #FFD700, #FFFFFF, #FFD700)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% auto'
              }}
              animate={isHeaderInView ? {
                backgroundPosition: ['0% center', '100% center']
              } : {}}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.3
              }}
            >
              Voices of{' '}
            </motion.span>
            <motion.span 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Our Pilgrims
            </motion.span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1 bg-[#FFD700] mx-auto mb-8 relative overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isHeaderInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#FFD700]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "circOut" }}
            />
          </motion.div>

          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Over <AnimatedCounter from={0} to={2867} duration={2} />+ spiritual journeys transformed since 2015
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative h-full bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-[#FFD700]/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#FFD700]/40 hover:shadow-lg hover:shadow-[#FFD700]/5 p-8">
                  {/* Rating & Highlight */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-[#FFD700]/10 text-[#FFD700] text-xs px-3 py-1 rounded-full border border-[#FFD700]/20">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-300 mb-8 relative">
                    <span className="absolute -top-6 -left-2 text-7xl text-[#FFD700]/10 font-serif">&ldquo;</span>
                    <p className="relative z-10 leading-relaxed">{testimonial.content}</p>
                    <span className="absolute -bottom-6 -right-2 text-7xl text-[#FFD700]/10 font-serif">&rdquo;</span>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center border-t border-[#FFD700]/10 pt-6">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#FFD700] mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white">{testimonial.name}</h4>
                      <p className="text-sm text-[#FFD700]">{testimonial.role}</p>
                      <p className="text-xs text-gray-400 mt-1">Booked: <span className="text-[#FFD700]/80">{testimonial.package}</span></p>
                    </div>
                  </div>

                  {/* Gold glow decoration */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFD700]/5 rounded-full blur-xl group-hover:bg-[#FFD700]/10 transition-all"></div>
                  <div className="absolute top-4 left-4 w-2 h-2 bg-[#FFD700] rounded-full"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-10 gap-4">
            <CarouselPrevious onClick={() => api?.scrollPrev()} className="relative bg-black border-[#FFD700]/50 text-[#FFD700] hover:text-[#FFD700] hover:bg-[#FFD700]/10" />
            <div className="flex items-center text-sm text-[#FFD700]">{current + 1} / {count}</div>
            <CarouselNext onClick={() => api?.scrollNext()} className="relative bg-black border-[#FFD700]/50 text-[#FFD700] hover:text-[#FFD700] hover:bg-[#FFD700]/10" />
          </div>
        </Carousel>

        {/* Animated Trust Indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          {[{ value: "2,867+", label: "Pilgrims Served", animate: true },
            { value: "14", label: "Years Experience" },
            { value: "100%", label: "Visa Success" },
            { value: "4.98", label: "Average Rating" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={isHeaderInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1 + i * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-4 border border-[#FFD700]/10 rounded-lg bg-[#111111]/50"
            >
              {item.animate ? (
                <p className="text-3xl font-serif text-[#FFD700] mb-1">
                  <AnimatedCounter from={0} to={2867} duration={1.5} />+
                </p>
              ) : (
                <p className="text-3xl font-serif text-[#FFD700] mb-1">{item.value}</p>
              )}
              <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}