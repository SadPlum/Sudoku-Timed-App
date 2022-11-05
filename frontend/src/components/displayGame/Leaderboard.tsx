import React, { useEffect, useState } from "react";
import Scores from "./Scores";

// Temporary interfaces to get leaderboard working.
interface scores {
  scores: { name: string; time: string }[];
}
interface score {
  name: string;
  time: string;
}
const Leaderboard: React.FC<scores> = ({ scores }) => {
  const [scoresArray, setScoresArray] = useState<score[] | undefined>(
    undefined
  );

  // Ensure leaderboard is sorted. Then return sorted array to state
  useEffect(() => {
    console.log(scores);
    const sortedScores = scores.sort((a, b) => Number(a.time) - Number(b.time));
    const slicedArray = sortedScores.slice(0, 3);
    setScoresArray(slicedArray);
  }, [scores]);
  return (
    <>
      {scoresArray && (
        <section className="leaderboard">
          {scoresArray.map((score, i) => (
            <Scores name={score.name} time={score.time} key={i} />
          ))}
        </section>
      )}
    </>
  );
};

export default Leaderboard;
