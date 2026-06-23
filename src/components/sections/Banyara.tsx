import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Sparkles, Anchor, Leaf, Share2, TreeDeciduous, Sun } from 'lucide-react';

import imgSeed from '../../assets/images/banyan_seed_1782125698531.png';
import imgRoots from '../../assets/images/banyan_roots_1782125714416.png';
import imgSapling from '../../assets/images/banyan_sapling_1782125728990.png';
import imgBranches from '../../assets/images/banyan_branches_1782125744030.png';
import imgFull from '../../assets/images/banyan_full_1782125764248.png';
import imgFinal from '../../assets/images/banyana_tree_final.png';

const stages = [
  {
    image: imgSeed,
    icon: Sparkles,
    heading: "Every Great Journey Begins Small",
    text: "A tiny seed holds endless possibilities. Every GenBright child begins with curiosity, imagination, and the courage to explore."
  },
  {
    image: imgRoots,
    icon: Anchor,
    heading: "First Come The Roots",
    text: "Growth starts beneath the surface. Values, confidence, kindness, and resilience create the foundation for everything that follows."
  },
  {
    image: imgSapling,
    icon: Leaf,
    heading: "Then Comes Strength",
    text: "Every question asked. Every challenge faced. Every lesson learned. Together they build confidence that stands tall through every stage of life."
  },
  {
    image: imgBranches,
    icon: Share2,
    heading: "Curiosity Creates New Paths",
    text: "No two children grow the same way. Some discover creativity. Some uncover leadership. Some find a passion for science, technology, or the arts. Every branch tells a different story."
  },
  {
    image: imgFull,
    icon: TreeDeciduous,
    heading: "Possibilities Begin To Flourish",
    text: "Like a banyan tree spreading in every direction, growth has no single destination. Each experience adds new leaves, new ideas, and new opportunities."
  },
  {
    image: imgFinal,
    icon: Sun,
    heading: "Stay Grounded. Stay Curious. Keep Growing.",
    text: "Banyara journeys alongside every GenBright child, helping them build strong roots, explore boldly, and grow into their fullest potential."
  }
];

const FlippingImageLayer = ({ index, total, image, progress }: { index: number, total: number, image: string, progress: MotionValue<number> }) => {
  const maxAngle = (total - 1) * 180;
  const startAngle = index * 180 - 90;
  const endAngle = index * 180 + 90;
  const startProgress = startAngle / maxAngle;
  const endProgress = endAngle / maxAngle;

  const opacity = useTransform(progress, (latest) => {
    return latest >= startProgress && latest <= endProgress ? 1 : 0;
  });

  const isBack = index % 2 === 1;

  return (
    <motion.div 
      style={{ opacity, rotateY: isBack ? 180 : 0 }} 
      className="absolute inset-0 w-full h-full transform-gpu rounded-[calc(2rem-4px)] md:rounded-[calc(3rem-4px)] overflow-hidden bg-white shadow-inner"
    >
      <img src={image} alt="Banyara Tree Growth" className="w-full h-full object-cover" />
    </motion.div>
  );
};

const Banyara = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180 * (stages.length - 1)]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section ref={containerRef} className="relative bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        
        {/* Left Side: Sticky 3D Flipping Visuals */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex items-center justify-center p-6 md:p-12 z-10" style={{ perspective: 2000 }}>
          
          <motion.div 
            style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
            className="w-[280px] h-[360px] md:w-[340px] md:h-[480px] lg:w-[380px] lg:h-[540px] relative rounded-4xl md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-4 border-white/80"
          >
            {stages.map((stage, i) => (
              <FlippingImageLayer key={i} index={i} total={stages.length} image={stage.image} progress={scrollYProgress} />
            ))}
          </motion.div>

          {/* Central Glowing Workflow Timeline */}
          <div className="hidden md:flex absolute right-0 top-1/4 bottom-1/4 w-[3px] bg-gray-200 flex-col justify-between items-center z-20 rounded-full translate-x-1/2">
             
             {/* Flowing Glowing Light Bar */}
             <motion.div 
               className="absolute top-0 left-0 right-0 bg-gray-900 rounded-full origin-top"
               style={{ scaleY: scrollYProgress }}
             />

             {/* The 6 Node Icons */}
             {stages.map((stage, i) => {
                const Icon = stage.icon;
                const fillProgress = i / (stages.length - 1);
                
                // Prevent negative offsets which crash the Web Animations API
                const startOffset = Math.max(0, fillProgress - 0.05);
                const endOffset = Math.max(startOffset + 0.01, fillProgress);

                return (
                  <div key={i} className="relative w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center z-10 shadow-sm bg-clip-padding">
                    <Icon size={18} className="text-gray-400" />
                    
                    {/* Activated State */}
                    <motion.div
                      style={{ 
                        opacity: useTransform(scrollYProgress, [startOffset, endOffset], [0, 1]) 
                      }}
                      className="absolute inset-[-2px] rounded-full bg-gray-900 flex items-center justify-center border-2 border-white shadow-sm"
                    >
                      <Icon size={18} className="text-white" />
                    </motion.div>
                  </div>
                );
             })}
          </div>
        </div>

        {/* Right Side: Scrolling Narrative */}
        <div className="w-full md:w-1/2 relative z-0 md:pl-16 lg:pl-24">
          {stages.map((stage, i) => (
            <div key={i} className="min-h-[50vh] md:min-h-screen flex items-center justify-start p-8 md:p-0 md:pr-12 lg:pr-16 border-b border-gray-100 md:border-none last:border-none">
              <div className="max-w-xl">
                {i === 0 && (
                  <div className="inline-block px-5 py-2 bg-gray-100 text-gray-900 font-bold tracking-wide rounded-full text-sm mb-6 border border-gray-200 shadow-sm">
                    ✨ Meet Banyara
                  </div>
                )}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tighter leading-[1.05]">
                  {stage.heading}
                </h2>
                <div className="w-12 h-1.5 bg-gray-900 mb-6 md:mb-8 rounded-full"></div>
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
