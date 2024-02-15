import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactSuccess() {

  return(
    <Container>
      <Row className='d-flex pt-4 justify-content-center'>
        <Col sm={8} className='mb-3 text-center'>
          <h5>Thank you for reaching out</h5>
          <h5>We will contact you soon!</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactSuccess