
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const NeonHeading: React.FC<NeonHeadingProps> = ({ children, className }) => {
  return (
    <h1 
      className={cn(
        "font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-lightblue to-neon-cyan animate-text-shimmer",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default NeonHeading;
