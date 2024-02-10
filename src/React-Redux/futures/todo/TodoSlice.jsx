import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  toggle: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // editTodo: (state, action) => {
    //   const { updateTodo, id } = action.payload;
    //   const todoIndex = state.todos.findIndex((todo) => todo.id === id);
    //   if (todoIndex !== -1) {
    //     state.todos[todoIndex] = { ...state.todos[todoIndex], ...updateTodo };
    //   }
    // },

    menuToggle: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { addTodo, removeTodo, menuToggle, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
