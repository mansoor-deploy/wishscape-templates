
import React from 'react';
import { motion } from 'framer-motion';

export const Stars = () => {
  const randomSize = Math.random() * 0.3 + 0.1;
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 10;
  const randomDuration = Math.random() * 3 + 2;

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        top: `${randomY}%`,
        left: `${randomX}%`,
        width: `${randomSize}rem`,
        height: `${randomSize}rem`,
      }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
      }}
    />
  );
};

export const Moon = () => {
  return (
    <motion.div
      className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner"
      style={{
        top: '10%',
        right: '10%',
        boxShadow: 'inset -10px 10px 20px rgba(0, 0, 0, 0.2)',
      }}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute w-6 h-6 rounded-full bg-gray-200/30 top-4 left-4" />
      <div className="absolute w-4 h-4 rounded-full bg-gray-200/30 bottom-8 right-6" />
    </motion.div>
  );
};

export const Meteor = ({ delay = 0 }: { delay?: number }) => {
  const randomTop = Math.random() * 50;
  const randomLeft = Math.random() * 70 + 10;
  const randomDuration = Math.random() * 2 + 1;

  return (
    <motion.div
      className="absolute h-0.5 bg-gradient-to-r from-transparent via-starry-silver to-white rounded-full"
      style={{
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        width: '0%',
        transform: 'rotate(-45deg)',
        opacity: 0,
      }}
      animate={{
        width: ['0%', '20%', '0%'],
        left: [`${randomLeft}%`, `${randomLeft - 20}%`],
        top: [`${randomTop}%`, `${randomTop + 20}%`],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        repeatDelay: 7 + delay,
        delay: delay,
      }}
    />
  );
};
