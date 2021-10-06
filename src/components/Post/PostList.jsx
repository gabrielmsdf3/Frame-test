import { useState, useEffect } from "react";
import { PostItem } from "./PostItem";
import React from "react";
import "../../assets/css/info.css";

export function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="area-principal">
      <div className="area-postagens">
        <div className="postagem">
          <h2>Lista Posts</h2>

          <ul>
            {posts.map((post) => (
              <PostItem post={post} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
