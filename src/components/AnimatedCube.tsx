
import React, { useEffect, useRef } from 'react';

interface AnimatedCubeProps {
  color?: string;
  size?: number;
  className?: string;
}

const AnimatedCube: React.FC<AnimatedCubeProps> = ({ 
  color = "#9d00ff", 
  size = 100,
  className 
}) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    
    let rotationX = 0;
    let rotationY = 0;
    let animationFrameId: number;
    
    const animate = () => {
      rotationX += 0.005;
      rotationY += 0.007;
      
      if (cube) {
        cube.style.transform = `rotateX(${rotationX}rad) rotateY(${rotationY}rad)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`perspective-800 ${className}`}>
      <div 
        ref={cubeRef}
        className="relative preserve-3d w-full h-full"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* Front face */}
        <div 
          className="absolute w-full h-full backdrop-blur-md border border-opacity-20"
          style={{ 
            transform: `translateZ(${size / 2}px)`,
            background: `${color}10`,
            borderColor: color
          }}
        />
        
        {/* Back face */}
        <div 
          className="absolute w-full h-full backdrop-blur-md border border-opacity-20"
          style={{ 
            transform: `translateZ(${-size / 2}px) rotateY(180deg)`,
            background: `${color}10`,
            borderColor: color
          }}
        />
        
        {/* Right face */}
        <div 
          className="absolute w-full h-full backdrop-blur-md border border-opacity-20"
          style={{ 
            transform: `translateX(${size / 2}px) rotateY(90deg)`,
            width: `${size}px`, 
            height: `${size}px`,
            background: `${color}10`,
            borderColor: color
          }}
        />
        
        {/* Left face */}
        <div 
          className="absolute w-full h-full backdrop-blur-md border border-opacity-20"
          style={{ 
            transform: `translateX(${-size / 2}px) rotateY(-90deg)`,
            width: `${size}px`, 
            height: `${size}px`,
            background: `${color}10`,
            borderColor: color
          }}
        />
        
        {/* Top face */}
        <div 
          className="absolute w-full h-full backdrop-blur-md border border-opacity-20"
          style={{ 
            transform: `translateY(${-size / 2}px) rotateX(90deg)`,
            width: `${size}px`, 
            height: `${size}px`,
            background: `${color}10`,
            borderColor: color
          }}
        />
        
        {/* Bottom face */}
        <div 
          className="absolute w-full h-full backdrop-blur-md border border-opacity-20"
          style={{ 
            transform: `translateY(${size / 2}px) rotateX(-90deg)`,
            width: `${size}px`, 
            height: `${size}px`,
            background: `${color}10`,
            borderColor: color
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedCube;
