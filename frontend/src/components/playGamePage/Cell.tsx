import React, { useState } from "react";

interface Props {
  playNumber: number;
  gameNumber: number;
  index: number;
  highlighted: boolean;
  playBoard: number[];
  lockedNumber: number;
  changeCellNum: Function;
  setActiveCell: Function;
  wrongCheck?: boolean;
}

function Cell({
  playNumber,
  wrongCheck,
  highlighted,
  changeCellNum,
  lockedNumber,
  index,
  playBoard,
  setActiveCell,
}: Props) {
  const handleKeyDown = (a: any) => {
    const keyEvent = Number(a.key);
    if (typeof keyEvent === "number" && isNaN(keyEvent) === false) {
      changeCellNum(index, keyEvent, playBoard);
    }

    document.removeEventListener("keydown", handleKeyDown);
  };

  const handleClick = (e: any) => {
    setActiveCell(index);
    if (lockedNumber === 0) {
      document.addEventListener("keydown", handleKeyDown);
    }
  };

  return (
    <div
      tabIndex={index}
      className={highlighted ? "cell hightlighted" : "cell"}
      onClick={handleClick}
    >
      <div>
        <div>{playNumber !== 0 ? playNumber : ""}</div>
      </div>
    </div>
  );
}

export default Cell;
