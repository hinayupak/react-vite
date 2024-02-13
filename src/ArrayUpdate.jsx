import React, { useState } from "react";

function ArrayUpdate() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...foods, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods((f) => foods.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, i) => (
          <li key={i} onClick={() => handleRemoveFood(i)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}

export default ArrayUpdate;
