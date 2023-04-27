import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button } from "../../Elemente/Button";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import { useCatchMeContext } from "./CatchMeContext";

const generalPlacement = (random: boolean) => {
  return StyleSheet.create({
    initialPosition: {
      position: "absolute",
      top: random ? Math.random() * 70 + 10 + "%" : "30%",
      left: random ? Math.random() * 70 + 10 + "%" : "30%",
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

  useEffect(() => {
    if (currentClick - 1 === ctx.numberOfClicks) {
      Alert.alert(
        "Finished!",
        "Fantastic! It took you " + startTime / 1000 + " seconds."
      );
    }
  }, [currentClick]);

  const refresh = () => {
    setCurrentClick(0);
    setCurrentPlacement(generalPlacement(false));
  };

  return (
    <View style={styles.container}>
      <View
        style={
          currentClick > ctx.numberOfClicks
            ? generalPlacement(false)
            : currentPlacement
        }
      >
        {currentClick <= ctx.numberOfClicks ? (
          <Button
            style={{ ...styles.button, width: 120, height: 120, borderRadius: 20 }}
            textStyle={styles.buttonText}
            title={currentClick ? "Nr. " + currentClick : "Click here to start"}
            onPress={moveButton}
          />
        ) : (
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            title={"Restart"}
            onPress={refresh}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </View>
  );
};
