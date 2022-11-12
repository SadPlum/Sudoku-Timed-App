import React, { useState, useEffect, useRef } from "react";

interface Timer {
  setTime: Function;
  complete: boolean;
}

const Timer = ({ setTime, complete }: Timer) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // timer only displayed if active is true
  const [active, setActive] = useState(true);

  // Keeps a reference to setSeconds
  const secondsRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Guard to update minutes if seconds is high enough
      if (active && secondsRef.current >= 59) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      } else if (active) setSeconds(secondsRef.current + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, active]);

  // As seconds only uses initial state,
  // using Ref allows a fresh variable to assing setSeconds too
  useEffect(() => {
    secondsRef.current = seconds;
  });

  // useEffect when complete is set to true;
  // takes minutes and seconds to convert to
  useEffect(() => {
    if (complete) {
      const display = `${minutes}:${seconds}`;
      const time = {
        minutes: minutes,
        seconds: seconds,
        display: display,
      };
      setTime(time);
      setActive(!active);
    }
  }, [complete]);

  useEffect(() => {}, [active]);
  return (
    <div>
      <div>
        {minutes}:{seconds}
      </div>
    </div>
  );
};

export default Timer;
