import React from "react";
import "../../assets/css/info.css";

export function AlbuItem(props) {
  return (
    <li className="cardItem">
      <section>
        <article className="textItem">
          <p>{props.album.id}</p>
          <p style={{ marginLeft: "10px" }}>{props.album.title}</p>
        </article>
      </section>
    </li>
  );
}
