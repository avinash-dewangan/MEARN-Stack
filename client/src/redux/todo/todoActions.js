import { ADD_TODO, GET_TODO, DELETE_TODO, TODO_LOADING } from './types'
import axiosAPI from '../../config_axios'
import axios from 'axios'

export const setTodoLoading = () => {
    return {
        type: TODO_LOADING
    }
}


export const getTodo = () => dispatch => {
    dispatch(setTodoLoading());
    axiosAPI
        .get("/api/todo")
        .then(res =>
            dispatch({
                type: GET_TODO,
                payload: res.data
            }));
}

export const deleteTodo = (id) => dispatch => {
    axiosAPI
        .delete(`/api/todo/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_TODO,
                payload: id
            }))
}

// export const addTodo = (todo) => dispatch => {
//     axios
//         .post(`/todo`, todo)
//         .then(res =>
//             dispatch({
//                 type: ADD_TODO,
//                 payload: res.data
//             }))
// }

export const addTodo = (todo) => {
    console.log("add addTodo calling")
     // At request level
  
    return (dispatch) => {
        //dispatch(fetchProductRequest)
        //const url = process.env.REACT_APP_API_URL
        //console.log(url);
        axiosAPI
        .post("/api/todo", todo)
            .then(res => {
                // console.log(res)
                const newtodo = res.data
                console.log(newtodo)
               // dispatch(addProductSucess(returnproduct))
            })
            .catch(error => {
                const errorMsg = error
                // dispatch(fetchProductFailure(errorMsg))
                console.log(errorMsg);
            })
    }
}
