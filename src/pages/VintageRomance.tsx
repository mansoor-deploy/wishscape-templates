
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/vintage/HeroSection';
import GallerySection from '@/components/vintage/GallerySection';
import StorySection from '@/components/vintage/StorySection';
import NoteSection from '@/components/vintage/NoteSection';
import Footer from '@/components/vintage/Footer';

interface VintageRomanceProps {
  couple?: {
    name1: string;
    name2: string;
    anniversaryDate: Date;
    message?: string;
  };
  gallery?: Array<{ src: string; caption?: string }>;
  timeline?: Array<{
    date: string;
    title: string;
    description: string;
    image?: string;
  }>;
  songUrl?: string;
  videoUrl?: string;
}

const VintageRomance: React.FC<VintageRomanceProps> = ({
  couple = {
    name1: 'James',
    name2: 'Emma',
    anniversaryDate: new Date(new Date().getFullYear() + 1, 0, 15),
    message: 'Every love story is beautiful, but ours is my favorite.',
  },
  gallery = [
    { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Our First Date' },
    { src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Summer Getaway' },
    { src: 'https://images.unsplash.com/photo-1604017011826-d3b4c25007f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Engagement Day' },
    { src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Our Wedding Day' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Anniversary Dinner' },
    { src: 'https://images.unsplash.com/photo-1622142416654-16266543377a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', caption: 'Holiday Trip' },
  ],
  timeline = [
    {
      date: 'January 15, 2017',
      title: 'The Day We Met',
      description: 'A chance encounter at a local café changed our lives forever. I knew from the moment I saw you that there was something special about you.',
      image: 'https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      date: 'April 3, 2017',
      title: 'Our First Date',
      description: 'We went to that little Italian restaurant by the lake. You wore that blue dress that I still remember. We talked until they closed the place.',
    },
    {
      date: 'December 24, 2018',
      title: 'The Proposal',
      description: 'Under the Christmas lights and falling snow, I asked you to spend forever with me. Your "yes" was the greatest gift I ever received.',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      date: 'June 15, 2019',
      title: 'Our Wedding Day',
      description: 'Surrounded by family and friends, we said "I do" and began our journey as one. Every detail was perfect, just like you.',
      image: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      date: 'June 15, 2020',
      title: 'First Anniversary',
      description: 'One year of laughter, love, and building our home together. We celebrated with a private dinner under the stars.',
    },
  ],
  songUrl = 'https://filesamples.com/samples/audio/mp3/sample3.mp3',
  videoUrl = 'https://filesamples.com/samples/video/mp4/sample_640x360.mp4',
}) => {
  return (
    <Layout songUrl={songUrl} videoUrl={videoUrl} theme="vintage" couple={{ name1: couple.name1, name2: couple.name2 }}>
      <HeroSection couple={couple} />
      <GallerySection gallery={gallery} />
      <StorySection timeline={timeline} />
      <NoteSection fromName={couple.name1} />
      <Footer name1={couple.name1} name2={couple.name2} />
    </Layout>
  );
};

export default VintageRomance;
