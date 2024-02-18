import React, { useState, useEffect, useRef } from "react";

function YusRef() {
  const inputRef = useRef(null);

  // inputRef returns an object
  // useRef does not cause to re-render unlike useState
  // good for:
  // 1. Accessing/Interacting with DOM elements
  // 2. Handling Focus, Animations, and Transitions
  // 3. Managing Timers and Intervals

  useEffect(() => {
    console.log("COMPONENT RENDER");
  });

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "blue";
    inputRef.current.style.color = "white";
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me!</button>
        <input ref={inputRef} />
      </div>
    </>
  );
}

export default YusRef;
