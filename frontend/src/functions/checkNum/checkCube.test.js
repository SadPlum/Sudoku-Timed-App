const { checkCubeValid } = require("./checkNum");
// checkCubeValid(board,num, Cube)
// checkColValid(board, num, col)
// checkCubeValid(board, num, Cube, col)
// checkNumValid(board, num, Cube, col)

const {
  blankBoard,
  board1Valid,
  board1NotValid,
  board2Valid,
  board2NotValid,
  board3Valid,
} = require("../../testBoardsData/testBoards");

describe("checkCubeValid", () => {
  // testing inputs
  test("checkCubeValid with not enough arguments", () => {
    expect(checkCubeValid(blankBoard, 1, 1)).toBe(false);
  });

  test("checkCubeValid with enough arguments", () => {
    expect(checkCubeValid(blankBoard, 1, 1, 1)).toBe(true);
  });
  test("checkCubeValid with too enough arguments", () => {
    expect(checkCubeValid(blankBoard, 1, 1, 1, 1)).toBe(true);
  });
  test("checkCubeValid with bad numbers", () => {
    expect(checkCubeValid(blankBoard, "a", 1, 1)).toBe(false);
    expect(checkCubeValid(blankBoard, 1, "a", 1)).toBe(false);
    expect(checkCubeValid(blankBoard, 1, 1, "a")).toBe(false);
    expect(checkCubeValid(blankBoard, "a", "a", 1)).toBe(false);
    expect(checkCubeValid(blankBoard, "a", 1, "a")).toBe(false);
    expect(checkCubeValid(blankBoard, 1, "a", "a")).toBe(false);
    expect(checkCubeValid(blankBoard, 1, true, true)).toBe(false);
    expect(checkCubeValid(blankBoard, true, true, 1)).toBe(false);
    expect(checkCubeValid(blankBoard, true, 1, true)).toBe(false);
    expect(checkCubeValid(blankBoard, 0, 1, 1)).toBe(false);
    expect(checkCubeValid(blankBoard, 10, 1, 1)).toBe(false);
  });
  test("checkCubeValid with bad Cube", () => {
    expect(checkCubeValid(blankBoard, 1, "a", 1)).toBe(false);
    expect(checkCubeValid(blankBoard, 1, 1, "a")).toBe(false);
    expect(checkCubeValid(blankBoard, 1, -1, 1)).toBe(false);
    expect(checkCubeValid(blankBoard, 1, 1, -1)).toBe(false);
    expect(checkCubeValid(blankBoard, 1, 9, 1)).toBe(false);
    expect(checkCubeValid(blankBoard, 1, 1, 9)).toBe(false);
  });

  //   testing on valid and invalid Cubes
  test("checkCubeValid on invalid Cube", () => {
    expect(checkCubeValid(board1Valid, 1, 5, 1)).toBe(true);
    expect(checkCubeValid(board1Valid, 1, 1, 1)).toBe(true);
    expect(checkCubeValid(board1Valid, 1, 3, 1)).toBe(true);
    expect(checkCubeValid(board1Valid, 1, 3, 3)).toBe(false);
    expect(checkCubeValid(board1Valid, 1, 1, 3)).toBe(true);
    expect(checkCubeValid(board1Valid, 1, 7, 7)).toBe(false);
    expect(checkCubeValid(board1Valid, 1, 8, 1)).toBe(false);
    expect(checkCubeValid(board1Valid, 1, 7, 5)).toBe(true);
    expect(checkCubeValid(board1Valid, "a", 5, 1)).toBe(false);
    expect(checkCubeValid(board1Valid, 1, "a", 1)).toBe(false);
    expect(checkCubeValid(board1Valid, 1, 1, "a")).toBe(false);
  });
});
