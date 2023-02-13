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
import { getPrivateGame } from "../../functions/api/apiCalls";
import Leaderboard from "../displayGame/Leaderboard";

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
  const [leaderboard, setLeaderboard] = useState<any>();
  const [difficulty, setDifficulty] = useState<string>();
  const { _id } = useParams<{ _id: string | undefined }>();

  useEffect(() => {
    // received as JSON {
    // status: "success" or "error",
    // data: {object which includes game data}
    // }

    getPrivateGame(_id).then((data) => {
      setGames(data.data.game);
      setLeaderboard(data.data.leaderboard);
      setDifficulty(data.data.game.difficulty);
    });
  }, [_id]);

  useEffect(() => {
    console.log(games);
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
      {leaderboard && <Leaderboard scores={leaderboard} />}
    </div>
  );
}

export default PlayGamePage;
