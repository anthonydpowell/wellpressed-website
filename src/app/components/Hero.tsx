import React from 'react';
import { motion } from 'motion/react';
import { Star, Leaf, Droplets, Sun, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from '../../imports/Well_Pressed_Juice_Bottle.png';
import logoImg from '../../imports/Well_Pressed_Juice_Bottle-1-1.png';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#F9F6F0] overflow-hidden pt-20 pb-32">
      {/* MASSIVE ANIMATED BLOBS */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-60" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#EFFF3B] rounded-full mix-blend-multiply filter blur-[100px] opacity-60" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 left-1/3 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-rose-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-50" 
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full mt-12 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          <div className="flex-1 w-full pt-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative z-20"
            >
              <h1 className="text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] font-black text-stone-900 leading-[0.85] tracking-tighter uppercase drop-shadow-xl">
                <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.1, duration: 0.8, type: "spring", bounce: 0.2 }} className="block">Taste</motion.span></span>
                <span className="block overflow-hidden pb-4"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.2 }} className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-[#EFFF3B] drop-shadow-none">The Raw</motion.span></span>
                <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.2 }} className="block">Energy.</motion.span></span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="text-xl md:text-3xl text-stone-800 font-medium mt-10 max-w-2xl border-l-8 border-emerald-500 pl-6 leading-tight"
              >
                Pure, heavily extracted cold-pressed juices that hit completely different. 
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                className="flex items-center gap-8 mt-14 pt-6 border-t-2 border-stone-200"
              >
                {/* Floating Graphics Replacement */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center shadow-lg border border-emerald-200"
                >
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  className="w-16 h-16 rounded-full bg-[#EFFF3B]/40 flex items-center justify-center shadow-lg border border-[#EFFF3B]/80"
                >
                  <Sun className="w-8 h-8 text-stone-800" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }} 
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                  className="w-16 h-16 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-teal-100 flex items-center justify-center shadow-lg border border-teal-200"
                >
                  <Droplets className="w-8 h-8 text-teal-600" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 12, 0], rotate: [0, 15, -15, 0] }} 
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center shadow-lg border border-rose-200"
                >
                  <Sparkles className="w-8 h-8 text-rose-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
              className="relative w-full max-w-[450px] z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-[#EFFF3B] rounded-[4rem] transform rotate-6 scale-105 z-0 blur-2xl opacity-70 animate-pulse"></div>
              
              <ImageWithFallback 
                src={heroImg} 
                alt="WellPressed Hero" 
                className="relative w-full h-auto object-cover rounded-[4rem] shadow-2xl z-10 border-8 border-white transform hover:scale-105 hover:rotate-2 transition-transform duration-500"
              />
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-12 -right-6 md:-right-12 z-20 flex items-center justify-center w-36 h-36 md:w-48 md:h-48"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="absolute inset-0 text-stone-900 drop-shadow-lg"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                      </defs>
                      <text fontSize="11" fontWeight="900" fill="currentColor" letterSpacing="2.5" className="uppercase">
                        <textPath href="#circlePath" startOffset="0%">
                          100% Raw • Cold Pressed • 100% Raw • Cold Pressed • 
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="bg-[#EFFF3B] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-stone-900 shadow-2xl relative z-10">
                    <Leaf className="w-8 h-8 md:w-10 md:h-10 text-stone-900" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-6 md:-left-12 bg-stone-900 text-white p-6 md:p-8 rounded-3xl shadow-2xl z-20 max-w-[250px] border-4 border-emerald-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-[#EFFF3B] fill-current" />)}
                </div>
                <p className="font-bold text-lg leading-tight">"Literally the best juice I've ever tasted!"</p>
                <p className="text-sm text-stone-400 mt-2 font-medium uppercase tracking-wider">— Sarah M.</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}