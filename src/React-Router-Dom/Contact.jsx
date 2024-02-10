import React from "react";
import Post from "../React-Redux/Post";
import PostOfTodos from "../React-Redux/PostOfTodos";
import { useSelector } from "react-redux";

const Contact = () => {

  return (
    <div>
      Let Contact the Todos here
      <Post />
      <PostOfTodos />
    </div>
  );
};

export default Contact;
