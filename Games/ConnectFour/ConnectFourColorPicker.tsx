import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../Elemente/Button";
import { ConnectFour } from "./ConnectFour";

export const ConnectFourColorPicker = () => {
  const startGame = () => {
    return ConnectFour;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>"Player X choose a color."</Text>

      <Text style={styles.textStyle}>"Click the button to start the game"</Text>
      <Button
        title={"Start Game"}
        onPress={startGame}
        style={styles.generalButton}
        textStyle={styles.buttonText}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  generalButton: {
    margin: 10,
    backgroundColor: "#d5d5e7",
    borderColor: "#181e5d",
    width: 180,
    alignSelf: "center",
  },
  buttonText: {
    color: "#181e5d",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 15,
    width: "100%",
    backgroundColor: "#e2e2e5",
  },
  textStyle: {
    color: "#181e5d",
    fontSize: 15,
    textAlign: "center",
  },
});
