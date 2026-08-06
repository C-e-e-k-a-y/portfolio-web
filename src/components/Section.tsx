import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0}} // Off-screen starting state
      whileInView={{ opacity: 1}} // Fades in when scrolling down
      viewport={{ 
        amount: 0.1, // Triggers when 10% of the element enters/leaves the viewport
        once: false  // Allows the animation to reverse and fade out when leaving
      }}
      transition={{duration: 1.5, ease: 'easeOut' }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}