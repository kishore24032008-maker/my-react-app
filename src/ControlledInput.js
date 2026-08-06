import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Dynamic Form Input</h2>
      <label>
        Enter Text:{" "}
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <p>Current Input Value: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
