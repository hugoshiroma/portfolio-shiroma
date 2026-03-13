'use client';

import { motion } from 'framer-motion';

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Rose Blob - Optimized for GPU */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25, // Slowed down for better smoothness
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-[10%] -left-[5%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-rose-100/40 blur-[80px] md:blur-[120px]"
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // Hardware Acceleration
        }}
      />

      {/* Blue Blob - Optimized for GPU */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30, // Slowed down for better smoothness
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-[40%] -right-[10%] h-[500px] w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-blue-100/30 blur-[90px] md:blur-[130px]"
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // Hardware Acceleration
        }}
      />

      {/* Subtle Bottom Accent - Optimized for GPU */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, 10, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-[20%] left-[20%] h-[300px] w-[500px] md:h-[400px] md:w-[700px] rounded-full bg-slate-100/50 blur-[70px] md:blur-[100px]"
        style={{
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // Hardware Acceleration
        }}
      />
    </div>
  );
}
