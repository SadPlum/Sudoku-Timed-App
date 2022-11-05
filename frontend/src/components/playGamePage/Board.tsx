import React, { useEffect, useState, useRef } from "react";

import { boardInterface } from "../../interfaces/boardInterface";

import { getHighlightedCellsArray } from "../../functions/highlightedCells";

import Cell from "./Cell";


const {
  checkComplete,
} = require("../../functions/checkComplete/checkComplete");

const Board = ({
  boardArray,
  setBoardArray,
  flatPlayBoard,
  flatGameBoard,
  setFlatPlayBoard,
  lockedPlayBoard,
  setFullBoard,
}: boardInterface) => {
  const boardRef = useRef(null);
  const [wrongCheck, setWrongCheck] = useState<undefined | boolean>(true);
  const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState<number>(NaN);

  // If a cell has been changed, update the play board state to update the display
  const changeCellNum = (
    index: number,
    newNum: number,
    flatPlayBoard: number[]
  ) => {
    const gameCompleted = checkComplete(flatGameBoard, flatPlayBoard);
    if (gameCompleted === true) {
      // Set game to finished, stop timer, have animation, ask player name.
    }
    if (gameCompleted === false) {
      // Will set message saying there is error on board
    }
    const newFlatPlayBoard: number[] = flatPlayBoard.map((oldNum, i) =>
      i === index ? newNum : oldNum
    );
    setFlatPlayBoard(newFlatPlayBoard);
    const newArray = boardArray;
    console.log(boardArray);
    newArray.push(newFlatPlayBoard);
    setBoardArray(newArray);
  };

  useEffect(() => {
    const cellsArray: number[] = getHighlightedCellsArray(activeCell);

    setHighlightedCells(cellsArray);
  }, [activeCell]);

  return (
    <div>
      {/* {wrongCheck === undefined && (
        <div>
          {" "}
          <button onClick={() => setWrongCheck(true)}>true</button>{" "}
          <button onClick={() => setWrongCheck(false)}>False</button>{" "}
        </div>
      )} */}
      {wrongCheck !== undefined && flatPlayBoard && lockedPlayBoard && (
        <div className="board" ref={boardRef}>
          <div className="board-grid">
            {flatPlayBoard.map((number: number, i) => {
              return (
                <Cell
                  wrongCheck={wrongCheck}
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
      )}
    </div>
  );
};

export default Board;
