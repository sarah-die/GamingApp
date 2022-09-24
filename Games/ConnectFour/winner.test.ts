import { checkForWinner } from "./DetermineWinner";

describe("Check determineWinner for", () => {
  test("empty field", () => {
    const fieldStatus = new Array(42).fill("");
    fieldStatus[23] = "A";
    expect(checkForWinner(fieldStatus, 3, 5)).toBe(false);
  });
  test("Player A wins", () => {
    const fieldStatus = new Array(42).fill("");
    fieldStatus[23] = "A";
    fieldStatus[28] = "A";
    fieldStatus[33] = "A";
    fieldStatus[38] = "A";
    expect(checkForWinner(fieldStatus, 3, 5)).toBe(true);
    expect(checkForWinner(fieldStatus, 4, 4)).toBe(true);
    expect(checkForWinner(fieldStatus, 5, 3)).toBe(true);
    expect(checkForWinner(fieldStatus, 6, 2)).toBe(true);
    expect(checkForWinner(fieldStatus, 2, 2)).toBe(false);

  });
});
