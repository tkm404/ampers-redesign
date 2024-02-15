import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomeTestimonials() {
  return (
    <Container fluid className="bg-info shadow-1-strong">
      <Row className="p-4 d-flex justify-content-md-center">
        <Col sm={8} className="text-center">        
        <h4><em>From our happy customers!</em></h4>
        </Col>

      </Row>
      <Row className="mx-2 pb-4">
        <Col></Col>
        <Col>Coming Soon!</Col>
        <Col>Be the first to share your AmperStory!</Col>
        <Col></Col>
      </Row>
    </Container>

  )
}

export default HomeTestimonials