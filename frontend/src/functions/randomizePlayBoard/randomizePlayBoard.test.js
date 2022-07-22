const { randomizePlayBoard } = require("./randomizePlayBoard");
const { generateBoard } = require("../generateBoard/generateBoard");
const blankBoard = require("../../testBoardsData/testBoards");

// create a flat board with randomized 0's instead of the valid number
describe("randomizePlayBoard", () => {
  test("should not equal the true board", () => {
    const board = generateBoard(blankBoard);
    const newBoard = randomizePlayBoard(board, 28);
    expect(newBoard).not.toEqual(board);
  });
  test("should have length of 81", () => {
    const board = generateBoard(blankBoard);
    const newBoard = randomizePlayBoard(board, 34);
    expect(newBoard).toHaveLength(81);
  });
  test("should have non 0 numbers equal to argument number", () => {
    const board = generateBoard(blankBoard);

    const newBoard17 = randomizePlayBoard(board, 17);
    let count17 = 0;
    let count170 = 0;
    newBoard17.forEach((num) => {
      if (num !== 0) count17++;
      if (num === 0) count170++;
    });
    expect(count17).toEqual(17);
    expect(count170).toEqual(64);

    const newBoard30 = randomizePlayBoard(board, 30);
    let count30 = 0;
    newBoard30.forEach((num) => {
      if (num !== 0) count30++;
    });
    expect(count30).toEqual(30);
  });
  test("non 0 numbers should be same as valid board", () => {
    const board = generateBoard(blankBoard);
    const flatBoard = board.flat();
    const newBoard = randomizePlayBoard(board, 40);
    let check = true;
    newBoard.forEach((num, i) => {
      if (num !== 0 && newBoard[i] !== flatBoard[i]) {
        check = false;
      }
    });

    expect(check).toEqual(true);
  });
});
