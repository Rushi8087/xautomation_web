import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Portfolio } from "./components/Portfolio";
import { CurvedDivider } from "./components/CurvedDivider";
import { CircularReviews } from "./components/CircularReviews";
import { Footer } from "./components/Footer";
import { FloatingBookingWidget } from "./components/FloatingBookingWidget";
import ContactPage from "./pages/ContactPage";

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
