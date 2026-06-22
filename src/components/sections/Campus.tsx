import { motion } from 'framer-motion';

import imgFarm from '../../assets/images/centre_farm_1782128097827.png';
import imgFlow from '../../assets/images/centre_flow_1782128123907.png';
import imgForm from '../../assets/images/centre_form_1782128171550.png';
import imgFocus from '../../assets/images/centre_focus_1782128135660.png';

const Campus = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Text Content */}
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
              Campus
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-6">
              A campus designed <br className="hidden md:block" /> for childhood.
            </h2>
            <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-tight">
              8 acres of exploration. Nature-rich learning spaces. Outdoor classrooms. Sports and movement. Creative studios. Farm experiences. Moments of wonder around every corner.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={imgFarm} alt="Exploration and nature" className="w-full h-full object-cover aspect-4/3 hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={imgFlow} alt="Outdoor learning" className="w-full h-full object-cover aspect-4/3 hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={imgForm} alt="Creative studios" className="w-full h-full object-cover aspect-4/3 hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={imgFocus} alt="Moments of wonder" className="w-full h-full object-cover aspect-4/3 hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Campus;
