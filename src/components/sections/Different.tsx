import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const Different = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Block */}
          <div className="md:col-span-5 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop" 
                alt="Joyful child" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>

          {/* Right Text Content */}
          <div className="md:col-span-7 order-1 md:order-2 md:pl-8 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-4">
                Admissions
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter leading-[1.05] mb-8">
                If this feels different, <br className="hidden md:block"/>
                it's because it is.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed tracking-tight mb-10 max-w-lg">
                GenBright isn't preparing children only for exams.<br className="hidden md:block"/>
                We're preparing them for life.
              </p>

              {/* The 7 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                  'Think Deeply.', 
                  'Feel Fully.', 
                  'Move Freely.', 
                  'Pause With Purpose.', 
                  'Look Within.', 
                  'Look Around.', 
                  'Look Beyond.'
                ].map((phrase, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.05) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                    <span className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">{phrase}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg group">
                  <Calendar className="w-5 h-5 mr-2 opacity-80" />
                  Book a Campus Tour
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 group">
                  Speak to Admissions
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Different;
