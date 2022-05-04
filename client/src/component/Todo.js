import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodo, deleteTodo, addTodo } from '../redux/todo/todoActions';
//import { getTodo, deleteTodo, addTodo } from '../redux/todo/types'


class Todo extends Component {
    componentDidMount() {
        this.props.getTodo()
    }

    state = {}
    render() {
        const { todos } = this.props.todo;
        console.log(todos);
        const handleAddTodo = (e) => {
            const todo = prompt("Enter todo here", "");
            const newTodo = {
                name: todo
            }
            this.props.addTodo(newTodo);
        }

        const handleDelete = (id) => {
            this.props.deleteTodo(id);
        }
        return (
            <div class="todo container">

                <Button variant="primary" style={{
                    margin: '10px'
                }} onClick={handleAddTodo}>Add Todo</Button>


                <Table hover responsive striped bordered>
                    <thead>
                        <tr>
                            <th>Todo List</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {todos.map((todo) => {
                            return (
                                <tr key={todo._id}>
                                    <td>{todo.name}</td>
                                    <td><Button variant="dark" onClick={
                                        () => handleDelete(todo._id)
                                    }>Delete</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>

                </Table>
            </div>
        );
    }
}


// Todo.prototype ={
//     getTodo: PropTypes.func.isRequired,
//     todo: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    todo: state.todo
})


export default connect(mapStateToProps, { getTodo, deleteTodo, addTodo })(Todo);
