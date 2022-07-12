const { validateBoard } = require("./validateBoard");

const {
  blankBoard,
  board1Valid,
  board1ValidComplete,
  board1NotValidComplete,
} = require("../../testBoardsData/testBoards");

describe("validateBoard", () => {
  test("Test validateBoard on valid board", () => {
    const check = validateBoard(board1ValidComplete);
    expect(check).toBe(true);
  });

  test("test validateBoard on invalid board", () => {
    const check = validateBoard(board1NotValidComplete);
    expect(check).toBe(false);
  });
});
