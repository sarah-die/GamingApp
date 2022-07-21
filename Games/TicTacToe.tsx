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

const startInstruction = "X begins. Choose a field to start the game.";
const oInstruction = "O's turn. Choose a field.";
const xInstruction = "X's turn. Choose a field.";
const endInstruction = "The End.";
const winConditions: number[][] = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const TicTacToe = () => {
  const [currentStatus, setStatus] = useState<Status[]>(new Array(9).fill(""));
  const [currentInstruction, setInstruction] =
    useState<string>(startInstruction);

  const refreshField = (index: number) => {
    if (currentStatus[index] !== "") return;
    // if (currentStatus[index]) return;
    const newStatus = [...currentStatus];
    const [player, numberOfEmptyFields] = getCurrentPlayer(newStatus);
    newStatus[index] = player;
    setStatus(newStatus);
    const playersInstruction: string =
      numberOfEmptyFields % 2 ? oInstruction : xInstruction;
    setInstruction(playersInstruction);
    // if (numberOfEmptyFields === 1) displayEnd();
    displayEnd(newStatus);
  };

  const getCurrentPlayer = (newStatus: Status[]): [Status, number] => {
    const numberOfEmptyFields = newStatus.filter((el) => {
      return el === "";
    }).length;
    const player: Status = numberOfEmptyFields % 2 ? "X" : "O";
    return [player, numberOfEmptyFields];
  };

  const restart = () => {
    const newStatus = [...currentStatus];
    newStatus.fill("");
    setStatus(newStatus);
    setInstruction(startInstruction);
  };

  const displayEnd = (newStatus: Status[]) => {
    if (determineWinner(newStatus)) setInstruction(endInstruction);
  };

  const determineWinner = (newStatus: Status[]): Status => {
    const [p] = getCurrentPlayer(newStatus);
    const player = p === 'X' ? 'O' : 'X'
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const isFullfilled = condition.every((fieldNumber) => {
        return newStatus[fieldNumber] === player;
      })
      console.log("condition", i, isFullfilled)
      if (isFullfilled) return player;
    }
    return ""
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
      <Text style={styles.anleitung}>{currentInstruction}</Text>
      <Button text={"Restart Game"} action={restart}></Button>
    </>
  );
};
