import React, { useEffect, useState, useRef } from "react";
import { highlightedNumArray } from "../../functions/highlightedNumArray/highlightedNumArray";

import { boardInterface } from "../../interfaces/boardInterface";
import { checkComplete } from "../../functions/checkComplete/checkComplete";

import { getHighlightedCellsArray } from "../../functions/highlightedCells";

import Cell from "./Cell";
import e from "express";

const Board = ({
  boardArray,
  setBoardArray,
  flatPlayBoard,
  flatGameBoard,
  setFlatPlayBoard,
  lockedPlayBoard,
  setFullBoard,
  setComplete,
}: boardInterface) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [wrongCheck, setWrongCheck] = useState<undefined | boolean>(true);
  const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState<number>(0);

  // If a cell has been changed, update the play board state to update the display
  const changeCellNum = (
    index: number,
    newNum: number,
    flatPlayBoard: number[]
  ) => {
    const gameCompleted = checkComplete(flatGameBoard, flatPlayBoard);
    if (gameCompleted === true) {
      setComplete(true);
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

  const onKey = (code: string) => {
    if (code.includes("Arrow")) {
      if (code === "ArrowUp") {
        if (activeCell - 9 < 0) {
          setActiveCell((activeCell) => activeCell + 72);
        } else {
          setActiveCell((activeCell) => activeCell - 9);
        }
      } else if (code === "ArrowDown") {
        if (activeCell + 9 > 80) {
          setActiveCell((activeCell) => activeCell - 72);
        } else {
          setActiveCell((activeCell) => activeCell + 9);
        }
      } else if (code === "ArrowLeft") {
        if (activeCell - 1 < 0) {
          setActiveCell(80);
        } else {
          setActiveCell((activeCell) => activeCell - 1);
        }
      } else if (code === "ArrowRight") {
        if (activeCell + 1 > 80) {
          setActiveCell(0);
        } else {
          setActiveCell((activeCell) => activeCell + 1);
        }
      }
    }
    if (Number.isInteger(Number(code))) {
      const number = Number(code);
      changeCellNum(activeCell, number, flatPlayBoard);
    }
  };

  useEffect(() => {
    if (boardRef.current !== null) {
      boardRef.current.focus();
    }
  }, [boardRef]);

  return (
    <div
      className="board-container"
      onKeyDown={(e) => {
        e.preventDefault();
        const code = e.key;
        onKey(code);
      }}
      tabIndex={0}
      ref={boardRef}
    >
      {/* {wrongCheck === undefined && (
        <div>
          {" "}
          <button onClick={() => setWrongCheck(true)}>true</button>{" "}
          <button onClick={() => setWrongCheck(false)}>False</button>{" "}
        </div>
      )} */}
      {activeCell}
      {wrongCheck !== undefined && flatPlayBoard && lockedPlayBoard && (
        <div className="board">
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
                  activeCell={activeCell}
                />
              );
            })}
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setFlatPlayBoard(flatGameBoard);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Board;
