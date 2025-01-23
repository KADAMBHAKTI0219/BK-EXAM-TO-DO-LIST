import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditToDoList from './EditToDoList'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/edit/:id' element={<EditToDoList/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
