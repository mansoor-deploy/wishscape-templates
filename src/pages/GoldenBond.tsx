
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CountdownTimer from '../components/CountdownTimer';
import PhotoGallery from '../components/PhotoGallery';
import LoveStoryTimeline from '../components/LoveStoryTimeline';
import { GoldenLeaf, FloatingParticle, GoldenDivider } from '../components/golden/Decorations';

const GoldenBond = () => {
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);
  
  const [activeSection, setActiveSection] = useState('intro');
  
  const photos = [
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', caption: 'Elegant couple' },
    { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a', caption: 'Wedding rings' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b39ce09', caption: 'Couple' },
    { src: 'https://images.unsplash.com/photo-1529634506289-7df250d9f838', caption: 'Celebration' },
  ];

  const timelineEvents = [
    { date: 'May 12, 2017', title: 'First Meeting', description: 'We met at the garden party.' },
    { date: 'July 30, 2017', title: 'First Date', description: 'Dinner at the Emerald Restaurant.' },
    { date: 'February 14, 2019', title: 'The Proposal', description: 'A perfect Valentine\'s Day surprise.' },
    { date: 'September 5, 2020', title: 'The Wedding', description: 'Our golden day of celebration.' },
  ];

  // Sections for the interactive menu
  const sections = [
    { id: 'intro', title: 'Our Story' },
    { id: 'gallery', title: 'Moments' },
    { id: 'timeline', title: 'Journey' },
    { id: 'message', title: 'Message' }
  ];

  return (
    <Layout 
      songUrl="/path/to/song.mp3" 
      videoUrl="/path/to/video.mp4" 
      theme="golden"
      couple={{ name1: 'Elizabeth', name2: 'James' }}
    >
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-marble to-golden-champagne" />
        
        {/* Floating Gold Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.3} />
          ))}
        </div>
        
        {/* Corner Golden Leaves */}
        <div className="absolute top-0 left-0 transform rotate-180">
          <GoldenLeaf />
        </div>
        <div className="absolute top-0 right-0 transform rotate-90">
          <GoldenLeaf />
        </div>
        <div className="absolute bottom-0 left-0 transform -rotate-90">
          <GoldenLeaf />
        </div>
        <div className="absolute bottom-0 right-0 transform rotate-0">
          <GoldenLeaf />
        </div>
      </div>

      {/* Interactive Side Navigation */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-golden-gold w-4 h-4' 
                  : 'bg-golden-emerald/40 hover:bg-golden-gold/60'
              }`}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.2 }}
              aria-label={section.title}
            >
              <span className="absolute whitespace-nowrap right-full mr-4 opacity-0 group-hover:opacity-100 text-golden-emerald text-sm">
                {section.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="intro" className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-10 text-center border border-golden-gold/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-elegant text-5xl md:text-7xl text-golden-emerald mb-6">
              Elizabeth <span className="rose-gold-text">&</span> James
            </h1>
            <GoldenDivider className="mx-auto my-6" />
            <p className="text-golden-emerald text-xl md:text-2xl mb-8 font-serif">
              My Treasured One
            </p>
            
            <div className="mb-10">
              <CountdownTimer targetDate={targetDate} theme="golden" />
            </div>
            
            <p className="text-golden-emerald text-lg max-w-2xl mx-auto font-serif">
              My darling, with joy and gratitude, I celebrate another year of our love story. 
              You are the gold in my life, and each moment with you is a precious treasure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-elegant text-golden-emerald mb-6">Treasured Moments</h2>
            <GoldenDivider className="mx-auto my-4" />
            <p className="text-golden-emerald/80 max-w-2xl mx-auto font-serif">
              The golden memories that remind me how lucky I am to have you.
            </p>
          </motion.div>
          
          <PhotoGallery 
            photos={photos} 
            theme="golden"
            style="grid" 
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-20 px-4 bg-gradient-to-b from-transparent to-golden-champagne/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-elegant text-golden-emerald mb-6">Our Journey Together</h2>
            <GoldenDivider className="mx-auto my-4" />
            <p className="text-golden-emerald/80 max-w-2xl mx-auto font-serif">
              Every chapter of our love story is etched in my heart.
            </p>
          </motion.div>
          
          <LoveStoryTimeline events={timelineEvents} theme="golden" />
        </div>
      </section>

      {/* Message Section */}
      <section id="message" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-10 border border-golden-gold/20"
          >
            <h2 className="text-3xl font-elegant text-golden-emerald mb-6">My Heart to Yours</h2>
            <GoldenDivider className="mx-auto my-4" />
            <p className="text-golden-emerald font-serif text-lg mb-6">
              My dearest Elizabeth,
            </p>
            <p className="text-golden-emerald/90 font-serif mb-4">
              As we celebrate another year together, I want you to know that you are the treasure 
              of my life. Your love has been my strength and your smile my daily sunshine. 
              Each moment with you is golden, each memory a precious gem I hold close.
            </p>
            <p className="text-golden-emerald/90 font-serif">
              You are and always will be the most important person in my life.
            </p>
            <p className="font-handwritten text-2xl text-golden-emerald mt-8">
              Forever yours,
            </p>
            <p className="font-handwritten text-2xl gold-text mt-2">
              James
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-4 text-center text-golden-emerald">
        <p className="font-serif">With all my love and devotion,</p>
        <p className="font-handwritten text-xl mt-2 gold-text">James</p>
      </footer>
    </Layout>
  );
};

export default GoldenBond;
