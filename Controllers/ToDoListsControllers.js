const ToDoListModel = require("../Models/ToDoList")

const CreateToDoList = async(req,res)=>{
    const {title} = req.body
    if(!title){
        return res.status(400).json({message:"Please enter a title"})
    }
    try {
        const createData = await ToDoListModel.find({title})
        if(createData.length > 0){
            return res.status(400).json({message:"Title already exists"})
            }
            const newToDoList = await ToDoListModel.create({title})

            res.status(201).json({message:"ToDo List created successfully",data:newToDoList})
    } catch (error) {
        res.send(error)
    }
   
}

const GetToDoList = async(req,res)=>{
    try {
        const ToDoList = await ToDoListModel.find()
        if(!ToDoList){
            return res.status(404).json({message:"No To Do List found"})
        }
        res.status(200).json({message:"All ToDo List",data:ToDoList})
    } catch (error) {
        res.send(error)
    }
}

const UpdateToDoList= async(req,res)=>{
    const id =req.params.id
    const ExistTitle = await ToDoListModel.findById(id)
    if(!ExistTitle){
        return res.status(404).json({message:"No To Do List found with this id"})
            }
    try {
        const updateData = await ToDoListModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"To Do List updated successfully",data:updateData})
    } catch (error) {
        res.send(error)
    }
}

const DeleteToDoList = async(req,res)=>{
    const id = req.params.id
    const ExistTitle = await ToDoListModel.findById(id)
    if(!ExistTitle){
        return res.status(404).json({message:"No To Do List found with this id"})
        }
        try {
            await ToDoListModel.findByIdAndDelete(id)
            return res.status(200).json({message:"To Do List Deleted successfully"})
        }
        catch (error){
            res.send(error)
        }
}

const GetToDoListDataById = async(req,res)=>{
    const id = req.params.id
    const ExistTitle = await ToDoListModel.findById(id)
    if(!ExistTitle){
        return res.status(404).json({message:"No To Do List found with this id"})
    }
    try {
        res.status(200).json({message:"To Do List found",data:ExistTitle})
    } catch (error) {
        res.send(error)
    }
}
module.exports = {CreateToDoList,GetToDoList,UpdateToDoList,DeleteToDoList,GetToDoListDataById}