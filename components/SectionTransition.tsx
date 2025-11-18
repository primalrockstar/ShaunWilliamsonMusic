'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionTransition({ children, id, className = '' }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
