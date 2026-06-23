
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Import generated images
import thinkImg from '../../assets/images/think_foundation_1782123932089.png';
import feelImg from '../../assets/images/feel_foundation_1782123943297.png';
import moveImg from '../../assets/images/move_foundation_1782123955605.png';
import pauseImg from '../../assets/images/pause_foundation_1782123970541.png';

const foundations = [
  {
    title: "THINK",
    quote: '"I wonder why..."',
    desc: "The beginning of every discovery. Before children can excel, they need to understand how to question the world around them.",
    bgColor: "bg-blue-50/50",
    titleColor: "text-blue-600",
    image: thinkImg
  },
  {
    title: "FEEL",
    quote: '"I understand how you feel."',
    desc: "The beginning of every meaningful relationship. Empathy is the cornerstone of leadership and human connection.",
    bgColor: "bg-orange-50/50",
    titleColor: "text-orange-600",
    image: feelImg
  },
  {
    title: "MOVE",
    quote: '"Let\'s try."',
    desc: "The beginning of confidence. Action, motion, and physical expression build resilience and strength of character.",
    bgColor: "bg-green-50/50",
    titleColor: "text-green-600",
    image: moveImg
  },
  {
    title: "PAUSE",
    quote: '"I noticed..."',
    desc: "The beginning of wisdom. Taking a breath to reflect, synthesize, and find calm in a fast-paced world.",
    bgColor: "bg-purple-50/50",
    titleColor: "text-purple-600",
    image: pauseImg
  }
];

interface CardProps {
  i: number;
  item: typeof foundations[0];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ i, item, progress, range, targetScale }: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const isEven = i % 2 === 0;

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4">
      <motion.div 
        style={{ scale, top: `calc(${i * 16}px)` }} 
        className="w-full max-w-[1050px] h-[82vh] md:h-[65vh] bg-white rounded-3xl md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col md:flex-row relative origin-top transform-gpu"
      >
        
        {isEven ? (
           <>
             <div className="w-full md:w-1/2 h-[45%] md:h-full relative overflow-hidden">
                <motion.img style={{ scale: imageScale }} src={item.image} className="w-full h-full object-cover transform-gpu" />
             </div>
             <div className="w-full md:w-1/2 h-[55%] md:h-full flex flex-col justify-center p-8 md:p-14 lg:p-16 bg-white">
                <h3 className={`text-3xl lg:text-4xl font-bold ${item.titleColor} mb-4 lg:mb-6 tracking-widest`}>{item.title}</h3>
                <p className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 lg:mb-5 leading-tight">{item.quote}</p>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-medium">{item.desc}</p>
             </div>
           </>
        ) : (
           <>
             <div className="w-full md:w-1/2 h-[55%] md:h-full flex flex-col justify-center p-8 md:p-14 lg:p-16 bg-white order-2 md:order-1">
                <h3 className={`text-3xl lg:text-4xl font-bold ${item.titleColor} mb-4 lg:mb-6 tracking-widest`}>{item.title}</h3>
                <p className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 lg:mb-5 leading-tight">{item.quote}</p>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-medium">{item.desc}</p>
             </div>
             <div className="w-full md:w-1/2 h-[45%] md:h-full relative overflow-hidden order-1 md:order-2">
                <motion.img style={{ scale: imageScale }} src={item.image} className="w-full h-full object-cover transform-gpu" />
             </div>
           </>
        )}
      </motion.div>
    </div>
  );
};

const Foundations = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section className="bg-[#f5f5f7] relative pt-12 md:pt-16 pb-0 md:pb-0">
      {/* Static heading so it perfectly scrolls away without overlapping the 3D cards */}
      <div className="text-center mb-0 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter drop-shadow-sm">
          Four foundations.<br className="md:hidden"/> A lifetime of impact.
        </h2>
      </div>

      <main ref={containerRef} className="relative">
        {foundations.map((item, i) => {
          // Increase scaling factor slightly for a deeper 3D feel
          const targetScale = 1 - ((foundations.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              item={item} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default Foundations;
