import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addTask: [],
  updateTask: [],
  deleteTask: [],
  completeTask: [],
  loading: "idle",
};

const AllData = createSlice({
  name: "apiDetails",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.addTask = action.payload;
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
