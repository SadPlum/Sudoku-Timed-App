export const randomizePlayBoard = (
  board: number[][],
  difficultyNum: number
) => {
  let blankBoard: number[][] = [
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

  const numArray: number[] = Array.from(Array(81).keys());
  let newArray: number[] = [];
  for (let i = 80; i >= 0; i--) {
    const max: number = i + 1;
    const randomIndex: number = Math.floor(Math.random() * max);
    newArray.push(numArray[randomIndex]);
    numArray.splice(randomIndex, 1);
  }
  const flatBoard: number[] = board.flat();
  const visibleNums: number[] = newArray.slice(0, difficultyNum);

  let playBoard: number[] = blankBoard.flat();
  visibleNums.forEach((num) => {
    playBoard[num] = flatBoard[num];
  });

  let nestedPlayBoard = blankBoard;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const index = row * 9 + col;
      nestedPlayBoard[row][col] = playBoard[index];
    }
  }

  return nestedPlayBoard;
};
