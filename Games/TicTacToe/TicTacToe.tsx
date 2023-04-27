import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Button } from "../../Elemente/Button";
import { styles } from "./Styles";

type FieldStatus = "" | "X" | "O";
type GameStatus = "active" | "over";

const startInstruction = "X begins. Choose a field to start the game.";
const oInstruction = "O's turn. Choose a field.";
const xInstruction = "X's turn. Choose a field.";
const winnerInstruction = "The game is over. The Winner is ";
const noWinnerInstruction = "The game is over. Both of you played brilliant. It's a draw."
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
  const [gameStatus, setGameStatus] = useState<GameStatus>("active");
  const [fieldStatus, setFieldStatus] = useState<FieldStatus[]>(
    new Array(9).fill("")
  );
  const [currentInstruction, setInstruction] =
    useState<string>(startInstruction);

  const refreshField = (index: number) => {
    if (fieldStatus[index] !== "") return;
    // if (fieldStatus[index]) return;
    const newFieldStatus = [...fieldStatus];
    const [player, numberOfEmptyFields] = getCurrentPlayer(newFieldStatus);
    newFieldStatus[index] = player;
    setFieldStatus(newFieldStatus);
    const playersInstruction: string =
      numberOfEmptyFields % 2 ? oInstruction : xInstruction;
    setInstruction(playersInstruction);
    checkForWinner(newFieldStatus);
  };

  const getCurrentPlayer = (
    newStatus: FieldStatus[]
  ): [FieldStatus, number] => {
    const numberOfEmptyFields = newStatus.filter((el) => {
      return el === "";
    }).length;
    const player: FieldStatus = numberOfEmptyFields % 2 ? "X" : "O";
    return [player, numberOfEmptyFields];
  };

  const checkForWinner = (newFieldStatus: FieldStatus[]) => {
    if (newFieldStatus.every((el) => el !== "")) {
      setGameStatus("over");
      setInstruction(noWinnerInstruction);
    }
    const [w] = getCurrentPlayer(newFieldStatus);
    const winner = w === "X" ? "O" : "X";
    if (determineWinner(newFieldStatus)) {
      setGameStatus("over");
      setInstruction(winnerInstruction + winner + ".");
    }
  };

  const determineWinner = (newFieldStatus: FieldStatus[]): FieldStatus => {
    const [p] = getCurrentPlayer(newFieldStatus);
    const player = p === "X" ? "O" : "X";
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const isFullfilled = condition.every((fieldNumber) => {
        return newFieldStatus[fieldNumber] === player;
      });
      if (isFullfilled) {
        setGameStatus("over");
        return player;
      }
    }
    return "";
  };

  const restart = () => {
    const newFieldStatus = [...fieldStatus];
    newFieldStatus.fill("");
    setFieldStatus(newFieldStatus);
    setInstruction(startInstruction);
    setGameStatus("active");
  };

  return (
    <>
      <View style={styles.outerGamefield}>
        {fieldStatus.map((field, index) => {
          return (
            <TouchableOpacity
              style={styles.innerGamefield}
              disabled={gameStatus === "over"}
              onPress={() => {
                refreshField(index);
              }}
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
