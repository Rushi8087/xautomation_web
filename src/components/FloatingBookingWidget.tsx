import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FloatingBookingWidget() {
  return (
    <motion.a
      href="https://wa.me/918087870051?text=Hi!%20I'd%20like%20to%20book%20a%20call%20with%20XAutomation."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: 1.5, 
        duration: 0.5, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 bg-white rounded-full p-1 sm:p-1.5 pr-3.5 sm:pr-5 flex items-center gap-2.5 sm:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-100 group transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.22)]"
    >
      <div className="relative">
        <img 
          src="/profile.png"
          alt="Book a call" 
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="font-bold text-gray-900 text-xs sm:text-sm leading-tight group-hover:text-[#0072c2] transition-colors">Book A Call</span>
        <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Get started</span>
      </div>
      
      <div className="ml-0.5 sm:ml-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#D4E938] transition-colors">
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
      </div>
    </motion.a>
  );
}
