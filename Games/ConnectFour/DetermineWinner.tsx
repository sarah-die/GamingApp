import { useConnectFourContext } from "./ConnectFourContext";
import { FieldStatus } from "./GameField";

type Borders = ReturnType<typeof determineBorders>;

export const determineWinner = (
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

const checkTopBottom = (
  borders: Borders,
  currentFieldStatus: FieldStatus[],
  currentField: number
) => {
  const ctx = useConnectFourContext();
  let check = 1;

  let i = 1;
  while (i <= borders.top) {
    if (
      currentFieldStatus[currentField] === currentFieldStatus[currentField - i]
    ) {
      i++;
      check++;
      if (check === 4) {
        ctx.setGameStatus("over");
        break;
      }
    } else {
      break;
    }
  }

  let a = 1;
  while (a <= borders.bottom) {
    if (
      currentFieldStatus[currentField] === currentFieldStatus[currentField + a]
    ) {
      a++;
      check++;
      if (check === 4) {
        ctx.setGameStatus("over");
        break;
      }
    } else {
      break;
    }
  }
};
