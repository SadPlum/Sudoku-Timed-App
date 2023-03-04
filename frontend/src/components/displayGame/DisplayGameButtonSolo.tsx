import React from "react";
import { Link } from "react-router-dom";

interface props {
  difficulty: string;
  difficultyNums: number;
  _id: string;
}

const DisplayGameButtonSolo: React.FC<props> = ({
  difficulty,
  difficultyNums,
  _id,
}) => {
  return (
    <button className="display-game-button">
      <Link to={`/privategame/${difficulty}/${difficultyNums}`}>Play Solo</Link>
    </button>
  );
};

export default DisplayGameButtonSolo;
