import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CompanyStatement() {
  return (
      <Container>
        <Row className='d-flex pt-4 justify-content-center'>
          <Col sm={8} className='text-center'>
            <h5>From repairs to remodels, <em>Ampers & Ampersand</em> strives to be your go-to handy and construction team for all of your residential and commercial improvement projects, big or small.</h5>
          </Col>
          <Col sm={8} className='text-center'>
            <h5>As we love to jokingly say, "who does that?"</h5>
          </Col>
        </Row>
      </Container>
  )
}

export default CompanyStatement