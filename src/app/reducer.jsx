import { combineReducers } from "@reduxjs/toolkit";
import allData from "../todo/slice";
const RootReducers = combineReducers({
  data: allData,
});
export default RootReducers;
