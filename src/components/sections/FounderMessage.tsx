import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import founderImg from '../../assets/images/indian_founder_ceo_1782192317795.png';

const FounderMessage = () => {
  return (
    <section className="py-12 md:py-20 bg-[#f5f5f7] flex justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 xl:w-2/5 flex flex-col justify-center"
          >
            <h2 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] font-bold text-gray-900 tracking-tighter leading-[1.05]">
              A Message<br/>from Our<br/>Founder
            </h2>
          </motion.div>

          {/* Right Video Thumbnail */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="w-full md:w-2/3 xl:w-3/5 relative aspect-4/3 md:aspect-video rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-lg group cursor-pointer"
          >
            <img 
              src={founderImg} 
              alt="Founder message video" 
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Bottom Gradient for Captions */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Play Button & Captions Container */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 md:right-8 flex flex-col md:flex-row md:items-end gap-4 md:gap-6 z-10">
              
              {/* Play Button */}
              <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl">
                <Play className="w-6 h-6 md:w-7 md:h-7 text-gray-900 ml-1" fill="currentColor" strokeWidth={0} />
              </div>

              {/* Captions */}
              <div className="flex-1 pb-1 md:pb-2">
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium leading-snug tracking-wide md:text-left drop-shadow-md">
                  GenBright isn't just preparing children for today;<br className="hidden lg:block"/>
                  we're preparing them for a dynamic future.
                </p>
              </div>

            </div>
            
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FounderMessage;
