import { useState, useEffect } from "react";
import { PostItem } from "./PostItem";
import React from "react";
import "../../styles/info.css";

export function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="containerMain">
      <div className="post-area">
        <div className="post">
          <h2>Lista Posts</h2>

          <ul>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
