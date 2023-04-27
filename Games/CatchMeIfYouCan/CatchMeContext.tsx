import { createContext, useContext, useState } from "react";

export type gameStatusType = "instruction" | "ingame" | "over";

type contextType = {
  gameStatus: gameStatusType;
  setGameStatus: (g: gameStatusType) => void;
};

const CatchMeContext = createContext<contextType>({
  gameStatus: "instruction",
  setGameStatus: () => {},
});

export const CatchMeProvider = (props: { children: React.ReactNode }) => {
  const [gameStatus, setGameStatus] = useState<gameStatusType>("instruction");
  return (
    <CatchMeContext.Provider value={{ gameStatus, setGameStatus }}>
      {props.children}
    </CatchMeContext.Provider>
  );
};

export const useCatchMeContext = () => useContext(CatchMeContext);
