import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const statements = [
  "Their child is known.",
  "Their child is heard.",
  "Their child is encouraged.",
  "Their child belongs."
];

const WhyChoose = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll over the 500vh container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#f8f9fa]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        
        {/* Subtle, permanently pinned intro text */}
        <div className="absolute top-24 md:top-32 w-full">
          <p className="text-lg md:text-2xl font-semibold text-gray-400 tracking-widest uppercase">
            Why families choose GenBright
          </p>
          <p className="text-xl md:text-3xl font-medium text-gray-600 mt-4">
            They choose us because...
          </p>
        </div>

        {/* The 4 Swapping Statements */}
        <div className="relative w-full max-w-6xl flex items-center justify-center">
          {statements.map((stmt, i) => {
            // Divide the first 64% of the scroll into 4 chunks (16% each)
            const start = i * 0.16;
            const end = start + 0.16;
            
            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.04, end - 0.04, end],
              [0, 1, 1, 0]
            );
            
            const y = useTransform(
              scrollYProgress,
              [start, start + 0.04, end - 0.04, end],
              [40, 0, 0, -40]
            );

            const filter = useTransform(
              scrollYProgress,
              [start, start + 0.04, end - 0.04, end],
              ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
            );

            return (
              <motion.div 
                key={i} 
                style={{ opacity, y, filter }} 
                className="absolute w-full"
              >
                <h3 className="text-5xl md:text-7xl lg:text-9xl font-bold text-gray-900 tracking-tighter leading-[1.1]">
                  {stmt}
                </h3>
              </motion.div>
            );
          })}

          {/* The Final Outro Statement */}
          <motion.div
            style={{
              // Fades in at 64%, fully visible by 70%, and STAYS pinned until 100%
              opacity: useTransform(scrollYProgress, [0.64, 0.70], [0, 1]),
              y: useTransform(scrollYProgress, [0.64, 0.70], [40, 0]),
              filter: useTransform(scrollYProgress, [0.64, 0.70], ["blur(8px)", "blur(0px)"])
            }}
            className="absolute w-full"
          >
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-green-600 tracking-tighter leading-[1.1] px-4">
              And because learning <br className="hidden md:block"/> feels joyful again.
            </h3>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
