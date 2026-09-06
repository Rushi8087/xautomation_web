import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowRight, CheckCircle2, TrendingUp, Rocket, Zap } from "lucide-react";

const CIRCULAR_REVIEWS = [
  {
    initial: "A",
    name: "Atharv Sharma",
    time: "2 weeks ago",
    text: `"XAutomation transformed our outdated site into a modern, high-converting masterpiece. Their team was professional, responsive, and delivered exactly what we needed on time."`,
    image: "/review1.png"
  },
  {
    initial: "P",
    name: "Priya Patil",
    time: "1 month ago",
    text: `"The e-commerce platform they built for us is lightning fast. We saw a 40% increase in sales within the first two months. Highly recommend their website services!"`,
    image: "/review3.png"
  },
  {
    initial: "R",
    name: "Rohan Verma",
    time: "3 months ago",
    text: `"From the initial strategy call to the final launch, the process was seamless. They understood our brand vision perfectly and translated it into a beautiful custom web app."`,
    image: "/review2.png"
  },
  {
    initial: "D",
    name: "David Thompson",
    time: "4 months ago",
    text: `"Incredible attention to detail and a keen eye for design. Our new website not only looks stunning but ranks much better on search engines. Worth every penny."`
  },
  {
    initial: "J",
    name: "Jessica Lee",
    time: "5 months ago",
    text: `"They took our complex requirements and simplified them into an intuitive user experience. The feedback from our clients has been overwhelmingly positive."`
  },
  {
    initial: "M",
    name: "Marcus Johnson",
    time: "6 months ago",
    text: `"Communication was top-notch throughout the entire project. They built a robust, scalable site that handles our high traffic with zero issues. Fantastic agency."`
  }
];

export function CircularReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CIRCULAR_REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = CIRCULAR_REVIEWS[currentIndex];

  return (
    <section className="relative w-full bg-[#D4E938] py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden z-20">
      {/* Subtle Soft Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5df22] rounded-full blur-[120px] pointer-events-none opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-900/5 text-xs md:text-sm font-bold tracking-widest uppercase text-gray-900 mb-6 border border-gray-900/10">
            CLIENT REVIEWS
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black text-gray-900 leading-[1.1] mb-6">
            Businesses that scaled with joy
          </h2>
          {/* Inline Stat Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-900 font-bold text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>4.8</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-gray-900 fill-gray-900" />
                ))}
              </div>
            </div>
            <span className="hidden sm:inline font-medium opacity-80">·</span>
            <span className="font-medium opacity-80">Based on 30+ verified client reviews</span>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative w-full max-w-2xl mx-auto mb-8 h-[280px] sm:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-[#FFFFFF] rounded-[2rem] p-6 md:p-8 shadow-[0_32px_64px_rgba(0,0,0,0.12)] flex flex-col text-left border border-gray-100"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-4">
                  {/* @ts-ignore - implicitly added image property */}
                  {activeReview.image ? (
                    // @ts-ignore
                    <img src={activeReview.image} alt={activeReview.name} className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm shrink-0" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#e2e8f0] text-gray-800 font-bold flex items-center justify-center text-xl shrink-0">
                      {activeReview.initial}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-base md:text-lg leading-none mb-1 flex items-center gap-1.5">
                      {activeReview.name}
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </span>
                    <span className="text-xs text-gray-600 font-medium">{activeReview.time}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-[#D4E938] fill-[#D4E938]" />
                ))}
              </div>
              
              <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium line-clamp-4">
                {activeReview.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {CIRCULAR_REVIEWS.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-gray-900' : 'bg-gray-900/20'}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-16">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm w-full md:w-auto justify-center hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900 text-sm">40% More Leads</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm w-full md:w-auto justify-center hover:scale-105 transition-transform">
            <Rocket className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900 text-sm">50+ websites delivered</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm w-full md:w-auto justify-center hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900 text-sm">6 Hours Response Time</span>
          </div>
        </div>


      </div>
    </section>
  );
}
