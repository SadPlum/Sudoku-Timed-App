const { findFirstEmpty } = require("./findFirstEmpty");
// findFirstEmpty(board)
// board is 9x9 (array of 9 sub arrays, each sub array has 9 elements)

const {
  blankBoard,
  board1Valid,
  board1ValidComplete,
  board2Valid,
  filledBoard,
  mostlyFilledBoard,
} = require("../../testBoardsData/testBoards");

describe("findFirstEmpty", () => {
  //    testing on empty and filled boards
  test("findFirstEmpty on empty and filled boards", () => {
    expect(findFirstEmpty(blankBoard)).toStrictEqual([0, 0]);
    expect(findFirstEmpty(filledBoard)).toStrictEqual([-1, -1]);
    expect(findFirstEmpty(board1ValidComplete)).toStrictEqual([-1, -1]);
  });

  //   testing on known boards
  test("findFirstEmpty to return proper values", () => {
    expect(findFirstEmpty(board1Valid)).toStrictEqual([0, 1]);
    expect(findFirstEmpty(board2Valid)).toStrictEqual([0, 2]);
    expect(findFirstEmpty(mostlyFilledBoard)).toStrictEqual([8, 8]);
  });
});
