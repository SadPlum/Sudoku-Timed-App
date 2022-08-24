import React from "react";

interface Props {
  setFlatPlayBoard: Function;
  setBoardArray: Function;
  boardArray: number[][];
}

const RedoButton = ({ setFlatPlayBoard, setBoardArray, boardArray }: Props) => {
  const handleClick = () => {
    //   guard clause
    if (boardArray.length < 2) return;

    // set
    // setFlatPlayBoard(boardArray[boardArray.length - 2]);
    console.log(boardArray[-1]);
    // const tempArray = boardArray;
    // tempArray.pop();
    // tempArray.pop();
    // setBoardArray(tempArray);
  };

  return <button onClick={handleClick}>RedoButton</button>;
};

export default RedoButton;
