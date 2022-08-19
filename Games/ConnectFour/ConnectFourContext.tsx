import React, { createContext, useContext, useState } from "react";

//global verfügbare Eigenschaften
type contextType = {
  colorA: string;
  colorB: string;
  setColorA: (c: string) => void;
  setColorB: (c: string) => void;
};

// neuer Context mit dem Typ und Initialwerten; hier irrelevant
const ConnectFourContext = createContext<contextType>({
  colorA: "",
  colorB: "",
  setColorA: () => {},
  setColorB: () => {},
});

const initialColor1 = "black";
const initialColor2 = "white";

export const ConnectFourProvider = (props: { children: React.ReactNode }) => {
  const [colorA, setColorA] = useState<string>(initialColor1);
  const [colorB, setColorB] = useState<string>(initialColor2);
  return (
    <ConnectFourContext.Provider
      value={{
        colorA,
        setColorA,
        colorB,
        setColorB,
      }}
    >
      {props.children}
    </ConnectFourContext.Provider>
  );
};

export const useConnectFourContext = () => useContext(ConnectFourContext);
