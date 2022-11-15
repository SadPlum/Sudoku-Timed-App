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
}: GameDataInterface) => {
  const [makeGame, setMakeGame] = useState<boolean | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [nameReady, setNameReady] = useState<boolean>(false);
  const [returnedURL, setReturnedURL] = useState<string | undefined>(undefined);

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
    </div>
  );
};
export default SaveGameModal;
