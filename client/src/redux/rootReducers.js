import { combineReducers } from 'redux'
import todo from "../redux/todo/todoReducer"
const rootReducer = combineReducers({
    todo:todo
});

export default rootReducer;