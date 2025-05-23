
import React, { useState, useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
import NeonHeading from "@/components/NeonHeading";
import ServiceCard from "@/components/ServiceCard";
import TeamMember from "@/components/TeamMember";
import ContactInfo from "@/components/ContactInfo";
import NeonButton from "@/components/NeonButton";
import { ExternalLink, Globe, Code, Phone, AppWindow, Cpu, ChevronDown, ArrowDownCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

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
        <div className="grid-pattern w-full h-full fixed top-0 left-0 animate-grid-flash"></div>
        <ParticlesBackground />
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center animate-float">
          <NeonHeading className="text-5xl md:text-6xl lg:text-7xl">
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
      <div className="grid-pattern w-full h-full fixed top-0 left-0 animate-grid-flash"></div>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="space-y-6">
            <div className="inline-block mb-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-purple/30">
              <p className="text-sm font-medium shimmer-text">Coming Soon</p>
            </div>
            
            <NeonHeading className="text-4xl md:text-5xl lg:text-6xl mb-4">
              FLOCTET TECHNOLOGIES
            </NeonHeading>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Affordable web development, apps, and AI solutions crafted by talented students.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <NeonButton 
                color="blue"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </NeonButton>
              
              <NeonButton 
                color="purple"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </NeonButton>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 hover:text-white"
          >
            <ArrowDownCircle className="h-10 w-10" />
          </button>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NeonHeading className="text-3xl md:text-4xl mb-4">Our Services</NeonHeading>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Premium digital solutions at student-friendly prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Website Development"
              description="Custom, responsive websites designed to showcase your brand and engage your audience."
              icon={Globe}
            />
            
            <ServiceCard 
              title="Web Applications"
              description="Interactive, feature-rich web apps built with modern technologies."
              icon={AppWindow}
            />
            
            <ServiceCard 
              title="Software Development"
              description="Custom software solutions designed to improve your business processes."
              icon={Code}
            />
            
            <ServiceCard 
              title="Mobile Applications"
              description="Native and cross-platform mobile apps for Android and iOS."
              icon={Phone}
            />
            
            <ServiceCard 
              title="AI/ML Solutions"
              description="Intelligent systems and algorithms to automate and enhance your business."
              icon={Cpu}
            />
            
            <ServiceCard 
              title="Domain Deployment"
              description="Optional domain setup and deployment services available for an additional fee."
              icon={ExternalLink}
            />
          </div>
        </div>
      </section>
      
      <Separator className="max-w-md mx-auto bg-neon-purple/30" />
      
      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NeonHeading className="text-3xl md:text-4xl mb-4">Our Team</NeonHeading>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the talented students behind FLOCTET TECHNOLOGIES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <TeamMember 
              name="DEEPAK RAJ R"
              role="Founder"
              skills={["Full-Stack Developer", "AI Developer", "Software Developer"]}
              imageUrl="https://placehold.co/400x400/111111/FFFFFF?text=DR"
              instagramUrl="https://www.instagram.com/dee_pakrajr/"
            />
            
            <TeamMember 
              name="AKHILESH JC"
              role="Co-Founder"
              skills={["Back-End Developer", "Software Developer"]}
              instagramUrl="https://www.instagram.com/jc.codes2008/"
            />
          </div>
        </div>
      </section>
      
      <Separator className="max-w-md mx-auto bg-neon-blue/30" />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NeonHeading className="text-3xl md:text-4xl mb-4">Get In Touch</NeonHeading>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Reach out for a consultation.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="pt-20 pb-8 px-4 text-center">
        <a href="https://floctet.tech" className="inline-block shimmer-text text-xl font-orbitron font-bold mb-3">
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
