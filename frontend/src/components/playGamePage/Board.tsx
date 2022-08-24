import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import Cell from "./Cell";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const {
  randomizePlayBoard,
} = require("../../functions/randomizePlayBoard/randomizePlayBoard");

function Board() {
  const boardRef = useRef(null);
  const { difficulty, difficultyNums } = useParams();
  const [board, setBoard] = useState<number[][]>();
  const [flatGameBoard, setFlatGameBoard] = useState<number[]>();
  const [flatPlayBoard, setFlatPlayBoard] = useState<number[]>();
  const [lockedPlayBoard, setLockedPlayBoard] = useState<number[]>();
  const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState<number>(NaN);
  const [fullBoard, setFullBoard] = useState<boolean>(false);
  const [redoArray, setRedoArray] = useState<number[][]>([]);

  // Generates a nested board array
  // Sets board as the active board
  useEffect(() => {
    const generatedBoard: number[][] = generateBoard();
    setBoard(generatedBoard);
  }, []);

  // If board is created, flattens board.
  // Creates a game board which does not change. (Used to validate if play board is valid)
  // Creates a play board string based off the difficulty given (Board to be mutated)
  // Creats a flattened board as the playing board (Creates a copy of play board to know
  // which numbers are locked and which can be mutated).
  useEffect(() => {
    if (board) {
      setFlatGameBoard(board.flat());
      const playBoard = randomizePlayBoard(board, difficultyNums);
      setFlatPlayBoard(playBoard);
      setLockedPlayBoard(playBoard);
    }
  }, [board]);

  // If a cell has been changed, update the play board state to update the display
  const changeCellNum = (
    index: number,
    newNum: number,
    flatPlayBoard: number[]
  ) => {
    const newFlatPlayBoard: number[] = flatPlayBoard.map((oldNum, i) =>
      i === index ? newNum : oldNum
    );
    setFlatPlayBoard(newFlatPlayBoard);
    const newArray = redoArray;
    newArray.push(newFlatPlayBoard);
    setRedoArray(newArray);
    console.log(redoArray);
  };

  // Used to add highlighted cells to easier visualize board when playing.
  // The math is trial and error. Be warned. It is cursed.
  useEffect(() => {
    // Creates empty array to add values to.
    let arr = [];
    // Gets row and col (x and y axis to iterate over to add to highlighted cells)
    const row = Math.floor(activeCell / 9) * 9;
    const col = activeCell % 9;

    //  adds i to each row and col and pushes to arr array
    for (let i = 0; i < 9; i++) {
      arr.push(row + i);
      arr.push(col + i * 9);
    }

    // This is the cursed part. Will need to be refacted to be better understood
    const cubeRow = Math.floor(Math.floor(row / 9) / 3);
    const cubeCol = Math.floor(col / 3);

    for (let i = cubeRow * 3; i < cubeRow * 3 + 3; i++) {
      for (let j = 0; j < 3; j++) {
        const num = cubeCol * 3 + j + i * 9;
        arr.push(num);
      }
    }

    setHighlightedCells(arr);
  }, [activeCell]);

  return (
    <div className="board" ref={boardRef}>
      <div className="board-grid">
        {flatPlayBoard &&
          flatGameBoard &&
          lockedPlayBoard &&
          flatPlayBoard.map((number: number, i) => {
            return (
              <Cell
                highlighted={highlightedCells.includes(i) ? true : false}
                playNumber={number}
                changeCellNum={changeCellNum}
                playBoard={flatPlayBoard}
                key={i}
                index={i}
                gameNumber={flatGameBoard[i]}
                lockedNumber={lockedPlayBoard[i]}
                setActiveCell={setActiveCell}
                boardRef={boardRef}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Board;
