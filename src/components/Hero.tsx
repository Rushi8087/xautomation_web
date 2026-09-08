import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export function Hero({ showContent }: { showContent?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name' && !value.trim()) error = 'This field is required';
    if (name === 'email') {
      if (!value.trim()) error = 'This field is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email';
    }
    if (name === 'service' && !value) error = 'This field is required';
    if (name === 'details' && !value.trim()) error = 'This field is required';
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation removal
    if (errors[name]) {
      const error = validateField(name, value);
      if (!error) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      } else {
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    ['name', 'email', 'service', 'details'].forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
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
          setFormData({ name: '', email: '', phone: '', service: '', details: '' });
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Smooth subtle scale during scroll transition
  const sectionScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  return (
    <div ref={containerRef} className="relative lg:h-[120vh] w-full bg-gray-50 z-0">
      <div className="lg:sticky lg:top-0 min-h-screen lg:h-screen w-full p-2.5 sm:p-4 md:p-5 lg:p-6 overflow-visible lg:overflow-hidden">
        <motion.section 
          style={{ scale: typeof window !== 'undefined' && window.innerWidth >= 1024 ? sectionScale : 1 }} 
          className="relative min-h-[calc(100vh-1.25rem)] lg:h-full w-full bg-[#0072c2] flex flex-col justify-center overflow-visible lg:overflow-hidden pt-24 sm:pt-28 lg:pt-20 pb-10 sm:pb-12 lg:pb-6 rounded-[24px] sm:rounded-[30px] md:rounded-[36px] shadow-xl"
        >
          
          {/* Two Column Layout */}
          <div className="relative z-10 flex-grow flex items-center justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-4 sm:py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 w-full items-center">
              
              {/* Left Column - Text Content */}
              <div className="flex flex-col items-start justify-center text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.8rem] font-bold text-white leading-[1.12] tracking-tight">
                  We Build <span className="inline-block border-[2px] sm:border-[3px] border-white/30 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-0.5 sm:py-1 mt-1 mb-1 rotate-[-2deg] bg-white/5 backdrop-blur-sm">Websites</span><br />
                  That Actually<br />
                  Drive Results.
                </h1>
                <p className="mt-3.5 sm:mt-5 text-base sm:text-lg text-white/85 max-w-lg leading-relaxed font-medium">
                  From design to development, we build fast, modern websites that help your business grow and convert more customers.
                </p>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-5 w-full sm:w-auto">
                  <a href="https://wa.me/918087870051?text=Hi!%20I'd%20like%20to%20book%20a%20strategy%20call%20with%20XAutomation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center bg-[#D4E938] hover:bg-[#c3d632] text-gray-900 font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-[#D4E938]/20 text-center">
                    Book a Strategy Call
                  </a>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex -space-x-3.5">
                      <img className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0072c2] object-cover" src="/review1.png" alt="User 1" />
                      <img className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0072c2] object-cover" src="/review2.png" alt="User 2" />
                      <img className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0072c2] object-cover" src="/review3.png" alt="User 3" />
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0072c2] bg-[#005a9c] flex items-center justify-center text-xs sm:text-sm font-black text-white shadow-inner">+</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex gap-1 mb-0.5">
                        {[1,2,3,4,5].map(i => <svg key={i} className="w-3.5 h-3.5 text-[#D4E938]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                      </div>
                      <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">50+ websites delivered</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="w-full flex justify-center lg:justify-end">
                <div id="contact" className="bg-white rounded-[1.75rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-7 shadow-2xl relative w-full max-w-[27rem] scroll-mt-28">
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3.5 sm:mb-4 tracking-tight">Let's build something.</h3>
                  
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-3 py-10"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-1">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Message sent!</h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-[200px]">
                        We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form className="space-y-3" onSubmit={handleSubmit}>
                      <div>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name (e.g. Jane Doe)" 
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-3 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-medium ${errors.name ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-200 focus:ring-[#D4E938]'}`} 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-0.5 font-medium pl-1">{errors.name}</p>}
                      </div>
                      <div>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email (e.g. jane@brand.com)" 
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-3 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-medium ${errors.email ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-200 focus:ring-[#D4E938]'}`} 
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-0.5 font-medium pl-1">{errors.email}</p>}
                      </div>
                      <div>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number (optional)" 
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-3 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4E938] focus:border-transparent transition-all font-medium" 
                        />
                      </div>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-3 text-sm sm:text-base md:text-sm text-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none cursor-pointer font-medium ${errors.service ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-200 focus:ring-[#D4E938]'}`} 
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="design">Web Design</option>
                          <option value="ecommerce">E-Commerce</option>
                          <option value="webapp">Custom Web App</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className={`w-4 h-4 ${errors.service ? 'text-red-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        {errors.service && <p className="text-red-500 text-xs mt-0.5 font-medium pl-1">{errors.service}</p>}
                      </div>
                      <div>
                        <textarea 
                          name="details"
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="Tell us about your business and goals..." 
                          rows={3} 
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-3 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none font-medium ${errors.details ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-200 focus:ring-[#D4E938]'}`}
                        ></textarea>
                        {errors.details && <p className="text-red-500 text-xs mt-0.5 font-medium pl-1">{errors.details}</p>}
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#D4E938] hover:bg-[#c3d632] disabled:opacity-70 disabled:cursor-not-allowed text-gray-900 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 mt-1 shadow-md active:scale-95"
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>Send Message <Send className="w-4 h-4" /></>
                        )}
                      </button>
                      <p className="text-center text-gray-400 text-[11px] sm:text-xs mt-1.5 font-medium">
                        We reply within 24 hours, often much faster.
                      </p>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>

        </motion.section>
      </div>
    </div>
  );
}
