const mongoose = require('mongoose')
const Schema = mongoose.Schema


const totoSchema = new Schema({
    name: {
        type: String,
        requireed: true
    },
    added_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Todo = mongoose.model('todo', totoSchema)