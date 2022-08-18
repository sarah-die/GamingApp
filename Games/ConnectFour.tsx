import {useState} from "react";
import {GameField} from "./ConnectFour/GameField";
import {StartScreen} from "./ConnectFour/StartScreen";

const startInstruction =
  "Color X begins. Choose a column to place your first token.";
const color1Instruction = "Color X turn. Choose a column to place your token.";
const color2Instruction = "Color X turn. Choose a column to place your  token.";
const endInstruction = "The game is over. The Winner is ";
const initialColor1 = "black";
const initialColor2 = "white";


const placeToken = () => {};

const restart = () => {
  return StartScreen;
};

const pickColor = () => {};

const refresh = () => {};

export type Status = "pickColor" | "play";
export type ColorPickerStatus = "on" | "off";

export const ConnectFour = () => {
  const [colorA, setColorA] = useState<string>(initialColor1);
  const [colorB, setColorB] = useState<string>(initialColor2);
  const [status, setStatus] = useState<Status>("pickColor");
  const [colorPickerStatus, setColorPickerStatus] =
    useState<ColorPickerStatus>("off");

  if (status === "pickColor") {
    return (
      <StartScreen
        setStatusX={setStatus}
        setColorPickerX={setColorPickerStatus}
        colorPickerStatusX={colorPickerStatus}
      />
    );
  } else {
    return <GameField setStatusX={setStatus} />;
  }
};
