import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function CrosswordMenu() {
  
  return (
    <Container>
      <Row className="p-4">
        <Col>
        <Card style={{width: '25rem'}} className="h-100">
          <Card.Body>
            <Card.Title><strong>Previous Crosswords</strong></Card.Title>
            <Card.Text>This is a Crossword Title</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
          <Card style={{width: '25rem'}} className="h-100">
            <Card.Body>
              <Card.Text>placeholder</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CrosswordMenu