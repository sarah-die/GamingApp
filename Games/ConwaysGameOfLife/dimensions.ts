import {Dimensions} from "react-native";

export const cellSize: number = 30;

export const getDim = () = {

    export const cellNumberWidth: number = Math.floor(windowWidth / cellSize);
export const cellNumberHeight: number = Math.floor(windowHeight / cellSize);
}
console.log(cellNumberHeight, cellNumberWidth)