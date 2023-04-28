import { useMeasure } from "./useMeasure";
import { useConwaysContext } from "./ConwaysContext";

export const border: number = 2;

export const useFieldDimensions = () => {
  const {dim, onLayout} = useMeasure();
  const {cellSize} = useConwaysContext();
  if (!dim) return {onLayout};
  const cellNumberWidth: number = Math.floor(
    (dim.width - border * 2) / cellSize
  );
  const cellNumberHeight: number = Math.floor(
    (dim.height - border * 2) / cellSize
  );
  return {
    onLayout,
    cellSize,
    cellNumberWidth,
    cellNumberHeight,
    totalCells: cellNumberWidth * cellNumberHeight,
    targetWidth: cellNumberWidth * cellSize + border * 2,
    targetHeight: cellNumberHeight * cellSize + border * 2,
  };
};

export type FieldDimensions = ReturnType<typeof useFieldDimensions>