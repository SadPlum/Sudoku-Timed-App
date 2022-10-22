export const randomizePlayBoard = (board: number[][], num: number) => {
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
  const visibleNums: number[] = newArray.slice(0, num);

  let playBoard: number[] = blankBoard.flat();
  visibleNums.forEach((num) => {
    playBoard[num] = flatBoard[num];
  });

  return playBoard;
};
