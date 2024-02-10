import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,

  reducers: {
    addCount: (state, action) => {
      state.count = state.count + 1;
    },
    reduceCount: (state, action) => {
      state.count = state.count - 1;
    },
    addCountPayNumer: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { addCount, reduceCount, addCountPayNumer } = countSlice.actions;
export default countSlice.reducer;
