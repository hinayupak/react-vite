import React, { useState, useEffect } from "react";

// useEffect( () => {} )          // runs every re-render
// useEffect( () => {}, [] )      // runs only on mount
// useEffect( () => {}, [value] ) // runs on mount when value changes

function UseEpek() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Trigger addEventListener");

    // clean up example
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("addEventListener removed");
    };
  }, []);

  const addCount = () => {
    setCount((c) => count + 1);
  };

  const subtractCount = () => {
    setCount((c) => count - 1);
  };

  const changeColor = () => {
    setColor((c) => (color === "green" ? "red" : "green"));
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <div>
        <p>Widnow width: {width}px</p>
        <p>Widnow height: {height}px</p>
      </div>
      <div>
        <h1 style={{ color: color }}>Count: {count}</h1>
        <button onClick={addCount}>Add</button>
        <br />
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
      </div>
    </>
  );
}

export default UseEpek;
