import React from "react";
import "../../styles/info.css";

export function PostItem(props) {
  return (
    <li className="cardItem">
      <section>
        <article className="textItem" style={{ flexDirection: "column" }}>
          <p>{props.post.id}</p>
          <p style={{ margin: "10px" }}>Title: {props.post.title}</p>
          <p style={{ marginLeft: "10px" }}>{props.post.body}</p>
        </article>
      </section>
    </li>
  );
}
