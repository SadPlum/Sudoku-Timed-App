import React, { useEffect } from "react";

const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const { blankBoard } = require("../../testBoardsData/testBoards");

function DisplayGameButton() {
  let board = blankBoard;
  return (
    <button
      onClick={() => {
        generateBoard(board);
      }}
    >
      btn
    </button>
  );
}

export default DisplayGameButton;
