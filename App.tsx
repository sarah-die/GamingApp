import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Elemente/Button";
import { useState } from "react";

const generalPlacement = (random: boolean) => {
  return StyleSheet.create({
    initialPosition: {
      position: "absolute",
      top: random ? Math.random() * 100 + "%" : "50%",
      left: random ? Math.random() * 100 + "%" : "50%",
      transform: [{ translateX: -50 }, { translateY: -50 }],
    },
  }).initialPosition;
};

// noinspection JSUnusedGlobalSymbols
export default function App() {
  const [currentPlacement, setCurrentPlacement] = useState<
    ReturnType<typeof generalPlacement>
  >(generalPlacement(false));

  const [currentClick, setCurrentClick] = useState<number>(0);

  const moveButton = () => {
    setCurrentPlacement(generalPlacement(true));
    setCurrentClick(currentClick + 1);
  };

  const refresh = () => {
  setCurrentClick(0)
    setCurrentPlacement(generalPlacement(false))
  }

  //x === 3 ? 'Hallo' : 'Falsch'


  return (
    <View style={currentClick === 11 ? generalPlacement(false) : currentPlacement}>
      {currentClick < 11 ? (
        <Button
          text={currentClick ? "Nummer " + currentClick : "Klicke zum Starten"}
          action={moveButton}
        />
      ) : (
          <>
        <Text>Super!</Text>
          <Button text={"Refresh"} action={refresh}/>
              </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
