// Finds first empty cell (empty represented by 0 (zero)) in the nested array.
// Returns an array representing the row and column [row, col]
// Returns invalid numbers, [-1,-1] if no cell is found.
export const findFirstEmpty = (board: number[][]) => {
  // for row (starts at index of 0, goes to 8)
  for (let row = 0; row < 9; row++) {
    //   for col (starts at index of 0, goes to 8)
    for (let col = 0; col < 9; col++) {
      // if cell is 0 (empty) return row and col
      if (board[row][col] === 0) return [row, col];
    }
  }
  //   no empty cell found, returning [-1,-1];
  return [-1, -1];
};
