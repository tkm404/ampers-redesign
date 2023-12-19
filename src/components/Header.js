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
            <Nav.Link href='/'>Services</Nav.Link>
            <Nav.Link href='/'>Team</Nav.Link>
            <Nav.Link href='/'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;