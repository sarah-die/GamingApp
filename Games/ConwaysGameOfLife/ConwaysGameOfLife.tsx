// Hier soll mit Hilfe eines States bestimmt werden, welcher Screen angezeigt wird
import { ConwaysProvider, useConwaysContext } from "./ConwaysContext";
import { ConwaysGameFieldScreen } from "./ConwaysGameFieldScreen";

export const ConwaysGameOfLife = () => (
  <ConwaysProvider>
    <GameScreens />
  </ConwaysProvider>
);

export const GameScreens = () => {
  const ctx = useConwaysContext();

  // ToDo: andere Screens ergänzen
  // if (ctx.gameStatus === "dimensions") {
  //   // return <ConwaysDimensionScreen />
  // } else if (ctx.gameStatus === "placement") {
  //   // return <ConwaysPlacementSceen />
  // } else {
  //   return <ConwaysGameFieldScreen />;
  // }

  return <ConwaysGameFieldScreen />;
};
