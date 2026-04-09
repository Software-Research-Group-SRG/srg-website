import { motion } from "framer-motion";
import { ChevronUp, Mail } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-20 mt-auto w-full flex flex-col items-center">

      {/* --- Scroll Up --- */}
      <button
        onClick={scrollToTop}
        className="flex flex-col items-center mb-8 group cursor-pointer transition-all hover:-translate-y-1"
      >
        <div className="flex flex-col items-center">
          <ChevronUp
            size={18}
            className="mb-[-4px] drop-shadow-accent transition-transform group-hover:scale-110"
            style={{ color: "var(--text-title)" }}
          />
          <div className="w-[1.5px] h-6 bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
          <div className="w-[1.5px] h-4 bg-blue-500/20 mt-1"></div>
        </div>
        <span
          className="mt-4 text-[10px] tracking-[0.3em] font-semibold transition-colors"
          style={{ fontFamily: "var(--font-family)" }}
        >
          SCROLL UP
        </span>
      </button>

      {/* --- Divider --- */}
      <div className="w-full h-[1px] bg-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]"></div>

      {/* --- Bottom Bar (FIXED ALIGNMENT) --- */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-12 bg-black/40 backdrop-blur-sm">

        <div className="hidden md:flex flex-1"></div>

        {/* Copyright */}
        <div className="flex-1 text-center order-2 md:order-1">
          <p
            className="text-[11px] tracking-[0.2em] font-medium"
            style={{ fontFamily: "var(--font-family)" }}
          >
            COPYRIGHT 2026, ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Get In Touch */}
        <div className="flex-1 flex justify-center md:justify-end items-center gap-4 order-1 md:order-2 mb-4 md:mb-0">
          <div
            className="flex items-center text-[12px] tracking-widest"
            style={{
              color: "var(--text-title)",
              fontFamily: "var(--font-family-title)",
            }}
          >
            <span className="opacity-90 select-none hidden lg:inline">
              ----------------- //
            </span>
            <span className="ml-2">004 - GET IN TOUCH</span>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=SRG_PUPQC@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 border-[1px] border-white/20 hover:border-blue-400 hover:bg-blue-400/10 transition-all rounded-[2px]"
          >
            <Mail size={14} className="text-white" />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;