import { useState } from "react";
import { FantasyButton } from "./FantasyButton";
import SettingsDialog from "./SettingsDialog";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";

interface MainMenuProps {
  onNewGame: () => void;
}

const MainMenu = ({ onNewGame }: MainMenuProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { t } = useTranslation();

  const handleContinue = () => {
    toast.info(t('continue'), {
      description: t('noSaveFound'),
    });
  };

  const handleLoadGame = () => {
    toast.info(t('saves'), {
      description: t('savesNotImplemented'),
    });
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <>
      {!settingsOpen && (
        <div className="menu-glass rounded-2xl px-8 py-10 md:px-16 md:py-12 text-center animate-fade-in">
          <h1 className="font-cinzel font-bold text-4xl md:text-6xl mb-8 text-primary tracking-widest animate-title-glow">
            {t('title')}
          </h1>

          <div className="flex flex-col gap-4">
            <FantasyButton onClick={handleContinue}>{t('continue')}</FantasyButton>
            <FantasyButton onClick={onNewGame}>{t('newGame')}</FantasyButton>
            <FantasyButton onClick={handleLoadGame}>{t('saves')}</FantasyButton>
            <FantasyButton onClick={() => setSettingsOpen(true)}>{t('settings')}</FantasyButton>
            <FantasyButton onClick={handleExit}>{t('exit')}</FantasyButton>
          </div>

          <p className="mt-8 text-sm text-muted-foreground tracking-wide">
            {t('subtitle')}
          </p>
        </div>
      )}

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
};

export { MainMenu };
