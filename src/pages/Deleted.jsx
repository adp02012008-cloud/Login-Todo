import React from "react";

export default function Deleted() {
  const user = localStorage.getItem("user");
  const deleted = JSON.parse(localStorage.getItem(`deleted_${user}`)) || [];

  return (
    <div className="container">
      <h2>Deleted History</h2>
      {deleted.length === 0 ? (
        <p className="empty">No tasks deleted</p>
      ) : (
        <ul>{deleted.map((t) => <li key={t.id}>{t.text}</li>)}</ul>
      )}
    </div>
  );
}
