import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import React from "react";
import "../../styles/info.css";

export function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="containerMain">
      <div className="post-area">
        <div className="post">
          <h2>Lista To-dos</h2>

          <ul>
            {todos.map((todos) => (
              <TodoItem todos={todos} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
