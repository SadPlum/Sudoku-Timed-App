import React from "react";
import DifficultyBar from "./DifficultyBar";
import GameImage from "./GameImage";
import Leaderboard from "./Leaderboard";
import DisplayGameButtonSolo from "./DisplayGameButtonSolo";
import { displayInterface } from "../../interfaces/displayInterface";

const DisplayGame: React.FC<displayInterface> = ({
  difficulty,
  image,
  scores,
  difficultyNums,
}) => {
  return (
    <section className="displayGame">
      <DifficultyBar difficulty={difficulty} />
      <GameImage difficulty={difficulty} image={image} />
      <Leaderboard scores={scores} />
      <div className="buttonSection">
        <DisplayGameButtonSolo
          difficulty={difficulty}
          difficultyNums={difficultyNums}
        />
      </div>
    </section>
  );
};

export default DisplayGame;
