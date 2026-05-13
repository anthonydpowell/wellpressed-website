import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/BWellPressed_Official_logo.png';
import claraLogo from '../../imports/CLARA_logo_-_white.png';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 p-6 rounded-2xl inline-block w-fit border border-white/10 shadow-2xl">
              <ImageWithFallback 
                src={logoImg} 
                alt="WellPressed Logo" 
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-lg" 
              />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Pure, locally sourced, cold-pressed juices delivered right to your door. Nourish your body with nature's best ingredients.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Menu</h4>
            <ul className="flex flex-col gap-4 text-sm text-stone-400">
              <li><a href="#menu" className="hover:text-emerald-400 transition-colors">All Juices</a></li>
              <li><a href="#menu" className="hover:text-emerald-400 transition-colors">Wellness Shots</a></li>
              <li><a href="#menu" className="hover:text-emerald-400 transition-colors">Cleanse Info</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-stone-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sourcing</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Stay Fresh</h4>
            <p className="text-stone-400 text-sm mb-4">Sign up to receive fresh updates and community news.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>
              <button 
                type="button"
                onClick={() => {
                  window.location.href = 'mailto:anthonydpowell8@gmail.com?subject=Join the WellPressed Community';
                }}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg py-3 text-sm font-medium transition-colors"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} WellPressed Juice Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Shipping & Returns</a>
          </div>
        </div>
        
        <div className="pt-8 flex justify-center">
          <a href="https://www.onlyclara.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
            <ImageWithFallback 
              src={claraLogo} 
              alt="Clara Logo" 
              className="h-6 w-auto object-contain" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
}