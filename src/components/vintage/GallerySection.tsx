
import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from '@/components/PhotoGallery';

interface GallerySectionProps {
  gallery: Array<{ src: string; caption?: string }>;
}

const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  return (
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
  );
};

export default GallerySection;
