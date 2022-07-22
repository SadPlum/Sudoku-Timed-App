const { validateBoard } = require("./validateBoard");

const {
  board1ValidComplete,
  board1Valid,
  board1NotValidComplete,
} = require("../../testBoardsData/testBoards");

describe("validateBoard", () => {
  test("validateBoard on valid board", () => {
    const check = validateBoard(board1ValidComplete);
    expect(check).toBe(true);
  });
  test("validateBoard on not valid board", () => {
    const check = validateBoard(board1NotValidComplete);
    expect(check).toBe(false);
  });
  test("validateBoard on not complete, valid boards", () => {
    const check = validateBoard(board1Valid);
    expect(check).toBe(false);
  });
});
