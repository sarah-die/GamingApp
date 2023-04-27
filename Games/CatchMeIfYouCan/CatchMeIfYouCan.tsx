import { GameInstructions } from "./GameInstructions";
import { Ingame } from "./Ingame";
import { CatchMeProvider, useCatchMeContext } from "./CatchMeContext";

export const CatchMeIfYouCan = () => (
  <CatchMeProvider>
    <GameScreens />
  </CatchMeProvider>
);

export const GameScreens = () => {
  const ctx = useCatchMeContext();

  if (ctx.gameStatus === "instruction") {
    return <GameInstructions />;
  } else {
    return <Ingame />;
  }
};
