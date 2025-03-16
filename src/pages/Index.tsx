
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const templates = [
    {
      path: "/eternal",
      name: "Eternal Elegance",
      description: "Timeless Love & Minimal Luxury with deep black, royal gold, and rich burgundy.",
      bgClass: "bg-black",
      textClass: "text-amber-300"
    },
    {
      path: "/vintage",
      name: "Vintage Romance",
      description: "Classic & Nostalgic Love Story with soft sepia tones, blush pink, and muted gold.",
      bgClass: "bg-vintage-paper",
      textClass: "text-vintage-sepia"
    },
    {
      path: "/starry",
      name: "Starry Night Affair",
      description: "Cosmic & Dreamy Romance with deep midnight blue, glowing silver, and cosmic purple.",
      bgClass: "bg-starry-midnight",
      textClass: "text-starry-silver"
    },
    {
      path: "/golden",
      name: "Golden Bond",
      description: "Luxe & Royal Celebration with deep emerald, rose gold, and champagne white.",
      bgClass: "bg-golden-marble",
      textClass: "text-golden-emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="pt-20 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-pink-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Anniversary Celebration Templates
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Beautiful, customizable templates to celebrate your special day. Choose a design that reflects your unique love story.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Link 
                to={template.path}
                className={`block h-72 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${template.bgClass}`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h2 className={`text-3xl font-bold mb-2 ${template.textClass}`}>
                    {template.name}
                  </h2>
                  <div className="w-16 h-px bg-white/50 my-3"></div>
                  <p className="text-white/80 mb-4">
                    {template.description}
                  </p>
                  <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white text-sm hover:bg-white/20 transition-colors duration-300">
                    View Demo
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>Design beautiful moments for your loved ones</p>
      </footer>
    </div>
  );
};

export default Index;
