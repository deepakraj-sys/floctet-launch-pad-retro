import React, { useState, useEffect } from 'react';
import EnhancedBackground from "@/components/EnhancedBackground";
import NeonHeading from "@/components/NeonHeading";
import TeamMember from "@/components/TeamMember";
import ContactInfo from "@/components/ContactInfo";
import NeonButton from "@/components/NeonButton";
import { ArrowDownCircle, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import FloatingSphere from '@/components/FloatingSphere';

const Index = () => {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  // Countdown timer
  useEffect(() => {
    // Set launch date - one month from current date
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 1);
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Launch date has passed
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({
        days,
        hours,
        minutes,
        seconds
      });
    };
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const intervalId = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(intervalId);
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
          <NeonHeading className="text-5xl md:text-6xl lg:text-7xl mt-6">
            FLOCTET
          </NeonHeading>
          <div className="h-2 w-48 bg-gradient-to-r from-neon-blue via-neon-lightblue to-neon-cyan rounded-full animate-pulse"></div>
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
          <div className="space-y-8 relative">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full backdrop-blur-sm bg-gradient-to-r from-neon-blue/10 to-neon-lightblue/10 border border-neon-lightblue/30 shadow-lg shadow-neon-blue/10">
              <p className="text-sm font-medium shimmer-text">Launching Soon</p>
            </div>
            
            <NeonHeading className="text-4xl md:text-5xl lg:text-7xl mb-6 relative">
              FLOCTET TECHNOLOGIES
            </NeonHeading>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg">
              Affordable web development, apps, and AI solutions crafted by talented students.
            </p>
            
            {/* Countdown Timer */}
            <div className="flex flex-wrap justify-center gap-4 my-8">
              <div className="countdown-item bg-black/30 backdrop-blur-md p-4 rounded-lg border border-neon-blue/20 w-20">
                <div className="text-3xl font-bold text-white">{countdown.days}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Days</div>
              </div>
              <div className="countdown-item bg-black/30 backdrop-blur-md p-4 rounded-lg border border-neon-blue/20 w-20">
                <div className="text-3xl font-bold text-white">{countdown.hours}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Hours</div>
              </div>
              <div className="countdown-item bg-black/30 backdrop-blur-md p-4 rounded-lg border border-neon-blue/20 w-20">
                <div className="text-3xl font-bold text-white">{countdown.minutes}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Mins</div>
              </div>
              <div className="countdown-item bg-black/30 backdrop-blur-md p-4 rounded-lg border border-neon-blue/20 w-20">
                <div className="text-3xl font-bold text-white">{countdown.seconds}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Secs</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <NeonButton 
                color="blue"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdrR-i4XteXw0CFmMnbc7vQp3ylv6Wk-wepbPzeEAv-PwjvKQ/viewform", "_blank")}
                className="hover:translate-y-[-3px] transition-transform px-6 py-5 text-base"
              >
                Pre-Book Services
              </NeonButton>
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
      
      {/* Team Section */}
      <section id="team" className="py-20 px-4 relative">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingSphere size={300} color="#2563eb" className="top-[10%] right-[-10%] opacity-10" />
          <FloatingSphere size={200} color="#3b82f6" className="bottom-[10%] left-[-5%] opacity-10" delay={1} />
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
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingSphere size={250} color="#60a5fa" className="bottom-[20%] right-[10%] opacity-10" delay={1.2} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <NeonHeading className="text-3xl md:text-4xl mb-4 inline-block relative">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl bg-neon-blue/20 rounded-full -z-10"></div>
            </NeonHeading>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Reach out for a consultation.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <ContactInfo className="transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20" />
            
            <div className="mt-8 text-center">
              <NeonButton 
                color="blue"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdrR-i4XteXw0CFmMnbc7vQp3ylv6Wk-wepbPzeEAv-PwjvKQ/viewform", "_blank")}
                className="hover:translate-y-[-3px] transition-transform px-6 py-3"
              >
                Pre-Book Our Services
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 px-4 relative">
        <div className="max-w-md mx-auto bg-black/30 backdrop-blur-md p-6 rounded-lg border border-neon-blue/20 relative z-10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Get Notified At Launch</h3>
            <p className="text-gray-300 text-sm">Be the first to know when we're fully launched</p>
          </div>
          
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 rounded-md bg-black/40 border border-neon-blue/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
            />
            <button 
              type="submit" 
              className="w-full bg-neon-blue text-white font-medium py-3 rounded-md hover:bg-neon-lightblue transition-colors duration-300"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="pt-12 pb-8 px-4 text-center relative z-10">
        <a 
          href="https://floctet.tech" 
          className="inline-block shimmer-text text-xl font-bold mb-3 transition-all duration-300 hover:scale-110"
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
