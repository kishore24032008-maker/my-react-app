import React from "react";
import PropTypes from "prop-types";

function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "5px",
        margin: "10px 0",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Set default values if props are missing
Card.defaultProps = {
  description: "No description provided.",
};

// Enforce data types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card; 