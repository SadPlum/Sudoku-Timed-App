export const checkComplete = (gameBoard: number[], playBoard: number[]) => {
  if (playBoard.includes(0)) return undefined;
  for (let i = 0; i < playBoard.length; i++) {
    if (gameBoard[i] !== playBoard[i]) return false;
  }

  return true;
};
