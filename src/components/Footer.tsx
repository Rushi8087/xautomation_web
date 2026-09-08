import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-0 relative overflow-hidden rounded-t-[40px] -mt-10 z-20 flex flex-col">
      <div className="max-w-[1700px] w-[95%] xl:w-[96%] mx-auto px-6 md:px-12 flex-grow flex flex-col relative z-10">
        
        {/* Top Section: CTA + Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-24">
          
          {/* Left: CTA */}
          <div className="flex-1 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-10 leading-[1.1]"
            >
              <span className="font-light text-white/90 block mb-2">Got a project in</span>
              <span className="block">mind?</span>
            </motion.h2>
            <motion.a 
              href="https://wa.me/918087870051?text=Hi!%20I'd%20like%20to%20book%20a%20strategy%20call%20with%20XAutomation."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold px-8 py-4 md:px-10 md:py-5 rounded-full inline-flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 text-lg"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Right: Link Columns */}
          <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 lg:pt-4">
            {/* Explore Column */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Explore</h4>
              <ul className="space-y-4 text-white/70 font-medium">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="/#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="https://wa.me/918087870051?text=Hi!%20I'd%20like%20to%20book%20a%20strategy%20call%20with%20XAutomation." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a call</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Bar: Copyright + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <p className="text-white/50 text-sm font-medium">
            © XAutomation.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/xauatomation/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-gray-900 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/abhi70302026?stkn=cWk4dHoxZGpscDkw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-gray-900 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:infoatxautomation@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-gray-900 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Giant Wordmark */}
      <div className="w-full flex justify-center items-end overflow-hidden pointer-events-none mt-auto">
        <motion.h1 
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: "15%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[11vw] md:text-[13vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none tracking-tighter"
        >
          XAUTOMATION
        </motion.h1>
      </div>
    </footer>
  );
}
