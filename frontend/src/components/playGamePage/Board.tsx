import React, { useEffect, useState, useRef } from "react";
import { highlightedNumArray } from "../../functions/highlightedNumArray/highlightedNumArray";

import { boardInterface } from "../../interfaces/gameInterface";

import Cell from "./Cell";

const Board = ({
  boardArray,
  setBoardArray,
  flatPlayBoard,
  flatGameBoard,
  setFlatPlayBoard,
  lockedPlayBoard,
}: boardInterface) => {
  const boardRef = useRef(null);
  const [wrongCheck, setWrongCheck] = useState<undefined | boolean>(undefined);
  const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState<number>(NaN);

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
    const newArray = boardArray;
    console.log(boardArray);
    newArray.push(newFlatPlayBoard);
    setBoardArray(newArray);
  };

  useEffect(() => {
    const cellArray = highlightedNumArray(activeCell);
    setHighlightedCells(cellArray);
  }, [activeCell]);

  return (
    <div>
      {wrongCheck === undefined && (
        <div>
          {" "}
          <button onClick={() => setWrongCheck(true)}>true</button>{" "}
          <button onClick={() => setWrongCheck(false)}>False</button>{" "}
        </div>
      )}
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
