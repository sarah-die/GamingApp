import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Elemente/Button";
import { styles } from "./Styles";
import { useConnectFourContext } from "./ConnectFourContext";
import { useMemo, useState } from "react";
import { Token } from "../../Elemente/Token";
import { checkForWinner } from "./DetermineWinner";

/** The GameFieldScreen consists of the playing fields, the game instructions and a restart button.
 * The playing field is divided into columns. Clicking on them sets the player's token.
 * After each click there is an evaluation whether there is a winner. **/

const touchArea = new Array(7).fill("");

export type FieldStatus = "" | "A" | "B";

const getFieldIndex = (colIndex: number, rowIndex: number) =>
  colIndex * 6 + rowIndex;

export const GameFieldScreen = () => {
  const ctx = useConnectFourContext();

  const [currentFieldStatus, setFieldStatus] = useState<FieldStatus[]>(
    new Array(42).fill("")
  );

  // determines the current player depending on the currentFieldStatus
  const currentPlayer = useMemo(() => {
    const emptyFields = currentFieldStatus.filter((el) => el === "").length;
    // if (emptyFields % 2 === 0) {
    //     return 'A'
    // } else {
    //     return 'B'
    // }
    return emptyFields % 2 ? "B" : "A";
  }, [currentFieldStatus]);

  // changes the current displayed instruction depending on the currentFieldStatus
  const currentInstruction = useMemo(() => {
    const startInstruction =
      "Player A begins. Choose a column to place your first token.";
    const playerInstruction =
      "Player " +
      currentPlayer +
      "'s turn. Choose a column to place your token.";
    const endInstruction =
      "The game is over. Click the button to start a new game.";

    if (ctx.currentGameStatus === "active") {
      const emptyFields: number = currentFieldStatus.filter(
        (el) => el === ""
      ).length;
      if (emptyFields === 42) {
        return startInstruction;
      } else {
        return playerInstruction;
      }
    } else {
      return endInstruction;
    }
  }, [currentFieldStatus]);

  // places the new token in the clicked column and evaluates if the game is over
  const placeToken = (colIndex: number) => {
    // Range der Felder: 1 + colIndex * 6 bis 6 + colIndex * 6
    const newFieldStatus = currentFieldStatus.slice();

    let rowIndex = 5;
    while (rowIndex >= 0) {
      let field = rowIndex + colIndex * 6;

      if (newFieldStatus[field] === "") {
        if (currentPlayer === "A") {
          newFieldStatus[field] = "A";
        } else {
          newFieldStatus[field] = "B";
        }
        break;
      } else {
        rowIndex--;
      }
    }

    if (newFieldStatus.every((el) => el !== "")) {
      ctx.setGameStatus("over");
      Alert.alert(
        "Game Over",
        "The Game is over. You both played strong. The game is a draw."
      );
    }
    if (checkForWinner(newFieldStatus, colIndex, rowIndex)) {
      ctx.setGameStatus("over");
      Alert.alert(
        "Game Over",
        "The Game is over. Congratulations to Player " + currentPlayer + "!"
      );
    }

    setFieldStatus(newFieldStatus);
  };

  // set all values to initial
  const restart = () => {
    ctx.setGameStatus("active");
    ctx.setColorPickerStatus("off");
    ctx.setStatus("pickColor");
  };

  return (
    <>
      <View style={styles.outerGamefield}>
        {touchArea.map((_, colIndex) => {
          return (
            <TouchableOpacity
              onPress={() => placeToken(colIndex)}
              style={styles.columnTouchable}
              key={colIndex}
              disabled={ctx.currentGameStatus === "over"}
            >
              {new Array(6).fill("").map((field, rowIndex) => {
                const i = getFieldIndex(colIndex, rowIndex);
                const el = currentFieldStatus[i];
                return (
                  <View style={styles.innerGamefield} key={rowIndex}>
                    {!!el && (
                      <Token
                        color={el === "A" ? ctx.colorA : ctx.colorB}
                        size={20}
                      />
                    )}
                  </View>
                );
              })}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{currentInstruction}</Text>
        <Button
          title={"Restart"}
          onPress={() => restart()}
          style={[styles.generalButton]}
          textStyle={[styles.buttonText]}
        ></Button>
      </View>
    </>
  );
};
