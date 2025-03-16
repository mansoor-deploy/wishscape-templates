
import React from 'react';
import { motion } from 'framer-motion';
import LoveStoryTimeline from '@/components/LoveStoryTimeline';

interface StorySectionProps {
  timeline: Array<{
    date: string;
    title: string;
    description: string;
    image?: string;
  }>;
}

const StorySection: React.FC<StorySectionProps> = ({ timeline }) => {
  return (
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
  );
};

export default StorySection;
