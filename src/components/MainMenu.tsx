import { FantasyButton } from "./FantasyButton";
import { toast } from "sonner";

interface MainMenuProps {
  onNewGame: () => void;
}

const MainMenu = ({ onNewGame }: MainMenuProps) => {
  const handleContinue = () => {
    toast.info("Weiterspielen", {
      description: "Kein gespeicherter Spielstand gefunden.",
    });
  };

  const handleLoadGame = () => {
    toast.info("Spielstand laden wird vorbereitet...", {
      description: "Diese Funktion ist bald verfügbar.",
    });
  };

  const handleSettings = () => {
    toast.info("Einstellungen", {
      description: "Die Einstellungen werden bald hinzugefügt.",
    });
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <div className="menu-glass rounded-2xl px-8 py-10 md:px-16 md:py-12 text-center animate-fade-in">
      <h1 className="font-cinzel font-bold text-4xl md:text-6xl mb-8 text-primary tracking-widest animate-title-glow">
        ÄONIEN
      </h1>

      <div className="flex flex-col gap-4">
        <FantasyButton onClick={handleContinue}>Weiterspielen</FantasyButton>
        <FantasyButton onClick={onNewGame}>New Game</FantasyButton>
        <FantasyButton onClick={handleLoadGame}>Saves</FantasyButton>
        <FantasyButton onClick={handleSettings}>Einstellungen</FantasyButton>
        <FantasyButton onClick={handleExit}>Exit</FantasyButton>
      </div>

      <p className="mt-8 text-sm text-muted-foreground tracking-wide">
        Ein interaktives Fantasy-Abenteuer
      </p>
    </div>
  );
};

export { MainMenu };
