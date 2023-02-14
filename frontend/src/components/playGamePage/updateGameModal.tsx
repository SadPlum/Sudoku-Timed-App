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
}: GameDataInterface) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [nameReady, setNameReady] = useState<boolean>(false);
  const [returnedURL, setReturnedURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (name && nameReady) {
    }
  }, [name, nameReady]);

  const updatePrivateGame = async (
    _id: string,
    name: string,
    minutes: string,
    seconds: string
  ) => {
    const player = {
      name: name,
      time: `${minutes}:${seconds}`,
    };
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/privategames/update/${_id}`,
        {
          method: "PATCH",
          body: JSON.stringify(player),
          headers: { "Content-Type": "applucation/json" },
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
