import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  addTask: [],
  updateTask: [],
  deleteTask: [],
  completeTask: [],
  loading: "idle",
  error: null,
};

const AllData = createSlice({
  name: "apiDetails",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.addTask.push(action.payload);
    },
    UpdatoCart: (state, action) => {
      state.updateTask.push(action.payload);
    },
    DeleteToCart: (state, action) => {
      state.deleteTask.push(action.payload);
    },
  },
});
export const { AddToCart, UpdatoCart, DeleteToCart } = AllData.actions;

export default AllData.reducer;
