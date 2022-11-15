import { RedoButtonInterface } from "../../interfaces/redoButtonInterface";

const RedoButton = ({
  setFlatPlayBoard,
  setBoardArray,
  boardArray,
}: RedoButtonInterface) => {
  const handleClick = () => {
    //   guard clause to keep the boardArray with at least the starting board
    if (boardArray.length <= 1) return;

    // Sets the play board (flat play board) to the second to last board in array
    setFlatPlayBoard(boardArray[boardArray.length - 2]);

    // Temporary array to remove the last board in board array
    let tempArray = boardArray;
    tempArray.pop();

    // Sets the board array to the array minus the last board in array
    setBoardArray(tempArray);
  };

  return (
    <button className="redoBtn" onClick={handleClick}>
      RedoButton
    </button>
  );
};

export default RedoButton;
