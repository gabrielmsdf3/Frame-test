import React from "react";
import "../../assets/css/info.css";

export function TodoItem(props) {
  return (
    <li className="cardItem">
      <section>
        <article className="textItem" style={{ flexDirection: "column" }}>
          <p>{props.todos.id}</p>
          <p style={{ margin: "10px" }}>Title: {props.todos.title}</p>

          {props.todos.completed === true ? (
            <p style={{ margin: "10px", color: "green" }}> it is true!</p>
          ) : (
            <p style={{ margin: "10px", color: "red" }}> it is false!</p>
          )}
        </article>
      </section>
    </li>
  );
}
