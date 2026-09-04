import { motion } from "motion/react";
import { Bot, FileCode } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Products() {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div 
          
          
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div className="max-w-xl relative">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Built with precision,<br/>scaled with care!
            </motion.h2>
            {/* Red decoration line */}
            <motion.div 
              variants={itemVariants}
              className="absolute -top-6 right-10 text-[#FF6B6B]"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  d="M12 4v4M18 6l-3 3M6 6l3 3" 
                />
              </svg>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8 inline-flex items-center bg-gray-50 border border-gray-100 rounded-full p-1">
              <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#D4E938] text-gray-900 font-bold shadow-sm transition-transform hover:scale-105 active:scale-95">
                <Bot className="w-5 h-5" />
                AI
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-full text-gray-400 font-bold hover:text-gray-600 transition-colors">
                <FileCode className="w-5 h-5" />
                RPA
              </button>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="max-w-md mt-8 md:mt-0 text-gray-500 font-medium">
            <p>Discover complete automation workflows for your business - ready to deploy and integrate seamlessly!</p>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          
          
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { color: "bg-[#FFF9C4]", name: "CHATBOT PRO" },
            { color: "bg-[#E8F5E9]", name: "WORKFLOW AUTOMATION" },
            { color: "bg-[#FFE0B2]", name: "ENTERPRISE AI PLUS" }
          ].map((product, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
              className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-12 h-[350px]"
            >
              <div className={`w-full h-full ${product.color} rounded-[30px] flex items-center justify-center relative overflow-hidden transition-transform duration-500 hover:scale-105`}>
                <div className="text-center font-bold text-gray-700 w-full px-4 text-xl tracking-tight">
                  {product.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
