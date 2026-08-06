import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Card from "./components/Card";
import Counter from "./Counter";
import ControlledInput from "./ControlledInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Header title="User Management System" />

      {/* Lesson 11: Counter */}
      <Counter />

      <hr style={{ margin: "30px 0" }} />

      {/* Lesson 11: Controlled Form Input */}
      <ControlledInput />

      <hr style={{ margin: "30px 0" }} />

      {/* Lesson 11: To-Do List */}
      <TodoList />

      <hr style={{ margin: "30px 0" }} />

      <h2>Featured Cards</h2>
      <Card
        title="React Basics"
        description="Learn components, props, and JSX syntax."
      />
      <Card title="Advanced React" />

      <hr style={{ margin: "30px 0" }} />

      <Dashboard />
    </div>
  );
}

export default App;
