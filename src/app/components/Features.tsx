import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Truck, HeartPulse, Zap, Heart } from 'lucide-react';

export function Features() {
  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden relative border-t-8 border-emerald-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-emerald-500/20 blur-[120px] rounded-full z-0"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-black mb-6 uppercase tracking-tighter leading-none relative z-10 drop-shadow-2xl"
          >
            Zero BS.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EFFF3B] to-emerald-400">Pure Juice.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {/* Feature 1 - Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-emerald-500 to-green-700 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl"
          >
            <Leaf className="absolute -bottom-16 -right-16 w-96 h-96 text-emerald-900/40 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-white/20 w-24 h-24 flex items-center justify-center rounded-3xl mb-6 backdrop-blur-md shadow-inner border border-white/30">
                <Leaf className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-5xl font-black mb-4 uppercase tracking-tight">Pure & Fresh</h3>
                <p className="text-2xl text-emerald-50 max-w-xl leading-relaxed font-medium">Local. Ripe. Pressed. Alive.</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="bg-stone-800 rounded-[3rem] p-12 relative overflow-hidden border-4 border-stone-700 hover:border-[#EFFF3B] transition-colors duration-500 group shadow-2xl"
          >
            <div className="bg-stone-700 w-20 h-20 flex items-center justify-center rounded-3xl mb-8 group-hover:bg-[#EFFF3B] transition-colors duration-500">
              <Zap className="w-10 h-10 text-white group-hover:text-stone-900 transition-colors" />
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase tracking-tight group-hover:text-[#EFFF3B] transition-colors">Cold-Pressed</h3>
            <p className="text-stone-300 text-xl font-medium leading-relaxed">Never heated. Every drop retains maximum vitamins and living enzymes.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="bg-stone-800 rounded-[3rem] p-12 relative overflow-hidden border-4 border-stone-700 hover:border-amber-400 transition-colors duration-500 group shadow-2xl"
          >
            <div className="bg-stone-700 w-20 h-20 flex items-center justify-center rounded-3xl mb-8 group-hover:bg-amber-400 transition-colors duration-500">
              <Heart className="w-10 h-10 text-white group-hover:text-stone-900 transition-colors" />
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase tracking-tight group-hover:text-amber-400 transition-colors">Family Roots</h3>
            <p className="text-stone-300 text-xl font-medium leading-relaxed">Born in a grandmother’s kitchen. Nourishing bodies, healing minds, and returning to a simple truth.</p>
          </motion.div>

          {/* Feature 4 - Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl"
          >
             <HeartPulse className="absolute -top-16 -left-16 w-96 h-96 text-orange-900/30 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col items-end text-right h-full justify-between w-full">
              <div className="bg-white/20 w-24 h-24 flex items-center justify-center rounded-3xl mb-6 backdrop-blur-md shadow-inner border border-white/30 self-end">
                <HeartPulse className="w-12 h-12 text-white" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-5xl font-black mb-4 uppercase tracking-tight">Immunity Boost</h3>
                <p className="text-2xl text-orange-50 leading-relaxed font-medium">Packed with antioxidants, ginger, and turmeric to keep your immune system firing on all cylinders.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}