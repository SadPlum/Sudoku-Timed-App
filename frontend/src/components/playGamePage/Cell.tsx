import React, { useState } from "react";

interface Props {
  number: number;
  wrongCheck?: boolean;
}

function Cell({ number, wrongCheck }: Props) {
  return <div className="cell">{number !== 0 ? number : ""}</div>;
}

export default Cell;
