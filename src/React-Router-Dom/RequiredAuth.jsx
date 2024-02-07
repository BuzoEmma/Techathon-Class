import React from "react";
import { AuthUser } from "./ProtectedRouteAuth";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { User } = AuthUser();

  const location = useLocation()

  if (!User) {
    return <Navigate to={"/login"} state={{path: location.pathname}} />;
  }

  return children;
};

export default RequiredAuth;
