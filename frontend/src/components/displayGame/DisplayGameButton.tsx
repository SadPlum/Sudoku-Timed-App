import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const { blankBoard } = require("../../testBoardsData/testBoards");

function DisplayGameButton() {
  let board = blankBoard;
  return <Link to="/gamepage">btn</Link>;
}

export default DisplayGameButton;
