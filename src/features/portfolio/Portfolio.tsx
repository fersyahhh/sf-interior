import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../constants';

export const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(PORTFOLIO_PROJECTS.length / itemsPerPage);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = PORTFOLIO_PROJECTS.slice(startIndex, endIndex);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-[128px] mb-16 md:mb-[128px] overflow-hidden"
      id="portofolio"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6 md:px-20 lg:px-[80px] max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="font-montserrat text-3xl md:text-[48px] font-bold leading-[1.2] text-[#1a1c1c] mb-2">
              Portofolio <span className="gradient-text">Kami</span>
            </h2>
            <motion.div 
              className="w-20 h-1.5 bg-gradient-to-r from-[#0057ff] to-[#00d4ff] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
            <p className="mt-4 font-inter text-slate-600 max-w-2xl">
              Jelajahi koleksi proyek terbaik yang telah kami wujudkan
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            {/* Page Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'w-8 bg-gradient-to-r from-[#0057ff] to-[#00d4ff]' 
                      : 'w-2 bg-slate-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={handlePrevious}
                aria-label="Previous Projects"
                className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-[#0057ff] hover:bg-[#0057ff] hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                aria-label="Next Projects"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0057ff] to-[#00d4ff] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid with Animation */}
        <div className="relative min-h-[600px] md:min-h-[700px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 h-[280px] md:h-[340px]"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ y: -8 }}
                >
                  <motion.img
                    alt={project.alt}
                    className="w-full h-full object-cover"
                    src={project.image}
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-70'}`}></div>
                  
                  {/* Content */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.span 
                      className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-inter uppercase tracking-wider mb-3"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    >
                      {project.category}
                    </motion.span>
                    <h3 className="font-montserrat text-lg md:text-xl font-bold">
                      {project.title}
                    </h3>
                  </motion.div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page Counter */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="font-inter text-sm text-slate-500">
            Halaman <span className="font-bold text-[#0057ff]">{currentPage + 1}</span> dari <span className="font-bold">{totalPages}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
