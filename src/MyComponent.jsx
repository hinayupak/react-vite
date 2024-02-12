import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(false);

  const updateName = () => {
    setName("Joshua");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setEmployed(!isEmployed);
  };

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <hr />
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Name</button>
      <hr />
      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employed Status</button>
    </>
  );
}

export default MyComponent;
