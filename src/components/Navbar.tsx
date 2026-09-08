import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // On the contact page the navbar should always be in the scrolled (solid) style
    if (isContactPage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "top-0 bg-[#0072c2]/95 backdrop-blur-md shadow-md py-3.5 md:py-4"
            : "top-0 sm:top-2 md:top-4 bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 flex items-center justify-between relative">
          
          {/* Left: Desktop Navigation Links / Mobile Logo */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
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

            {/* Mobile / Tablet Logo (shown on left when screen < lg) */}
            <div className="lg:hidden flex items-center pl-1 sm:pl-2">
              <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter text-white">
                XAUTOMATION
              </Link>
            </div>
          </div>

          {/* Center Logo (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white">
              XAUTOMATION
            </Link>
          </div>

          {/* Right side Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full uppercase tracking-wide transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              GET STARTED
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:opacity-80 p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0072c2] pt-24 pb-8 px-6 shadow-2xl border-b border-white/10 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4 text-center">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-[#D4E938] py-2 border-b border-white/10 transition-colors"
                >
                  HOME
                </Link>
                <a
                  href={isContactPage ? "/#portfolio" : "#portfolio"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-[#D4E938] py-2 border-b border-white/10 transition-colors"
                >
                  PORTFOLIO
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-[#D4E938] py-2 border-b border-white/10 transition-colors"
                >
                  CONTACT
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold text-center py-3.5 rounded-full uppercase tracking-wider block transition-transform active:scale-95 shadow-lg"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
