import { ReactNode } from "react";
import backgroundImage from "@/assets/background.jpg";
import characterBgImage from "@/assets/character_bg.jpg";

interface GameScreenProps {
  children: ReactNode;
  variant?: "menu" | "character";
}

const GameScreen = ({ children, variant = "menu" }: GameScreenProps) => {
  const bgImage = variant === "menu" ? backgroundImage : characterBgImage;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="screen-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Decorative magical particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-magic-blue/40 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { GameScreen };
