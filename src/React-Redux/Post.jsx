import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./futures/todo/TodoSlice";

const Post = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <div>
      <h2>List Of Todo</h2>
      <form action="" onSubmit={handleTodoHandler}>
        <input
          type="text"
          value={input.name}
          onChange={handleChange}
          name="name"
          placeholder="Your Name"
        />{" "}
        <br />
        <input
          type="email"
          value={input.email}
          onChange={handleChange}
          name="email"
          placeholder="Your email"
        />{" "}
        <br />
        <input
          type="number"
          value={input.age}
          onChange={handleChange}
          name="age"
          placeholder="Your age"
        />{" "}
        <br />
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
};

export default Post;
