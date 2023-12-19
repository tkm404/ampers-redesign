import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";


function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href='/'>Ampers & Ampersand</Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;