import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import ctaImg from '../../assets/images/indian_kids_jumping_books_1782192777427.png';

const pillars = [
  'Think Deeply.',
  'Feel Fully.',
  'Move Freely.',
  'Pause With Purpose.',
  'Look Within.',
  'Look Around.',
  'Look Beyond.'
];

const Different = () => {
  return (
    <section className="py-12 md:py-16 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#f5f5f7] rounded-3xl md:rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-sm"
        >
          
          {/* Left Text Content */}
          <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-xs md:text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">
              Admissions
            </h3>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-4">
              If this feels different,<br />
              it's because it is.
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed tracking-tight mb-8">
              GenBright isn't preparing children only for exams.<br className="hidden xl:block"/>
              We're preparing them for life.
            </p>

            {/* The 7 Pillars as Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {pillars.map((text, i) => (
                <span 
                  key={i} 
                  className="text-xs md:text-sm font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-full shadow-xs border border-gray-100"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Tour
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center bg-transparent text-gray-900 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-200/50 transition-all duration-300 group">
                Speak to Admissions
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-0 order-1 md:order-2">
            <img 
              src={ctaImg} 
              alt="Indian school children" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default Different;
