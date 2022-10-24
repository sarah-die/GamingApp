import { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { getFieldDimensions } from "./fieldDimensions";
import { useMeasure } from "./useMeasure";
import { refreshFieldStatus } from "./RefreshFieldStatus";
import { useConwaysContext } from "./ConwaysContext";

export type Status = "dead" | "alive";

export const ConwaysGameFieldScreen = () => {
  const m = useMeasure();
  const ctx = useConwaysContext();
  const fieldDimensions = useMemo(() => getFieldDimensions(m.dim), [m.dim]);

  const [currentFieldStatus, setFieldStatus] = useState<Status[]>([]);

  useEffect(() => {
    setFieldStatus(new Array(fieldDimensions?.totalCells).fill("dead"));
  }, [fieldDimensions?.totalCells]);

  const placeLivingCell = (cellNumber: number) => {
    currentFieldStatus[cellNumber] = "alive";
  };

  const refreshField = () => {
    refreshFieldStatus(currentFieldStatus, fieldDimensions!.cellNumberHeight);
  };

  const startNewGame = () => {
    ctx.setGameStatus("dimensions");
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
