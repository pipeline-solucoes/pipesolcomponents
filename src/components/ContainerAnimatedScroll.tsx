'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type ContainerAnimatedScrollProps = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  offsetY?: number;
};

export default function ContainerAnimatedScroll({
  children,
  duration = 0.8,
  delay = 0,
  offsetY = 50,
}: ContainerAnimatedScrollProps) {
  
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsetY }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
