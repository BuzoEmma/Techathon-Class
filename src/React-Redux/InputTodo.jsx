import { useState } from "react";
import { addTodo } from "../React-Redux/todo/TodoSlice";
import { useDispatch } from "react-redux";

const Post = () => {
  const [Input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  });

  const disPatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...Input, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    disPatch(addTodo(Input));
  };

  return (
    <div>
      <h2>List Of Todo</h2>
      <form action="" onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          value={Input.name}
          onChange={handleChange}
          placeholder="Your Name"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          value={Input.email}
          onChange={handleChange}
          placeholder="Your email"
        />{" "}
        <br />
        <input
          type="number"
          name="age"
          value={Input.age}
          onChange={handleChange}
          placeholder="Your age"
        />{" "}
        <br />
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
};

export default Post;
