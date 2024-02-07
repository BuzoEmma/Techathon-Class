import { useReducer } from "react";

const UseReducerComp = () => {
  const initialState = false;
  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE":
        return !state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Use Reducer Class</h1>
      {/* <h3>Counter: {count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "MULTIPLY", payload: 2 })}>
        Multiply by 2
      </button>
      <button onClick={() => dispatch({ type: "DIVISION", payload: 2 })}>
        Divid by 2
      </button> */}

      {state ? <p>Techathon class is on going</p> : <p>No Class</p>}
      <button onClick={() => dispatch({ type: "TOGGLE" })}>Click me</button>
    </div>
  );
};

export default UseReducerComp;
