import { useState } from "react";
import {StyleSheet, Text, View} from "react-native";
import { Button } from "../Elemente/Button";
import { StatusBar } from "expo-status-bar";

const generalPlacement = (random: boolean) => {
  return StyleSheet.create({
    initialPosition: {
      position: "absolute",
      top: random ? Math.random() * 90 + 10 + "%" : "50%",
      left: random ? Math.random() * 90 + 10 + "%" : "50%",
      transform: [{ translateX: -50 }, { translateY: -50 }],
    },
  }).initialPosition;
};

const maxClicks = 10;


export const ClickMe = () => {
  const [currentPlacement, setCurrentPlacement] = useState<
    ReturnType<typeof generalPlacement>
  >(generalPlacement(false));

  const [currentClick, setCurrentClick] = useState<number>(0);

  const [startTime, setStartTime] = useState<number>(0);

  const moveButton = () => {
    setCurrentPlacement(generalPlacement(true));
    const thisClick = currentClick + 1;
    setCurrentClick(currentClick + 1);
    if (thisClick === 1) {
      setStartTime(Date.now());
    } else if (thisClick === maxClicks) {
      setStartTime(Date.now() - startTime);
    }
  };

  const refresh = () => {
    setCurrentClick(0);
    setCurrentPlacement(generalPlacement(false));
  };

  //x === 3 ? 'Hallo' : 'Falsch'

  return (
    <View
      style={
        currentClick > maxClicks ? generalPlacement(false) : currentPlacement
      }
    >
      {currentClick <= maxClicks ? (
        <Button
          text={currentClick ? "Nummer " + currentClick : "Klicke zum Starten"}
          action={moveButton}
        />
      ) : (
        <>
          <Text>Super!</Text>
          <Text>Du hast {startTime / 1000} Sekunden gebraucht.</Text>
          <Button text={"Refresh"} action={refresh} />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
};
