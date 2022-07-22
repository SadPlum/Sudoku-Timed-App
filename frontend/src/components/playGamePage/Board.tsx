import React, { useEffect, useState } from "react";
import { GameInterface } from "../../interfaces/gameInterface";
import Cell from "./Cell";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");

function Board() {
  const [board, setBoard] = useState<number[][]>();
  const [flatBoard, setFlatBoard] = useState<number[]>();
  useEffect(() => {
    const generatedBoard: number[][] = generateBoard();
    setBoard(generatedBoard);
  }, []);
  useEffect(() => {
    if (board) {
      const newFlatBoard: number[] = board?.flat();
      setFlatBoard(newFlatBoard);
    }
  }, [board]);
  useEffect(() => {
    console.log(flatBoard);
  }, [flatBoard]);

  return (
    <div className="board">
      {flatBoard &&
        flatBoard.map((number: number) => {
          return <Cell number={number} />;
        })}
    </div>
  );
}

export default Board;
