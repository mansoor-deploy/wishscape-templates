
import React from 'react';
import { motion } from 'framer-motion';
import HeartIcon from '@/components/HeartIcon';
import CountdownTimer from '@/components/CountdownTimer';

interface HeroSectionProps {
  couple: {
    name1: string;
    name2: string;
    anniversaryDate: Date;
    message?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ couple }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16 bg-vintage-paper film-grain">
      <div className="absolute inset-0 bg-gradient-to-b from-vintage-sepia/10 to-transparent z-[-1]"></div>
      
      <HeartIcon className="text-vintage-gold mb-6 w-12 h-12" />
      
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className="font-handwritten text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-vintage-sepia leading-tight">
          {couple.name1} & {couple.name2}
        </h1>
        
        <div className="w-24 h-px bg-vintage-gold mb-6"></div>
        
        <p className="max-w-md text-lg md:text-xl text-vintage-sepia mb-8 font-handwritten">
          {couple.message}
        </p>
        
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <CountdownTimer 
            targetDate={couple.anniversaryDate} 
            theme="vintage"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
