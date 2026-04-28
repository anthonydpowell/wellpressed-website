import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Leaf } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function OurStory() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] pt-32 pb-24 overflow-hidden selection:bg-emerald-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 relative"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -left-12 opacity-20 text-emerald-500"
          >
            <Sparkles size={80} strokeWidth={1} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tighter uppercase mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-[#EFFF3B]">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-medium leading-relaxed">
            WellPressed was born from a legacy decades in the making. A legacy that began in a grandmother's kitchen.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-[#EFFF3B] rounded-[3rem] transform -rotate-3 scale-105 z-0 blur-xl opacity-50"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1610622930069-177b599953eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjBncmVlbiUyMGp1aWNlJTIwaW4lMjBicmlnaHQlMjBraXRjaGVufGVufDF8fHx8MTc3NjI4MDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fresh organic green juice in bright kitchen"
              className="relative w-full h-auto aspect-[4/5] object-cover rounded-[3rem] shadow-2xl z-10 border-8 border-white"
            />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-full shadow-2xl z-20 border-4 border-stone-900 flex items-center justify-center"
            >
              <Heart className="w-10 h-10 text-rose-500 fill-current" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col gap-8 text-lg text-stone-700 leading-relaxed">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-6">
                That is where our founder first encountered juicing. Back then, it was not the vibrant, flavorful experience it is today. To be honest, that first sip of "green stuff" came with a wrinkled nose and a doubtful glance.
              </p>
              <p className="mb-6">
                Years later, our founder's mother reintroduced her to her own creations. This time, everything changed. There was a sparkle in her eyes as she poured the juice, pride in her smile as she handed over the glass. The taste was alive, a perfect balance of freshness and purpose. 
              </p>
              <p className="mb-6 font-semibold text-emerald-700 text-xl border-l-4 border-emerald-500 pl-4">
                Somewhere between that first reluctant sip as a child and the quiet joy of those later moments, our founder came to understand that juicing was not just a drink. It was a gift.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-stone-200"
            >
              <p className="mb-6">
                What started as a family tradition has now become a daily ritual and a life's mission. Juicing nourishes, heals, and connects us back to a simple truth: <span className="font-bold text-stone-900">when you know better, you do better.</span> WellPressed exists to share that truth, one cold-pressed bottle at a time.
              </p>
              <p className="mb-0">
                The brand is here to help customers unlock the goodness within so they can be their healthiest, most vibrant selves. Because health is not just what you do. <span className="italic text-emerald-600 font-semibold">It is who you are.</span>
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mt-4"
            >
              <Leaf className="w-8 h-8 text-emerald-500" />
              <p className="text-3xl font-black text-stone-900 tracking-tight uppercase">Welcome to WellPressed.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
