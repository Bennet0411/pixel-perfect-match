import { useState } from "react";
import { GameScreen } from "@/components/GameScreen";
import { MainMenu } from "@/components/MainMenu";
import { CharacterSelect } from "@/components/CharacterSelect";

type Screen = "menu" | "character";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("menu");

  return (
    <>
      {currentScreen === "menu" && (
        <GameScreen variant="menu">
          <MainMenu onNewGame={() => setCurrentScreen("character")} />
        </GameScreen>
      )}

      {currentScreen === "character" && (
        <GameScreen variant="character">
          <CharacterSelect onBack={() => setCurrentScreen("menu")} />
        </GameScreen>
      )}
    </>
  );
};

export default Index;
