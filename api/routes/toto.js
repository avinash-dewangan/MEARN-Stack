const express = require('express');
const router = express.Router();
var checkAuth = require("../middleware/auth");

//import model
//const Todo = require("../models/todo");
const todoController = require("../controller/todo");


//Data Listing
router.get('/:id', todoController.getAllTodos);

//Add the data
router.post('/',checkAuth, todoController.addTodo);

//Delete The Data
router.delete('/:id', checkAuth, todoController.deleteTodo);


//Data Listing
router.get('/:id', checkAuth, todoController.findByIdTodo);

module.exports = router;