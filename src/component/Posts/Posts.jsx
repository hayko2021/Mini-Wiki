import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-arround",
          flexDirection: "column",
        }}
      >
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            img={post.img}
            title={post.title}
            about={post.about}
          />
        ))}
      </div>
    </>
  );
};
export default Posts;
