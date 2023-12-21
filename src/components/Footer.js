import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'



function Footer() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='d-flex pt-4 justify-content-center'>
          <Row >
            <Col>
              <p className='text-white'>[971.357.1858]</p>            
            </Col>
            <Col>
              <p className='text-white'>[workorders@amperspdx.com]</p>
            </Col>
          </Row>
        </Container>
      </Navbar>
  )
}

export default Footer