import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import count from "./counting/CountSice";
import todos from "./todo/TodoSlice";

export const ReduxStore = configureStore({
  reducer: {
    count,
    todos,
  },
});
