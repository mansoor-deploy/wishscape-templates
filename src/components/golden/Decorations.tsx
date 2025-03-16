
import React from 'react';
import { motion } from 'framer-motion';

export const GoldenLeaf = () => {
  return (
    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M50,5 Q75,25 85,50 Q75,75 50,95 Q25,75 15,50 Q25,25 50,5 Z" 
        stroke="url(#goldGradient)" 
        strokeWidth="0.5" 
        fill="none"
      />
      <path 
        d="M50,15 Q68,32 75,50 Q68,68 50,85 Q32,68 25,50 Q32,32 50,15 Z" 
        stroke="url(#goldGradient)" 
        strokeWidth="0.5" 
        fill="none"
      />
      <path 
        d="M50,25 Q65,40 70,50 Q65,60 50,75 Q35,60 30,50 Q35,40 50,25 Z" 
        stroke="url(#goldGradient)" 
        strokeWidth="0.5" 
        fill="none"
      />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FFF2CC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  const randomSize = Math.random() * 5 + 3;
  const randomX = Math.random() * 100;
  const randomDuration = Math.random() * 20 + 10;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: randomSize,
        height: randomSize,
        left: `${randomX}%`,
        bottom: -20,
        background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.2) 0%, rgba(255, 242, 204, 0.5) 50%, rgba(212, 175, 55, 0.2) 100%)',
      }}
      animate={{
        y: [0, `-${Math.random() * 100 + 50}vh`],
        opacity: [0, 0.7, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export const GoldenDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-golden-gold to-transparent w-1/3" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-2">
        <path 
          d="M12,3 L14,9 L20,9 L15,13 L17,19 L12,15 L7,19 L9,13 L4,9 L10,9 Z" 
          fill="url(#goldStar)" 
        />
        <defs>
          <linearGradient id="goldStar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF2CC" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>
      <div className="h-px bg-gradient-to-r from-golden-gold via-transparent to-transparent w-1/3" />
    </div>
  );
};
