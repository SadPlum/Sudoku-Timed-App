import React from "react";

interface props {
  difficulty?: string;
}

const DifficultyBar: React.FC<props> = ({ difficulty }) => {
  return (
    <section className="difficultyBar">
      <h2 className="difficulty">{difficulty}</h2>
    </section>
  );
};

export default DifficultyBar;
