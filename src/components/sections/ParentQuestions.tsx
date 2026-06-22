
import { Smile, Star, Heart, BookOpen, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const questions = [
  { 
    icon: <Smile className="w-7 h-7 text-yellow-500" strokeWidth={1.5} />, 
    bg: "bg-yellow-50", 
    borderColors: "from-yellow-400 via-yellow-100 to-transparent",
    text: "Will my child be happy?" 
  },
  { 
    icon: <Star className="w-7 h-7 text-blue-500" strokeWidth={1.5} />, 
    bg: "bg-blue-50", 
    borderColors: "from-blue-400 via-blue-100 to-transparent",
    text: "Will they be confident?" 
  },
  { 
    icon: <Heart className="w-7 h-7 text-emerald-500" strokeWidth={1.5} />, 
    bg: "bg-emerald-50", 
    borderColors: "from-emerald-400 via-emerald-100 to-transparent",
    text: "Will they be kind?" 
  },
  { 
    icon: <BookOpen className="w-7 h-7 text-purple-500" strokeWidth={1.5} />, 
    bg: "bg-purple-50", 
    borderColors: "from-purple-400 via-purple-100 to-transparent",
    text: "Will they love learning?" 
  },
  { 
    icon: <Globe2 className="w-7 h-7 text-rose-500" strokeWidth={1.5} />, 
    bg: "bg-rose-50", 
    borderColors: "from-rose-400 via-rose-100 to-transparent",
    text: "Will they be ready for a world we cannot predict?" 
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ParentQuestions = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center px-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl bg-[#fafafa] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.03)]"
      >
        <h2 className="text-3xl md:text-[40px] font-semibold text-gray-900 mb-16 tracking-tight text-center">
          Every parent asks...
        </h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 w-full mb-16"
        >
          {questions.map((q, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group rounded-4xl overflow-hidden p-[2px]">
              {/* Animated Rotating Border Background */}
              <div className={`absolute -inset-full bg-[conic-gradient(from_0deg,var(--tw-gradient-stops))] ${q.borderColors} opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-500`}></div>
              
              {/* Inner Card Content */}
              <div className="relative z-10 bg-white rounded-[calc(2rem-2px)] h-full p-6 md:p-8 flex flex-col items-center text-center shadow-sm">
                <div className={`mb-6 flex items-center justify-center h-16 w-16 rounded-full transition-transform duration-300 group-hover:scale-110 ${q.bg}`}>
                  {q.icon}
                </div>
                <p className="text-[14px] md:text-[15px] font-medium text-gray-800 leading-snug">
                  {q.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-[17px] md:text-[19px] font-medium text-gray-600 text-center tracking-tight">
            At GenBright, these questions shape everything we do.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ParentQuestions;
