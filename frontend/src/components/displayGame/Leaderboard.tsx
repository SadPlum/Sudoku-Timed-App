import React from "react";
import Scores from "./Scores";

interface props {
  scores: { name: string; time: number }[];
}
const Leaderboard: React.FC<props> = ({ scores }) => {
  let scoreArray = scores;
  return (
    <section className="leaderboard">
      {scoreArray.map((score) => (
        <Scores name={score.name} time={score.time} />
      ))}
    </section>
  );
};

export default Leaderboard;
