import React, { useEffect, useState } from "react";
import { GameInterface } from "../../interfaces/gameInterface";
import Cell from "./Cell";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const {
  randomizePlayBoard,
} = require("../../functions/randomizePlayBoard/randomizePlayBoard");

function Board() {
  const [board, setBoard] = useState<number[][]>();
  const [flatGameBoard, setFlatGameBoard] = useState<number[]>();
  const [flatPlayBoard, setFlatPlayBoard] = useState<number[]>();
  useEffect(() => {
    const generatedBoard: number[][] = generateBoard();
    setBoard(generatedBoard);
  }, []);
  useEffect(() => {
    if (board) {
      setFlatGameBoard(board.flat());
      const playBoard = randomizePlayBoard(board, 40);
      setFlatPlayBoard(playBoard);
      console.log(playBoard);
    }
  }, [board]);

  return (
    <div className="board">
      {flatPlayBoard &&
        flatPlayBoard.map((number: number, i) => {
          return <Cell number={number} key={i} />;
        })}
    </div>
  );
}

export default Board;
