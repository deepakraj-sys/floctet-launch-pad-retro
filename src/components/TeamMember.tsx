
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  skills: string[];
  imageUrl?: string;
  instagramUrl?: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  skills, 
  imageUrl, 
  instagramUrl,
  className 
}) => {
  return (
    <Card className={cn("border border-neon-blue/30 bg-black/40 backdrop-blur-sm hover:border-neon-blue/70 transition-all duration-300", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          {imageUrl && (
            <div className="mb-4 relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-blue glow-effect">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
              </div>
              {instagramUrl && (
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute bottom-0 right-0 bg-neon-blue/80 p-1 rounded-full hover:bg-neon-blue transition-colors"
                >
                  <Instagram className="h-4 w-4 text-black" />
                </a>
              )}
            </div>
          )}
          
          <h3 className="font-orbitron text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-neon-blue font-medium mb-2">{role}</p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="text-xs bg-neon-blue/10 text-neon-blue px-2 py-1 rounded-md border border-neon-blue/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
