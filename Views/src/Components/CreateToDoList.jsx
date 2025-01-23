import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CreateToDoList = () => {
    const [toDo,setToDo] = useState('')
    const CreateData = ()=>{
        axios.post(`${import.meta.env.VITE_URL}create`,{toDo},{
            withCredentials:true
        })
        .then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
        CreateData()
    },[])
  return (
    <div>
      <form action="" onSubmit={CreateData}>
        <input type="text" name="todo" placeholder="Add your task" value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
       <button type='submit'>+</button>
      </form>
    </div>
  )
}

export default CreateToDoList
