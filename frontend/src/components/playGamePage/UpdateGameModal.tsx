import { useEffect, useState } from "react";
import { GameDataInterface } from "../../interfaces/gameDataInterface";
import SaveGameInput from "./SaveGameInput";

const UpdateGameModal = ({
  gameBoard,
  playBoard,
  _id,
  minutes,
  seconds,
  timeDisplay,
  difficulty,
  publicGame,
}: GameDataInterface) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [nameReady, setNameReady] = useState<boolean>(false);
  const [returnedURL, setReturnedURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (name && nameReady) {
      updateGame(_id, name, minutes, seconds, publicGame);
    }
  }, [name, nameReady]);

  const updateGame = async (
    _id: string | undefined,
    name: string,
    minutes: number,
    seconds: number,
    publicGame?: boolean
  ) => {
    const time = `${minutes}.${seconds}`;
    const gameType = publicGame ? "open" : "private";
    try {
      const body = { _id: _id, name: name, time: time };

      const response = await fetch(
        `http://localhost:5000/api/v1/${gameType}games/game/${_id}`,
        {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        const body = response.json();
        console.log("body", body);
      });
      const url = publicGame
        ? `http://localhost:3000/public/${_id}`
        : `http://localhost:3000/game/${_id}`;
      setReturnedURL(url);
      return response;
    } catch (err) {
      console.log(err);
    }
    // API call to update the leaderboard
  };

  return (
    <div>
      <span>{name}</span>
      <SaveGameInput
        setName={setName}
        nameReady={nameReady}
        setNameReady={setNameReady}
      />
      {returnedURL && <span>{returnedURL}</span>}
    </div>
  );

  //   push new name and time to leaderboard array in mongo
};

export default UpdateGameModal;
