import { configureStore, combineReducers, current } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import postReducer from "../reducers/postReducer";
import currentTokenReducer from "../reducers/currentTokenReducer";

const globalReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  token: currentTokenReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
