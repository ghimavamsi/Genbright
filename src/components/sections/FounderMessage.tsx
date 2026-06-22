import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import founderImg from '../../assets/images/founder_thumbnail.png';

const FounderMessage = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-tighter leading-[1.05]">
              A Message <br className="hidden md:block"/> from Our <br className="hidden md:block"/> Founder
            </h2>
          </div>

          {/* Right Video Block */}
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <img 
                src={founderImg} 
                alt="Founder message video thumbnail" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
              
              {/* Bottom Gradient for Subtitles */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" strokeWidth={0} />
                </div>
              </div>

              {/* Cinematic Captions */}
              <div className="absolute bottom-6 md:bottom-10 left-0 right-0 px-6 md:px-12 text-center">
                <p className="text-white/95 text-base md:text-lg lg:text-xl font-medium leading-snug drop-shadow-md">
                  "I built GenBright because I wanted children to experience the kind of childhood that inspires a lifetime of learning."
                </p>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
