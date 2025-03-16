
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Photo {
  src: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  theme: 'eternal' | 'vintage' | 'starry' | 'golden';
  style?: 'grid' | 'polaroid' | 'masonry';
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ 
  photos, 
  theme,
  style = 'grid'
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const themeClasses = {
    eternal: {
      container: '',
      item: 'border-2 border-eternal-gold/30 hover:border-eternal-gold',
      caption: 'bg-eternal-black/80 text-white',
      lightbox: 'bg-eternal-black/95',
      button: 'bg-eternal-gold/20 hover:bg-eternal-gold/40 text-white',
    },
    vintage: {
      container: '',
      item: 'border-2 border-vintage-gold/30 hover:border-vintage-gold film-grain',
      caption: 'bg-vintage-sepia/80 text-vintage-cream',
      lightbox: 'bg-vintage-sepia/95',
      button: 'bg-vintage-gold/20 hover:bg-vintage-gold/40 text-vintage-cream',
    },
    starry: {
      container: '',
      item: 'border-2 border-starry-silver/30 hover:border-starry-silver',
      caption: 'bg-starry-midnight/80 text-white',
      lightbox: 'bg-starry-midnight/95',
      button: 'bg-starry-silver/20 hover:bg-starry-silver/40 text-white',
    },
    golden: {
      container: '',
      item: 'border-2 border-golden-gold/30 hover:border-golden-gold',
      caption: 'bg-golden-emerald/80 text-white',
      lightbox: 'bg-golden-emerald/95',
      button: 'bg-golden-gold/20 hover:bg-golden-gold/40 text-white',
    },
  };

  const styleClasses = {
    grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4',
    polaroid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6',
    masonry: 'columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4',
  };

  const itemClasses = {
    grid: `${themeClasses[theme].item} relative overflow-hidden rounded-lg shadow-lg aspect-square transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`,
    polaroid: `${themeClasses[theme].item} relative bg-white p-2 pb-6 rounded-sm shadow-lg rotate-[-2deg] hover:rotate-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`,
    masonry: `${themeClasses[theme].item} relative overflow-hidden rounded-lg shadow-lg mb-4 inline-block w-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`,
  };

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPreviousPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={`${styleClasses[style]}`}>
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`${itemClasses[style]} cursor-pointer`}
            onClick={() => openLightbox(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img 
              src={photo.src} 
              alt={photo.caption || `Photo ${index + 1}`} 
              className={style === 'polaroid' ? 'w-full h-auto aspect-square object-cover' : 'w-full h-full object-cover'}
              loading="lazy"
            />
            
            {photo.caption && style !== 'polaroid' && (
              <div className={`${themeClasses[theme].caption} absolute bottom-0 left-0 right-0 p-2 text-sm`}>
                {photo.caption}
              </div>
            )}
            
            {photo.caption && style === 'polaroid' && (
              <div className="absolute bottom-1 left-0 right-0 text-center text-gray-800 font-handwritten text-sm">
                {photo.caption}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[9999] ${themeClasses[theme].lightbox} flex items-center justify-center p-4`}
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <button 
              className={`absolute left-4 p-3 rounded-full ${themeClasses[theme].button} transition-colors`}
              onClick={goToPreviousPhoto}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className={`absolute right-4 p-3 rounded-full ${themeClasses[theme].button} transition-colors`}
              onClick={goToNextPhoto}
            >
              <ChevronRight size={24} />
            </button>
            
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={photos[currentPhotoIndex].src} 
                alt={photos[currentPhotoIndex].caption || `Photo ${currentPhotoIndex + 1}`} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              {photos[currentPhotoIndex].caption && (
                <div className={`${themeClasses[theme].caption} absolute bottom-0 left-0 right-0 p-3 text-center`}>
                  {photos[currentPhotoIndex].caption}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
