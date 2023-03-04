import React from "react";
import { Link } from "react-router-dom";

interface props {
  difficulty: string;
  difficultyNums: number;
  _id: string;
}

const DisplayGameButtonPublic: React.FC<props> = ({
  difficulty,
  difficultyNums,
  _id,
}) => {
  return (
    <button className="display-game-button">
      <Link to={`/public/${_id}`}>Play Open</Link>
    </button>
  );
};

export default DisplayGameButtonPublic;
