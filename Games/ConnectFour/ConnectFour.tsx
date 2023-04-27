import { GameFieldScreen } from "./GameFieldScreen";
import { StartScreen } from "./StartScreen";
import {
  ConnectFourProvider,
  useConnectFourContext,
} from "./ConnectFourContext";

/** Depending on the game status the StartScreen or the  GameFieldScreen are displayed. **/

export const ConnectFour = () => (
  <ConnectFourProvider>
    <InnerConnectFour />
  </ConnectFourProvider>
);

export const InnerConnectFour = () => {
  const ctx = useConnectFourContext();

  if (ctx.status === "pickColor") {
    return <StartScreen />;
  } else {
    return <GameFieldScreen />;
  }
};
