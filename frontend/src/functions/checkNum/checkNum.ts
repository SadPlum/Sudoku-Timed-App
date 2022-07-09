// TYPE AND NUMBER CHECKS

const typeCheckAxis = (col: number, axis: string) => {
  if (col < 0 || col > 8 || typeof col !== "number") {
    console.log(`${axis} is ${col}. ${axis} is type of ${typeof col}`);
    return false;
  }
};

const typeCheckNumber = (num: number) => {
  if (num < 1 || num > 9 || typeof num !== "number") {
    console.log(`num is ${num}. num is type of ${typeof num}`);
    return false;
  }
};

// FUNCTIONS

// Checks if number is valid within the given row (x axis).
// return true if valid, false otherwise
export const checkRowValid = (board: number[][], num: number, row: number) => {
  // check if number and row are valid;
  if (typeCheckNumber(num) === false || typeCheckAxis(row, "row") === false) {
    return false;
  }
  // Starts at index of 0.
  // Ends at index of 8.
  for (let col = 0; col < 9; col++) {
    // if number is in row, return false
    if (board[row][col] === num) return false;
  }
  // number is not in row, return true
  return true;
};

// Checks if number is valid within the given column (y axis).
// return true if valid, false otherwise
export const checkColValid = (board: number[][], num: number, col: number) => {
  // check if number and col are valid;
  if (typeCheckNumber(num) === false || typeCheckAxis(col, "col") === false) {
    return false;
  }
  // Starts at index of 0.
  // Ends at index of 8.
  for (let row = 0; row < 9; row++) {
    // if number is in col return false
    if (board[row][col] === num) return false;
  }
  // number is not in col, return true
  return true;
};

// checks if number is valid within a 3x3 cube.
// return true if number is valid, false otherwise
export const checkCubeValid = (
  board: number[][],
  num: number,
  row: number,
  col: number
) => {
  // check if number, row and col are valid;
  if (
    typeCheckNumber(num) === false ||
    typeCheckAxis(row, "row") === false ||
    typeCheckAxis(col, "col") === false
  ) {
    return false;
  }

  // for both, 0,1,2 = 0; 3,4,5 = 3; 6,7,8 = 6;
  const colStart = Math.floor(col / 3) * 3;
  const rowStart = Math.floor(row / 3) * 3;
  for (let rowLoop = rowStart; rowLoop < rowStart + 3; rowLoop++) {
    for (let colLoop = colStart; colLoop < colStart + 3; colLoop++) {
      // if number is in cube, return false
      if (board[rowLoop][colLoop] === num) return false;
    }
  }
  // number is not in 3x3 cube, return true
  return true;
};

export const checkNumValid = (
  board: number[][],
  num: number,
  row: number,
  col: number
) => {
  if (
    checkRowValid(board, num, row) === false ||
    checkColValid(board, num, col) === false ||
    checkCubeValid(board, num, row, col) === false
  ) {
    return false;
  }
  return true;
};
