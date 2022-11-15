import React from "react";

interface Props {
  setMakeGame: Function;
}

function SaveGameMakeGame({ setMakeGame }: Props) {
  return (
    <div>
      <h4>
        Would you like to share this game and have your friends try to beat your
        time?
      </h4>

      <button
        onClick={() => {
          setMakeGame(true);
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          setMakeGame(false);
        }}
      >
        No
      </button>
    </div>
  );
}

export default SaveGameMakeGame;
