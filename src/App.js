import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Card from "./components/Card";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Header title="User Management System" />

      {/* Interactive Counter from Lesson 11 */}
      <Counter />

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
