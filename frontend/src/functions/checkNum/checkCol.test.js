const { checkColValid } = require("./checkNum");
// checkRowValid(board,num, row)
// checkColValid(board, num, col)
// checkCubeValid(board, num, row, col)
// checkNumValid(board, num, row, col)

const { blankBoard, board1Valid } = require("../../testBoardsData/testBoards");

describe("checkColValid", () => {
  // testing inputs
  test("checkColValid with not enough arguments", () => {
    expect(checkColValid(blankBoard, 1)).toBe(false);
  });

  test("checkColValid with enough arguments", () => {
    expect(checkColValid(blankBoard, 1, 1)).toBe(true);
  });
  test("checkColValid with too enough arguments", () => {
    expect(checkColValid(blankBoard, 1, 1, 1)).toBe(true);
  });
  test("checkColValid with bad numbers", () => {
    expect(checkColValid(blankBoard, "a", 1)).toBe(false);
    expect(checkColValid(blankBoard, 1, "a")).toBe(false);
    expect(checkColValid(blankBoard, false, 1)).toBe(false);
    expect(checkColValid(blankBoard, 1, false)).toBe(false);
    expect(checkColValid(blankBoard, 0, 1)).toBe(false);
    expect(checkColValid(blankBoard, 10, 1)).toBe(false);
  });
  test("checkColValid with bad col", () => {
    expect(checkColValid(blankBoard, 1, "a")).toBe(false);
    expect(checkColValid(blankBoard, 1, -1)).toBe(false);
    expect(checkColValid(blankBoard, 1, 9)).toBe(false);
  });

  //   testing on valid and invalid rows
  test("checkColValid on invalid col", () => {
    expect(checkColValid(board1Valid, 1, 4)).toBe(false);
    expect(checkColValid(board1Valid, 1, 5)).toBe(true);
    expect(checkColValid(board1Valid, "a", 5)).toBe(false);
    expect(checkColValid(board1Valid, 1, "A")).toBe(false);
  });
});
