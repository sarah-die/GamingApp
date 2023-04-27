import React, { createContext, useContext, useState } from "react";

/** Make status and values globally available. **/

//global verfügbare Eigenschaften
type contextType = {
  colorA: string;
  colorB: string;
  setColorA: (c: string) => void;
  setColorB: (c: string) => void;
  status: Status;
  setStatus: (s: Status) => void;
  colorPickerStatus: ColorPickerStatus;
  setColorPickerStatus: (s: ColorPickerStatus) => void;
  currentGameStatus: GameStatus;
  setGameStatus: (g: GameStatus) => void;
};

// neuer Context mit dem Typ und Initialwerten; hier irrelevant
const ConnectFourContext = createContext<contextType>({
  colorA: "",
  setColorA: () => {},
  colorB: "",
  setColorB: () => {},
  status: "pickColor",
  setStatus: () => {},
  colorPickerStatus: "off",
  setColorPickerStatus: () => {},
  currentGameStatus: "active",
  setGameStatus: () => {},
});

const initialColor1 = "black";
const initialColor2 = "white";
export type Status = "pickColor" | "play";
export type ColorPickerStatus = "onA" | "onB" | "off";
export type GameStatus = "active" | "over";

export const ConnectFourProvider = (props: { children: React.ReactNode }) => {
  const [colorA, setColorA] = useState<string>(initialColor1);
  const [colorB, setColorB] = useState<string>(initialColor2);
  const [status, setStatus] = useState<Status>("pickColor");
  const [colorPickerStatus, setColorPickerStatus] =
    useState<ColorPickerStatus>("off");
  // ToDo wenn Gewinner gefunden, dann soll kein Anklicken der Felder mehr möglich sein
  const [currentGameStatus, setGameStatus] = useState<GameStatus>("active");

  return (
    <ConnectFourContext.Provider
      value={{
        colorA,
        setColorA,
        colorB,
        setColorB,
        status,
        setStatus,
        colorPickerStatus,
        setColorPickerStatus,
        currentGameStatus,
        setGameStatus,
      }}
    >
      {props.children}
    </ConnectFourContext.Provider>
  );
};

export const useConnectFourContext = () => useContext(ConnectFourContext);
