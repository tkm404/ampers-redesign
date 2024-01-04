import React, {useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {ResidentialCarousel, CommercialCarousel, HandiworkCarousel} from './ServicesCarousels'

// Residential Remodel
// Commercial Tenant Improvements
// Handiwork
// Animation frames reveal portfolio pieces?

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row className="p-4">
        <Col>
          <Card style={{ width: '18rem'}}>
            <Card.Body>
              <Card.Title><strong>Residential Remodel</strong></Card.Title>
              <Card.Text>
                For all of your living space rearrangement needs
              </Card.Text>
              <Button
                onClick={() => setOpen(!open)}
                >See More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style = {{ width: '18rem'}}>
            <Card.Body>
              <ResidentialCarousel/>
            </Card.Body>
          </Card>
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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <CommercialCarousel/>
            </Card.Body>
          </Card>
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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <HandiworkCarousel/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ServicesMenu