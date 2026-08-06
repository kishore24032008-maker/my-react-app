import React, { useState, useEffect } from "react";

function CountdownTimer({ initialSeconds = 10 }) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (secondsRemaining <= 0) return;

    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining]);

  return (
    <div style={{ padding: "10px" }}>
      <h2>Countdown Timer</h2>
      <p>
        Time remaining: <strong>{secondsRemaining}</strong> seconds
      </p>
      {secondsRemaining === 0 && <p style={{ color: "red" }}>Time's up!</p>}
    </div>
  );
}

export default CountdownTimer;
