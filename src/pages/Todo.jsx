import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { getTodoAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Todo() {
    const [getTodo,setGetTodo] = useState([])

    const getAllTodo = async()=>{
        const result = await getTodoAPI()
        console.log(result.data);
        setGetTodo(result.data)
      }

      useEffect(()=>{
        getAllTodo()
      },[])
  return (
    
   <>
   <Header/>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1>Added Todos</h1>
            <div className='shadow' style={{width:'1000px',height:'700px'}}>
          
          { getTodo?.length>0?
          getTodo.map((item)=>(<div className='shadow ms-5 mt-2' style={{width:'900px',height:'200px'}}>
          <h1>Title:{item.title}</h1>
          <h3>description:{item.description}</h3>
          </div>))
           :<p style={{color:'red'}} className='mt-4 ms-2'>No items to display.Click here to <Link to={'/'}><button className='btn btn-success'>Add</button></Link></p>}
            </div>
        </div>
   </>
  )
}

export default Todo