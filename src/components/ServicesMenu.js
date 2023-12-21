import React, {useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Residential Remodel
// Commercial Tenant Improvements
// Handiwork
// Animation frames reveal portfolio pieces?

function ServicesMenu() {
  return (
    <Container>
      <Row className="p-4">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><strong>Residential Remodel</strong></Card.Title>
              <Card.Text>
                For all of your living space rearrangement needs
              </Card.Text>
              <Button>See More</Button>
            </Card.Body>
            </Card>
          </Col>
        <Col>
          <Row><strong>Price Quotes:</strong></Row>
          <Row>
            <ul>
              <li>Feeling like my only friend is the city of angels: $50/hr</li>
              <li>And another thing</li>              
            </ul>
          </Row>
          </Col>
      </Row>

      <Row className="p-4">
        <Col>
          <Card style={{ width: '18rem'}}>
            <Card.Body>
              <Card.Title><strong>Commercial Tenant Improvements</strong></Card.Title>
              <Card.Text>
                Property Managers inquire here
              </Card.Text>
              <Button>See More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Row><strong>Price Quotes:</strong></Row>
          <Row>
            <ul>
              <li>Do a litte dance and drink a little water: $100/hr</li>
              <li>Some other service</li>
              </ul>
          </Row>
        </Col>
      </Row>
      
      <Row className="p-4">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><strong>Handiwork</strong></Card.Title>
              <Card.Text>
                Who does that? We do!
              </Card.Text>
              <Button>See More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Row><strong>Price Quotes:</strong></Row>
          <Row>
            <ul>
              <li>Sing about California: $25/hr</li>
              <li>Another such thing</li>
            </ul>
            </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ServicesMenu