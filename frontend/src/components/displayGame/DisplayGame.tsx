import React from "react";
import DifficultyBar from "./DifficultyBar";
import GameImage from "./GameImage";
import Leaderboard from "./Leaderboard";
import DisplayGameButton from "./DisplayGameButton";

interface props {
  difficulty?: string;
  image?: string;
  scores: { name: string; time: number }[];
}
const DisplayGame: React.FC<props> = ({ difficulty, image, scores }) => {
  return (
    <section className="displayGame">
      <DifficultyBar difficulty={difficulty} />
      <GameImage difficulty={difficulty} image={image} />
      <Leaderboard scores={scores} />
      <div className="buttonSection">
        <DisplayGameButton />
        <DisplayGameButton />
      </div>
    </section>
  );
};

export default DisplayGame;
