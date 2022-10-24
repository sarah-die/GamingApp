// Prüfe, wie ein Zelle sich zum nächsten Refresh verändert
import { Status } from "./ConwaysGameFieldScreen";

export const checkCell = (
  currentFieldStatus: Status[],
  cellNumber: number,
  cellNumberHeight: number
) => {
  const numbAlive: number = checkNeighbours(
    currentFieldStatus,
    cellNumber,
    cellNumberHeight
  );

  if (currentFieldStatus[cellNumber] === "alive") {
    if (numbAlive < 2) {
      return "dead";
    } else if (numbAlive === 2 || numbAlive === 3) {
      return "alive";
    } else if (numbAlive > 3) {
      return "dead";
    }
  } else {
    if (numbAlive === 3) {
      return "alive";
    } else {
      return "dead";
    }
  }
};

const checkNeighbours = (
  currentFieldStatus: Status[],
  cellNumber: number,
  cellNumberHeight: number
) => {
  let countAlive: number = 0;
  const neighbours: number[] = [
    -1,
    cellNumberHeight - 1,
    cellNumberHeight,
    cellNumberHeight + 1,
    1,
    -cellNumberHeight + 1,
    -cellNumberHeight,
    -cellNumberHeight - 1,
  ];

  for (let i = 0; i < neighbours.length; i++) {
    if (currentFieldStatus[cellNumber + neighbours[i]] === "alive") {
      countAlive++;
    }
    i++;
  }

  return countAlive;
};
