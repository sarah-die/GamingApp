import { Layout } from "./useMeasure";
import { useConwaysContext } from "./ConwaysContext";

const ctx = useConwaysContext();
export const cellSize: number = ctx.cellSize;
export const border: number = 2;

export const getFieldDimensions = (dim: Layout | null) => {
  if (!dim) return null;
  const cellNumberWidth: number = Math.floor(
    (dim.width - border * 2) / cellSize
  );
  const cellNumberHeight: number = Math.floor(
    (dim.height - border * 2) / cellSize
  );
  return {
    cellSize,
    cellNumberWidth,
    cellNumberHeight,
    totalCells: cellNumberWidth * cellNumberHeight,
    targetWidth: cellNumberWidth * cellSize + border * 2,
    targetHeight: cellNumberHeight * cellSize + border * 2,
  };
};

export type FieldDimensions = ReturnType<typeof getFieldDimensions>