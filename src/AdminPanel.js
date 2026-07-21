import React from "react";

function AdminPanel({ isAdmin }) {
  return (
    <div className="admin-panel">
      <h1>Admin Panel Access</h1>
      {isAdmin ? (
        <>
          <p>Welcome, Administrator! You have full access.</p>
          <div className="admin-actions">
            <button>Manage Users</button>
            <button>View Reports</button>
          </div>
        </>
      ) : (
        <p>
          You do not have administrative privileges. Please log in as an
          administrator.
        </p>
      )}
    </div>
  );
}

export default AdminPanel;
