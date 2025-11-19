import React from "react";

export default function Incomplete() {
  const user = localStorage.getItem("user");
  const todos = JSON.parse(localStorage.getItem(`todos_${user}`)) || [];
  const incomplete = todos.filter((t) => t.status === "incomplete");

  return (
    <div className="container">
      <h2>Incomplete Tasks</h2>
      {incomplete.length === 0 ? (
        <p className="empty">All tasks are completed</p>
      ) : (
        <ul>{incomplete.map((t) => <li key={t.id}>{t.text}</li>)}</ul>
      )}
    </div>
  );
}
