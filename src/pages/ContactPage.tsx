import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === "name" && !value.trim()) return "This field is required";
    if (name === "email") {
      if (!value.trim()) return "This field is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email";
    }
    if (name === "service" && !value) return "This field is required";
    if (name === "details" && !value.trim()) return "This field is required";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const error = validateField(name, value);
      if (!error) {
        setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
      } else {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    ["name", "email", "service", "details"].forEach((field) => {
      const err = validateField(field, formData[field as keyof typeof formData]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // ⚠️ Replace with your Web3Forms access key
            subject: `New Inquiry from ${formData.name} for ${formData.service}`,
            from_name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            service: formData.service,
            message: formData.details,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setIsSuccess(true);
          setFormData({ name: "", email: "", phone: "", service: "", details: "" });
          setTimeout(() => setIsSuccess(false), 5000);
        } else {
          console.error("Web3Forms Error:", result);
          alert("Failed to send message. Please check your access key.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Failed to send message. Please check your connection.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputBase =
    "w-full bg-gray-50 border rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-medium";

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-blue-100/60 border border-gray-100 w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        Let's build something.
      </h3>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-4 py-16"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Message sent!</h4>
            <p className="text-sm text-gray-600 font-medium max-w-[200px]">
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name (e.g. Jane Doe)"
                className={`${inputBase} ${errors.name ? "border-red-500 bg-red-50 focus:ring-red-500" : "border-gray-200 focus:ring-[#D4E938]"}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (e.g. jane@brand.com)"
                className={`${inputBase} ${errors.email ? "border-red-500 bg-red-50 focus:ring-red-500" : "border-gray-200 focus:ring-[#D4E938]"}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number (optional)"
                className={`${inputBase} border-gray-200 focus:ring-[#D4E938]`}
              />
            </div>

            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer text-gray-500 ${errors.service ? "border-red-500 bg-red-50 focus:ring-red-500" : "border-gray-200 focus:ring-[#D4E938]"}`}
              >
                <option value="" disabled>Select a service</option>
                <option value="design">Web Design</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="webapp">Custom Web App</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className={`w-4 h-4 ${errors.service ? "text-red-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {errors.service && <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.service}</p>}
            </div>

            <div>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your business and goals..."
                rows={4}
                className={`${inputBase} resize-none ${errors.details ? "border-red-500 bg-red-50 focus:ring-red-500" : "border-gray-200 focus:ring-[#D4E938]"}`}
              />
              {errors.details && <p className="text-red-500 text-xs mt-1 font-medium pl-1">{errors.details}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D4E938] hover:bg-[#c3d632] disabled:opacity-70 disabled:cursor-not-allowed text-gray-900 font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
            </button>
            <p className="text-center text-gray-400 text-xs mt-2 font-medium">
              We reply within 24 hours, often much faster.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────
const staticFaqs = [
  { q: "How long does a project take?", a: "Most websites are delivered within 2 weeks. We'll give you a clear timeline before we start, and for larger or more complex projects, we'll always communicate realistic timelines upfront." },
  { q: "Do you offer maintenance after launch?", a: "Yes! We offer two flexible options: a one-time investment plan for a fixed maintenance package covering updates and support for a set period, or a monthly retainer plan for ongoing updates, performance monitoring, security patches, and priority support. We'll help you choose the option that best fits your needs." },
  { q: "What's your pricing like?", id: "pricing", a: "" },
  { q: "Can you redesign my existing website?", a: "Absolutely. Redesigns are one of our specialities. We audit your current site and rebuild it from the ground up for modern performance and conversion." },
  { q: "What information do you need to get started?", a: "Just fill out the contact form above! We'll schedule a discovery call to understand your brand, goals, and timeline before providing a proposal." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full bg-[#D4E938]/20 flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed font-medium">
              {a || (
                <div className="flex animate-pulse gap-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Map Placeholder ───────────────────────────────────────────────────────────
function MapPlaceholder() {
  return (
    <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gradient-to-br from-[#e8f4ff] to-[#f0f9ff] h-48 flex items-center justify-center relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#0072c2 1px, transparent 1px), linear-gradient(90deg, #0072c2 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-12 h-12 bg-[#0072c2] rounded-full flex items-center justify-center shadow-lg shadow-[#0072c2]/30 animate-pulse">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <span className="bg-white text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
          123 Business Ave, City, State
        </span>
      </div>
    </div>
  );
}

// ─── Bottom CTA Banner ─────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0072c2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-10"
        >
          <span className="block font-light text-white/80 mb-2">Got a project in</span>
          mind?
        </motion.h2>
        <motion.a
          href="https://wa.me/918087870051?text=Hi!%20I'd%20like%20to%20book%20a%20strategy%20call%20with%20XAutomation."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold px-10 py-5 rounded-full inline-flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 text-lg shadow-lg shadow-[#D4E938]/20"
        >
          Schedule a Call
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}

// ─── Main Page Export ──────────────────────────────────────────────────────────
export default function ContactPage() {
  const [pricingText, setPricingText] = useState("");

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const cached = sessionStorage.getItem("cachedPricing");
        if (cached) {
          setPricingText(cached);
          return;
        }
        
        const ipRes = await fetch("https://ipapi.co/json/");
        const ipData = await ipRes.json();
        const currency = ipData.currency || "AED";
        
        if (currency === "AED") {
          const text = "Projects start from AED 2,500 for landing pages and scale based on features and complexity. We offer transparent, fixed-price quotes — no hidden fees.";
          setPricingText(text);
          sessionStorage.setItem("cachedPricing", text);
          return;
        }

        const ratesRes = await fetch("https://open.er-api.com/v6/latest/AED");
        const ratesData = await ratesRes.json();
        const rate = ratesData.rates[currency];
        
        if (!rate) throw new Error("Rate not found");
        
        const converted = 2500 * rate;
        let rounded = converted;
        if (converted > 1000) {
          rounded = Math.round(converted / 1000) * 1000;
        } else {
          rounded = Math.round(converted / 100) * 100;
        }
        
        const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: currency, maximumFractionDigits: 0 }).format(rounded);
        const text = `Projects start from ${formatted} (AED 2,500) for landing pages and scale based on features and complexity. We offer transparent, fixed-price quotes — no hidden fees.`;
        
        setPricingText(text);
        sessionStorage.setItem("cachedPricing", text);
      } catch (e) {
        setPricingText("Projects start from AED 2,500 for landing pages and scale based on features and complexity. We offer transparent, fixed-price quotes — no hidden fees.");
      }
    };
    fetchPricing();
  }, []);
  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "123 Business Ave, City, State", href: null },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@xautomation.com", href: "mailto:hello@xautomation.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (800) 555-0199", href: "tel:+18005550199" },
    { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon–Fri, 9am–6pm", href: null },
  ];

  const socials = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/xauatomation/", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter / X" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col overflow-clip relative">
      <Navbar />

      <main className="flex-grow">

        {/* ── Page Header ────────────────────────────────────────────── */}
        <section className="bg-[#0072c2] pt-40 pb-24 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start gap-5"
            >
              <span className="inline-flex items-center gap-2 bg-[#D4E938]/20 border border-[#D4E938]/40 text-[#D4E938] font-bold text-xs px-4 py-1.5 rounded-full tracking-widest uppercase">
                Contact Us
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl">
                Let's Build Something{" "}
                <span className="inline-block border-[3px] border-white/30 rounded-2xl px-4 py-1 rotate-[-1.5deg] bg-white/5 backdrop-blur-sm">
                  Great
                </span>{" "}
                Together.
              </h1>

              <p className="text-white/75 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                Have a project in mind? Reach out and we'll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Two-Column Content ──────────────────────────────────────── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* LEFT – Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                <div className="space-y-4">
                  {contactInfo.map(({ icon, label, value, href }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 bg-[#0072c2]/10 rounded-xl flex items-center justify-center text-[#0072c2] shrink-0 mt-0.5">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-gray-800 font-semibold hover:text-[#0072c2] transition-colors">{value}</a>
                        ) : (
                          <p className="text-gray-800 font-semibold">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="mt-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {socials.map(({ icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#0072c2] hover:border-[#0072c2] hover:text-white transition-all duration-200"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>

                <MapPlaceholder />
              </motion.div>

              {/* RIGHT – Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── FAQ Section ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 bg-[#D4E938]/20 border border-[#D4E938]/50 text-gray-700 font-bold text-xs px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Common Questions</h2>
              <p className="text-gray-500 mt-3 font-medium">Everything you need to know before we get started.</p>
            </motion.div>

            <div className="space-y-3">
              {staticFaqs.map((faq) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FAQItem q={faq.q} a={faq.id === "pricing" ? pricingText : faq.a} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────── */}
        <CTABanner />

      </main>

      <Footer />
    </div>
  );
}
