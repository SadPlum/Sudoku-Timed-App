import React, { useEffect, useState } from "react";
import DisplayGame from "../components/displayGame/DisplayGame";
import { getAllOpenGames } from "../functions/api/apiCalls";
// import image from "/images/beginner-screenshot.png";

function Frontpage() {
  const [games, setGames] = React.useState<any[] | undefined>(undefined);
  const screenshotArray = [];
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
            games.map((game, i) => (
              <DisplayGame
                key={game._id}
                _id={game._id}
                difficulty={game.difficulty}
                difficultyNums={game.difficultyNum}
                scores={game.leaderboard}
                // image={image}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Frontpage;
