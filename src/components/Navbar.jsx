import * as React from "react";
import Box from "@mui/material/Box";
import "../styles/navbar.css";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <div className="navbarStyle">
            <div>
              <h1 style={{ color: "#fff" }}>Teste Framework</h1>
            </div>

            <div className="menuStyle">
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
