import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";
import RedoButton from "./RedoButton";
import Title from "./Title";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const {
  randomizePlayBoard,
} = require("../../functions/randomizePlayBoard/randomizePlayBoard");

function PlayGamePage() {
  const [board, setBoard] = useState<number[][]>();

  const [flatPlayBoard, setFlatPlayBoard] = useState<number[]>();
  const [lockedPlayBoard, setLockedPlayBoard] = useState<number[]>();
  const [boardArray, setBoardArray] = useState<number[][]>([]);
  const { difficulty, difficultyNums } = useParams();
  const [fullBoard, setFullBoard] = useState<boolean>(false);

  // Generates a nested board array
  // Sets board as the active board
  useEffect(() => {
    const generatedBoard: number[][] = generateBoard();
    setBoard(generatedBoard);
    const playBoard: number[] = randomizePlayBoard(
      generatedBoard,
      difficultyNums
    );
    setFlatPlayBoard(playBoard);
    setLockedPlayBoard(playBoard);
    let newArray: number[][] = [];
    newArray.push(playBoard);
    setBoardArray(newArray);
  }, []);

  return (
    <div>
      {difficulty && <Title difficulty={difficulty} />}

      {flatPlayBoard && lockedPlayBoard && (
        <Board
          boardArray={boardArray}
          setBoardArray={setBoardArray}
          flatPlayBoard={flatPlayBoard}
          setFlatPlayBoard={setFlatPlayBoard}
          lockedPlayBoard={lockedPlayBoard}
        />
      )}
      <RedoButton
        setFlatPlayBoard={setFlatPlayBoard}
        setBoardArray={setBoardArray}
        boardArray={boardArray}
      />
    </div>
  );
}

export default PlayGamePage;
