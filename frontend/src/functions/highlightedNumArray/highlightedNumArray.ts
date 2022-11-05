// Used to add highlighted cells to easier visualize board when playing.
// The math is trial and error. Be warned. It is cursed.
export const highlightedNumArray = (cell: number) => {
  // Creates empty array to add values to.
  let arr = [];
  // Gets row and col (x and y axis to iterate over to add to highlighted cells)
  const row = Math.floor(cell / 9) * 9;
  const col = cell % 9;

  //  adds i to each row and col and pushes to arr array
  for (let i = 0; i < 9; i++) {
    arr.push(row + i);
    arr.push(col + i * 9);
  }

  // This is the cursed part. Will need to be refacted to be better understood
  const cubeRow = Math.floor(Math.floor(row / 9) / 3);
  const cubeCol = Math.floor(col / 3);

  for (let i = cubeRow * 3; i < cubeRow * 3 + 3; i++) {
    for (let j = 0; j < 3; j++) {
      const num = cubeCol * 3 + j + i * 9;
      arr.push(num);
    }
  }
  return arr;
};
