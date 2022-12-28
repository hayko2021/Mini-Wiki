import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const EinshteinWrapper = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default EinshteinWrapper;
