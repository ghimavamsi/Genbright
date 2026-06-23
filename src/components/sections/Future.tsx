import { motion } from 'framer-motion';
import boyImage from '../../assets/images/indian_boy_horizon.png';

const Future = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-screen flex items-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={boyImage} 
          alt="Child looking at the horizon" 
          className="w-full h-full object-cover object-[70%_center] md:object-center"
        />
        {/* Subtle dark gradient on the right to ensure white text readability */}
        <div className="absolute inset-y-0 right-0 bg-linear-to-l from-black/80 via-black/40 to-transparent w-full md:w-2/3 pointer-events-none"></div>
      </div>

      {/* Content Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="max-w-[18rem] sm:max-w-md md:max-w-xl lg:max-w-[650px] space-y-6 md:space-y-8"
        >
          <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-[1.05]">
            One day, your<br />child will leave<br />school.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed tracking-tight">
            When they do, we hope they leave with more than knowledge. We hope they leave with courage. Compassion. Confidence. And a deep belief that they matter.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Future;
