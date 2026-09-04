import { motion } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";

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

export function Treats() {
  return (
    <section className="py-24 bg-white relative z-10 rounded-t-[40px] -mt-10 shadow-[0_-15px_40px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div 
          
          
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            The optimization continues<br/>after deployment!
          </motion.h2>
          
          <motion.div variants={itemVariants} className="mt-6 text-gray-500 font-medium max-w-lg">
            Choose from our smart add-ons and analytics dashboards to give your business that extra edge.
          </motion.div>
        </motion.div>

        {/* Treats Grid */}
        <motion.div 
          
          
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { name: "Analytics Dashboard", price: "450 € / mo" },
            { name: "Custom API Integration", price: "950 € / mo" },
            { name: "24/7 Priority Support", price: "300 € / mo" },
            { name: "Machine Learning Add-on", price: "1200 € / mo" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-between text-center group cursor-pointer hover:shadow-xl transition-all border border-transparent hover:border-gray-200"
            >
              <div className="w-32 h-32 bg-white rounded-2xl shadow-sm mb-6 flex items-center justify-center p-4">
                <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full">
                <h4 className="font-bold text-gray-800 mb-2">{item.name}</h4>
                <div className="text-[#FF6B6B] font-bold text-sm mb-4">{item.price}</div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-gray-400 group-hover:text-gray-800 transition-colors">Add to plan</span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#D4E938] transition-colors">
                    <Plus className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <button className="bg-gray-50 text-gray-600 font-bold px-6 py-2 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-colors text-sm">
            All Add-ons
            <div className="bg-[#D4E938] p-1 rounded-full text-gray-900">
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
