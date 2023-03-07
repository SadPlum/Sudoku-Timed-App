import React from "react";

interface props {
  difficulty?: string;
  image?: string;
}

const GameImage: React.FC<props> = ({ difficulty, image }) => {
  let alternateText = `Image of ${difficulty} sudoku game`;
  return (
    <section className="gameImage">
      {/* <div className="tempImage"></div> */}
      <img
        className="tempImage"
        src="/images/beginner-screenshot.png"
        alt={alternateText}
      />
    </section>
  );
};

export default GameImage;
