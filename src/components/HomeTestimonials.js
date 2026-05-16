import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardCarousel from "./CustomerReviewCarousel";


function HomeTestimonials() {
  return (
    <Container fluid className="bg-info shadow-1-strong">
      <Row className="p-4 d-flex justify-content-md-center">
        <Col sm={8} className="text-center">        
          <CardCarousel/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeTestimonials