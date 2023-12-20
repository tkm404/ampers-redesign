import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function Banner() {
      let currentURL = window.location
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="justify-content-center">        
        <Nav>
          {currentURL.pathname === '/contact' ? (
            <Nav.Link href='/'>
              Home
            </Nav.Link>
          ) : (
            <Nav.Link href='/contact'>
              Contact Us
            </Nav.Link>
          )}
        </Nav>
      </Container>        
    </Navbar>
  );
}

export default Banner