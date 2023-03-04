import React from "react";

interface props {
  name: string;
  time: string;
}

const Scores: React.FC<props> = ({ name, time }) => {
  const newTime = time.replace(".", ":");
  return (
    <section className="scores">
      <span className="name">{name}</span>
      <span className="time">{newTime}</span>
    </section>
  );
};

export default Scores;
