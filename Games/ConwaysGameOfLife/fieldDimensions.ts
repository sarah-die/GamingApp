import { Layout } from "./useMeasure";

export const cellSize: number = 30;
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