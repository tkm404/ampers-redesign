import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactError() {

  return(
    <Container>
      <Row className='d-flex pt-4 justify-content-center'>
        <Col sm={8} className='mb-3 text-center'>
          <h5>Something went wrong with the submission</h5>
          <h5>Reach out by phone, or refresh the page and try again</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactError