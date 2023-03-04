import React, { useEffect, useState } from "react";
import Scores from "./Scores";

// Temporary interfaces to get leaderboard working.
interface scores {
  scores: { name: string; time: string }[];
  shown: number;
}
interface score {
  name: string;
  time: string;
}
const Leaderboard: React.FC<scores> = ({ scores, shown }) => {
  const [scoresArray, setScoresArray] = useState<score[] | undefined>(
    undefined
  );

  // Ensure leaderboard is sorted. Then return sorted array to state
  useEffect(() => {
    const sortedScores = scores.sort((a, b) => {
      const newA = a.time.replace(".", "");
      const newB = b.time.replace(".", "");

      return Number(newA) - Number(newB);
    });
    const slicedArray = sortedScores.slice(0, shown);

    setScoresArray(slicedArray);
  }, [scores, shown]);
  return (
    <>
      {scoresArray && (
        <section
          className={`${
            shown === 10 ? "leaderboard-game-page" : "leaderboard-front-page"
          }`}
        >
          <div className={`${shown === 10 ? "game-page" : "front-page"}`}>
            {scoresArray.map((score, i) => (
              <Scores name={score.name} time={score.time} key={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Leaderboard;
