import { useConnectFourContext } from "./ConnectFourContext";
import { FieldStatus } from "./GameField";

export const DetermineWinner = (
  colIndex: number,
  rowIndex: number,
  currentField: number,
  currentFieldStatus: FieldStatus[]
) => {
  const ctx = useConnectFourContext();
  // Todo Gewinnbedingungen um gesetztes Feld rum prüfen

  const borders = determineBorders(rowIndex, colIndex);


  // if () {
  //
  //   ctx.setGameStatus("over")
  // } else {
  //
  //   ctx.setGameStatus("active")
  // }
  return;
};
