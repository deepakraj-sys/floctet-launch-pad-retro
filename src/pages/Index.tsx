
import React, { useState, useEffect } from 'react';
import EnhancedBackground from "@/components/EnhancedBackground";
import NeonHeading from "@/components/NeonHeading";
import TeamMember from "@/components/TeamMember";
import ContactInfo from "@/components/ContactInfo";
import NeonButton from "@/components/NeonButton";
import { ChevronDown, ArrowDownCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedCube from '@/components/AnimatedCube';
import FloatingSphere from '@/components/FloatingSphere';

const Index = () => {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <EnhancedBackground />
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center z-10 animate-float">
          <div className="perspective-800">
            <div className="preserve-3d animate-rotate-3d">
              <AnimatedCube size={80} color="#9d00ff" />
            </div>
          </div>
          <NeonHeading className="text-5xl md:text-6xl lg:text-7xl mt-6">
            FLOCTET
          </NeonHeading>
          <div className="h-2 w-48 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full animate-pulse"></div>
          <p className="text-gray-300 text-lg animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <EnhancedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4">
        <div 
          className="max-w-4xl mx-auto text-center relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="space-y-6 relative">
            {/* 3D elements */}
            <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-full">
              <div className="perspective-800 mx-auto" style={{ width: "200px", height: "200px" }}>
                <AnimatedCube size={200} color="#00f0ff" />
              </div>
            </div>
            
            <div className="inline-block mb-2 px-4 py-1.5 rounded-full backdrop-blur-sm bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-purple/30 shadow-lg shadow-neon-purple/10">
              <p className="text-sm font-medium shimmer-text">Coming Soon</p>
            </div>
            
            <NeonHeading className="text-4xl md:text-5xl lg:text-6xl mb-4 relative">
              FLOCTET TECHNOLOGIES
            </NeonHeading>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg">
              Affordable web development, apps, and AI solutions crafted by talented students.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <NeonButton 
                color="blue"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:translate-y-[-3px] transition-transform px-6 py-5 text-base"
              >
                Contact Us
              </NeonButton>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 hover:text-white"
          >
            <ArrowDownCircle className="h-10 w-10" />
          </button>
        </div>
      </section>
      
      {/* Team Section with 3D elements */}
      <section id="team" className="py-20 px-4 relative">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingSphere size={300} color="#00f0ff" className="top-[10%] right-[-10%] opacity-10" />
          <FloatingSphere size={200} color="#9d00ff" className="bottom-[10%] left-[-5%] opacity-10" delay={1} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <NeonHeading className="text-3xl md:text-4xl mb-4 inline-block relative">
              <span className="relative z-10">Founder</span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl bg-neon-blue/20 rounded-full -z-10"></div>
            </NeonHeading>
          </div>
          
          <div className="max-w-md mx-auto backdrop-blur-sm">
            <TeamMember 
              name="DEEPAK RAJ R"
              role="Founder"
              skills={["Full-Stack Developer", "AI Developer", "Software Developer"]}
              imageUrl="https://placehold.co/400x400/111111/FFFFFF?text=DR"
              instagramUrl="https://www.instagram.com/dee_pakrajr/"
              className="transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20"
            />
          </div>
        </div>
      </section>
      
      <Separator className="max-w-md mx-auto bg-neon-blue/30" />
      
      {/* Contact Section with 3D elements */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="perspective-800 absolute top-[20%] right-[10%]" style={{ width: "100px", height: "100px" }}>
            <AnimatedCube size={100} color="#00ff9d" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <NeonHeading className="text-3xl md:text-4xl mb-4 inline-block relative">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl bg-neon-green/20 rounded-full -z-10"></div>
            </NeonHeading>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Reach out for a consultation.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <ContactInfo className="transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/20" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="pt-20 pb-8 px-4 text-center relative z-10">
        <a 
          href="https://floctet.tech" 
          className="inline-block shimmer-text text-xl font-montserrat font-bold mb-3 transition-all duration-300 hover:scale-110"
        >
          floctet.tech
        </a>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} FLOCTET TECHNOLOGIES. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
