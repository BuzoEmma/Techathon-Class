import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../React-Redux/futures/todo/TodoSlice"; // from line 27

const PostStore = configureStore({
  reducer: {
    todoReducer,
  },
});
export default PostStore;
