import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import grannysCounter from '../../imports/Granny\'s_Counter.png';

export function Story() {
  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-[3rem] transform -rotate-3 scale-105 opacity-50 blur-xl"></div>
            <ImageWithFallback 
              src={grannysCounter} 
              alt="Granny's kitchen counter" 
              className="relative w-full h-[500px] object-cover rounded-[3rem] border-8 border-stone-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl font-black text-amber-500 tracking-widest uppercase mb-4">Georgia Roots</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none text-white">
              Born from a grandmother’s kitchen.
            </h3>
            <p className="text-xl text-stone-300 leading-relaxed font-medium mb-8">
              It started simply. Not in a boardroom, but in a small kitchen. A grandmother's passion for nourishing bodies and healing minds through raw, pure ingredients birthed what we are today. 
            </p>
            <p className="text-xl text-stone-300 leading-relaxed font-medium mb-12">
              We return to a simple truth: nature provides everything we need to thrive. No shortcuts, no compromises. Just honest, heavy-extracted juice that makes you feel alive.
            </p>
            
            <a href="/our-story" className="inline-block px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 font-bold text-lg rounded-full hover:bg-amber-500 hover:text-stone-900 transition-all uppercase tracking-wider">
              Read Full Story
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
