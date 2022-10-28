import React, { useEffect, useState, useRef } from "react";

import { boardInterface } from "../../interfaces/gameInterface";

import Cell from "./Cell";

const Board: React.FC<boardInterface> = ({
  boardArray,
  setBoardArray,
  flatPlayBoard,
  flatGameBoard,
  setFlatPlayBoard,
  lockedPlayBoard,
  setFullBoard,
}) => {
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
