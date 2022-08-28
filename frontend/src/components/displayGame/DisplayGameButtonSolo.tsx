import React from "react";
import { Link } from "react-router-dom";

interface props {
  difficulty: string;
  difficultyNums: number;
}

const DisplayGameButtonSolo: React.FC<props> = ({
  difficulty,
  difficultyNums,
}) => {
  return <Link to={`/gamepage/${difficulty}/${difficultyNums}`}>btn</Link>;
};

export default DisplayGameButtonSolo;
