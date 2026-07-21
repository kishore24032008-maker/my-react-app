import React from "react";
import "./App.css";
import AdminPanel from "./AdminPanel";

function App() {
  return (
    <div className="App">
      <AdminPanel isAdmin={true} />
    </div>
  );
}

export default App;
