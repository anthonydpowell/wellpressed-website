import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Features } from '../components/Features';
import { Story } from '../components/Story';
import { Products } from '../components/Products';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Marquee />
      <Story />
      <Features />
      <Products />
      <Contact />
    </div>
  );
}