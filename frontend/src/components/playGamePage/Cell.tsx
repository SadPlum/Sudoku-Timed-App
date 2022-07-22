import React from "react";

interface Props {
  number: number;
  wrongCheck?: boolean;
}

function Cell({ number, wrongCheck }: Props) {
  return <div className="cell">{number}</div>;
}

export default Cell;
