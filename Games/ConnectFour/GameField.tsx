import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../Elemente/Button";
import { styles } from "./Styles";
import { useConnectFourContext } from "./ConnectFourContext";
import { useMemo, useState } from "react";
import { Token } from "../Token";

const touchArea = new Array(7).fill("");

export type FieldStatus = "" | "A" | "B";


const getFieldIndex = (colIndex: number, rowIndex: number) =>
  colIndex * 6 + rowIndex;

export const GameField = () => {
  const ctx = useConnectFourContext();

  const [currentFieldStatus, setFieldStatus] = useState<FieldStatus[]>(
    new Array(42).fill("")
  );

  const currentPlayer = useMemo(() => {
    const emptyFields = currentFieldStatus.filter((el) => el === "").length;
    // if (emptyFields % 2 === 0) {
    //     return 'A'
    // } else {
    //     return 'B'
    // }
    return emptyFields % 2 ? "B" : "A";
  }, [currentFieldStatus]);

  const currentInstruction = useMemo(() => {
    const startInstruction =
      "Player A begins. Choose a column to place your first token.";
    const playerInstruction =
      "Player " + currentPlayer + "turn. Choose a column to place your token.";
    const endInstruction = "The game is over. The Winner is ";

    const emptyFields = currentFieldStatus.filter((el) => el === "").length;
    if (emptyFields === 42) {
      return startInstruction;
    } else if (emptyFields % 2 === 0) {
      return playerInstruction;
    } else {
      return playerInstruction;
    }
  }, [currentFieldStatus]);

  const placeToken = (colIndex: number) => {
    // Range der Felder: 1 + colIndex * 6 bis 6 + colIndex * 6

    const newFieldStatus = currentFieldStatus.slice();

    let a = 5;
    while (a >= 0) {
      let field = a + colIndex * 6;

      if (newFieldStatus[field] === "") {
        if (currentPlayer === "A") {
          newFieldStatus[field] = "A";
          // <Token color={ctx.colorA} size={20} />
        } else {
          newFieldStatus[field] = "B";
          // <Token color={ctx.colorB} size={20} />
        }
        break;
      } else {
        a--;
      }
    }

    setFieldStatus(newFieldStatus);

    // alert("touch");
  };

  console.log(currentFieldStatus);
  return (
    <>
      <View style={styles.outerGamefield}>
        {touchArea.map((_, colIndex) => {
          return (
            <TouchableOpacity
              onPress={() => placeToken(colIndex)}
              style={styles.columnTouchable}
              key={colIndex}
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
          onPress={() => ctx.setStatus("pickColor")}
          style={[styles.generalButton]}
          textStyle={[styles.buttonText, { fontWeight: "bold" }]}
        ></Button>
      </View>
    </>
  );
};
