import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function TeamInfo() {

  return (
    <Container>
      <Row className="p-4 mx-auto">
        <Col>
          <img alt="Scott goes here"></img>
          <h6>Scott, Owner</h6>
        </Col>
        <Col>
          <img alt="Igor is the Ops Man"></img>        
          <h6>Igor, Operations Manager</h6>
        </Col>
      </Row>
      <Row className="p-4 mx-auto">
        <Col>
          <img alt="Jesse Site Lead"></img>
          <h6>Jesse, Site Lead</h6>
        </Col>
        <Col>
          <img alt="Dan Crewmember"></img>
          <h6>Dan, Crewmember</h6>
        </Col>
      </Row>
      <Row className="p-4 mx-auto">
        <Col>
          <img alt="Omar Crewmember"></img>
          <h6>Omar, Crewmember</h6>
        </Col>
        <Col>
          <img alt="Lauren Crewmember"></img>
          <h6>Lauren, Crewmember</h6>
        </Col>
      </Row>
      <Row className="p-4 mx-auto">
        <img alt="Matt Crewmember"></img>
        <h6>Matt, Crewmember</h6>
      </Row>
    </Container>
  )
}

export default TeamInfo;