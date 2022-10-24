import { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { getFieldDimensions } from "./fieldDimensions";
import { useMeasure } from "./useMeasure";
import { checkCell } from "./CheckCell";

export type Status = "dead" | "alive";
export type GameStatus = "dimensions" | "placement" | "inGame";

export const ConwaysGameFieldScreen = () => {
  const m = useMeasure();
  const fieldDimensions = useMemo(() => getFieldDimensions(m.dim), [m.dim]);

  const [currentFieldStatus, setFieldStatus] = useState<Status[]>([]);

  useEffect(() => {
    setFieldStatus(new Array(fieldDimensions?.totalCells).fill("dead"));
  }, [fieldDimensions?.totalCells]);

  const placeLivingCell = (cellNumber: number) => {
    currentFieldStatus[cellNumber] = "alive";
  };

  const checkRules = (cellNumber: number) => {
    checkCell(currentFieldStatus, cellNumber);
  };

  return (
    <>
      <View style={styles.fullScreen}>
        <View style={styles.dimensionHelper} onLayout={m.onLayout}>
          {fieldDimensions && (
            <View
              style={{
                ...styles.gameField,
                width: fieldDimensions.targetWidth,
                height: fieldDimensions.targetHeight,
              }}
            >
              {currentFieldStatus.map((cell, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.cellField}
                  onPress={() => placeLivingCell(index)}
                  // disabled={GameStatus === "inGame"}
                ></TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </>
  );
};
