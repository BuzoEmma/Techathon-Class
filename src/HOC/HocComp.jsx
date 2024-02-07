import React, { useState } from "react";

// const HocComp = (WrappedComponents) => {
//   const NewComponent = () => {
//     const [Money, setMoney] = useState(10);

//     const handleIncreament = () => {
//       setMoney(Money * 5);
//     };

//     return (
//       <WrappedComponents handleIncreament={handleIncreament} Money={Money} />
//     );
//   };

//   return NewComponent;
// };

// export default HocComp;

const HocComp = (WrappedComponents) => {
  return (props) => {
    const [Loading, setLoading] = useState(true);
    const [count, setCount] = useState(10);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleCount = () => {
      setCount(count * 3);
    };

    return (
      <div>
        {Loading ? (
          <p>Load....</p>
        ) : (
          <WrappedComponents
            {...props}
            handleCount={handleCount}
            count={count}
          />
        )}
      </div>
    );
  };
};

export default HocComp;
