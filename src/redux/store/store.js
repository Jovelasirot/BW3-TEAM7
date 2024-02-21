import { configureStore, combineReducers, current } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import postReducer from "../reducers/postReducer";
import currentTokenReducer from "../reducers/currentTokenReducer";
import homepagePostReducer from "../reducers/homepagePostReducer";
import jobsReducer from "../reducers/jobsReducer";
import allUserReducer from "../reducers/allUserReducers";
const globalReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  token: currentTokenReducer,
  homePage: homepagePostReducer,
  jobs: jobsReducer,
  allUser: allUserReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
