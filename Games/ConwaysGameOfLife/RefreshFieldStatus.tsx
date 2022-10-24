import { Status } from "./ConwaysGameFieldScreen";
import { checkCell } from "./CheckCell";

export const refreshFieldStatus = (
  currentFieldStatus: Status[],
  cellNumberHeight: number
) => {
  const updatedFieldStatus: Status[] = [];

  for (let i = 0; i < currentFieldStatus.length; i++) {
    updatedFieldStatus[i] = checkCell(currentFieldStatus, i, cellNumberHeight);
  }

  return updatedFieldStatus;
};
