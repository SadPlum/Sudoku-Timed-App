const { checkRowValid } = require("./checkNum");
// checkRowValid(board,num, row)
// checkColValid(board, num, col)
// checkCubeValid(board, num, row, col)
// checkNumValid(board, num, row, col)

const {
  blankBoard,
  board1Valid,
  board1NotValid,
  board2Valid,
  board2NotValid,
  board3Valid,
} = require("../../testBoardsData/testBoards");

describe("checkRowValid", () => {
  // testing inputs
  test("checkRowValid with not enough arguments", () => {
    expect(checkRowValid(blankBoard, 1)).toBe(false);
  });

  test("checkRowValid with enough arguments", () => {
    expect(checkRowValid(blankBoard, 1, 1)).toBe(true);
  });
  test("checkRowValid with too enough arguments", () => {
    expect(checkRowValid(blankBoard, 1, 1, 1)).toBe(true);
  });
  test("checkRowValid with bad numbers", () => {
    expect(checkRowValid(blankBoard, "a", 1)).toBe(false);
    expect(checkRowValid(blankBoard, 1, "a")).toBe(false);
    expect(checkRowValid(blankBoard, false, 1)).toBe(false);
    expect(checkRowValid(blankBoard, 1, false)).toBe(false);
    expect(checkRowValid(blankBoard, 0, 1)).toBe(false);
    expect(checkRowValid(blankBoard, 10, 1)).toBe(false);
  });
  test("checkRowValid with bad row", () => {
    expect(checkRowValid(blankBoard, 1, "a")).toBe(false);
    expect(checkRowValid(blankBoard, 1, -1)).toBe(false);
    expect(checkRowValid(blankBoard, 1, 9)).toBe(false);
  });

  //   testing on valid and invalid rows
  test("checkRowValid on invalid row", () => {
    expect(checkRowValid(board1Valid, 1, 5)).toBe(false);
    expect(checkRowValid(board1Valid, 1, 6)).toBe(true);
    expect(checkRowValid(blankBoard, "a", 5)).toBe(false);
    expect(checkRowValid(blankBoard, 1, "A")).toBe(false);
  });
});
