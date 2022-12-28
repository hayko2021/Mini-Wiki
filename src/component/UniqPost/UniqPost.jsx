import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UniqPost = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>{posts.find((post) => post.id === id).title}</h1>
      <h1>
        <img
          src={posts.find((post) => post.id === id).img}
          alt=""
          style={{ width: "300px" }}
        />
      </h1>
      <h3>{posts.find((post) => post.id === id).about}</h3>

      <button onClick={() => navigate(-1)}>Beack</button>
    </div>
  );
};

export default UniqPost;
