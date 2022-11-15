import React, { useEffect, useState } from "react";

interface Props {
  setName: Function;
  setNameReady: Function;
  nameReady: boolean;
}

function SaveGameInput({ setName, setNameReady, nameReady }: Props) {
  const [nameInput, setNameInput] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!nameReady) {
      setName(nameInput);
    }
  }, [nameInput, nameReady]);

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !nameReady) {
      setNameReady(true);
    }
  };

  return (
    <div>
      <input
        className={"name-input"}
        disabled={nameReady ? true : false}
        type="text"
        value={nameInput}
        onKeyPress={(event) => handleEnter(event)}
        onChange={(event) => setNameInput(event.target.value)}
      />
    </div>
  );
}

export default SaveGameInput;
