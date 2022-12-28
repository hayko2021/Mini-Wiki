import React from "react";

export default function Home() {
  return (
    <>
      <h1
        style={{
          color: "orange",
        }}
      >
        {" "}
        Welcome to HomePage
      </h1>
      <img
        src={`http://www.i-fink.com/wp-content/uploads/physics.jpg`}
        alt=""
        style={{
          width: "1500px",
        }}
      />
    </>
  );
}
