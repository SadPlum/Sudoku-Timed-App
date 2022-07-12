const { checkNumValid } = require("../checkNumValid/checkNumValid");

// checks all numbers are valid on board
// not currently optimized. Will use checkNumValid for now.

const;

export const validateBoard = (board: number[][]) => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //    for every row
  for (let row = 0; row < 9; row++) {
    let checkRow = [];
    // check every column
    for (let col = 0; col < 9; col++) {
      const number = board[row][col];
      checkRow.push(number);
      if (checkNumValid(board, number, row, col) === false) {
        console.log(
          `Number on board is invalid. First invalid number is at board[${row}][${col}]`
        );
        return false;
      }
    }
    checkRow.sort((a, b) => a - b);
    if (checkRow !== numberArray) {
      console.log(`Row array at row index ${row} is not valid`);
      return false;
    }
  }

  return true;
};
