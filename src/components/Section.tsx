import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={`snap-start ${["home", "contact"].includes(id) ? "h-dvh" : "min-h-dvh content-center pt-15 md:pt-0"} `}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Off-screen starting state
        whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up when it re-enters view
        viewport={{
          amount: 0.1, // Trigger when 10% of the section is visible
          once: false,
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`p-5 md:p-8 h-full ${className}`}
      >
        {children}
      </motion.div>
    </section>

  );
}