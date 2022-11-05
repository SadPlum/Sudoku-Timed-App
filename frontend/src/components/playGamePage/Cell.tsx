import React, { useState, useEffect, useRef } from "react";
import { CellInterface } from "../../interfaces/cellInterface";

function Cell({
  playNumber,
  wrongCheck,
  highlighted,
  changeCellNum,
  gameNumber,
  lockedNumber,
  index,
  playBoard,
  setActiveCell,
  boardRef,
}: CellInterface) {
  const cellRef = useRef(null);
  // when cell is clicked and the cell isn't a cell visible by default,
  // add the "handleKeyDown event listener to add a number"
  const handleClick = (e: any) => {
    const close = (event: any) => {
      if (event.target !== cellRef.current)
        document.removeEventListener("keydown", handleKeyDown);
    };
    document.removeEventListener("click", close, true);
    setActiveCell(index);
    if (lockedNumber === 0) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", close, true);
    }
  };
  // If the key pressed is a number and is not NaN, add the number to the cell and array
  const handleKeyDown = (a: any) => {
    const keyEvent = Number(a.key);
    if (typeof keyEvent === "number" && isNaN(keyEvent) === false) {
      changeCellNum(index, keyEvent, playBoard);
    }
    document.removeEventListener("keydown", handleKeyDown);
  };

  return (
    <div
      ref={cellRef}
      tabIndex={index}
      className={highlighted ? "cell hightlighted" : "cell"}
      onClick={handleClick}
    >
      <div className={wrongCheck && playNumber !== gameNumber ? "wrong" : ""}>
        <span className={lockedNumber !== 0 ? "locked" : ""}>
          {playNumber !== 0 ? playNumber : ""}
        </span>
      </div>
    </div>
  );
}

export default Cell;
