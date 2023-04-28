import { useEffect, useState } from "react";
import { useFieldDimensions } from "./fieldDimensions";
import { useConwaysContext } from "./ConwaysContext";
import { TouchableOpacity, View } from "react-native";
import { refreshFieldStatus } from "./RefreshFieldStatus";
import { styles } from "./Styles";

export type Status = "dead" | "alive";

export const ConwaysGameFieldScreen = () => {
  const ctx = useConwaysContext();
  const fieldDimensions = useFieldDimensions();
  console.log(fieldDimensions);

  const [currentFieldStatus, setFieldStatus] = useState<Status[]>([]);

  useEffect(() => {
    setFieldStatus(new Array(fieldDimensions?.totalCells).fill("dead"));
  }, [fieldDimensions?.totalCells]);

  const placeLivingCell = (cellNumber: number) => {
    console.log("pressed");
    const newFieldStatus = [...currentFieldStatus]
    newFieldStatus[cellNumber] = "alive";
    setFieldStatus(newFieldStatus)
  };

  const refreshField = () => {
    refreshFieldStatus(
      currentFieldStatus,
      fieldDimensions?.cellNumberHeight || 1
    );
  };

  const startNewGame = () => {
    ctx.setGameStatus("dimensions");
  };

  console.log(currentFieldStatus);

  return (
    <>
      <View style={styles.fullScreen}>
        <View
          style={styles.dimensionHelper}
          onLayout={fieldDimensions!.onLayout}
        >
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
                  style={{
                    ...styles.cellField,
                    width: fieldDimensions.cellSize,
                    height: fieldDimensions.cellSize,
                  }}
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
