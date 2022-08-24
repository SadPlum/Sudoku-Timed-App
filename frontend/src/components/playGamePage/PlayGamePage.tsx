import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import Board from "./Board";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const {
  randomizePlayBoard,
} = require("../../functions/randomizePlayBoard/randomizePlayBoard");

function PlayGamePage() {
  const [board, setBoard] = useState<number[][]>();
  const [flatGameBoard, setFlatGameBoard] = useState<number[]>();
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
    const playBoard = randomizePlayBoard(board, difficultyNums);
    setFlatPlayBoard(playBoard);
    setLockedPlayBoard(playBoard);
  }, []);

  return (
    <div>
      <Board
        setBoardArray={setBoardArray}
        flatPlayBoard={flatPlayBoard}
        setFlatPlayBoard={setFlatPlayBoard}
        lockedPlayBoard={lockedPlayBoard}
      />
      <RedoButton />
    </div>
  );
}

export default PlayGamePage;
