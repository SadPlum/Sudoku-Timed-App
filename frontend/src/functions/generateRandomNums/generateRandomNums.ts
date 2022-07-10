// returns randomized array of 1 through 9
export const generateRandomNums = () => {
  let numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray: number[] = [];
  for (let i = 8; i >= 0; i--) {
    let max: number = i + 1;
    let randomIndex: number = Math.floor(Math.random() * max);
    newArray.push(numArray[randomIndex]);
    numArray.splice(randomIndex, 1);
  }
  return newArray;
};
