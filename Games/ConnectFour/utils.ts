export const determineBorders = (rowIndex: number, colIndex: number) => {
  const top = rowIndex;
  const right = 6 - colIndex;
  const bottom = 5 - rowIndex;
  const left = colIndex;

  let leftTop = determineDiagonalBorders(left, top);
  let rightTop = determineDiagonalBorders(right, top);
  let rightBottom = determineDiagonalBorders(right, bottom);
  let leftBottom = determineDiagonalBorders(left, bottom);

  return {
    top,
    right,
    bottom,
    left,
    leftTop,
    rightTop,
    rightBottom,
    leftBottom,
  };
};

type Borders = ReturnType<typeof determineBorders>;

const determineDiagonalBorders = (border1: number, border2: number) =>
  Math.min(border1, border2);
