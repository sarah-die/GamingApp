import { createContext, useContext, useState } from "react";

export type gameStatusType = "instruction" | "ingame" | "over";

type contextType = {
  gameStatus: gameStatusType;
  setGameStatus: (g: gameStatusType) => void;
  numberOfClicks: number;
  setNumberOfClicks: (n: number) => void;
};

const CatchMeContext = createContext<contextType>({
  gameStatus: "instruction",
  setGameStatus: () => {},
  numberOfClicks: 10,
  setNumberOfClicks: () => {},
});

export const CatchMeProvider = (props: { children: React.ReactNode }) => {
  const [gameStatus, setGameStatus] = useState<gameStatusType>("instruction");
  const [numberOfClicks, setNumberOfClicks] = useState<number>(10);
  return (
    <CatchMeContext.Provider
      value={{ gameStatus, setGameStatus, numberOfClicks, setNumberOfClicks }}
    >
      {props.children}
    </CatchMeContext.Provider>
  );
};

export const useCatchMeContext = () => useContext(CatchMeContext);
