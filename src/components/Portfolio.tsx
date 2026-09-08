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

const PARTICLES = [
  { x: 36, y: 0 },
  { x: 26, y: -26 },
  { x: 0, y: -36 },
  { x: -26, y: -26 },
  { x: -36, y: 0 },
  { x: -26, y: 26 },
  { x: 0, y: 36 },
  { x: 26, y: 26 },
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
    title: "Apex Athletic Club",
    categories: ["Sports", "Fitness"],
    images: {
      main: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      sub: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80"
    },
    stat: { label: "Class Bookings", value: "+82%" },
    desc1: "Apex Athletic needed a high-energy, performance-focused web experience with real-time class booking and membership onboarding.",
    desc2: "We designed and engineered a dynamic, conversion-optimized platform tailored for fitness enthusiasts, increasing direct class bookings by 82% within 60 days."
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
      }, 650);
      const doneTimer = setTimeout(() => {
        setDemoState("done");
      }, 1800);
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
        <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mb-12 sm:mb-16">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3">
              {row.map((cat) => (
                <motion.button
                  key={cat}
                  ref={cat === "Sports" ? sportsRef : null}
                  onClick={() => setActiveCategory(cat)}
                  animate={cat === "Sports" && demoState === "animating" ? {
                    scale: [1, 1, 0.88, 1.08, 0.98, 1, 1],
                  } : {}}
                  transition={{
                    duration: 1.8,
                    times: [0, 0.32, 0.38, 0.48, 0.58, 0.7, 1],
                    ease: "easeInOut"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                    activeCategory === cat
                      ? "bg-[#D4E938] text-gray-900 shadow-md border-transparent"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#D4E938] hover:text-gray-900"
                  }`}
                >
                  {cat}
                  {cat === "Sports" && demoState !== "done" && (
                    <motion.div
                      initial={{ x: 65, y: 65, opacity: 0 }}
                      animate={demoState === "animating" ? {
                        x: [65, 65, 0, 0, 0, 10, 15],
                        y: [65, 65, 0, 0, 0, 10, 15],
                        opacity: [0, 1, 1, 1, 1, 0.4, 0],
                        scale: [1, 1, 1, 0.82, 1.05, 1, 1]
                      } : {}}
                      transition={{
                        duration: 1.8,
                        times: [0, 0.08, 0.34, 0.38, 0.48, 0.85, 1],
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 pointer-events-none z-50 text-gray-900"
                    >
                      {/* Enhanced Larger Cursor */}
                      <MousePointer2 className="w-8 h-8 fill-gray-900 stroke-white stroke-[1.5] drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] -translate-x-1.5 -translate-y-1.5" />
                      
                      {/* Ripple Layer 1: Core Glow Splash */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={demoState === "animating" ? {
                          opacity: [0, 0, 0, 0.85, 0.4, 0, 0],
                          scale: [0, 0, 0.2, 2.6, 3.8, 4.4, 4.4]
                        } : {}}
                        transition={{
                          duration: 1.8,
                          times: [0, 0.34, 0.38, 0.46, 0.65, 0.85, 1], 
                          ease: "easeOut"
                        }}
                        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 bg-[#D4E938]/35 border-2 border-[#D4E938] rounded-full blur-[0.5px]"
                      />

                      {/* Ripple Layer 2: Expanding Accent Ring */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={demoState === "animating" ? {
                          opacity: [0, 0, 0, 0.9, 0.3, 0, 0],
                          scale: [0, 0, 0.2, 3.4, 5.2, 6.0, 6.0]
                        } : {}}
                        transition={{
                          duration: 1.8,
                          times: [0, 0.34, 0.38, 0.50, 0.72, 0.9, 1], 
                          ease: "easeOut"
                        }}
                        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border-2 border-[#D4E938] rounded-full shadow-[0_0_12px_rgba(212,233,56,0.6)]"
                      />

                      {/* Ripple Layer 3: Subtle Shockwave Wave */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={demoState === "animating" ? {
                          opacity: [0, 0, 0, 0.6, 0.15, 0, 0],
                          scale: [0, 0, 0.2, 4.2, 6.5, 7.5, 7.5]
                        } : {}}
                        transition={{
                          duration: 1.8,
                          times: [0, 0.34, 0.38, 0.54, 0.78, 0.95, 1], 
                          ease: "easeOut"
                        }}
                        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-[#D4E938]/70 rounded-full"
                      />

                      {/* Particle / Spark Burst */}
                      {PARTICLES.map((p, i) => (
                        <motion.span
                          key={i}
                          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                          animate={demoState === "animating" ? {
                            x: [0, 0, 0, p.x, p.x * 1.3, p.x * 1.3],
                            y: [0, 0, 0, p.y, p.y * 1.3, p.y * 1.3],
                            opacity: [0, 0, 1, 1, 0, 0],
                            scale: [0, 0, 1.4, 1.2, 0, 0]
                          } : {}}
                          transition={{
                            duration: 1.8,
                            times: [0, 0.35, 0.38, 0.52, 0.72, 1],
                            ease: "easeOut"
                          }}
                          className={`absolute top-0 left-0 w-2 h-2 rounded-full pointer-events-none -ml-1 -mt-1 ${i % 2 === 0 ? "bg-[#D4E938]" : "bg-yellow-300"} shadow-[0_0_8px_rgba(212,233,56,0.9)]`}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8 sm:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-[1.75rem] sm:rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row p-5 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-10 lg:gap-20 items-center"
              >
                {/* Left side Image Collage */}
                <div className="w-full lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden relative group shrink-0 h-[280px] sm:h-[380px] md:h-[480px] lg:h-[640px] shadow-inner bg-gray-100">
                  
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
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-[80%] h-[60%] sm:w-[80%] sm:h-[60%] rounded-tr-2xl sm:rounded-tr-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-[6px] sm:border-[12px] border-white overflow-hidden -rotate-3 transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.02] z-10 origin-bottom-left">
                    <img
                      src={project.images.sub}
                      alt={`${project.title} detail`}
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>

                  {/* Floating Stat Badge */}
                  <div className="absolute top-1/4 right-0 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 bg-white/95 backdrop-blur-md p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col items-center justify-center rotate-3 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105 z-20">
                    <span className="text-[#0072c2] font-black text-2xl sm:text-3xl md:text-4xl leading-none mb-0.5 sm:mb-2">{project.stat.value}</span>
                    <span className="text-gray-500 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider">{project.stat.label}</span>
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
