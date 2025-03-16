
import React from 'react';

interface FooterProps {
  name1: string;
  name2: string;
}

const Footer: React.FC<FooterProps> = ({ name1, name2 }) => {
  return (
    <footer className="py-8 px-4 text-center border-t border-vintage-gold/20 bg-vintage-paper">
      <p className="text-xs text-vintage-sepia font-medium">
        With Love | {name1} & {name2} | {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
