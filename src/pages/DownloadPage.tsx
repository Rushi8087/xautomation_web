import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Download, 
  Repeat, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Zap, 
  Users, 
  CheckCircle2, 
  Laptop, 
  ChevronDown,
  Sparkles,
  Lock,
  Cpu
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const DOWNLOAD_URL = "https://github.com/infoatxautomation-boop/xbot-releases/releases/download/v1.0.1/Xbot.Setup.1.0.1.exe";
const VERSION = "v1.0.1";
const FILE_SIZE = "120 MB";

const features = [
  {
    icon: Repeat,
    badge: "Growth & Reach",
    title: "Automatic Retweets & Reposts",
    description: "Instantly repost partner content, client tweets, or promotional campaigns from single or multiple accounts with humanized timing delays and verified screenshot proof.",
    highlights: ["Single & batch queue modes", "Custom response templates", "Automatic screenshot proof", "Safe randomized intervals"]
  },
  {
    icon: MessageSquare,
    badge: "Inbox Automation",
    title: "Intelligent DM Exchange",
    description: "Engage prospects, trade reciprocal engagement, and unlock conversation momentum automatically. Never leave high-intent leads waiting in your inbox.",
    highlights: ["Automated response handling", "Instant chat unlocker", "Context-aware message triggers", "Persistent conversation history"]
  },
  {
    icon: Send,
    badge: "High-Volume Outreach",
    title: "Safe Bulk Direct Messaging",
    description: "Scale your cold outreach to targeted creator and founder lists without risking your account. Built-in human emulation avoids trigger limits and shadowbans.",
    highlights: ["Smart rate-limiting throttle", "Personalized message variants", "Multi-account load distribution", "Anti-detection browser fingerprinting"]
  }
];

const faqs = [
  {
    q: "Is Xbot safe for my X (Twitter) accounts?",
    a: "Yes. Xbot runs locally inside a dedicated Chrome environment using real user-agent sessions and humanized randomized intervals, rather than rigid robotic API calls that trigger bot flags."
  },
  {
    q: "Do I need an expensive Twitter API subscription?",
    a: "No! Xbot operates through direct automated browser orchestration. You do not need to pay thousands of dollars for enterprise API tiers."
  },
  {
    q: "Why do I see 'Windows protected your PC' (SmartScreen) on launch?",
    a: "Microsoft Defender SmartScreen displays a cautionary prompt for all newly compiled software installers until they build high download volume. Simply click 'More info' and then 'Run anyway' to launch Xbot."
  },
  {
    q: "Can I manage multiple accounts simultaneously?",
    a: "Absolutely. Xbot comes with an integrated Multi-Account Switcher that stores distinct sessions, cookies, and profiles so you can manage brand, client, and personal accounts seamlessly."
  }
];

