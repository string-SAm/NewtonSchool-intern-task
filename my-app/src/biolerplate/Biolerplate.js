import React, { useState, useRef } from "react";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Don't update the state correctly
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
