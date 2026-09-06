import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export function Reviews() {
  return (
    <section className="py-24 bg-[#D4E938] relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      
      {/* Circular text SVG */}
      <motion.div 
        initial={{ rotate: -20, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg viewBox="0 0 500 500" className="w-[800px] h-[800px] text-gray-900/10">
          <path id="curve" d="M 50 250 A 200 200 0 1 1 450 250 A 200 200 0 1 1 50 250" fill="transparent" />
          <text width="500" className="text-2xl font-black uppercase tracking-[0.2em]">
            <textPath href="#curve" startOffset="0%">
              XAUTOMATION * THE FUTURE IS NOW * XAUTOMATION * THE FUTURE IS NOW * XAUTOMATION * THE FUTURE IS NOW *
            </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-6">Client Reviews</div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Businesses that <br/>scaled with joy
          </h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl text-left relative">
            {/* Verified Review Badge */}
            <div className="absolute top-8 right-8 w-7 h-7 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                E
              </div>
              <div>
                <div className="font-bold text-gray-900">Enterprise Solutions Inc.</div>
                <div className="text-xs text-gray-500">2 months ago</div>
              </div>
            </div>
            
            <div className="flex gap-1 mb-4 text-[#D4E938]">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            
            <p className="text-gray-600 font-medium leading-relaxed">
              "Exceptional service! Automation transformed our entire workflow. We save over 40 hours a week and our error rate dropped to zero. The XAUTOMATION team is incredibly professional and knowledgeable."
            </p>
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl font-bold text-gray-900">4.8</span>
              <div className="flex text-gray-900">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <div className="text-sm text-gray-800 font-medium">Based on 30+ client reviews<br/><span className="text-xs text-gray-500 font-normal">Verified Client Rating</span></div>
          </div>
          
          <button className="mt-8 bg-white text-gray-900 font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            Meet XAUTOMATION
            <ArrowRight className="w-5 h-5 text-[#B9CC2F]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
