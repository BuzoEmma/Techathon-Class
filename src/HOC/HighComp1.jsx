// import HocComp from "./HocComp";

// const HighComp1 = ({ handleIncreament, Money}) => {
//   return (
//     <div>
//       <h1> I have this kind of Money in my account ${Money}</h1>

//       <button onClick={handleIncreament}>Increase Money</button>
//     </div>
//   );
// };

// export default HocComp(HighComp1);

import React from "react";

const HighComp1 = ({ handleCount, count }) => {
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
        in my account  ${count}
      </h3>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
};

export default HighComp1;
