import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, MapPin, X } from "lucide-react";

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isMapOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMapOpen]);

  const handleConsultation = () => {
    // WhatsApp link with pre-filled message
    const phoneNumber = "6287882633686"; // Format: country code + number without + or spaces
    const message = encodeURIComponent(
      "Halo SF Interior, saya tertarik untuk konsultasi desain interior.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 mb-16 md:mb-[128px] overflow-hidden"
      id="kontak"
    >
      {/* Background - Matching website style */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

      {/* Decorative Elements - Simplified for performance */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-40" />

      <div className="relative container mx-auto px-6 md:px-20 lg:px-[80px] max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-montserrat text-3xl md:text-[48px] font-bold leading-[1.2] text-[#1a1c1c] mb-2">
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-[#0057ff] to-[#00d4ff] rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="mt-6 font-inter text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Siap mewujudkan ruang impian Anda? Mari diskusikan proyek Anda
            dengan tim desainer kami.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0057ff]/10 to-[#00d4ff]/10 -z-10 blur-xl"></div>

          <div className="text-center">
            <motion.h3
              className="font-montserrat text-2xl md:text-3xl font-bold text-[#1a1c1c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Konsultasi Gratis
            </motion.h3>

            <motion.p
              className="font-inter text-slate-600 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Dapatkan konsultasi gratis tanpa batasan waktu dengan desainer
              berpengalaman kami di Tangerang. Wujudkan ruang yang indah dan
              fungsional.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={handleConsultation}
              className="group relative hover:cursor-pointer hover:scale-103 inline-flex items-center gap-3 bg-gradient-to-r from-[#0057ff] to-[#00d4ff] text-white font-inter font-bold text-sm md:text-base px-8 md:px-10 py-4 rounded-full uppercase tracking-wider shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-4 my-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <span className="text-sm text-slate-400 font-inter">atau</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </motion.div>

            {/* Phone Contacts */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/6287882633686"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 hover:text-[#25D366] font-inter font-semibold transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-green-50 flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+62 788-2633-686</span>
              </motion.a>

              <motion.a
                href="https://wa.me/6287876840984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 hover:text-[#25D366] font-inter font-semibold transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-green-50 flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+62 787-6840-984</span>
              </motion.a>
            </div>

            {/* Info Text */}
            <motion.p
              className="mt-6 font-inter text-xs text-slate-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Tersedia Setiap Hari, 09:00 - 17:00 WIB
            </motion.p>

            {/* Location Button */}
            <motion.button
              onClick={() => setIsMapOpen(true)}
              className="mt-8 group relative inline-flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-[#0057ff] text-slate-700 hover:text-[#0057ff] font-inter font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-full uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Lihat Lokasi Kami</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Map Modal */}
        <AnimatePresence>
          {isMapOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Modal */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setIsMapOpen(false)}
              >
                <div
                  className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="relative bg-gradient-to-r from-[#0057ff] to-[#00d4ff] px-6 md:px-8 py-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-1">
                          Lokasi Kami
                        </h3>
                        <p className="font-inter text-sm md:text-base text-white/90">
                          SF Interior Tangerang
                        </p>
                      </div>
                      <button
                        onClick={() => setIsMapOpen(false)}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
                        aria-label="Close map"
                      >
                        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="relative bg-slate-100 p-4">
                    <div
                      className="relative rounded-2xl overflow-hidden shadow-lg"
                      style={{ height: "500px" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4725855749084!2d106.7064699!3d-6.2012157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9a57fb24847%3A0xb37818566b48fb56!2sSF%20INTERIOR!5e0!3m2!1sid!2sid!4v1777889477955!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="SF Interior Tangerang Location"
                      />
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="px-6 md:px-8 py-4 bg-slate-50 border-t border-slate-200">
                    <a
                      href="https://maps.google.com/?q=SF+INTERIOR+Tangerang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0057ff] hover:text-[#00d4ff] font-inter font-semibold text-sm transition-colors duration-300"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Buka di Google Maps</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
