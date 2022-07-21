import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Button } from "../Elemente/Button";

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
  anleitung: {
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000000",
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  fieldText: {
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000000",
    fontSize: 12,
    fontFamily: "sans-serif",
  },
});

type Status = "" | "X" | "O";

export const TicTacToe = () => {
  const [currentStatus, setStatus] = useState<Status[]>(new Array(9).fill(""));

  const refreshField = (index: number) => {
    if (currentStatus[index] !== "") return;
    // if (currentStatus[index]) return;
    const newStatus = [...currentStatus];
    const numberOfEmptyFields = newStatus.filter((el) => {
      return el === "";
    }).length;
    const player: Status = numberOfEmptyFields % 2 ? "X" : "O";
    newStatus[index] = player;
    setStatus(newStatus);
  };

  return (
    <>
      <View style={styles.outerField}>
        {currentStatus.map((field, index) => {
          const thisRefresh = () => {
            refreshField(index);
          };
          return (
            <TouchableOpacity
              style={styles.innerField}
              // disabled={!!field}
              // onPress={() => {refreshField(index)}}
              onPress={thisRefresh}
              key={index}
            >
              <Text style={styles.fieldText}>{field}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.anleitung}>
        X fängt an. Tippe ein Feld zum Starten an.
      </Text>
    </>
  );
};