export default function DownloadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex flex-col font-sans selection:bg-[#0072c2] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 md:pt-36 pb-20">
        {/* Hero Section */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#0072c2]/20 blur-[140px] pointer-events-none rounded-full" />

          {/* Version Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0072c2]/40 bg-[#0072c2]/10 px-4 py-1.5 text-xs font-bold text-[#38bdf8] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#38bdf8]" />
              <span>Official Windows Release • {VERSION}</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Automate Your <span className="bg-gradient-to-r from-[#38bdf8] to-[#0072c2] bg-clip-text text-transparent">X Growth</span> on Autopilot
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stop spending 4+ hours a day manually engaging. Unleash <strong>Auto Retweets</strong>, smart <strong>DM Exchange</strong>, and safe <strong>Bulk Outreach</strong> built for serious creators and founders.
            </p>
          </motion.div>

          {/* Download CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4"
          >
            <a
              href={DOWNLOAD_URL}
              className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0072c2] to-[#0284c7] px-8 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#0072c2]/40"
            >
              <Download className="h-6 w-6 transition-transform group-hover:translate-y-0.5" />
              <span>Download Free for Windows</span>
              <span className="rounded-lg bg-black/25 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                {VERSION} (.exe)
              </span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Laptop className="h-4 w-4 text-[#38bdf8]" /> Windows 10 / 11 (64-bit)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4 text-[#38bdf8]" /> {FILE_SIZE}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> 100% Virus-Free & Verified
              </span>
            </div>
          </motion.div>

          {/* Product Demo Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 relative w-full aspect-video shadow-inner">
              <iframe
                src="https://go.screenpal.com/player/cO6qFdnyYXd?ff=true&controls=1"
                title="Xbot Automation Video Demo"
                className="w-full h-full border-0 absolute top-0 left-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>

        </div>

        {/* 3 Pillars Section */}
        <section className="mt-28 py-20 border-t border-white/10 bg-[#0b1222]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest">Built For Scale</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Three Powerhouses in One App</h2>
              <p className="mt-3 text-gray-400">Everything you need to expand your audience, nurture connections, and generate leads on X.</p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div 
                    key={idx}
                    className="relative rounded-3xl border border-white/10 bg-[#0f172a] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0072c2]/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-2xl bg-[#0072c2]/20 p-3.5 text-[#38bdf8] mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="block text-xs font-semibold text-[#38bdf8] uppercase tracking-wider mb-1">{f.badge}</span>
                      <h3 className="text-xl font-bold text-white">{f.title}</h3>
                      <p className="mt-3 text-sm text-gray-400 leading-relaxed">{f.description}</p>
                    </div>

                    <ul className="mt-6 space-y-2.5 pt-6 border-t border-white/10">
                      {f.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Setup & SmartScreen Guide */}
        <section className="py-20 border-t border-white/10 bg-[#070b14]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest">Enterprise Architecture</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Engineered for Safe, Long-Term Operation</h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Most automation bots get accounts flagged within days because they hammer private APIs with synthetic headers. Xbot runs real browser sessions mimicking human behavior to keep your accounts healthy.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-[#0072c2]/20 p-2.5 text-[#38bdf8] mt-0.5">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">Humanized Jitter & Intervals</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Configurable random delays prevent robotic patterns.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-[#0072c2]/20 p-2.5 text-[#38bdf8] mt-0.5">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">Isolated Multi-Account Profiles</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Each account has separated storage, local cookies, and custom user agents.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="rounded-xl bg-[#0072c2]/20 p-2.5 text-[#38bdf8] mt-0.5">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">Zero Cloud Intermediaries</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Your credentials and sessions stay stored 100% locally on your PC.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Guide Box */}
              <div className="rounded-3xl border border-[#0072c2]/30 bg-gradient-to-br from-[#0f172a] to-[#0b1222] p-8 shadow-2xl">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                  <Laptop className="h-5 w-5 text-[#38bdf8]" /> 
                  Quick 3-Step Setup
                </h3>
                <p className="mt-2 text-xs text-gray-400">
                  Getting started on Windows takes less than 30 seconds:
                </p>

                <div className="mt-6 space-y-3.5 text-xs">
                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0072c2] font-bold text-white">1</span>
                    <span>Click <strong>Download Free for Windows</strong> to get <code>Xbot.Setup.1.0.1.exe</code></span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0072c2] font-bold text-white">2</span>
                    <span>Double-click the installer (If SmartScreen prompts, click <strong>"More info"</strong> ➔ <strong>"Run anyway"</strong>)</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0072c2] font-bold text-white">3</span>
                    <span>Launch the app and start putting growth on autopilot!</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={DOWNLOAD_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0072c2] to-[#0284c7] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-full"
                  >
                    <Download className="h-4 w-4" /> Download Installer Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 border-t border-white/10 bg-[#0b1222]">
          <div className="max-w-[800px] mx-auto px-6 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest">Common Inquiries</span>
              <h2 className="mt-2 text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl border border-white/10 bg-[#0f172a] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left font-semibold text-sm hover:text-[#38bdf8] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-[#38bdf8]" : "text-gray-400"}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Final CTA */}
            <div className="mt-16 text-center rounded-3xl bg-gradient-to-br from-[#0072c2]/20 to-[#0284c7]/10 border border-[#0072c2]/30 p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to 10x your X presence?</h3>
              <p className="mt-2 text-sm text-gray-400">Download the latest Windows release today and automate your growth.</p>
              <div className="mt-6">
                <a
                  href={DOWNLOAD_URL}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0072c2] to-[#0284c7] px-8 py-4 font-bold text-white shadow-lg hover:scale-105 transition-all text-sm"
                >
                  <Download className="h-5 w-5" /> Download Xbot for Windows ({VERSION})
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
