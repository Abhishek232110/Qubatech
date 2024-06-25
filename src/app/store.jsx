import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import allData from "../todo/slice";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  data: allData,
});
const persistReducers = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistReducers,
});

export const persistor = persistStore(store);
