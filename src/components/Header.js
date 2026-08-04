import React from "react";

function Header({ title }) {
  return (
    <header
      style={{
        padding: "10px",
        backgroundColor: "#f4f4f4",
        marginBottom: "20px",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
