import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";


function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href='/'>&Home</Navbar.Brand>
          <Nav className='justify-content-end'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/services'>Services</Nav.Link>
            <Nav.Link href='/team'>Team</Nav.Link>
            <Nav.Link href='/crossword'>Crossword</Nav.Link>            
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;