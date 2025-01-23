import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditToDoList = () => {
    const {id} = useParams()
    const [toDo,setToDo] = useState({title:""})
    const getToDoListDataById = (id)=>{
      axios.get(`${import.meta.env}getById/${id}`)
      .then((res)=>setToDo(res.data.data))
      .catch(err=>console.log(err))
    }
    useEffect(()=>{
      getToDoListDataById(id)
    },[])

  return (
    <div>
        <form action="">
        <input type="text" name="todo" placeholder="Add your task" value={toDo}/>
       <button type='submit'>+</button>
      </form>
    </div>
  )
}

export default EditToDoList
