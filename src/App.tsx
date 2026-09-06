import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Portfolio } from "./components/Portfolio";
import { CurvedDivider } from "./components/CurvedDivider";
import { CircularReviews } from "./components/CircularReviews";
import { Footer } from "./components/Footer";
import { FloatingBookingWidget } from "./components/FloatingBookingWidget";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable automatic browser scroll restoration to prevent landing at the bottom on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Scroll instantly to top on page refresh or route navigation
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900 font-sans flex flex-col overflow-clip relative">
      <Navbar />
      <main className="flex-grow">
        <Hero showContent={true} />
        <Benefits />
        <CurvedDivider topColor="#f9fafb" bottomColor="#ffffff" />
        <Portfolio />
        <CircularReviews />
      </main>
      <Footer />
      <FloatingBookingWidget />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
