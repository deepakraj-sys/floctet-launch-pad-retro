
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "blue" | "purple" | "pink" | "green";
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  color = "blue",
  className,
  ...props
}) => {
  const colorStyles = {
    blue: "bg-neon-blue/10 border-neon-blue text-neon-blue hover:bg-neon-blue/20",
    purple: "bg-neon-purple/10 border-neon-purple text-neon-purple hover:bg-neon-purple/20",
    pink: "bg-neon-pink/10 border-neon-pink text-neon-pink hover:bg-neon-pink/20",
    green: "bg-neon-green/10 border-neon-green text-neon-green hover:bg-neon-green/20",
  };

  return (
    <Button
      className={cn(
        "border-2 font-orbitron transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px] backdrop-blur-sm",
        colorStyles[color],
        `hover:shadow-${color === "blue" ? "neon-blue" : color === "purple" ? "neon-purple" : color === "pink" ? "neon-pink" : "neon-green"}`,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NeonButton;
