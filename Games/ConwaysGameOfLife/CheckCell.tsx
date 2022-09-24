import {FieldStatus} from "../ConnectFour/GameField";
import {cellNumberWidth} from "./ConwaysGameField";

export const checkCell = (currentFieldStatus: FieldStatus[], colIndex: number, rowIndex: number) => {

    const currentField = colIndex * cellNumberWidth + rowIndex;

}