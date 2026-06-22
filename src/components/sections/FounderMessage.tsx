import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const FounderMessage = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-tight">
            A Message <br className="hidden md:block"/> from Our Founder.
          </h2>
        </motion.div>

        {/* Cinematic Ultra-Wide Video Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-6xl relative aspect-16/10 md:aspect-21/9 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2069&auto=format&fit=crop" 
            alt="Founder message video thumbnail" 
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Hover Dark Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
          
          {/* Glassmorphism Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30 border border-white/20 shadow-2xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2 drop-shadow-md" fill="currentColor" strokeWidth={0} />
            </div>
          </div>
        </motion.div>

        {/* Profound Pull Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 md:mt-16 text-center max-w-4xl px-4"
        >
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-900 font-semibold leading-snug md:leading-normal tracking-tight">
            "I built GenBright because I wanted children to experience the kind of childhood that inspires a lifetime of learning."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderMessage;
