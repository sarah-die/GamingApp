import { GameField } from "./GameField";
import { StartScreen } from "./StartScreen";
import {
  ConnectFourProvider,
  useConnectFourContext,
} from "./ConnectFourContext";

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
    return <GameField />;
  }
};
