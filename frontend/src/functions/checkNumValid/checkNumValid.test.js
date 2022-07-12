const { checkNumValid } = require("./checkNumValid");
// checkCubeValid(board,num, Cube)
// checkColValid(board, num, col)
// checkCubeValid(board, num, row, col)
// checkNumValid(board, num, row, col)

const { blankBoard, board1Valid } = require("../../testBoardsData/testBoards");

describe("CheckNumValid", () => {
  // testing inputs
  test("CheckNumValid with not enough arguments", () => {
    expect(checkNumValid(blankBoard, 1, 1)).toBe(false);
  });
  test("CheckNumValid with enough arguments", () => {
    expect(checkNumValid(blankBoard, 1, 1, 1)).toBe(true);
  });
  test("CheckNumValid with too many arguments", () => {
    expect(checkNumValid(blankBoard, 1, 1, 1, 1, 1)).toBe(true);
    expect(checkNumValid(board1Valid, 1, 8, 1, 1, 1)).toBe(false);
  });
  test("CheckNumValid on valid board", () => {
    expect(checkNumValid(board1Valid, 1, 1, 1)).toBe(true);
    expect(checkNumValid(board1Valid, 1, 7, 1)).toBe(false);
    expect(checkNumValid(board1Valid, 1, 1, 7)).toBe(true);
    expect(checkNumValid(board1Valid, 1, 6, 3)).toBe(true);
  });
});
