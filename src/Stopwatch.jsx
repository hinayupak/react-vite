import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  let intervalIdRef = useRef(null);
  let startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <>
      <div className="stopwatch">
        <div className="stopwatch-display">{formatTime()}</div>
        <div className="stopwatch-controls">
          <button onClick={start} className="stopwatch-start-button">
            Start
          </button>
          <button onClick={stop} className="stopwatch-stop-button">
            Stop
          </button>
          <button onClick={reset} className="stopwatch-reset-button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
