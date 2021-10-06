import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import React from "react";
import "../../assets/css/info.css";

export function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="area-principal">
      <div className="area-postagens">
        <div className="postagem">
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
