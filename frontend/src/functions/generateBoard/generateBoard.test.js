const { generateBoard } = require("./generateBoard");
const { findFirstEmpty } = require("../findFirstEmpty/findFirstEmpty");
const { validateBoard } = require("../validateBoard/validateBoard");

const { blankBoard } = require("../../testBoardsData/testBoards");

describe("generateBoard", () => {
  test("board should not equal blankBoard", () => {
    const testBoard = generateBoard();
    expect(testBoard).not.toEqual(blankBoard);
  });
  test("boards should be different", () => {
    const testBoard1 = generateBoard();
    const testBoard2 = generateBoard();

    expect(testBoard1).not.toStrictEqual(testBoard2);
  });
  test("board should not have any 0", () => {
    const testBoard = generateBoard();
    const check = findFirstEmpty(testBoard);
    expect(check).toStrictEqual([-1, -1]);
  });
  test("board should be valid", () => {
    const testBoard = generateBoard();
    const check = validateBoard(testBoard);
    expect(check).toBe(true);
  });
  test("board should have proper length", () => {
    const testBoard = generateBoard();
    const mainArrayLength = testBoard.length;
    let nestedArray = [];
    for (let i = 0; i < mainArrayLength; i) {
      nestedArray.concat(testBoard[i]);
    }
    const nestedArrayLength = nestedArray.length;
    expect(mainArrayLength).toStrictEqual(9);
    expect(nestedArrayLength).toStrictEqual(81);
  });
});
