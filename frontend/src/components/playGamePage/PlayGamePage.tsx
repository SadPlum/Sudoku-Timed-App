import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";
import RedoButton from "./RedoButton";
import Title from "./Title";
import Timer from "./Timer";
const {
  generateBoard,
} = require("../../functions/generateBoard/generateBoard");
const {
  randomizePlayBoard,
} = require("../../functions/randomizePlayBoard/randomizePlayBoard");

interface GameData {
  gameBoard: number[][];
  playBoard: number[][];
  _id: string;
}

function PlayGamePage() {
  const [board, setBoard] = useState<number[][]>();
  const [games, setGames] = useState<GameData | undefined>(undefined);
  const [flatGameBoard, setFlatGameBoard] = useState<number[]>();
  const [flatPlayBoard, setFlatPlayBoard] = useState<number[]>();
  const [lockedPlayBoard, setLockedPlayBoard] = useState<number[]>();
  const [boardArray, setBoardArray] = useState<number[][]>([]);
  const { difficulty, difficultyNums } = useParams();
  const [fullBoard, setFullBoard] = useState<boolean>(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/privateGames/new/${difficultyNums}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data.data);
      });
  }, []);

  useEffect(() => {
    if (games) {
      setFlatGameBoard(games.gameBoard.flat());
      setFlatPlayBoard(games.playBoard.flat());
      setLockedPlayBoard(games.playBoard.flat());
      const newArray: number[][] = [games.playBoard.flat()];
      setBoardArray(newArray);
    }
  }, [games]);

  return (
    <div>
      {difficulty && <Title difficulty={difficulty} />}

      {flatPlayBoard && lockedPlayBoard && flatGameBoard && (
        <div className="boardArea">
          <Board
            boardArray={boardArray}
            setBoardArray={setBoardArray}
            flatPlayBoard={flatPlayBoard}
            flatGameBoard={flatGameBoard}
            setFlatPlayBoard={setFlatPlayBoard}
            lockedPlayBoard={lockedPlayBoard}
            setFullBoard={setFullBoard}
          />
        </div>
      )}
      <RedoButton
        setFlatPlayBoard={setFlatPlayBoard}
        setBoardArray={setBoardArray}
        boardArray={boardArray}
      />
      <Timer />
    </div>
  );
}

export default PlayGamePage;
