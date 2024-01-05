import React from "react";
import Banner from "./Banner";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


function TeamInfo() {

  return (
    <Container>
      <Row className="p-4 mx-auto">
        <Col>
          <h4>Scott McDowell,</h4>
          <h6>Owner</h6>
          <img alt="Scott goes here"></img>
        </Col>
        <Col>
          <h4>Igor,</h4>
          <h6>Operations Manager</h6>
          <img alt="Igor is the Ops Man"></img>
        </Col>
      </Row>
    </Container>
  )
}

export default TeamInfo;