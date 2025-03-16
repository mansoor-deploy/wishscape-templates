
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

interface LayoutProps {
  children: React.ReactNode;
  songUrl: string;
  videoUrl: string;
  theme: 'eternal' | 'vintage' | 'starry' | 'golden';
  couple?: {
    name1: string;
    name2: string;
  };
}

const Layout: React.FC<LayoutProps> = ({
  children,
  songUrl,
  videoUrl,
  theme,
  couple = { name1: 'James', name2: 'Emma' }
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [showVideoIcon, setShowVideoIcon] = useState(false);
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);
  const location = useLocation();

  // Check if user has scrolled to the bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      
      // If we're near the bottom (within 100px)
      const nearBottom = scrollPosition > bodyHeight - 100;
      setIsScrollAtBottom(nearBottom);
      
      // Show video icon with a slight delay when near bottom
      if (nearBottom && !showVideoIcon) {
        setTimeout(() => setShowVideoIcon(true), 500);
      } else if (!nearBottom && showVideoIcon) {
        setShowVideoIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showVideoIcon]);

  const themeClasses = {
    eternal: {
      layout: 'bg-eternal-black text-white',
      nav: 'bg-eternal-black/80 backdrop-blur-md border-b border-eternal-gold/40',
      navLink: 'text-eternal-gold hover:text-white transition-colors duration-300',
      activeLink: 'text-white border-b-2 border-eternal-gold',
      menuIcon: 'text-eternal-gold',
      videoIcon: 'bg-eternal-gold/20 hover:bg-eternal-gold/40 text-white',
    },
    vintage: {
      layout: 'bg-vintage-cream text-vintage-sepia film-grain',
      nav: 'bg-vintage-paper/90 backdrop-blur-md border-b border-vintage-gold/20',
      navLink: 'text-vintage-sepia hover:text-vintage-gold transition-colors duration-300',
      activeLink: 'text-vintage-gold border-b-2 border-vintage-gold',
      menuIcon: 'text-vintage-gold',
      videoIcon: 'bg-vintage-gold/20 hover:bg-vintage-gold/40 text-vintage-sepia',
    },
    starry: {
      layout: 'bg-starry-midnight text-starry-silver starry-background',
      nav: 'bg-starry-blue/80 backdrop-blur-md border-b border-starry-silver/20',
      navLink: 'text-starry-silver hover:text-white transition-colors duration-300',
      activeLink: 'text-white border-b-2 border-starry-silver',
      menuIcon: 'text-starry-silver',
      videoIcon: 'bg-starry-silver/20 hover:bg-starry-silver/40 text-white',
    },
    golden: {
      layout: 'bg-golden-marble text-golden-emerald',
      nav: 'bg-white/90 backdrop-blur-md border-b border-golden-gold/20',
      navLink: 'text-golden-emerald hover:text-golden-gold transition-colors duration-300',
      activeLink: 'text-golden-gold border-b-2 border-golden-gold',
      menuIcon: 'text-golden-gold',
      videoIcon: 'bg-golden-gold/20 hover:bg-golden-gold/40 text-golden-emerald',
    },
  };

  return (
    <div className={`min-h-screen ${themeClasses[theme].layout}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 ${themeClasses[theme].nav}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Heart className={`w-5 h-5 ${themeClasses[theme].menuIcon}`} />
            <span className="font-handwritten text-xl">
              {couple.name1} & {couple.name2}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`${themeClasses[theme].navLink} ${location.pathname === '/' ? themeClasses[theme].activeLink : ''}`}>
              Eternal Elegance
            </Link>
            <Link 
              to="/vintage" 
              className={`${themeClasses[theme].navLink} ${location.pathname === '/vintage' ? themeClasses[theme].activeLink : ''}`}>
              Vintage Romance
            </Link>
            <Link 
              to="/starry" 
              className={`${themeClasses[theme].navLink} ${location.pathname === '/starry' ? themeClasses[theme].activeLink : ''}`}>
              Starry Night
            </Link>
            <Link 
              to="/golden" 
              className={`${themeClasses[theme].navLink} ${location.pathname === '/golden' ? themeClasses[theme].activeLink : ''}`}>
              Golden Bond
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${themeClasses[theme].menuIcon}`} />
            ) : (
              <Menu className={`w-6 h-6 ${themeClasses[theme].menuIcon}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-[60px] left-0 right-0 z-40 ${themeClasses[theme].nav}`}
          >
            <div className="container mx-auto py-4 flex flex-col gap-4">
              <Link 
                to="/" 
                className={`${themeClasses[theme].navLink} px-4 py-2 ${location.pathname === '/' ? themeClasses[theme].activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eternal Elegance
              </Link>
              <Link 
                to="/vintage" 
                className={`${themeClasses[theme].navLink} px-4 py-2 ${location.pathname === '/vintage' ? themeClasses[theme].activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vintage Romance
              </Link>
              <Link 
                to="/starry" 
                className={`${themeClasses[theme].navLink} px-4 py-2 ${location.pathname === '/starry' ? themeClasses[theme].activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Starry Night
              </Link>
              <Link 
                to="/golden" 
                className={`${themeClasses[theme].navLink} px-4 py-2 ${location.pathname === '/golden' ? themeClasses[theme].activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Golden Bond
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Video Icon (appears when scrolled to bottom) */}
      <AnimatePresence>
        {showVideoIcon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-30"
          >
            <button
              onClick={() => setIsVideoVisible(true)}
              className={`px-6 py-3 rounded-full ${themeClasses[theme].videoIcon} backdrop-blur-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <span>Watch Our Special Message</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Player */}
      <AudioPlayer 
        songUrl={songUrl} 
        theme={theme} 
        isVideoPlaying={isVideoVisible} 
      />

      {/* Video Player */}
      <VideoPlayer 
        videoUrl={videoUrl} 
        isVisible={isVideoVisible} 
        onClose={() => setIsVideoVisible(false)} 
      />
    </div>
  );
};

export default Layout;
