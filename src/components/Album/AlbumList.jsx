import { useState, useEffect } from "react";
import { AlbuItem } from "./AlbumItem";
import React from "react";
import "../../styles/info.css";

export function AlbumList() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbum(data));
  }, []);

  return (
    <div className="containerMain">
      <div className="post-area">
        <div className="post">
          <h2>Lista Albums</h2>

          <ul>
            {album.map((album) => (
              <AlbuItem key={album.id} album={album} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
