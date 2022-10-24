// Hier soll mit Hilfe eines States bestimmt werden, welcher Screen angezeigt wird
import { useConwaysContext } from "./ConwaysContext";
import { ConwaysGameFieldScreen } from "./ConwaysGameFieldScreen";

export const ConwaysGameOfLife = () => {
  const ctx = useConwaysContext();
  if (ctx.gameStatus === "dimensions") {
    // return <ConwaysDimensionScreen />
  } else if (ctx.gameStatus === "placement") {
    // return <ConwaysPlacementSceen />
  } else {
    return <ConwaysGameFieldScreen />;
  }
};
