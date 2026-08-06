import React from "react";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import AdminPanel from "./AdminPanel";
import Dashboard from "./components/Dashboard";
import Card from "./components/Card";
import Counter from "./Counter";
import ControlledInput from "./ControlledInput";
import TodoList from "./TodoList";
import DataFetcher from "./DataFetcher";
import PostList from "./PostList";
import CountdownTimer from "./CountdownTimer";
import MouseTracker from "./MouseTracker";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Header Component */}
      <Header title="User Management System" />

      {/* User Information & Conditional Rendering */}
      <UserInfo name="John Doe" email="john@example.com" isAdmin={true} />

      <hr style={{ margin: "30px 0" }} />

      {/* Admin Panel Component */}
      <AdminPanel />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 4 Lesson 13: PostList (Public API Fetching) */}
      <PostList />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 4 Lesson 13: Countdown Timer */}
      <CountdownTimer initialSeconds={10} />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 4 Lesson 13: Mouse Tracker */}
      <MouseTracker />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 4 Lesson 13: Data Fetcher */}
      <DataFetcher />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 3 Lesson 11: Counter Component */}
      <h2>Interactive Counter</h2>
      <Counter />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 3 Lesson 11: Controlled Form Input */}
      <ControlledInput />

      <hr style={{ margin: "30px 0" }} />

      {/* Module 3 Lesson 11: To-Do List Component */}
      <TodoList />

      <hr style={{ margin: "30px 0" }} />

      {/* Feature Cards Section */}
      <h2>Featured Cards</h2>
      <Card
        title="React Basics"
        description="Learn components, props, and JSX syntax."
      />
      <Card title="Advanced React Hooks" />

      <hr style={{ margin: "30px 0" }} />

      {/* Dashboard Component */}
      <Dashboard />
    </div>
  );
}

export default App;
