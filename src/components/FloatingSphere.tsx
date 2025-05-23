
import React from 'react';
import { cn } from "@/lib/utils";

interface FloatingSphereProps {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingSphere: React.FC<FloatingSphereProps> = ({ 
  size = 100, 
  color = "#2563eb", 
  delay = 0,
  className,
  style
}) => {
  return (
    <div 
      className={cn(
        "rounded-full absolute blur-sm animate-pulse", 
        className
      )}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        background: `radial-gradient(circle at 30% 30%, ${color}30, ${color}05)`,
        boxShadow: `0 0 30px ${color}30`,
        border: `1px solid ${color}30`,
        animationDelay: `${delay}s`,
        ...style
      }}
    />
  );
};

export default FloatingSphere;
