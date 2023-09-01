// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './catReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;