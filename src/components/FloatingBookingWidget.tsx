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
      className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-1.5 pr-5 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 group transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
    >
      <div className="relative">
        <img 
          src="/profile.png"
          alt="Book a call" 
          className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="font-bold text-gray-900 text-sm leading-tight group-hover:text-[#0072c2] transition-colors">Book A Call</span>
        <span className="text-xs text-gray-500 font-medium">Get started today</span>
      </div>
      
      <div className="ml-1 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#D4E938] transition-colors">
        <ArrowRight className="w-4 h-4 text-gray-700" />
      </div>
    </motion.a>
  );
}
