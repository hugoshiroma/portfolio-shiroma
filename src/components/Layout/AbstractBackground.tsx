'use client';

import { motion } from 'framer-motion';

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Rose Blob */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-[10%] -left-[5%] h-[500px] w-[500px] rounded-full bg-rose-100/40 blur-[120px]"
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-[40%] -right-[10%] h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-[130px]"
      />

      {/* Subtle Bottom Accent */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, 10, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-[20%] left-[20%] h-[400px] w-[700px] rounded-full bg-slate-100/50 blur-[100px]"
      />
    </div>
  );
}
