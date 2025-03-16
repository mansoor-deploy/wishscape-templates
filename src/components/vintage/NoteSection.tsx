
import React from 'react';
import { motion } from 'framer-motion';

interface NoteSectionProps {
  fromName: string;
}

const NoteSection: React.FC<NoteSectionProps> = ({ fromName }) => {
  return (
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
            {fromName}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NoteSection;
