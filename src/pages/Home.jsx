import React, { useState, useEffect } from "react";

export default function Home() {
  const user = localStorage.getItem("user");
  const todoKey = `todos_${user}`;
  const deletedKey = `deleted_${user}`;

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem(todoKey)) || []);//json to array
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(todos));//array to json
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = { id: Date.now(), text: input, status: "incomplete" };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const markCompleted = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, status: "completed" } : t)));

  const deleteTodo = (id) => {
    const deletedItem = todos.find((t) => t.id === id);
    const deletedList = JSON.parse(localStorage.getItem(deletedKey)) || [];
    localStorage.setItem(deletedKey, JSON.stringify([...deletedList, deletedItem]));
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <p>TASK LIST</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p className="empty">No tasks yet!</p>) 
        : 
        (<ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.status === "completed" ? "done" : ""}>
              {todo.text}
              {todo.status !== "completed" && (
                <button onClick={() => markCompleted(todo.id)}>Complete</button>
              )}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>)
      }
    </div>
  );
}
