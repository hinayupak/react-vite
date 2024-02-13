import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(e) {
    // spread allows you to update the object specified only
    // use updater function
    // previous state is c, short for car
    setCar((c) => ({ ...car, year: e.target.value }));
  }

  function handleMakeChange(e) {
    setCar((c) => ({ ...car, make: e.target.value }));
  }

  function handleModelChange(e) {
    setCar((c) => ({ ...car, model: e.target.value }));
  }

  return (
    <>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </>
  );
}

export default Car;
