import { ADD_TODO, GET_TODO, DELETE_TODO, TODO_LOADING } from '../actions/types'
import axios from 'axios'

export const setTodoLoading = () => {
    return {
        type: TODO_LOADING
    }
}

const urlLocal = '';
export const getTodo = () => dispatch => {
    dispatch(setTodoLoading());
    axios
        .get(`${urlLocal}/api/todo`)
        .then(res =>
            dispatch({
                type: GET_TODO,
                payload: res.data
            }));
}

export const deleteTodo = (id) => dispatch => {
    axios
        .delete(`${urlLocal}/api/todo/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_TODO,
                payload: id
            }))
}

export const addTodo = (todo) => dispatch => {
    axios
        .post(`${urlLocal}/api/todo`, todo)
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            }))
}
