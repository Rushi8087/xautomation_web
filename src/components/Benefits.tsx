import { motion } from "motion/react";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Benefits() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          
          
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Why <span className="text-[#B9CC2F]">Web Development?</span><br />
            The results speak for themselves!
          </motion.h2>
          
          <motion.div variants={itemVariants} className="flex justify-center mb-16">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                d="M5 15Q40 0 115 15" 
              />
            </svg>
          </motion.div>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-500 font-medium mb-20 leading-relaxed">
            A great website does more than look good — it drives real business results. From the moment your new site goes live, you'll notice improvements in traffic, conversions, and customer trust.
          </motion.p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-12">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6 md:gap-12 w-full max-w-[280px] lg:max-w-[300px] shrink-0 z-20">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="bg-white p-4 pr-6 rounded-2xl shadow-lg flex items-start gap-4 text-left w-full md:-translate-x-4 lg:-translate-x-8 md:-translate-y-8"
              >
                <div className="bg-[#D4E938] p-1.5 rounded-full mt-1 shrink-0">
                  <Check className="w-4 h-4 text-gray-900 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Faster Load Times</h4>
                  <p className="text-xs text-gray-500 font-medium leading-snug">Optimized for speed and performance</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="bg-white p-4 pr-6 rounded-2xl shadow-lg flex items-start gap-4 text-left w-full md:translate-x-4 lg:translate-x-8 md:translate-y-4"
              >
                <div className="bg-[#D4E938] p-1.5 rounded-full mt-1 shrink-0">
                  <Check className="w-4 h-4 text-gray-900 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Mobile Responsive</h4>
                  <p className="text-xs text-gray-500 font-medium leading-snug">Looks great on every device</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Central graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-2xl flex items-center justify-center relative z-10 shrink-0"
          >
            {/* Dashed ring container - decoupled from rotation to keep perfectly centered */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-[88%] h-[88%] rounded-full border-[3px] border-[#D4E938] border-dashed"
              />
            </div>
            
            {/* Inner white background with logo */}
            <div className="w-[72%] h-[72%] rounded-full flex items-center justify-center bg-white relative z-10 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center justify-center">
                <span 
                  className="text-7xl md:text-[5.5rem] text-gray-900 leading-none select-none font-serif relative"
                  style={{ top: '4px' }}
                >
                  X
                </span>
                <span className="text-[9px] md:text-[11px] font-medium tracking-[0.4em] text-gray-900 mt-2 md:mt-3 select-none ml-1">
                  ΛUTOMΛTION
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 md:gap-12 w-full max-w-[280px] lg:max-w-[300px] shrink-0 z-20">
            {/* Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white p-4 pr-6 rounded-2xl shadow-lg flex items-start gap-4 text-left w-full md:translate-x-4 lg:translate-x-8 md:-translate-y-2"
              >
                <div className="bg-[#D4E938] p-1.5 rounded-full mt-1 shrink-0">
                  <Check className="w-4 h-4 text-gray-900 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Higher Conversions</h4>
                  <p className="text-xs text-gray-500 font-medium leading-snug">Design built to turn visitors into customers</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="bg-white p-4 pr-6 rounded-2xl shadow-lg flex items-start gap-4 text-left w-full md:-translate-x-4 lg:-translate-x-8 md:translate-y-8"
              >
                <div className="bg-[#D4E938] p-1.5 rounded-full mt-1 shrink-0">
                  <Check className="w-4 h-4 text-gray-900 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">SEO Optimized</h4>
                  <p className="text-xs text-gray-500 font-medium leading-snug">Built to rank and get found online</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>



      </div>
    </section>
  );
}
