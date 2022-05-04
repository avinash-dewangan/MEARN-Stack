import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./rootReducers";
import logger from 'redux-logger'
// Import the necessary methods for saving and loading
import { save, load } from "redux-localstorage-simple"

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(save(), thunk, logger)))

export default store;