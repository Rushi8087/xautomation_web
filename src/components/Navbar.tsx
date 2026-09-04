import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    // On the contact page the navbar should always be in the scrolled (solid) style
    if (isContactPage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "top-0 bg-[#0072c2] shadow-md py-4" : "top-3 md:top-5 lg:top-6 bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-base font-bold tracking-wide text-white hover:text-white/80 transition-colors">
              HOME
            </Link>
            <a href={isContactPage ? "/#portfolio" : "#portfolio"} className="text-base font-bold tracking-wide text-white hover:text-white/80 transition-colors">
              PORTFOLIO
            </a>
            <Link to="/contact" className="text-base font-bold tracking-wide text-white hover:text-white/80 transition-colors">
              CONTACT
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white">
            XAUTOMATION
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link
            to="/contact"
            className="bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold text-sm px-6 py-2.5 rounded-full uppercase tracking-wide ml-2 transition-colors"
          >
            GET STARTED
          </Link>
          <button className="text-white hover:opacity-70 ml-2 transition-opacity">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
