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
  return <Link to={`/privategame/${difficulty}/${difficultyNums}`}>btn</Link>;
};

export default DisplayGameButtonSolo;
