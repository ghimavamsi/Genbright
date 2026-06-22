import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import imgSeed from '../../assets/images/banyan_seed_1782125698531.png';
import imgRoots from '../../assets/images/banyan_roots_1782125714416.png';
import imgSapling from '../../assets/images/banyan_sapling_1782125728990.png';
import imgBranches from '../../assets/images/banyan_branches_1782125744030.png';
import imgFull from '../../assets/images/banyan_full_1782125764248.png';
import imgSunlit from '../../assets/images/banyan_sunlit_1782125779301.png';

const stages = [
  {
    image: imgSeed,
    heading: "Every Great Journey Begins Small",
    text: "A tiny seed holds endless possibilities. Every GenBright child begins with curiosity, imagination, and the courage to explore."
  },
  {
    image: imgRoots,
    heading: "First Come The Roots",
    text: "Growth starts beneath the surface. Values, confidence, kindness, and resilience create the foundation for everything that follows."
  },
  {
    image: imgSapling,
    heading: "Then Comes Strength",
    text: "Every question asked. Every challenge faced. Every lesson learned. Together they build confidence that stands tall through every stage of life."
  },
  {
    image: imgBranches,
    heading: "Curiosity Creates New Paths",
    text: "No two children grow the same way. Some discover creativity. Some uncover leadership. Some find a passion for science, technology, or the arts. Every branch tells a different story."
  },
  {
    image: imgFull,
    heading: "Possibilities Begin To Flourish",
    text: "Like a banyan tree spreading in every direction, growth has no single destination. Each experience adds new leaves, new ideas, and new opportunities."
  },
  {
    image: imgSunlit,
    heading: "Stay Grounded. Stay Curious. Keep Growing.",
    text: "Banyara journeys alongside every GenBright child, helping them build strong roots, explore boldly, and grow into their fullest potential."
  }
];

const FlippingImageLayer = ({ index, total, image, progress }: { index: number, total: number, image: string, progress: MotionValue<number> }) => {
  // Calculate the scroll progress thresholds for when this image should be visible.
  // The card rotates 180 degrees per stage. Max rotation is (total - 1) * 180 = 900 degrees.
  const maxAngle = (total - 1) * 180;
  
  // This image is "front-facing" at angle (index * 180).
  // It should be visible when the angle is between (index * 180 - 90) and (index * 180 + 90).
  const startAngle = index * 180 - 90;
  const endAngle = index * 180 + 90;

  const startProgress = startAngle / maxAngle;
  const endProgress = endAngle / maxAngle;

  // It instantly toggles opacity to 1 when the card is perfectly edge-on (90deg from camera)
  const opacity = useTransform(progress, (latest) => {
    return latest >= startProgress && latest <= endProgress ? 1 : 0;
  });

  // If index is odd, it's on the "back" of the card, so we must pre-rotate it 180deg
  const isBack = index % 2 === 1;

  return (
    <motion.div 
      style={{ 
        opacity, 
        rotateY: isBack ? 180 : 0
      }} 
      className="absolute inset-0 w-full h-full transform-gpu rounded-[calc(2rem-4px)] md:rounded-[calc(3rem-4px)] overflow-hidden bg-white"
    >
      <img 
        src={image} 
        alt="Banyara Tree Growth"
        className="w-full h-full object-cover" 
      />
    </motion.div>
  );
};

const Banyara = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // The card rotates 180 degrees for each of the 6 stages (5 transitions = 900 degrees total)
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180 * (stages.length - 1)]);

  // Subtle 3D tilt based on scroll to make it feel more dynamic
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section ref={containerRef} className="relative bg-[#fafafa] border-t border-gray-100">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Left Side: Sticky 3D Flipping Visuals */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[calc(100vh-5rem)] sticky top-0 md:top-20 flex items-center justify-center p-6 md:p-12 lg:p-20 z-10" style={{ perspective: 2000 }}>
          <motion.div 
            style={{ 
              rotateY, 
              rotateX,
              transformStyle: "preserve-3d" 
            }}
            className="w-[280px] h-[360px] md:w-[340px] md:h-[480px] lg:w-[380px] lg:h-[540px] relative rounded-4xl md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-4 border-white/80"
          >
            {/* Render all 6 faces; they will toggle opacity automatically when edge-on */}
            {stages.map((stage, i) => (
              <FlippingImageLayer 
                key={i} 
                index={i} 
                total={stages.length} 
                image={stage.image} 
                progress={scrollYProgress} 
              />
            ))}
          </motion.div>
        </div>

        {/* Right Side: Scrolling Narrative */}
        <div className="w-full md:w-1/2 relative z-0">
          {stages.map((stage, i) => (
            <div key={i} className="min-h-[50vh] md:min-h-screen flex items-center justify-center p-8 md:p-16 lg:p-24 border-b border-gray-100 last:border-none">
              <div className="max-w-xl">
                {i === 0 && (
                  <div className="inline-block px-5 py-2 bg-green-100/80 text-green-700 font-bold tracking-wide rounded-full text-sm mb-6 border border-green-200 shadow-sm">
                    ✨ Meet Banyara
                  </div>
                )}
                <h2 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight leading-[1.1]">
                  {stage.heading}
                </h2>
                <div className="w-12 h-1 bg-green-500 mb-6 md:mb-8 rounded-full shadow-sm"></div>
                <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                  {stage.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banyara;
