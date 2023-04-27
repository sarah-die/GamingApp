import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height - 75;

export const styles = StyleSheet.create({
  outerGamefield: {
    width: windowWidth,
    height: windowHeight,
    display: "flex",
    flexDirection: "column",
  },
  playerTouchable: {
    width: windowWidth,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    backgroundColor: "#e2e2e5",
  },
  generalButton: {
    margin: 15,
    padding: 12,
    backgroundColor: "#d5d5e7",
    borderColor: "#181e5d",
    alignSelf: "center",
  },
  buttonText: {
    color: "#181e5d",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    color: "#181e5d",
    fontSize: 22,
    textAlign: "justify",
  },
});
