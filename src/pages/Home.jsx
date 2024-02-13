import React from 'react'
import Header from '../Components/Header'
import AddTodo from '../Components/AddTodo'

function Home() {
  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:'lavender',height:'100vh',width:'100%'}}>
    <h3 >Add Todo-Items</h3>
    <AddTodo/>
    </div>
    </>

  )
}

export default Home