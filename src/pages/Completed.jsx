import React from "react";

export default function Completed() {
  const user = localStorage.getItem("user");
  const todos = JSON.parse(localStorage.getItem(`todos_${user}`)) || [];
  const completed = todos.filter((t) => t.status === "completed");

  return (
    <div className="container">
      <h2>Completed Tasks</h2>
      {completed.length === 0 ? (
        <p className="empty">No completed tasks yet.</p>
      ) : (
        <ul>{completed.map((t) => <li key={t.id}>{t.text}</li>)}</ul>
      )}
    </div>
  );
}
