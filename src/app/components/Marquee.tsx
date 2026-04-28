import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export function Marquee() {
  return (
    <div className="bg-[#EFFF3B] py-6 overflow-hidden flex relative z-20 border-y-4 border-stone-900 -rotate-2 transform scale-110 shadow-2xl">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex whitespace-nowrap items-center gap-12 text-stone-900 font-black text-5xl md:text-6xl uppercase tracking-tighter"
      >
        {[...Array(15)].map((_, i) => (
          <React.Fragment key={i}>
            <span>100% Raw</span>
            <Zap className="w-12 h-12 fill-current" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-emerald-800">Cold Pressed</span>
            <Zap className="w-12 h-12 fill-current" />
            <span>No Sugar</span>
            <Zap className="w-12 h-12 fill-current" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}