
import { Brain, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const Approach = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-start pt-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter leading-[1.05]">
              We don't start<br />with subjects.<br />
              We start with<br />
              <span className="text-blue-600">children.</span>
            </h2>
            <div className="w-10 h-[2px] bg-blue-600 mt-8 rounded-full"></div>
          </motion.div>

          {/* Right Column - 3 Pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0"
          >
            {/* Pillar 1 */}
            <motion.div variants={pillarVariants} className="flex flex-col sm:pr-8 group cursor-default">
              <div className="mb-6 text-blue-600 transform transition-transform duration-500 group-hover:-translate-y-2">
                <Brain size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">Self-awareness first.</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Before children can excel, they need to understand themselves.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={pillarVariants} className="flex flex-col sm:px-8 sm:border-l border-gray-100 group cursor-default">
              <div className="mb-6 text-amber-600 transform transition-transform duration-500 group-hover:-translate-y-2">
                <Users size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-amber-600">Empathy before leadership.</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Before they can lead others, they need empathy.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={pillarVariants} className="flex flex-col sm:pl-8 sm:border-l border-gray-100 group cursor-default">
              <div className="mb-6 text-lime-600 transform transition-transform duration-500 group-hover:-translate-y-2">
                <Lightbulb size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-lime-600">Curiosity before achievement.</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Before they can change the world, they need curiosity.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Approach;
