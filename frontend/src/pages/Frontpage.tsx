import React, { useEffect } from "react";
import DisplayGame from "../components/displayGame/DisplayGame";

function Frontpage() {
  const tempScores = [
    { name: "abc", time: 12.11 },
    { name: "def", time: 15.12 },
    { name: "last", time: 18.2 },
  ];
  return (
    <main className="frontpage">
      {" "}
      <div className="displayGameBox">
        <DisplayGame
          difficulty="begginer"
          difficultyNums={40}
          scores={tempScores}
        />
        <DisplayGame
          difficulty="easy"
          difficultyNums={35}
          scores={tempScores}
        />
        <DisplayGame
          difficulty="medium"
          difficultyNums={30}
          scores={tempScores}
        />
        <DisplayGame
          difficulty="hard"
          difficultyNums={25}
          scores={tempScores}
        />
        <DisplayGame
          difficulty="evil"
          difficultyNums={20}
          scores={tempScores}
        />
        <DisplayGame
          difficulty="diabolical"
          difficultyNums={17}
          scores={tempScores}
        />
      </div>
    </main>
  );
}

export default Frontpage;
