import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import {cellNumberHeight, cellNumberWidth} from "./dimensions";
import {useMeasure} from "./useMeasure";

export type Status = "dead" | "alive";
export type GameStatus = "placement" | "inGame";


export const ConwaysGameField = () => {
  const m = useMeasure();
  const [currentFieldStatus, setFieldStatus] = useState<Status[]>(
    new Array(arrayLength).fill("dead")
  );

  const placeLivingCell = (cellNumber: number) => {
    currentFieldStatus[cellNumber] = "alive";
  };

  const checkRules = () => {
    // Aufruf checkCell
  };

  return (
    <>
      <View style={styles.fullScreen}>
        <View style={styles.gameField} onLayout={m.onLayout}>
          {currentFieldStatus.map((cell, index) => (
              null
            // <TouchableOpacity
            //     key={index}
            //   style={styles.cellField}
            //   onPress={() => placeLivingCell(index)}
            //   // disabled={GameStatus === "inGame"}
            // ></TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};
