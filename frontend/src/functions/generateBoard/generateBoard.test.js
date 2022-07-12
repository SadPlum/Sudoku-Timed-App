const { generateBoard } = require("./generateBoard");
const { findFirstEmpty } = require("../findFirstEmpty/findFirstEmpty");

const { blankBoard } = require("../../testBoardsData/testBoards");

describe("generateBoard", () => {
  test("board should not equal blankBoard", () => {
    const testBoard = generateBoard();
    expect(testBoard).not.toEqual(blankBoard);
  });
  test("boards should be different", () => {
    const testBoard1 = generateBoard();
    const testBoard2 = generateBoard();
    const testBoard3 = generateBoard();
    const testBoard4 = generateBoard();
    expect(testBoard1).not.toEqual(testBoard2);
    expect(testBoard1).not.toEqual(testBoard3);
    expect(testBoard1).not.toEqual(testBoard4);
    expect(testBoard2).not.toEqual(testBoard3);
    expect(testBoard2).not.toEqual(testBoard4);
    expect(testBoard3).not.toEqual(testBoard4);
  });
  test("board should not have any 0", () => {
    const testBoard = generateBoard();
    const check = findFirstEmpty(testBoard);
    expect(check).toBe(false);
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
      nestedArrayLength.concat(testBoard[i]);
    }
    const nestedArrayLength = nestedArray.length;
    expect(mainArrayLength).toEqual(9);
    expect(nestedArrayLength).toEqual(81);
  });
});
