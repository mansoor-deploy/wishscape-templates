
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface LoveStoryTimelineProps {
  events: TimelineEvent[];
  theme: 'eternal' | 'vintage' | 'starry' | 'golden';
}

const LoveStoryTimeline: React.FC<LoveStoryTimelineProps> = ({ events, theme }) => {
  const themeClasses = {
    eternal: {
      container: 'border-l-2 border-eternal-gold/50',
      dot: 'bg-eternal-gold',
      date: 'text-eternal-gold/80',
      title: 'text-eternal-gold',
      card: 'bg-eternal-black/40 border border-eternal-gold/20 hover:border-eternal-gold/50',
    },
    vintage: {
      container: 'border-l-2 border-vintage-gold/50',
      dot: 'bg-vintage-gold',
      date: 'text-vintage-gold/80',
      title: 'text-vintage-gold',
      card: 'bg-vintage-cream/70 border border-vintage-gold/20 hover:border-vintage-gold/50 film-grain',
    },
    starry: {
      container: 'border-l-2 border-starry-silver/50',
      dot: 'bg-starry-silver',
      date: 'text-starry-silver/80',
      title: 'text-starry-silver',
      card: 'bg-starry-blue/40 border border-starry-silver/20 hover:border-starry-silver/50',
    },
    golden: {
      container: 'border-l-2 border-golden-gold/50',
      dot: 'bg-golden-gold',
      date: 'text-golden-gold/80',
      title: 'text-golden-gold',
      card: 'bg-white/80 border border-golden-gold/20 hover:border-golden-gold/50',
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className={`relative ${themeClasses[theme].container} ml-4 md:ml-6 pl-6 my-8 space-y-10`}>
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={index}
          variants={fadeInVariants}
        >
          {/* Timeline dot */}
          <div className={`absolute -left-9 ${themeClasses[theme].dot} w-4 h-4 rounded-full mt-1.5`} />
          
          {/* Timeline card */}
          <div className={`${themeClasses[theme].card} p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}>
            <span className={`${themeClasses[theme].date} text-sm font-medium`}>{event.date}</span>
            <h3 className={`${themeClasses[theme].title} text-xl font-bold mb-2`}>{event.title}</h3>
            
            {event.image && (
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
            )}
            
            <p className="leading-relaxed">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LoveStoryTimeline;
