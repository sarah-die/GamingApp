import { StyleSheet } from "react-native";
import { cellSize } from "./dimensions";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
// const cellNumberWidth = Math.floor(windowWidth / cellSize);
// const cellNumberHeight = Math.floor(windowHeight / cellSize);

export const styles = StyleSheet.create({
  fullScreen: {
    width: "100%",
    height: "100%",
    padding: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dimensionHelper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gameField: {
    borderWidth: 3,
    borderColor: "#000000",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cellField: {
    width: cellSize,
    height: cellSize,
    borderWidth: 1,
    borderColor: "#000000",
  },
});
