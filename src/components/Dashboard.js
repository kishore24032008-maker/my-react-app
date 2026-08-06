import React from "react";
import UserInfo from "./UserInfo";

function Dashboard() {
  const users = [
    {
      id: 1,
      username: "Alice Smith",
      email: "alice@example.com",
      role: "Admin",
    },
    {
      id: 2,
      username: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
    },
    {
      id: 3,
      username: "Charlie Brown",
      email: "charlie@example.com",
      role: "Viewer",
    },
  ];

  return (
    <div>
      <h2>User Dashboard</h2>
      {users.map((user) => (
        <UserInfo
          key={user.id}
          username={user.username}
          email={user.email}
          role={user.role}
        />
      ))}
    </div>
  );
}

export default Dashboard;
