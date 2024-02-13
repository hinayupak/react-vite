import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);

    // updater function example
    // takes pending state when using arrow function
    // good practice to use updater function if you have a previous state in setState()
    // use ((c) => c + 1) instead of (c + 1)

    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const reset = () => {
    // updater function not necessary
    setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
        <button className="counter-button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
