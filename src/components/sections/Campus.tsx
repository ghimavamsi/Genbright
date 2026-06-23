import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

import imgCampus1 from '../../assets/images/campus1.jpeg';
import imgCampus2 from '../../assets/images/campus2.jpeg';
import imgCampus3 from '../../assets/images/campus3.jpeg';
import imgCampus4 from '../../assets/images/campus4.jpeg';

const images = [imgCampus1, imgCampus2, imgCampus3, imgCampus4];

const Campus = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative z-10 py-12 md:py-20 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Text Content */}
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
              Campus
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter leading-[1.05] mb-6">
              A campus designed <br className="hidden md:block" /> for childhood.
            </h2>
            <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-tight">
              8 acres of exploration. Nature-rich learning spaces. Outdoor classrooms. Sports and movement. Creative studios. Farm experiences. Moments of wonder around every corner.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {images.map((imgSrc, i) => {
              const isLast = i === images.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  onClick={() => setActiveImage(imgSrc)}
                  className="relative rounded-2xl overflow-hidden shadow-sm cursor-pointer group aspect-4/3"
                >
                  <img 
                    src={imgSrc} 
                    alt="Campus" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Subtle dark overlay on hover, or default for the last image */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center ${isLast ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <Plus size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Apple-style Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-99999 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button - Moved down slightly to avoid any top system bars */}
            <button 
              className="absolute top-12 right-6 md:top-12 md:right-12 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-md z-50 cursor-pointer"
              onClick={() => setActiveImage(null)}
            >
              <X size={32} />
            </button>

            <motion.img 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={activeImage} 
              alt="Expanded campus view" 
              className="w-[95vw] md:w-[80vw] max-w-5xl aspect-video object-cover rounded-2xl md:rounded-4xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Campus;
