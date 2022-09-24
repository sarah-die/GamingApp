import { useConnectFourContext } from "./ConnectFourContext";
import { FieldStatus } from "./GameField";
import { determineBorders } from "./utils";

type Borders = ReturnType<typeof determineBorders>;

export const checkForWinner = (
  currentFieldStatus: FieldStatus[],
  colIndex: number,
  rowIndex: number
) => {
  const currentField = colIndex * 6 + rowIndex;
  const c = [currentFieldStatus, currentField] as const;
  const borders = determineBorders(rowIndex, colIndex);

  if (currentFieldStatus[currentField] === "") {
    return false;
  }

  return (
    checkByDirection(...c, borders.top, borders.bottom, 1) ||
    checkByDirection(...c, borders.leftBottom, borders.rightTop, 5) ||
    checkByDirection(...c, borders.left, borders.right, 6) ||
    checkByDirection(...c, borders.leftTop, borders.rightBottom, 7)
  );
};

const checkByDirection = (
  currentFieldStatus: FieldStatus[],
  currentField: number,
  border1: number,
  border2: number,
  delta: 1 | 5 | 6 | 7
) => {

  let check = 1;

  let i = 1;
  while (i <= border1) {
    if (
      currentFieldStatus[currentField] ===
      currentFieldStatus[currentField - i * delta]
    ) {
      i++;
      check++;
      if (check === 4) {
        return true;
      }
    } else {
      break;
    }
  }

  let a = 1;
  while (a <= border2) {
    if (
      currentFieldStatus[currentField] ===
      currentFieldStatus[currentField + a * delta]
    ) {
      a++;
      check++;
      if (check === 4) {
        return true;
      }
    } else {
      break;
    }
  }
  return false;
};
