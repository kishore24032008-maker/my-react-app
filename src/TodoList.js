import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build a Project"]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>My To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new to-do"
      />
      <button onClick={addTodo} style={{ marginLeft: "8px" }}>
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            {todo}{" "}
            <button
              onClick={() => removeTodo(index)}
              style={{
                marginLeft: "10px",
                padding: "2px 8px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
