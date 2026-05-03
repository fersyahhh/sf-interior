import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 w-full py-12 px-6 md:px-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-0.5">
        <span className="font-montserrat text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0057FF] to-[#00d4ff] bg-clip-text text-transparent">
          SF
        </span>
        <span className="font-montserrat text-xl md:text-2xl font-light text-slate-900 dark:text-white">
          Interior
        </span>
      </div>
      <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 text-center">
        © {currentYear} SF INTERIOR TANGERANG. DESAIN INTERIOR PROFESIONAL.
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <a
          href="#"
          className="font-inter text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
        >
          KEBIJAKAN PRIVASI
        </a>
      </div>
    </footer>
  );
};
