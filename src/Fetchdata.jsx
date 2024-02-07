import { createContext, useContext, useState } from "react";

const NumberConttext = createContext();

export const NumberProvider = ({ children }) => {
  const [apps, setApps] = useState(20);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });
  // define your function or anything here.

  const increament = () => {
    setApps(apps + 2);
  };

  const valuesNum = { apps, increament, formValue, setFormValue };

  return (
    <NumberConttext.Provider value={valuesNum}>
      {children}
    </NumberConttext.Provider>
  );
};

export const numberValue = () => {
  return useContext(NumberConttext);
};
