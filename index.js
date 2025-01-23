const express = require('express');
const cors = require('cors');
const connectionToDB = require('./Config/db');
const ToDoListRouter = require('./Routes/ToDoListRoutes');

require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))
 
app.use('/toDoList',ToDoListRouter)

app.listen(process.env.PORT || 3000 , async()=>{
try {
    await connectionToDB
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
} catch (error) {
    console.log(error)
}
})