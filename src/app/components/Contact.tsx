import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="lets-connect" className="py-24 bg-white relative overflow-hidden">
      {/* MATCHING GRADIENT BLOBS FROM HERO */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-1/4 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#EFFF3B] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-stone-900">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-[#EFFF3B]">Connect</span>
              </h2>
              <p className="text-xl text-stone-600 mb-12 leading-relaxed">
                Have questions about our juices, cleanses, or just want to say hello? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="bg-[#EFFF3B]/30 p-4 rounded-2xl group-hover:bg-[#EFFF3B]/50 transition-colors">
                  <Phone className="w-8 h-8 text-stone-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-1">Call Us</h4>
                  <p className="text-stone-600">(706) 750-0050<br />Mon-Fri: 8am - 6pm</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6 group"
              >
                <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-200 transition-colors">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-1">Email</h4>
                  <p className="text-stone-600">Wellpressedjuices@gmail.com<br />We reply within 24 hours</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-6 group"
              >
                <div className="bg-rose-100 p-4 rounded-2xl group-hover:bg-rose-200 transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center font-black text-rose-600 text-xl">IG</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-1">Instagram</h4>
                  <p className="text-stone-600">@wellpressedjuices<br />Follow our journey</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#F9F6F0] p-8 md:p-14 rounded-[2.5rem] shadow-sm border border-stone-200/50 relative z-20 h-full flex flex-col justify-center"
            >
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-black text-stone-900 uppercase tracking-tighter mb-4">
                  Join The <span className="text-emerald-600">Fresh List</span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Subscribe to our emails to stay in the loop with fresh arrivals, seasonal drops, and wellness tips. Drop your email below to get connected!
                </p>
              </div>

              <form 
                className="flex flex-col gap-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const subject = encodeURIComponent("Subscribe to WellPressed Updates");
                  const body = encodeURIComponent(`Hi WellPressed team,\n\nPlease add my email to your mailing list!\n\nEmail: ${email}\n\nStay fresh!`);
                  window.location.href = `mailto:Wellpressedjuices@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-stone-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    placeholder="you@example.com" 
                    className="w-full bg-white border border-stone-300 rounded-xl py-5 px-6 text-stone-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg shadow-inner"
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-2 bg-stone-900 hover:bg-emerald-800 text-[#EFFF3B] hover:text-white py-5 px-8 rounded-xl font-black text-lg uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-emerald-900/30 flex items-center justify-center gap-3 w-full"
                >
                  Subscribe
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>

        {/* Footer Cool Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center border-t border-stone-200 pt-16 pb-8 mt-16"
        >
          <h3 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-4">
            Stay Rooted. Stay <span className="text-emerald-500">Alive.</span>
          </h3>
          <p className="text-stone-500 font-bold uppercase tracking-widest text-sm">
            © {new Date().getFullYear()} WellPressed Juices. Made from the earth, for the soul.
          </p>
        </motion.div>
      </div>
    </section>
  );
}