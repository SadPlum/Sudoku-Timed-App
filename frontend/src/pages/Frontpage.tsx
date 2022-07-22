import React, {useEffect} from "react";
import DisplayGame from "../components/displayGame/DisplayGame";

function Frontpage() {
  const tempScores = [
    { name: "abc", time: 12.11 },
    { name: "def", time: 15.12 },
    { name: "last", time: 18.2 },
  ];
  return (
    <main className="frontpage">
      {" "}
      <DisplayGame difficulty="easy" scores={tempScores} />
    </main>
  );
}

export default Frontpage;
