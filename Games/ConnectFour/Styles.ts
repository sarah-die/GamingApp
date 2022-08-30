import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  outerGamefield: {
    width: windowWidth,
    height: windowWidth - (1 / 7) * windowWidth,
    display: "flex",
    padding: 9,
    backgroundColor: "#e2e2e5",
    flexDirection: "row",
  },
  columnTouchable: {
    width: "14.2857%", // (1/7) * windowWidth
    height: "100%",
    display: "flex",
    flexDirection: 'column'
  },
  innerGamefield: {
    width: "100%", // (1/7) * windowWidth
    height: "16.333%",
    borderColor: "#181e5d",
    borderWidth: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5d5e7",
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
    margin: 15,
    padding: 12,
    backgroundColor: "#d5d5e7",
    borderColor: "#181e5d",
    // width: 180,

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
