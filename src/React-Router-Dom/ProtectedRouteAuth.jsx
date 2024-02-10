import React, { createContext, useContext } from "react";
import { useState } from "react";

const userContext = createContext();

const ProtectedRouteAuth = ({ children }) => {
  const [User, setUser] = useState(null);

  console.log(User);

  const login = (identity) => {
    setUser(identity);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ User, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default ProtectedRouteAuth;

export const AuthUser = () => {
  return useContext(userContext);
};
