import React, { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);

  return user ? (
    <>
      <Navbar/> <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
