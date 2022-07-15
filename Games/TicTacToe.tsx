import {Dimensions, StyleSheet, Text, View} from "react-native";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  outerField: {
    width: windowWidth,
    height: windowWidth,
    display: "flex",
    flexWrap: "wrap",
  },
  innerField: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    borderColor: "#000000",
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

type Status = "" | "X" | "O";

export const TicTacToe = () => {
  const [currenStatus, setStatus] = useState<Status[]>(new Array(9).fill(""));
  return (
    <View style={styles.outerField}>
      {currenStatus.map((field, index) => {
        return <View key={index} style={styles.innerField}>
          <Text>{field}{index}</Text>
        </View>;
      })}
    </View>
  );
};
