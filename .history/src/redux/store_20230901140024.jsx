// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './catreducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;