
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import NeonButton from "./NeonButton";
import FloatingSphere from "./FloatingSphere";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <Card className={cn("border border-neon-green/30 bg-black/40 backdrop-blur-sm relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingSphere size={80} color="#00ff9d" className="top-[-15%] right-[-5%] opacity-10" />
        <FloatingSphere size={60} color="#00ff9d" className="bottom-[-10%] left-[-10%] opacity-10" delay={1.2} />
      </div>
      
      <CardContent className="p-6 relative z-10">
        <h3 className="font-montserrat text-xl text-white mb-6">Contact Us</h3>
        
        <div className="space-y-5">
          <div className="flex items-start gap-4 group transition-all duration-300">
            <MapPin className="h-5 w-5 text-neon-green shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <p className="text-sm font-medium text-white">Location</p>
              <p className="text-sm text-gray-400">Royapuram, Chennai</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group transition-all duration-300">
            <MessageSquare className="h-5 w-5 text-neon-green shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <p className="text-sm font-medium text-white">WhatsApp</p>
              <p className="text-sm text-gray-400">+91 6381687588</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group transition-all duration-300">
            <Mail className="h-5 w-5 text-neon-green shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <p className="text-sm text-gray-400 break-all">floctettechnologies@gmail.com</p>
            </div>
          </div>
          
          <div className="pt-4">
            <NeonButton 
              color="green" 
              className="w-full hover:translate-y-[-2px] transition-transform" 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdrR-i4XteXw0CFmMnbc7vQp3ylv6Wk-wepbPzeEAv-PwjvKQ/viewform', '_blank')}
            >
              Book Pre-order
            </NeonButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
