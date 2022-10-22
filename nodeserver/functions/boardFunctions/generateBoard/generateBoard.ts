const {
  generateRandomNums,
} = require("../generateRandomNums/generateRandomNums");
const { findFirstEmpty } = require("../findFirstEmpty/findFirstEmpty");
const { checkNumValid } = require("../checkNumValid/checkNumValid");
const { validateBoard } = require("../validateBoard/validateBoard");

// Generates a complete, valid sudoku board. Returns it as nested array

export const generateBoard = () => {
  // Base board to iterate over.
  let board: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  // Generate function, uses recursion to try numbers in randomized array until a valid board is found.
  const generate = () => {
    // Finds first empty cell on board, returns as [row, col] representing x and y axis.
    // Returns [-1,-1] if no empty cell
    const [row, col] = findFirstEmpty(board);
    // If no empty cell, return to main function, then return board.
    if (row === -1) {
      return;
    }
    // Creates a randomized array of [1,2,3,4,5,6,7,8,9].
    const numbers: number[] = generateRandomNums(board);
    // Iterate over the randomized array.
    for (let i = 0; i < numbers.length; i++) {
      // Uses index of array to try current number.
      const num: number = numbers[i];
      // If current number is valid, change number on board and run generate function again.
      if (checkNumValid(board, num, row, col) === true) {
        board[row][col] = num;
        generate();
      }
    }
    // Once all numbers placed, check to see if any cell empty.
    // If number does not work (empty cell is 0, but number in numbers array is not valid),
    // set current cell to 0, return to previous generate iteration.
    const [lastRow, lastCol] = findFirstEmpty(board);
    if (lastRow !== -1) {
      board[row][col] = 0;
      return;
    }
  };
  // Run generate function.
  generate();
  const validate = validateBoard(board);
  if (validate) {
    console.log(board);
    return board;
  } else {
    console.log(`Board not valid ${board}`);
  }
};
