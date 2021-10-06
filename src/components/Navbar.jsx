import * as React from "react";
import Box from "@mui/material/Box";
import "../assets/css/navbar.css";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <div className="area-cabecalho">
            <div className="area-logo">
              <h1 className="branco">Teste Framework</h1>
            </div>

            <div className="area-menu">
              <NavLink
                className="linkStyle"
                activeStyle={{
                  color: "white",
                }}
                to="/"
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                className="linkStyle"
                activeStyle={{
                  color: "#fff",
                }}
                to="/posts"
              >
                <p>Posts</p>
              </NavLink>
              <NavLink
                className="linkStyle"
                activeStyle={{
                  color: "#fff",
                }}
                to="/albums"
              >
                <p>Albums</p>
              </NavLink>
              <NavLink
                className="linkStyle"
                activeStyle={{
                  color: "#fff",
                }}
                to="/todos"
              >
                <p>To-Dos</p>
              </NavLink>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
