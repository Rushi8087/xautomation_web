import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { MousePointer2 } from "lucide-react";

const CATEGORY_ROWS = [
  ["All", "Agency", "E-commerce", "SaaS", "Real Estate", "Restaurant", "Healthcare", "Education", "Tech"],
  ["Finance", "Fitness", "Nonprofit", "Travel", "Consulting", "Sports"],
  ["Media", "Legal", "Manufacturing"],
  ["Web3", "Startups"]
];

const PROJECTS = [
  {
    title: "Bloom & Co. Store Redesign",
    categories: ["E-commerce", "Retail"],
    images: {
      main: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      sub: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80"
    },
    stat: { label: "Mobile Conv.", value: "+45%" },
    desc1: "Bloom & Co. was struggling with low conversion rates and a slow, outdated mobile experience that frustrated their customers and lost sales.",
    desc2: "We completely overhauled their storefront with a modern, headless architecture. The result was a lightning-fast shopping experience and a 45% increase in mobile conversions within the first month."
  },
  {
    title: "Nexus SaaS Dashboard",
    categories: ["SaaS", "Tech"],
    images: {
      main: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      sub: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
    },
    stat: { label: "Support Tickets", value: "-30%" },
    desc1: "Nexus needed a complete UI/UX refresh for their core analytics product, which had become cluttered and difficult for new users to navigate.",
    desc2: "Our team designed and built a clean, intuitive dashboard interface using React and modern CSS. The new design simplified complex data visualizations and reduced customer support tickets by 30%."
  },
  {
    title: "Lumina Properties",
    categories: ["Real Estate", "Agency"],
    images: {
      main: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      sub: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
    },
    stat: { label: "Inbound Leads", value: "2x" },
    desc1: "Lumina wanted a premium digital presence that matched their high-end property listings, along with an advanced, lightning-fast search filtering system.",
    desc2: "We delivered a sophisticated, responsive website with seamless map integrations and real-time property search. The new site elevated their brand perception and doubled their inbound lead generation."
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const sportsRef = useRef(null);
  const isInView = useInView(sportsRef, { once: true, amount: 0.5, margin: "0px 0px -50px 0px" });
  const [demoState, setDemoState] = useState("idle");

  useEffect(() => {
    if (isInView && demoState === "idle") {
      setDemoState("animating");
      const clickTimer = setTimeout(() => {
        setActiveCategory("Sports");
      }, 1000);
      const doneTimer = setTimeout(() => {
        setDemoState("done");
      }, 2000);
      return () => {
        clearTimeout(clickTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [isInView, demoState]);

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.categories.includes(activeCategory)
  );

  return (
    <section id="portfolio" className="scroll-mt-20 lg:scroll-mt-24 py-24 md:py-32 bg-white relative z-20">
      <div className="max-w-[1700px] w-[94%] xl:w-[96%] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-1">Websites We've Built</h2>
          <motion.div className="mb-5 flex justify-start ml-2" aria-hidden="true">
            <svg width="180" height="20" viewBox="0 0 180 20" fill="none" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                d="M5 15Q90 0 175 15"
              />
            </svg>
          </motion.div>
          <p className="text-xl text-gray-500 font-medium max-w-2xl">
            Real websites, real results for real businesses. Browse some of our recent work below.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mb-16">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
              {row.map((cat) => (
                <motion.button
                  key={cat}
                  ref={cat === "Sports" ? sportsRef : null}
                  onClick={() => setActiveCategory(cat)}
                  animate={cat === "Sports" && demoState === "animating" ? {
                    scale: [1, 1, 1, 0.95, 1, 1, 1],
                  } : {}}
                  transition={{
                    duration: 2.0,
                    times: [0, 0.1, 0.5, 0.55, 0.6, 0.9, 1],
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                    activeCategory === cat
                      ? "bg-[#D4E938] text-gray-900 shadow-md border-transparent"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#D4E938] hover:text-gray-900"
                  }`}
                >
                  {cat}
                  {cat === "Sports" && demoState !== "done" && (
                    <motion.div
                      initial={{ x: 60, y: 60, opacity: 0 }}
                      animate={demoState === "animating" ? {
                        x: [60, 60, 0, 0, 0, 0, 0],
                        y: [60, 60, 0, 0, 0, 0, 0],
                        opacity: [0, 1, 1, 1, 1, 0, 0],
                        scale: [1, 1, 1, 0.9, 1, 1, 1]
                      } : {}}
                      transition={{
                        duration: 2.0,
                        times: [0, 0.1, 0.5, 0.55, 0.6, 0.9, 1],
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 pointer-events-none z-50 text-gray-900"
                    >
                      <MousePointer2 className="w-6 h-6 fill-current drop-shadow-lg -translate-x-1 -translate-y-1" />
                      
                      <motion.div
                         initial={{ opacity: 0, scale: 0 }}
                         animate={demoState === "animating" ? {
                           opacity: [0, 0, 0, 0.5, 0.5, 0, 0],
                           scale: [0, 0, 0.5, 1.5, 1.5, 2.5, 2.5]
                         } : {}}
                         transition={{
                           duration: 2.0,
                           times: [0, 0.1, 0.5, 0.55, 0.6, 0.9, 1], 
                           ease: "easeOut"
                         }}
                         className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border-2 border-gray-900 rounded-full"
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row p-8 md:p-12 lg:p-16 gap-10 lg:gap-20 items-center"
              >
                {/* Left side Image Collage */}
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden relative group shrink-0 h-[400px] md:h-[500px] lg:h-[640px] shadow-inner bg-gray-100">
                  
                  {/* Main Image Base (Fills entire container, zero gaps) */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <img
                      src={project.images.main}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  </div>

                  {/* Secondary Image Overlay (Rotated, covering bottom-left) */}
                  <div className="absolute -bottom-10 -left-10 w-[85%] h-[65%] sm:w-[80%] sm:h-[60%] rounded-tr-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-[8px] sm:border-[12px] border-white overflow-hidden -rotate-3 transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.02] z-10 origin-bottom-left">
                    <img
                      src={project.images.sub}
                      alt={`${project.title} detail`}
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>

                  {/* Floating Stat Badge */}
                  <div className="absolute top-1/4 right-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white/95 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-center justify-center rotate-3 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105 z-20">
                    <span className="text-[#0072c2] font-black text-3xl md:text-4xl leading-none mb-1 md:mb-2">{project.stat.value}</span>
                    <span className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">{project.stat.label}</span>
                  </div>

                </div>

                {/* Right side content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:py-6">
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="bg-[#0072c2]/10 text-[#0072c2] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl mb-4 md:mb-6 leading-relaxed">
                    {project.desc1}
                  </p>
                  <p className="text-gray-600 text-lg md:text-xl mb-10 md:mb-12 leading-relaxed">
                    {project.desc2}
                  </p>
                  <button className="bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-md">
                    View Project <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-[2rem] border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500">Check back soon for more examples in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
