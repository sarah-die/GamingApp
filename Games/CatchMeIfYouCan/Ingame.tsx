import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../Elemente/Button";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import { useCatchMeContext } from "./CatchMeContext";

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

export const Ingame = () => {
  const ctx = useCatchMeContext();
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
    } else if (thisClick === ctx.numberOfClicks) {
      setStartTime(Date.now() - startTime);
    }
  };

  const refresh = () => {
    setCurrentClick(0);
    setCurrentPlacement(generalPlacement(false));
  };

  return (
    <View style={styles.container}>
      <View
        style={
          currentClick > ctx.numberOfClicks ? generalPlacement(false) : currentPlacement
        }
      >
        {currentClick <= ctx.numberOfClicks ? (
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            title={
              currentClick ? "Click nr. " + currentClick : "Click here to start"
            }
            onPress={moveButton}
          />
        ) : (
          <>
            <Text style={styles.textStyle}>Fantastic!</Text>
            <Text style={styles.textStyle}>
              Your time is {startTime / 1000} seconds.
            </Text>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              title={"Refresh"}
              onPress={refresh}
            />
          </>
        )}
        <StatusBar style="auto" />
      </View>
    </View>
  );
};
