import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const globalReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
