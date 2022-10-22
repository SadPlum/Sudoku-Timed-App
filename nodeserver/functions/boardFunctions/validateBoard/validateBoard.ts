// checks all numbers are valid on board
// not currently optimized. Will use checkNumValid for now.

// checks every row to make sure there is only 1 of that given number
const validateRow = (board: number[][], num: number, row: number) => {
  // check to count number
  let check: number = 0;
  for (let col = 0; col < 9; col++) {
    // if the cell on the board matches number, increment check
    if (board[row][col] === num) {
      check++;
    }
  }
  // if there is more or less than 1 of the given number in row, return false
  if (check !== 1) {
    return false;
  }
  // only 1 of the given number in that row, return true
  return true;
};

// checks every col to make sure there is only 1 of that given number
const validateCol = (board: number[][], num: number, col: number) => {
  // check to count number
  let check: number = 0;
  for (let row = 0; row < 9; row++) {
    // if the cell on the board matches number, increment check
    if (board[row][col] === num) {
      check++;
    }
  }
  // if there is more or less than 1 of the given number in col, return false
  if (check !== 1) {
    return false;
  }
  // only 1 of the given number in that row, return true
  return true;
};

// checks every 3x3 cube to make sure there is only 1 of that given number
const validateCube = (
  board: number[][],
  num: number,
  row: number,
  col: number
) => {
  // check to count number
  let check: number = 0;
  // for both, 0,1,2 = 0; 3,4,5 = 3; 6,7,8 = 6;
  const colStart = Math.floor(col / 3) * 3;
  const rowStart = Math.floor(row / 3) * 3;
  for (let rowLoop = rowStart; rowLoop < rowStart + 3; rowLoop++) {
    for (let colLoop = colStart; colLoop < colStart + 3; colLoop++) {
      // if the cell on the board matches number, increment check
      if (board[rowLoop][colLoop] === num) {
        check++;
      }
    }
  }
  if (check !== 1) {
    return false;
  }
  return true;
};

// check if there is only one number in each row, col and 3x3 cube.
export const validateBoard = (board: number[][]) => {
  //    for every row
  for (let row = 0; row < 9; row++) {
    // check every column
    for (let col = 0; col < 9; col++) {
      const num: number = board[row][col];
      // if number is equal to 0, return false as no cell should have 0;
      if (num === 0) return false;
      // variables for the checks for clarity
      const checkRow: boolean = validateRow(board, num, row);
      const checkCol: boolean = validateCol(board, num, col);
      const checkCube: boolean = validateCube(board, num, row, col);
      if (checkRow === false || checkCol === false || checkCube === false) {
        return false;
      }
    }
  }
  return true;
};
