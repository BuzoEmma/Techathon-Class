import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const ReactContext = ({ children }) => {
  const [Count, setCOunt] = useState(2);
  const [User, setUSer] = useState({
    name: "Buzo",
    work: "Mentor",
  });

  const handleCount = () => {
    setCOunt(Count * 2);r
  };

  const listOfValue = { handleCount, User, Count };

  return (
    <UserContext.Provider value={listOfValue}>{children}</UserContext.Provider>
  );
};

export default ReactContext;

export const UserList = () => {
  return useContext(UserContext);
};
