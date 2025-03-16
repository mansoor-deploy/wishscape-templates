
import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  songUrl: string;
  theme: 'eternal' | 'vintage' | 'starry' | 'golden';
  isVideoPlaying: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ songUrl, theme, isVideoPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const themeClasses = {
    eternal: 'bg-eternal-gold/10 hover:bg-eternal-gold/20 text-white',
    vintage: 'bg-vintage-gold/10 hover:bg-vintage-gold/20 text-vintage-sepia',
    starry: 'bg-starry-silver/10 hover:bg-starry-silver/20 text-white',
    golden: 'bg-golden-gold/10 hover:bg-golden-gold/20 text-golden-emerald',
  };

  useEffect(() => {
    if (audioRef.current) {
      // Create audio element
      audioRef.current.volume = volume;
      
      // Auto play after a small delay
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(err => {
            console.log('Auto-play prevented:', err);
            setIsPlaying(false);
          });
          setIsPlaying(true);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // Pause audio when video is playing
    if (isVideoPlaying && audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVideoPlaying, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Play prevented:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="music-controller">
      <audio ref={audioRef} src={songUrl} loop />
      
      {/* Volume control */}
      {showVolumeControl && (
        <div className={`p-2 rounded-full ${themeClasses[theme]} backdrop-blur-lg shadow-lg transition-all duration-300`}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-white"
          />
        </div>
      )}
      
      {/* Mute button */}
      <button
        onClick={toggleMute}
        onMouseEnter={() => setShowVolumeControl(true)}
        onMouseLeave={() => setShowVolumeControl(false)}
        className={`music-btn ${themeClasses[theme]} shadow-lg`}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      
      {/* Play/pause button */}
      <button
        onClick={togglePlay}
        className={`music-btn ${themeClasses[theme]} shadow-lg ${isPlaying ? 'animate-pulse-soft' : ''}`}
      >
        <Music size={18} />
      </button>
    </div>
  );
};

export default AudioPlayer;
