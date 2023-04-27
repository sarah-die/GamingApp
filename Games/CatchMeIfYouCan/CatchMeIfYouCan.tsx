import { GameInstructions } from "./GameInstructions";
import { Ingame } from "./Ingame";
import { useCatchMeContext } from "./CatchMeContext";

export const CatchMeIfYouCan = () => <GameScreens />;

export const GameScreens = () => {
  const ctx = useCatchMeContext();

  if (ctx.gameStatus === "instruction") {
    return <GameInstructions />;
  } else {
    return <Ingame />;
  }
};
