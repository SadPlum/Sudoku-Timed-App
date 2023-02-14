import { useEffect, useState } from "react";

import { GameDataInterface } from "../../interfaces/gameDataInterface";
import SaveGameInput from "./SaveGameInput";
import SaveGameMakeGame from "./SaveGameMakeGame";

const SaveGameModal = ({
  gameBoard,
  playBoard,
  _id,
  minutes,
  seconds,
  timeDisplay,
  difficulty,
}: GameDataInterface) => {
  const [makeGame, setMakeGame] = useState<boolean | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [nameReady, setNameReady] = useState<boolean>(false);
  const [returnedURL, setReturnedURL] = useState<string | undefined>(undefined);

  const createNewPrivateGame = async (data: any) => {
    try {
      const _id = data._id;
      const response = await fetch(
        `http://localhost:5000/api/v1/privategames/new/${_id}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        const body = response.json();
        console.log("body", body);
      });
      const url = `http://localhost:3000/game/${_id}`;
      setReturnedURL(url);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (name && nameReady) {
      // send API
      const data = {
        gameBoard: gameBoard,
        playBoard: playBoard,
        minutes: minutes,
        seconds: seconds,
        time: timeDisplay,
        _id: _id,
        name: name,
        difficulty: difficulty,
      };
      console.log(JSON.stringify(data));
      createNewPrivateGame(data);
    }
  }, [name, nameReady]);

  return (
    <div>
      {/* Tell player time and ask if they would like to share game with others
        if yes, ask for username then s!name end username and time to DB
setMakeGame(false)
        await confirmation !name from DB and then share link to be copied
      */}
      {name}
      <span> </span>
      {timeDisplay}

      {!makeGame && <SaveGameMakeGame setMakeGame={setMakeGame} />}
      {makeGame && (
        <SaveGameInput
          setNameReady={setNameReady}
          nameReady={nameReady}
          setName={setName}
        />
      )}
      {nameReady && <div></div>}
      {returnedURL && <div>{returnedURL}</div>}
    </div>
  );
};
export default SaveGameModal;
