import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleMenu } from "./todo/TodoSlice";

const ListOfTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const toggle = useSelector((state) => state.todos.toggle);

  const disPatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ display: "flex", marginTop: "2rem" }}>
            <li>{todo.name}</li>
            <li>{todo.email}</li>
            <li>{todo.age}</li> &nbsp;&nbsp;
            <button onClick={() => disPatch(removeTodo(todo.id))}>
              Remove
            </button>
            <button onClick={() => disPatch(toggleMenu())}>
              {toggle ? "Open" : "Close"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfTodos;
