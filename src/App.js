import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Header title="User Management System" />

      <h2>Featured Cards</h2>
      {/* 1. Card with all props provided */}
      <Card
        title="React Basics"
        description="Learn components, props, and JSX syntax."
      />

      {/* 2. Card missing description (will use default prop: 'No description available.') */}
      <Card title="Advanced React" />

      <hr style={{ margin: "30px 0" }} />

      <Dashboard />
    </div>
  );
}

export default App;
