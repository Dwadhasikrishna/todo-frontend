import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addTodoAPI } from '../services/allAPI';

function AddTodo() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addTodo , setAddTodo] = useState({
    title:"",
    description:""
  })
  console.log(addTodo);

  const handleClose1 = ()=>{
    setAddTodo({
        title:"",
        description:""
    })

  }

  const handleAdd =async(e)=>{
    e.preventDefault()

    const {title ,description} = addTodo

    if(!title || ! description){
        alert('please fill the form completely')
    }
    else{
        //api call
        const result = await addTodoAPI(addTodo)
        console.log(result.data);
        if(result.status===200){
            alert('todo list added successfully')
        }
        else{
            alert(result.response.data)
        }
    }

  }



  return (
    <>
    <button onClick={handleShow} className='btn btn-success '>Add Todo-list Items</button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mt-2 mb-3'>
            <input type="text" className='form-control' value={addTodo.title} onChange={(e)=>setAddTodo({...addTodo,title:e.target.value})} placeholder='add title' />
        </div>
        <div className='mt-2 mb-3'>
            <input type="text" className='form-control' value={addTodo.description} onChange={(e)=>setAddTodo({...addTodo,description:e.target.value})} placeholder='add description' />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddTodo