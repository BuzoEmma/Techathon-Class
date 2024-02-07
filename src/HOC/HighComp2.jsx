import React, { useState } from "react";
import HocComp from "./HocComp";

const HighComp2 = ({ handleCount, count }) => {
  const user = {
    name: "Buzo",
    email: "whatever@gmail.com",
  };
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h3>
        {" "}
        My neighbour has this kind of Money <br />
        in my account ${count}
      </h3>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
};

export default HocComp(HighComp2) ;

