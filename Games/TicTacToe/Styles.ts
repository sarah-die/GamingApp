import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  outerGamefield: {
    width: windowWidth,
    height: windowWidth,
    display: "flex",
    flexWrap: "wrap",
    padding: 9,
  },
  innerGamefield: {
    width: "33.333%",
    height: "33.333%",
    borderColor: "#181e5d",
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5d5e7",
  },
  anleitung: {
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000000",
    fontSize: 22,
    fontFamily: "sans-serif",
    margin: 5,
    textAlign: "center",
  },
  fieldText: {
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#181e5d",
    fontSize: 40,
    fontFamily: "sans-serif",
  },
  button: {
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
});