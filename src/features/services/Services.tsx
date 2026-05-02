import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES } from '../../constants';

export const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section
      ref={ref}
      className="container mx-auto px-6 md:px-20 lg:px-[80px] mb-16 md:mb-[128px] max-w-7xl"
      id="layanan"
    >
      {/* Section Header */}
      <motion.div 
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-montserrat text-3xl md:text-[48px] font-bold leading-[1.2] text-[#1a1c1c] mb-2">
          Layanan <span className="gradient-text">Kami</span>
        </h2>
        <motion.div 
          className="w-20 h-1.5 bg-gradient-to-r from-[#0057ff] to-[#00d4ff] rounded-full"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />
        <p className="mt-4 font-inter text-slate-600 max-w-2xl">
          Solusi desain interior yang komprehensif untuk mewujudkan ruang impian Anda
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className={`group cursor-pointer ${index === 1 ? 'md:mt-12' : ''}`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image Container with Enhanced Effects */}
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
              <motion.img
                alt={service.alt}
                className="w-full h-full object-cover"
                src={service.image}
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover Content */}
              <motion.div
                className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-white">
                  <h3 className="font-montserrat text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-white/90">
                    Solusi profesional untuk kebutuhan Anda
                  </p>
                </div>
              </motion.div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Title with Icon */}
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0057ff] to-[#00d4ff] flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {index + 1}
              </motion.div>
              <h3 className="font-montserrat text-xl md:text-2xl font-semibold text-[#1a1c1c] group-hover:text-[#0057ff] transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
