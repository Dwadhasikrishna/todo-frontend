import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{color:'white'}} href="#home">
           {' '}
            TODO-LIST
          </Navbar.Brand>
          <Navbar.Brand style={{color:'white'}} href="#home">
           {' '}
           <Link to={'/'}> Home</Link>
          </Navbar.Brand>
          <Navbar.Brand style={{color:'white'}} href="#home">
           {' '}
           <Link to={'/todo'}> Todos</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header