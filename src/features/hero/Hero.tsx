import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImg from "../../assets/hero-img.webp";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[500px] md:h-[921px] flex items-center justify-center overflow-hidden mb-16 md:mb-[128px]"
      id="beranda"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          alt="Modern Minimalist Interior"
          className="w-full h-full object-cover object-center"
          src={heroImg}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-20 lg:px-[80px] text-white max-w-7xl">
        <div className="max-w-4xl">
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 md:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-inter font-medium tracking-wider uppercase text-white/90">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Premium Interior Design</span>
              <span className="sm:hidden">Premium Design</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-montserrat text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.15] tracking-tight text-white mb-4 md:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Meningkatkan Ruang,
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Menentukan Gaya Hidup
              </span>
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 md:mb-10"
          >
            <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 font-light max-w-2xl">
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-white block mb-1 md:mb-2">
                SF Interior
              </span>
              <span className="hidden sm:inline">
                Presisi arsitektural bertemu estetika abadi. Kami menciptakan
                ruang yang tidak hanya indah, tetapi juga mencerminkan
                kepribadian dan gaya hidup Anda.
              </span>
              <span className="sm:hidden">
                Presisi arsitektural bertemu estetika abadi. Menciptakan ruang
                yang indah dan fungsional.
              </span>
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.4, duration: 0.6 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="flex flex-col items-center gap-2 text-white/80">
              <span className="text-xs uppercase tracking-widest font-inter">
                Scroll
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
