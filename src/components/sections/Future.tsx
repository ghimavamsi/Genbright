import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Future = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Elegant subtle parallax effect on the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-32">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] top-[-15%]">
        <img 
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2000&auto=format&fit=crop" 
          alt="Child looking at the horizon" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Soft vignette to ensure text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10 md:space-y-16">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-400 font-medium tracking-wide"
        >
          One day, your child will leave school.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight md:leading-[1.1]"
        >
          When they do, we hope they leave with more than knowledge.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="pt-6 md:pt-10 space-y-8 md:space-y-10"
        >
          <div className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-medium space-y-3">
            <p>We hope they leave with courage.</p>
            <p>Compassion.</p>
            <p>Confidence.</p>
          </div>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full opacity-60"></div>
          <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
            And a deep belief that they matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Future;
