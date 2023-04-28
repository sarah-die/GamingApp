import { StyleSheet } from "react-native";
import { border } from "./fieldDimensions";

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
    borderWidth: border,
    borderColor: "#000000",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cellField: {
    borderWidth: 0.5,
    borderColor: "#000000",
  },
});
