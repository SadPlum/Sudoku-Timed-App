import React from "react";

interface props {
  name: string;
  time: number;
}

const Scores: React.FC<props> = ({ name, time }) => {
  return (
    <section className="scores">
      <span className="name">{name}</span>
      <span className="time">{time}</span>
    </section>
  );
};

export default Scores;
