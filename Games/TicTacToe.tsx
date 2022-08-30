import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Button } from "../Elemente/Button";

type Status = "" | "X" | "O";

const startInstruction = "X begins. Choose a field to start the game.";
const oInstruction = "O's turn. Choose a field.";
const xInstruction = "X's turn. Choose a field.";
const endInstruction = "The game is over. The Winner is ";
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

  const displayEnd = (newStatus: Status[]) => {
    const [w] = getCurrentPlayer(newStatus);
    const winner = w === "X" ? "O" : "X";
    if (determineWinner(newStatus)) setInstruction(endInstruction + winner);
  };

  const determineWinner = (newStatus: Status[]): Status => {
    const [p] = getCurrentPlayer(newStatus);
    const player = p === "X" ? "O" : "X";
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const isFullfilled = condition.every((fieldNumber) => {
        return newStatus[fieldNumber] === player;
      });
      console.log("condition", i, isFullfilled);
      if (isFullfilled) return player;
    }
    return "";
  };

  const restart = () => {
    const newStatus = [...currentStatus];
    newStatus.fill("");
    setStatus(newStatus);
    setInstruction(startInstruction);
  };

  return (
    <>
      <View style={styles.outerGamefield}>
        {currentStatus.map((field, index) => {
          const thisRefresh = () => {
            refreshField(index);
          };
          return (
            <TouchableOpacity
              style={styles.innerGamefield}
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
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        title={"Restart Game"}
        onPress={restart}
      ></Button>
    </>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
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
