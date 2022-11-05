const { checkComplete } = require("./checkComplete");

const {
  testIncompletePlayBoard,
  testFullPlayBoard,
  testWrongFullBoard,
} = require("../../testBoardsData/testCheckCompleteBoards");

// checkComplete(gameBoard: number[], playBoard: number[]) tests if both strings are the same.

describe("checkComplete", () => {
  test("check  complete and true board", () => {
    const check = checkComplete(testFullPlayBoard, testFullPlayBoard);
    expect(check).toBe(true);
  });
  test("check complete and false board", () => {
    console.log("*********false*********8");
    const check = checkComplete(testFullPlayBoard, testWrongFullBoard);
    expect(check).toBe(false);
  });
  test("check incomplete board", () => {
    const check = checkComplete(testFullPlayBoard, testIncompletePlayBoard);
    expect(check).toBe(undefined);
  });
});
