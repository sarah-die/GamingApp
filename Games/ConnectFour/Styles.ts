import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  outerField: {
    width: windowWidth,
    height: windowWidth - (1 / 7) * windowWidth,
    display: "flex",
    flexWrap: "wrap",
    padding: 9,
  },
  innerField: {
    width: "14.2857%", // (1/7) * windowWidth
    height: "14.2857%",
    borderColor: "#181e5d",
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5d5e7",
  },
  column: {
    width: "14.2857%", // (1/7) * windowWidth
    height: windowWidth - (1 / 7) * windowWidth,
  },
  colorPickerOuter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 30,
  },
  colorPickerInner: {
    borderColor: "#7e8186",
    borderWidth: 2,
    borderRadius: 3,
    padding: 9,
    alignSelf: "center",
  },
  generalButton: {
    margin: 30,
    backgroundColor: "#d5d5e7",
    borderColor: "#181e5d",
    width: 180,
    alignSelf: "center",
  },
  buttonText: {
    color: "#181e5d",

    fontSize: 22,
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
    fontSize: 18,
    textAlign: "center",
  },
});
