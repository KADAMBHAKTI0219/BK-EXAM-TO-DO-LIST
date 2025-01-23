const mongoose = require('mongoose')
const TodoListSchema = mongoose.Schema({
    title: String
})

const ToDoListModel = mongoose.model("ToDoListModels",TodoListSchema)
module.exports = ToDoListModel