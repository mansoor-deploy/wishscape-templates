
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  isVisible: boolean;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, isVisible, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video play error:', err);
      });
    } else if (!isVisible && videoRef.current) {
      videoRef.current.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVisible]);

  useEffect(() => {
    // Add event listener for ESC key to close video
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        onClose();
      }
    };

    // Allow clicking outside the video to close it
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current === e.target) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (containerRef.current) {
      containerRef.current.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', handleClickOutside);
      }
    };
  }, [isVisible, onClose]);

  return (
    <div 
      ref={containerRef}
      className={`video-container ${isVisible ? 'active' : ''}`}
    >
      <button className="video-close-btn" onClick={onClose}>
        <X size={24} />
      </button>
      
      <div className="max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <video 
          ref={videoRef}
          src={videoUrl} 
          className="w-full h-full object-cover"
          controls
          controlsList="nodownload"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
