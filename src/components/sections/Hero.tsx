
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import heroVideo from '../../assets/videos/school_hero_video.mp4';

const Hero = () => {
  return (
    <section className="relative h-dvh overflow-hidden flex flex-col justify-center bg-white">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-[-17.5%] left-0 w-full h-[135%] object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 w-full md:w-3/4 lg:w-2/3 bg-linear-to-r from-black/90 via-black/40 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mr-auto text-left flex flex-col items-start w-full"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Childhood<br />deserves better.
          </h1>
          
          <div className="flex flex-col space-y-2 mb-8 w-full">
            <p className="text-lg md:text-xl text-gray-200 font-medium">Not more pressure.</p>
            <p className="text-lg md:text-xl text-gray-200 font-medium">Not more worksheets.</p>
            <p className="text-lg md:text-xl text-gray-200 font-medium">Not more rushing.</p>
            <p className="text-lg md:text-xl text-blue-400 font-semibold">Just more wonder.</p>
          </div>

          <p className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-6">
            Look Within. Look Around. Look Beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
            <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
              Book a Campus Visit
            </button>
            <button className="flex items-center text-white font-bold hover:text-gray-200 transition-all duration-300 group transform hover:translate-x-1 cursor-pointer">
              Watch Our Story
              <PlayCircle className="ml-2 text-white/80 group-hover:text-white transition-colors" size={28} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 cursor-pointer group animate-bounce">
        <div className="w-7 h-11 rounded-full border-2 border-white/50 flex justify-center p-1 backdrop-blur-sm bg-white/10 transition-colors group-hover:bg-white/20 group-hover:border-white/80">
          <div className="w-1.5 h-3 bg-white rounded-full opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
