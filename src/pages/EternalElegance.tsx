
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import CountdownTimer from '@/components/CountdownTimer';
import LoveStoryTimeline from '@/components/LoveStoryTimeline';
import PhotoGallery from '@/components/PhotoGallery';
import HeartIcon from '@/components/HeartIcon';

interface EternalEleganceProps {
  couple?: {
    name1: string;
    name2: string;
    anniversaryDate: Date;
    message?: string;
  };
  gallery?: Array<{ src: string; caption?: string }>;
  timeline?: Array<{
    date: string;
    title: string;
    description: string;
    image?: string;
  }>;
  songUrl?: string;
  videoUrl?: string;
}

const EternalElegance: React.FC<EternalEleganceProps> = ({
  couple = {
    name1: 'James',
    name2: 'Emma',
    anniversaryDate: new Date(new Date().getFullYear() + 1, 0, 15),
    message: 'Our love is a journey that began with a simple hello and turned into a lifetime of precious memories.',
  },
  gallery = [
    { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Our First Date' },
    { src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Summer Getaway' },
    { src: 'https://images.unsplash.com/photo-1604017011826-d3b4c25007f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Engagement Day' },
    { src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Our Wedding Day' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Anniversary Dinner' },
    { src: 'https://images.unsplash.com/photo-1622142416654-16266543377a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Holiday Trip' },
  ],
  timeline = [
    {
      date: 'January 15, 2017',
      title: 'The Day We Met',
      description: 'A chance encounter at a local café changed our lives forever. I knew from the moment I saw you that there was something special about you.',
      image: 'https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      date: 'April 3, 2017',
      title: 'Our First Date',
      description: 'We went to that little Italian restaurant by the lake. You wore that blue dress that I still remember. We talked until they closed the place.',
    },
    {
      date: 'December 24, 2018',
      title: 'The Proposal',
      description: 'Under the Christmas lights and falling snow, I asked you to spend forever with me. Your "yes" was the greatest gift I ever received.',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      date: 'June 15, 2019',
      title: 'Our Wedding Day',
      description: 'Surrounded by family and friends, we said "I do" and began our journey as one. Every detail was perfect, just like you.',
      image: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      date: 'June 15, 2020',
      title: 'First Anniversary',
      description: 'One year of laughter, love, and building our home together. We celebrated with a private dinner under the stars.',
    },
  ],
  songUrl = 'https://filesamples.com/samples/audio/mp3/sample3.mp3',
  videoUrl = 'https://filesamples.com/samples/video/mp4/sample_640x360.mp4',
}) => {
  // Array of particles for the sparkle effect
  const particles = Array.from({ length: 50 });

  return (
    <Layout songUrl={songUrl} videoUrl={videoUrl} theme="eternal" couple={{ name1: couple.name1, name2: couple.name2 }}>
      {/* Sparkles Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-eternal-gold rounded-full opacity-0"
            initial={{
              opacity: 0,
              scale: 0,
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-[-1]"></div>
        
        <HeartIcon className="text-eternal-gold mb-6 w-16 h-16 animate-pulse-soft" />
        
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gold-text leading-tight">
            {couple.name1} & {couple.name2}
          </h1>
          
          <div className="w-24 h-1 bg-eternal-gold mb-6"></div>
          
          <p className="max-w-md text-lg md:text-xl text-white/90 mb-8 font-light">
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
              theme="eternal"
            />
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-10 text-eternal-gold" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2" />
            <circle className="animate-bounce" cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-eternal-gold">Timeline</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 gold-text">Our Love Story</h2>
            <div className="w-16 h-1 bg-eternal-gold mx-auto"></div>
          </motion.div>
          
          <LoveStoryTimeline events={timeline} theme="eternal" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 relative bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-eternal-gold">Memories</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 gold-text">Our Gallery</h2>
            <div className="w-16 h-1 bg-eternal-gold mx-auto"></div>
          </motion.div>
          
          <PhotoGallery photos={gallery} theme="eternal" />
        </div>
      </section>

      {/* Anniversary Section */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-4xl mx-auto glass-panel p-8 md:p-12 overflow-hidden">
          <div className="relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-widest text-eternal-gold">Forever & Always</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 gold-text">Happy Anniversary</h2>
              
              <p className="max-w-xl mx-auto text-white/90 mb-8">
                Every moment with you is a treasure, every memory a precious gift. Here's to many more years of love, laughter, and adventures together.
              </p>
              
              <div className="w-16 h-1 bg-eternal-gold mx-auto"></div>
            </motion.div>
          </div>
          
          {/* Animated rings in the background */}
          <div className="absolute -top-20 -right-20 w-60 h-60 border-2 border-eternal-gold/20 rounded-full animate-rotate-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-eternal-gold/10 rounded-full animate-rotate-slow" style={{ animationDuration: '15s' }}></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-eternal-gold/20">
        <p className="text-xs text-eternal-gold/70">
          With Love | {couple.name1} & {couple.name2} | {new Date().getFullYear()}
        </p>
      </footer>
    </Layout>
  );
};

export default EternalElegance;
