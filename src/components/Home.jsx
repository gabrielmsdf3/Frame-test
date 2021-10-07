import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/info.css";

export function Home() {
  return (
    <div className="containerMain">
      <div className="post-area">
        <div className="post">
          <h2 style={{ color: "black" }}>
            Bem vindo ao teste do Gabriel Moura!
          </h2>
          <h2 style={{ color: "black" }}>Selecione a rota desejada:</h2>

          <ul>
            <li className="cardItem">
              <section>
                <article
                  className="textItem"
                  style={{ flexDirection: "column" }}
                >
                  <NavLink
                    className="linkStyle"
                    activeStyle={{
                      color: "#fff",
                    }}
                    to="/posts"
                  >
                    <p>Posts</p>
                  </NavLink>
                </article>
              </section>
            </li>

            <li className="cardItem">
              <section>
                <article
                  className="textItem"
                  style={{ flexDirection: "column" }}
                >
                  <NavLink
                    className="linkStyle"
                    activeStyle={{
                      color: "#fff",
                    }}
                    to="/albums"
                  >
                    <p>Albums</p>
                  </NavLink>
                </article>
              </section>
            </li>
            <li className="cardItem">
              <section>
                <article
                  className="textItem"
                  style={{ flexDirection: "column" }}
                >
                  <NavLink
                    className="linkStyle"
                    activeStyle={{
                      color: "#fff",
                    }}
                    to="/todos"
                  >
                    <p>To-Dos</p>
                  </NavLink>
                </article>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
