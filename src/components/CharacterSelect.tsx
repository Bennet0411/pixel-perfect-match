import { FantasyButton } from "./FantasyButton";
import { toast } from "sonner";

interface CharacterSelectProps {
  onBack: () => void;
}

type Character = "ritter" | "magier" | "irrlicht";

const characterInfo: Record<Character, { name: string; description: string }> = {
  ritter: {
    name: "Ritter",
    description: "Ein edler Krieger mit unerschütterlicher Ehre.",
  },
  magier: {
    name: "Magier",
    description: "Ein Meister der arkanen Künste.",
  },
  irrlicht: {
    name: "Irrlicht",
    description: "Ein mystisches Wesen zwischen den Welten.",
  },
};

const CharacterSelect = ({ onBack }: CharacterSelectProps) => {
  const handleSelectCharacter = (char: Character) => {
    const info = characterInfo[char];
    toast.success(`${info.name} ausgewählt!`, {
      description: info.description,
    });
  };

  return (
    <div className="menu-glass rounded-2xl px-8 py-10 md:px-16 md:py-12 text-center animate-fade-in">
      <h1 className="font-cinzel font-bold text-4xl md:text-5xl mb-8 text-primary tracking-widest animate-title-glow">
        Charakterwahl
      </h1>

      <div className="flex flex-col gap-4">
        <FantasyButton onClick={() => handleSelectCharacter("ritter")}>
          Ritter
        </FantasyButton>
        <FantasyButton onClick={() => handleSelectCharacter("magier")}>
          Magier
        </FantasyButton>
        <FantasyButton onClick={() => handleSelectCharacter("irrlicht")}>
          Irrlicht
        </FantasyButton>
        <FantasyButton variant="back" onClick={onBack}>
          Zurück
        </FantasyButton>
      </div>
    </div>
  );
};

export { CharacterSelect };
