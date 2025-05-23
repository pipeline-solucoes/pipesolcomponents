'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContainerAnimatedIndexProps {
  children: React.ReactNode;
  index?: number;
}

const ContainerAnimatedIndex: React.FC<ContainerAnimatedIndexProps> = ({
  children, index = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default ContainerAnimatedIndex;