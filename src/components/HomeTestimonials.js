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
        <Col>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</Col>
        <Col>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</Col>
        <Col>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</Col>
        <Col>"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Col>
      </Row>
    </Container>

  )
}

export default HomeTestimonials