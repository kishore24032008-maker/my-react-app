import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Header title="User Management System" />
      <Dashboard />
    </div>
  );
}

export default App;
