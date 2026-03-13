'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fafafa]"
        >
          <div className="relative flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold tracking-tighter sm:text-8xl"
            >
              {Math.min(count, 100)}%
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              className="mt-4 h-[2px] w-48 bg-zinc-200"
            >
              <motion.div 
                style={{ width: `${count}%` }}
                className="h-full bg-zinc-900 transition-all duration-300"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400"
            >
              Carregando Experiência
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
