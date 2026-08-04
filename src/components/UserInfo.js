import React from "react";

function UserInfo({ username, email, role }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <h2>{username}</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Role:</strong> {role}
      </p>
    </div>
  );
}

export default UserInfo;
