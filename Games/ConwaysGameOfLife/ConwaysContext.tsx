import React, { createContext, useContext, useState } from "react";

export type GameStatus = "dimensions" | "placement" | "inGame";
const initialCellSize = 30;

type contextType = {
  gameStatus: GameStatus;
  setGameStatus: (g: GameStatus) => void;
  cellSize: number;
  setCellSize: (c: number) => void;
};

const ConwaysContext = createContext<contextType>({
  gameStatus: "dimensions",
  setGameStatus: () => {},
  cellSize: initialCellSize,
  setCellSize: () => {},
});

export const ConwaysProvider = (props: { children: React.ReactNode }) => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("dimensions");
  const [cellSize, setCellSize] = useState<number>(initialCellSize);

  return (
    <ConwaysContext.Provider
      value={{ gameStatus, setGameStatus, cellSize, setCellSize }}
    >
      {props.children}
    </ConwaysContext.Provider>
  );
};

export const useConwaysContext = () => useContext(ConwaysContext);
