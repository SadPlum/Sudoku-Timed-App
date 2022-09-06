import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const secondsRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Guard to update minutes if seconds is high enough
      if (secondsRef.current >= 59) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      } else setSeconds(secondsRef.current + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // As seconds only uses initial state,
  // using Ref allows a fresh variable to assing setSeconds too
  useEffect(() => {
    secondsRef.current = seconds;
  });
  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}

export default Timer;
