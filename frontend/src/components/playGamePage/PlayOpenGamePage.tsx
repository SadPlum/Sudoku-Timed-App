import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";
import RedoButton from "./RedoButton";
import Title from "./Title";
import Timer from "./Timer";
import SaveGameModal from "./SaveGameModal";
import { generateBoard } from "../../functions/generateBoard/generateBoard";
import { randomizePlayBoard } from "../../functions/randomizePlayBoard/randomizePlayBoard";
import { GameDataInterface } from "../../interfaces/gameDataInterface";
import { TimeInterface } from "../../interfaces/timeInterface";

function PlayGamePage() {
  const [board, setBoard] = useState<number[][]>();
  const [games, setGames] = useState<GameDataInterface | undefined>(undefined);
  const [flatGameBoard, setFlatGameBoard] = useState<number[]>();
  const [flatPlayBoard, setFlatPlayBoard] = useState<number[]>();
  const [lockedPlayBoard, setLockedPlayBoard] = useState<number[]>();
  const [boardArray, setBoardArray] = useState<number[][]>([]);
  const [fullBoard, setFullBoard] = useState<boolean>(false);
  const [time, setTime] = useState<TimeInterface | undefined>(undefined);
  const [complete, setComplete] = useState<boolean>(false);
  const { difficulty, difficultyNums } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/privateGames/new/${difficultyNums}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data.data);
      });
  }, []);

  useEffect(() => {}, []);

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
    <div className="playGamePage">
      <div className="boardSide">
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
              setComplete={setComplete}
            />
          </div>
        )}
        <RedoButton
          setFlatPlayBoard={setFlatPlayBoard}
          setBoardArray={setBoardArray}
          boardArray={boardArray}
        />
        {games && <Timer setTime={setTime} complete={complete} />}
      </div>
      <div className="modalSide">
        {" "}
        {games && complete && time && difficulty && (
          <SaveGameModal
            gameBoard={games.gameBoard}
            playBoard={games.playBoard}
            _id={games._id}
            minutes={time.minutes}
            seconds={time.seconds}
            timeDisplay={time.display}
            difficulty={difficulty}
          />
        )}
      </div>
    </div>
  );
}

export default PlayGamePage;
