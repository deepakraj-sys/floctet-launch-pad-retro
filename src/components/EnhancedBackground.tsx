
import React, { useEffect, useRef } from 'react';
import FloatingSphere from './FloatingSphere';

interface EnhancedBackgroundProps {
  className?: string;
}

const EnhancedBackground: React.FC<EnhancedBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Grid settings
    const gridSize = 50;
    const gridOpacity = 0.08;
    const gridColor = "#3b82f6";
    
    // Animate grid
    let offset = 0;
    const animateGrid = () => {
      if (!ctx) return;
      
      offset += 0.5;
      if (offset >= gridSize) {
        offset = 0;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw vertical lines with offset
      for (let x = -offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = `${gridColor}${Math.floor(gridOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw horizontal lines with offset
      for (let y = -offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `${gridColor}${Math.floor(gridOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      requestAnimationFrame(animateGrid);
    };
    
    const animationId = requestAnimationFrame(animateGrid);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-30"
      />
      
      {/* Floating elements */}
      <div className="relative w-full h-full overflow-hidden">
        <FloatingSphere 
          size={200} 
          color="#2563eb" 
          className="top-[15%] left-[10%] opacity-30" 
        />
        <FloatingSphere 
          size={150} 
          color="#3b82f6" 
          delay={1.5} 
          className="bottom-[20%] right-[15%] opacity-20" 
        />
        <FloatingSphere 
          size={120} 
          color="#60a5fa" 
          delay={0.8} 
          className="top-[60%] left-[25%] opacity-15" 
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-background opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background opacity-80"></div>
    </div>
  );
};

export default EnhancedBackground;
