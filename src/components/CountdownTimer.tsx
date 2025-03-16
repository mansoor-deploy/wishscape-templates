
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  theme: 'eternal' | 'vintage' | 'starry' | 'golden';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = '',
  theme
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const themeClasses = {
    eternal: {
      container: 'bg-eternal-black/60 border border-eternal-gold/30',
      text: 'text-eternal-gold',
      number: 'bg-eternal-black/50 text-white',
      label: 'text-eternal-gold/70',
    },
    vintage: {
      container: 'bg-vintage-cream/80 border border-vintage-gold/30',
      text: 'text-vintage-sepia',
      number: 'bg-vintage-cream/50 text-vintage-sepia',
      label: 'text-vintage-sepia/70',
    },
    starry: {
      container: 'bg-starry-midnight/60 border border-starry-silver/30',
      text: 'text-starry-silver',
      number: 'bg-starry-blue/40 text-white',
      label: 'text-starry-silver/70',
    },
    golden: {
      container: 'bg-white/70 border border-golden-gold/30',
      text: 'text-golden-emerald',
      number: 'bg-golden-marble text-golden-emerald',
      label: 'text-golden-emerald/70',
    },
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`${themeClasses[theme].container} rounded-lg backdrop-blur-md p-6 ${className}`}>
      <h3 className={`${themeClasses[theme].text} text-center text-lg font-medium mb-4`}>
        Countdown to Our Special Day
      </h3>
      
      <div className="flex justify-center items-center space-x-4">
        <div className="flex flex-col items-center">
          <div className={`${themeClasses[theme].number} text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg`}>
            {timeLeft.days}
          </div>
          <span className={`${themeClasses[theme].label} text-sm mt-1`}>Days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={`${themeClasses[theme].number} text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg`}>
            {timeLeft.hours}
          </div>
          <span className={`${themeClasses[theme].label} text-sm mt-1`}>Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={`${themeClasses[theme].number} text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg`}>
            {timeLeft.minutes}
          </div>
          <span className={`${themeClasses[theme].label} text-sm mt-1`}>Minutes</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={`${themeClasses[theme].number} text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg`}>
            {timeLeft.seconds}
          </div>
          <span className={`${themeClasses[theme].label} text-sm mt-1`}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
