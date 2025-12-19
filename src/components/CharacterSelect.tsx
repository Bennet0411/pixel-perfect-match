import { FantasyButton } from "./FantasyButton";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";

interface CharacterSelectProps {
  onBack: () => void;
}

type Character = "ritter" | "magier" | "irrlicht";

const CharacterSelect = ({ onBack }: CharacterSelectProps) => {
  const { t } = useTranslation();

  const characterInfo: Record<Character, { nameKey: 'knight' | 'mage' | 'wisp'; descKey: 'knightDesc' | 'mageDesc' | 'wispDesc' }> = {
    ritter: { nameKey: 'knight', descKey: 'knightDesc' },
    magier: { nameKey: 'mage', descKey: 'mageDesc' },
    irrlicht: { nameKey: 'wisp', descKey: 'wispDesc' },
  };

  const handleSelectCharacter = (char: Character) => {
    const info = characterInfo[char];
    toast.success(`${t(info.nameKey)}!`, {
      description: t(info.descKey),
    });
  };

  return (
    <div className="menu-glass rounded-2xl px-8 py-10 md:px-16 md:py-12 text-center animate-fade-in">
      <h1 className="font-cinzel font-bold text-4xl md:text-5xl mb-8 text-primary tracking-widest animate-title-glow">
        {t('selectCharacter')}
      </h1>

      <div className="flex flex-col gap-4">
        <FantasyButton onClick={() => handleSelectCharacter("ritter")}>
          {t('knight')}
        </FantasyButton>
        <FantasyButton onClick={() => handleSelectCharacter("magier")}>
          {t('mage')}
        </FantasyButton>
        <FantasyButton onClick={() => handleSelectCharacter("irrlicht")}>
          {t('wisp')}
        </FantasyButton>
        <FantasyButton variant="back" onClick={onBack}>
          {t('back')}
        </FantasyButton>
      </div>
    </div>
  );
};

export { CharacterSelect };
