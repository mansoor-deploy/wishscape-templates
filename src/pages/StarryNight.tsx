
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CountdownTimer from '../components/CountdownTimer';
import PhotoGallery from '../components/PhotoGallery';
import LoveStoryTimeline from '../components/LoveStoryTimeline';
import { Stars, Meteor, Moon } from '../components/starry/SkyElements';

const StarryNight = () => {
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);
  
  const photos = [
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b39ce09', caption: 'Couple stargazing' },
    { src: 'https://images.unsplash.com/photo-1499936890811-41b2a27a0f0b', caption: 'Couple under stars' },
    { src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3', caption: 'Night sky' },
    { src: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e', caption: 'Milky way' },
  ];

  const timelineEvents = [
    { date: 'June 15, 2018', title: 'First Meeting', description: 'We met under the stars at the astronomy club.' },
    { date: 'August 12, 2018', title: 'First Date', description: 'Watched a meteor shower together.' },
    { date: 'December 24, 2019', title: 'The Proposal', description: 'Asked the big question under the night sky.' },
    { date: 'July 8, 2020', title: 'The Wedding', description: 'Our cosmic union under a full moon.' },
  ];

  return (
    <Layout 
      songUrl="/path/to/song.mp3" 
      videoUrl="/path/to/video.mp4" 
      theme="starry"
      couple={{ name1: 'Stella', name2: 'Leo' }}
    >
      {/* Interactive Night Sky Background with Parallax effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-starry-midnight to-starry-blue" />
        
        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <Stars key={i} />
          ))}
        </div>
        
        {/* Moon */}
        <Moon />
        
        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Meteor key={i} delay={i * 3} />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="glass-panel px-8 py-10 md:px-16 md:py-20 text-center max-w-4xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-handwritten text-5xl md:text-7xl text-white mb-6">
              Stella <span className="text-starry-silver">&</span> Leo
            </h1>
            <p className="text-starry-silver text-xl md:text-2xl mb-8">
              To My Shining Star
            </p>
            
            <div className="mb-10">
              <CountdownTimer targetDate={targetDate} theme="starry" />
            </div>
            
            <p className="text-starry-silver text-lg max-w-2xl mx-auto">
              My love, our story is written in the stars. Every day with you feels like a cosmic adventure.
              I created this for you, to celebrate another year of us exploring the universe together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Constellation Connect Effect */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-elegant text-white mb-6">Our Stellar Moments</h2>
            <p className="text-starry-silver max-w-2xl mx-auto">
              Remember these moments? They shine as bright as the stars above.
            </p>
          </motion.div>
          
          <PhotoGallery 
            photos={photos} 
            theme="starry"
            style="grid"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-elegant text-white mb-6">Written in the Stars</h2>
            <p className="text-starry-silver max-w-2xl mx-auto">
              The celestial journey of our love, each moment precious to me.
            </p>
          </motion.div>
          
          <LoveStoryTimeline events={timelineEvents} theme="starry" />
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-10"
          >
            <blockquote className="font-handwritten text-2xl md:text-3xl text-white italic mb-6">
              "For my part I know nothing with any certainty, but the sight of the stars makes me dream of you."
            </blockquote>
            <cite className="text-starry-silver">With all my love, Leo</cite>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-4 text-center text-starry-silver">
        <p>All my love, Leo</p>
        <p className="text-sm mt-2">Under the same stars with you, forever.</p>
      </footer>
    </Layout>
  );
};

export default StarryNight;
