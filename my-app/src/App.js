import React, { useState, useRef } from "react";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const taskInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: tasks.length + 1,
      title: taskInput.current.value,
      isCompleted: false,
    };

    setTasks([...tasks, task]);
    taskInput.current.value = "";
  };

  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleClearButton = () => {
    setTasks(tasks.filter((task) => !task.isCompleted));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={taskInput} />
        <button type="submit">Add Task</button>
        <button type="button" onClick={handleClearButton}>
          Clear Completed Tasks
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheckboxChange(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
