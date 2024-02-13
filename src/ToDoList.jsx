import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Train", "Sleep"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (i) => {
    const updatedTasks = tasks.filter((_, index) => index !== i);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (i) => {
    if (i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [
        updatedTasks[i - 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (i) => {
    if (i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [
        updatedTasks[i + 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          {/* beware usage of arrow key function inside onclick */}
          <button className="to-do-add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <button
                className="to-do-button to-do-delete-button"
                onClick={() => deleteTask(i)}
              >
                Delete
              </button>
              <button
                className="to-do-button to-do-up-button"
                onClick={() => moveTaskUp(i)}
              >
                &#9650;
              </button>
              <button
                className="to-do-button to-do-down-button"
                onClick={() => moveTaskDown(i)}
              >
                &#9660;
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
