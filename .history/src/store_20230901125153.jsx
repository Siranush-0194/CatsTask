// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Create reducers for your app

const store = createStore(rootReducer); // Pass the root reducer

export default store;
