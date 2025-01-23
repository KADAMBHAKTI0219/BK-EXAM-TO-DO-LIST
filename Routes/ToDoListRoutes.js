const express = require('express')
const { CreateToDoList, GetToDoList, UpdateToDoList, DeleteToDoList, GetToDoListDataById } = require('../Controllers/ToDoListsControllers')
const ToDoListRouter = express.Router()

ToDoListRouter.post('/create',CreateToDoList)
ToDoListRouter.get('/get',GetToDoList)
ToDoListRouter.put('/update/:id',UpdateToDoList)
ToDoListRouter.delete('/delete/:id',DeleteToDoList)
ToDoListRouter.get('/getById/:id',GetToDoListDataById)
module.exports = ToDoListRouter