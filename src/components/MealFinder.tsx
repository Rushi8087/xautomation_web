import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function MealFinder() {
  return (
    <section className="py-24 bg-white relative rounded-t-[40px] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      <div 
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Find the <span className="text-[#B9CC2F]">perfect automation</span> for your business!
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-full md:w-auto flex-1">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-full px-6 py-4 text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#D4E938] transition-shadow hover:shadow-md cursor-pointer">
              <option>Industry</option>
              <option>E-commerce</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Logistics</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
          
          <div className="relative w-full md:w-auto flex-1">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-full px-6 py-4 text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#D4E938] transition-shadow hover:shadow-md cursor-pointer">
              <option>Company Size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201+</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative w-full md:w-auto flex-1">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-full px-6 py-4 text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#D4E938] transition-shadow hover:shadow-md cursor-pointer">
              <option>Main Goal</option>
              <option>Cost Reduction</option>
              <option>Speed</option>
              <option>Accuracy</option>
              <option>Scale</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative w-full md:w-auto flex-1">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-full px-6 py-4 text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#D4E938] transition-shadow hover:shadow-md cursor-pointer">
              <option>Current Stack</option>
              <option>Modern (Cloud)</option>
              <option>Legacy (On-prem)</option>
              <option>Hybrid</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <button className="w-full md:w-auto bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap shadow-md">
            See proposals 
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
