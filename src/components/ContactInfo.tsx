
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import NeonButton from "./NeonButton";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <Card className={cn("border border-neon-green/30 bg-black/40 backdrop-blur-sm", className)}>
      <CardContent className="p-6">
        <h3 className="font-orbitron text-xl text-white mb-4">Contact Us</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-neon-green shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Location</p>
              <p className="text-sm text-gray-400">Royapuram, Chennai</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-neon-green shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">WhatsApp</p>
              <p className="text-sm text-gray-400">+91 6381687588</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-neon-green shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <p className="text-sm text-gray-400 break-all">floctettechnologies@gmail.com</p>
            </div>
          </div>
          
          <div className="pt-2">
            <NeonButton 
              color="green" 
              className="w-full" 
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
