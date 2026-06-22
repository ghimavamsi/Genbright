import React, { useRef, useEffect } from 'react';


import imgFarm from '../../assets/images/centre_farm_1782128097827.png';
import imgForge from '../../assets/images/centre_forge_1782128110324.png';
import imgFlow from '../../assets/images/centre_flow_1782128123907.png';
import imgFocus from '../../assets/images/centre_focus_1782128135660.png';
import imgFellow from '../../assets/images/centre_fellow_1782128157276.png';
import imgForm from '../../assets/images/centre_form_1782128171550.png';
import imgFly from '../../assets/images/centre_fly_1782128184698.png';

const panels = [
  { text: "One day a child is planting vegetables at", title: "FARM", img: imgFarm },
  { text: "The next day they are designing solutions at", title: "FORGE", img: imgForge },
  { text: "The next they are performing at", title: "FLOW", img: imgFlow },
  { text: "Reflecting quietly at", title: "FOCUS", img: imgFocus },
  { text: "Collaborating with peers at", title: "FELLOW", img: imgFellow },
  { text: "Creating and designing at", title: "FORM", img: imgForm },
  { text: "Exploring limitless possibilities at", title: "FLY", img: imgFly },
];

const LearningCentres = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  // Seamless Infinite Auto-Scroll Logic
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const speed = 0.06; // pixels per millisecond (smooth, elegant speed)

    const scroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (carouselRef.current && setRef.current && !isHovered.current) {
        const oneSetWidth = setRef.current.offsetWidth;
        
        // Move native scroll position continuously
        carouselRef.current.scrollLeft += speed * deltaTime;

        // Seamless wrapping logic
        // We have 3 identical sets. Start in the middle.
        // If we scroll past the middle set, jump back exactly one set width.
        if (carouselRef.current.scrollLeft >= oneSetWidth * 2) {
          carouselRef.current.scrollLeft -= oneSetWidth;
        } else if (carouselRef.current.scrollLeft <= 0) {
          // If they manually scrolled backwards past zero
          carouselRef.current.scrollLeft += oneSetWidth;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start instantly in the middle set so users can immediately scroll left if they want
    setTimeout(() => {
      if (carouselRef.current && setRef.current) {
        carouselRef.current.scrollLeft = setRef.current.offsetWidth;
      }
    }, 100);

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);



  const CardSet = ({ innerRef }: { innerRef?: React.RefObject<HTMLDivElement | null> }) => (
    <div ref={innerRef} className="flex gap-4 md:gap-5 shrink-0 pr-4 md:pr-5">
      {panels.map((panel, idx) => (
        <div 
          key={idx} 
          className="shrink-0 w-[200px] md:w-[240px] lg:w-[280px] h-[280px] md:h-[360px] relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu"
        >
          <img 
            src={panel.img} 
            alt={panel.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Elegant dark gradient overlay at bottom for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col justify-end h-full">
            <p className="text-white/90 text-xs md:text-sm font-medium leading-tight mb-1.5 drop-shadow-md">
              {panel.text}
            </p>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-md">
              {panel.title}.
            </h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center py-20 md:py-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 md:mb-12 w-full flex flex-col md:items-center justify-center text-center gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            What if learning had no walls?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Because children aren't one-dimensional. <br className="hidden md:block"/> Their learning shouldn't be either.
          </p>
        </div>
      </div>

      {/* The Continuous Infinite Carousel Wrapper */}
      <div className="relative w-full">
        <div 
          ref={carouselRef}
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
          onTouchStart={() => isHovered.current = true}
          onTouchEnd={() => isHovered.current = false}
          className="flex overflow-x-auto hide-scrollbar w-full"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          {/* We render 3 identical sets to allow seamless infinite wrapping in both directions */}
          <CardSet innerRef={setRef} />
          <CardSet />
          <CardSet />
        </div>
      </div>
    </section>
  );
};

export default LearningCentres;
