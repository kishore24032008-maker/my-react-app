import React, { useState } from "react";

function Counter() {
  // Declare state initialized to 0
  const [count, setCount] = useState(0);

  // Increments count safely using a functional update
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrements count safely using a functional update
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Interactive Counter</h1>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</p>
      <button
        onClick={decrement}
        style={{ marginRight: "10px", padding: "8px 16px" }}
      >
        Decrement
      </button>
      <button onClick={increment} style={{ padding: "8px 16px" }}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
