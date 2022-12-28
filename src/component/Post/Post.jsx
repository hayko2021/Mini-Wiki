import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ title, img, about, id }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>
      <img src={img} alt="" style={{ width: "500px" }} />
      <h3>{about.slice(0, 400)}...</h3>

      <button onClick={() => navigate(`/posts/${id}`)}>Reade More</button>
    </div>
  );
};

export default Post;
