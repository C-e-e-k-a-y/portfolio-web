import { motion, type PanInfo } from 'framer-motion';
import projects from '../projects';
import { useEffect, useState } from 'react';

export default function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Helper functions to navigate safely
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Handle Autoplay & Pause on Hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle Swipe/Drag gesture logic
  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50; // Minimum pixels needed to trigger a slide change
    if (info.offset.x < -swipeThreshold) {
      handleNext(); // Swiped left -> next slide
    } else if (info.offset.x > swipeThreshold) {
      handlePrev(); // Swiped right -> previous slide
    }
  };

  // Helper function to position items relative to activeIndex
  const getSlidePosition = (index: number) => {
    const total = projects.length;
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + total) % total) return 'left';
    if (index === (activeIndex + 1) % total) return 'right';
    return 'hidden';
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto h-100 flex items-center justify-center overflow-hidden py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {projects.map((project, index) => {
          const position = getSlidePosition(index);

          if (position === 'hidden') return null;

          // Compute horizontal position offsets
          let xOffset = '0%';
          if (position === 'left') xOffset = '-60%';
          if (position === 'right') xOffset = '60%';

          // const isCenter = position === 'center';

          return (
            <motion.div
              key={project.id}
              onClick={() => setActiveIndex(index)}
              // Enable drag only on the active center slide (or all visible slides)
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragSnapToOrigin={true}
              onDragStart={() => setIsHovered(true)}
              onDragEnd={handleDragEnd}
              initial={false}
              animate={{
                x: xOffset,
                scale: position === 'center' ? 1 : 0.8, // Center is full size, sides shrink
                opacity: position === 'center' ? 1 : 0.4, // Center is bright, sides dim
                zIndex: position === 'center' ? 20 : 10,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[80%] max-w-125 h-80 rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing touch-pan-y"
            >
              <img
                src={project.image}
                alt={project.title}
                draggable={false}
                className="w-full h-full object-cover"
              />
              
              {/* Card Overlay Details */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-left">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Indicators / Dots */}
      <div className="absolute bottom-2 flex space-x-2 z-30">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-500/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}