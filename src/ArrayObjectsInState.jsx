import React, { useState } from "react";

function ArrayObjectInState() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...cars, newCar]);

    // reset input fields
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (i) => {
    setCars((c) => cars.filter((_, index) => index !== i));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, i) => (
          // beware usage of arrow key function inside onclick
          <li key={i} onClick={() => handleRemoveCar(i)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </>
  );
}

export default ArrayObjectInState;
