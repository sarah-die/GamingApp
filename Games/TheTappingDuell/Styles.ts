import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
export const windowHeight = (Dimensions.get("window").height) - 75;

export const styles = StyleSheet.create({
  outerGamefield: {
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    flexDirection: 'column',
  },
  playerTouchable: {
    width: windowWidth,
  },
  buttonText: {
    color: "#181e5d",
    fontSize: 22,
    textAlign: "center",
  },
  textStyle: {
    color: "#181e5d",
    fontSize: 18,
    textAlign: "center",
  },
});
