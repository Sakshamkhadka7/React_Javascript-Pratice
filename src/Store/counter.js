import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // To acces this slice we have to used this counter
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },

    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

export default counterSlice;
export const counterActions = counterSlice.actions;