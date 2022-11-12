import React, { useEffect, useState } from "react";

interface Props {
  setName: Function;
}

function SaveGameInput({ setName }: Props) {
  const [nameInput, setNameInput] = useState<string | undefined>(undefined);

  useEffect(() => {
    setName(nameInput);
  }, [nameInput]);
  return (
    <div>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
    </div>
  );
}

export default SaveGameInput;
