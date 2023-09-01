// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import catReducer from "./catReducer";

const rootReducer = combineReducers({
  cats: catReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
