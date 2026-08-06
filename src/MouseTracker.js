import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h2>Track Mouse Movement</h2>
      <p>
        Mouse X: {mousePosition.x} | Mouse Y: {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseTracker;
