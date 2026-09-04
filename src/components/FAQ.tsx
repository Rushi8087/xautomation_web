import { motion } from "motion/react";
import { Plus, ArrowRight } from "lucide-react";

export function FAQ() {
  const faqs = [
    "What is AI workflow automation?",
    "Why should I start automating my business?",
    "What are the main benefits of XAUTOMATION?",
    "Is there any risk of data breaches?",
    "How do I correctly deploy the new workflows?",
    "How long does the implementation take?"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Got questions?<br/>We have<br/>the answers!
            </h2>
            <p className="text-gray-500 font-medium mb-8 leading-relaxed">
              Whatever you need to know about AI automation, the products, and how we handle integrations. We are here to make your life easier.
            </p>
            <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-colors">
              See all questions
              <div className="bg-[#D4E938] p-1.5 rounded-full">
                <ArrowRight className="w-4 h-4 text-gray-900" />
              </div>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 w-full"
          >
            <div className="flex flex-col border-t border-gray-100">
              {faqs.map((faq, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-gray-100 cursor-pointer group">
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{faq}</span>
                  <div className="text-gray-300 group-hover:text-gray-600 transition-colors">
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
