import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  toggle: true,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
      };

      state.todos.push(todo);
    },

    toggleMenu: (state, action) => {
      state.toggle = !state.toggle;
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, toggleMenu } = todosSlice.actions;
export default todosSlice.reducer;
