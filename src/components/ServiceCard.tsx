
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, className }) => {
  return (
    <Card className={cn("border border-neon-purple/30 bg-black/40 backdrop-blur-sm hover:border-neon-purple/70 transition-all duration-300", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-neon-purple" />
          <CardTitle className="font-montserrat text-lg text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
