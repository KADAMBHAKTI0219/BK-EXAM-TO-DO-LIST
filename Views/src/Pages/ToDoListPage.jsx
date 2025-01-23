import React, { useEffect, useState } from 'react'
import CreateToDoList from '../Components/CreateToDoList'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ToDoListPage = () => {
 const [toDoListData,setToDoListData] = useState([])

 const getData = ()=>{
    axios.get(`${import.meta.env.VITE_URL}get`,{withCredentials:true})
    .then(response => {
      setToDoListData(response.data.data)
        })
        .catch(error => {
           console.log(error)
            })
            
 }
 const handleDelete= (id)=>{
  axios.delete(`${import.meta.env.VITE_URL}delete/${id}`,{withCredentials:true})
  .then(response => {
   getData()
    })
    .catch(error => {
      console.log(error)
      })
 }
 useEffect(()=>{
    getData()
 },[])

  return (
    <div>
      <h1>TO DO LIST </h1>
     {/* <CreateToDoList/> */}
     {
        toDoListData.map(el=>(
            <div key={el._id}>
                <h2>{el.title}</h2>
                <Link to={`/edit/${el._id}`}>Edit </Link>
                <button onClick={()=>handleDelete(el._id)}>Delete</button>

                </div>
        ))
     }
    </div>
  )
}

export default ToDoListPage
