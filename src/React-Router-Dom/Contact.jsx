import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  reduceCount,
  addCountPayNumer,
} from "../React-Redux/counting/CountSice";
import Post from "../React-Redux/InputTodo";
import ListOfTodos from "../React-Redux/ListOfTodos";
const Contact = () => {
  const count = useSelector((state) => state.count.count);

  const disPatch = useDispatch();
  return (
    <>
      <div>
        Let Contact the Todos here <br /> <br />
        {count}
        <br />
        <button onClick={() => disPatch(addCount())}>Add</button>
        <button onClick={() => disPatch(reduceCount())}>remove</button>
        <button onClick={() => disPatch(addCountPayNumer(50))}>
          addCountPayNumer
        </button>
      </div>

      <Post />
      <ListOfTodos/>
    </>
  );
};

export default Contact;
