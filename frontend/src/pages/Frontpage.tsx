import React, { useEffect, useState } from "react";
import DisplayGame from "../components/displayGame/DisplayGame";
import { getAllOpenGames } from "../functions/api/apiCalls";

function Frontpage() {
  const [games, setGames] = React.useState<any[] | undefined>(undefined);
  const tempScores = [
    { name: "abc", time: 12.11 },
    { name: "def", time: 15.12 },
    { name: "last", time: 18.2 },
  ];
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/opengames")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.data);
        setGames(data.data);
      });
  }, []);

  return (
    <main className="frontpage">
      <div className="displayGameBox-container">
        <div className="displayGameBox">
          {games &&
            games.map((game) => (
              <DisplayGame
                key={game.id}
                difficulty={game.difficulty}
                difficultyNums={40}
                scores={tempScores}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Frontpage;
