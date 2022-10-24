import { checkCell } from "./CheckCell";

describe("Check checkCell for", () => {
  test("alive cell to be alive in next generation", () => {
    const fieldStatus = new Array(9).fill("dead");
    fieldStatus[5] = "alive";
    fieldStatus[1] = "alive";
    fieldStatus[2] = "alive";
    fieldStatus[3] = "alive";
    expect(checkCell(fieldStatus, 5, 3)).toBe("alive");
  });
  test("alive cell to be dead in next generation", () => {
    const fieldStatus = new Array(9).fill("dead");
    fieldStatus[5] = "alive";
    fieldStatus[1] = "alive";
    fieldStatus[2] = "alive";
    fieldStatus[3] = "alive";
    fieldStatus[4] = "alive";
    expect(checkCell(fieldStatus, 5, 3)).toBe("dead");
  });
  test("dead cell to be dead in next generation", () => {
    const fieldStatus = new Array(9).fill("dead");
    fieldStatus[1] = "alive";
    fieldStatus[2] = "alive";
    expect(checkCell(fieldStatus, 5, 3)).toBe("dead");
  });
  test("dead cell to be alive in next generation", () => {
    const fieldStatus = new Array(9).fill("dead");
    fieldStatus[1] = "alive";
    fieldStatus[2] = "alive";
    fieldStatus[3] = "alive";
    expect(checkCell(fieldStatus, 5, 3)).toBe("alive");
  });
});
