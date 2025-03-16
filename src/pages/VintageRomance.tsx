
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import CountdownTimer from '@/components/CountdownTimer';
import LoveStoryTimeline from '@/components/LoveStoryTimeline';
import PhotoGallery from '@/components/PhotoGallery';
import HeartIcon from '@/components/HeartIcon';

interface VintageRomanceProps {
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

const VintageRomance: React.FC<VintageRomanceProps> = ({
  couple = {
    name1: 'James',
    name2: 'Emma',
    anniversaryDate: new Date(new Date().getFullYear() + 1, 0, 15),
    message: 'Every love story is beautiful, but ours is my favorite.',
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
  return (
    <Layout songUrl={songUrl} videoUrl={videoUrl} theme="vintage" couple={{ name1: couple.name1, name2: couple.name2 }}>
      {/* Hero Section */}
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

      {/* Gallery Section - Polaroid Style */}
      <section className="py-20 px-4 relative bg-vintage-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-vintage-sepia font-medium">Memories</span>
            <h2 className="font-handwritten text-4xl md:text-5xl mt-2 mb-4 text-vintage-sepia">Our Gallery</h2>
            <div className="w-16 h-px bg-vintage-gold mx-auto"></div>
          </motion.div>
          
          <PhotoGallery photos={gallery} theme="vintage" style="polaroid" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 relative bg-vintage-paper">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-vintage-sepia font-medium">Timeline</span>
            <h2 className="font-handwritten text-4xl md:text-5xl mt-2 mb-4 text-vintage-sepia">Our Love Story</h2>
            <div className="w-16 h-px bg-vintage-gold mx-auto"></div>
          </motion.div>
          
          <LoveStoryTimeline events={timeline} theme="vintage" />
        </div>
      </section>

      {/* RSVP Section - Styled as a Letter */}
      <section className="py-20 px-4 relative bg-vintage-cream">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white p-8 md:p-12 shadow-md rotate-[-1deg] film-grain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-vintage-sepia font-medium">With Love</span>
              <h2 className="font-handwritten text-4xl mt-2 mb-4 text-vintage-sepia">A Note To You</h2>
              <div className="w-16 h-px bg-vintage-gold mx-auto mb-6"></div>
            </div>
            
            <p className="font-handwritten text-xl text-vintage-sepia mb-6 leading-relaxed">
              Dearest,
            </p>
            
            <p className="font-handwritten text-xl text-vintage-sepia mb-6 leading-relaxed">
              As we celebrate another year of our journey together, I am reminded of all the beautiful moments we've shared. Your love has been my greatest adventure, and I cherish every memory we've created side by side.
            </p>
            
            <p className="font-handwritten text-xl text-vintage-sepia mb-6 leading-relaxed">
              Thank you for being my partner, my confidant, and my best friend. Here's to many more years of love and laughter.
            </p>
            
            <p className="font-handwritten text-xl text-vintage-sepia mb-6 leading-relaxed text-right">
              Forever yours,
            </p>
            
            <p className="font-handwritten text-2xl text-vintage-sepia text-right">
              {couple.name1}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-vintage-gold/20 bg-vintage-paper">
        <p className="text-xs text-vintage-sepia font-medium">
          With Love | {couple.name1} & {couple.name2} | {new Date().getFullYear()}
        </p>
      </footer>
    </Layout>
  );
};

export default VintageRomance;
