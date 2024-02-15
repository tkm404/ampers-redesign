import React, {useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardFooter from "react-bootstrap/CardFooter";
import Button from 'react-bootstrap/Button'
import {ResidentialCarousel, CommercialCarousel, HandiworkCarousel} from './ServicesCarousels'

// Residential Remodel
// Commercial Tenant Improvements
// Handiwork
// Animation frames reveal portfolio pieces?

function ServicesMenu() {
  // const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row className="p-4">
        <Col>
          <Card style={{ width: '25rem'}} className="h-100">
            <Card.Body>
              <Card.Title><strong>Residential Remodel</strong></Card.Title>
              <Card.Text>
              From bathrooms and kitchens to outdoor living spaces, and everything in between, our team will bring your vision to life.  We will take care of your home like it's our own and communicate consistently from start to finish, leaving you thrilled with the results.
              </Card.Text>
            </Card.Body>
            {/* <CardFooter>
              <Button
                onClick={() => setOpen(!open)}
                >See More
              </Button>                
            </CardFooter> */}
          </Card>
        </Col>
        <Col>
          <Card style = {{ width: '25rem'}} className="h-100">
            <Card.Body>
              <ResidentialCarousel/>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="p-4">
        <Col>
          <Card style={{ width: '25rem'}} className="h-100">
            <Card.Body>
              <Card.Title><strong>Commercial Tenant Improvements</strong></Card.Title>
              <Card.Text>
              Congratulations on your lease!  We would love to work with you and a designer to go from blank canvas to bustling business and help you realize your dream.  Ampers & Ampersand has experience at all stages of the build-out process, and we'd be happy to provide a list of establishments where you can see our work.
              </Card.Text>
            </Card.Body>
            {/* <CardFooter>
              <Button>See More</Button>              
            </CardFooter> */}
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '25rem' }} className="h-100">
            <Card.Body>
              <CommercialCarousel/>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="p-4">
        <Col>
          <Card style={{ width: '25rem' }} className="h-100">
            <Card.Body>
              <Card.Title><strong>Handiwork & More</strong></Card.Title>
              <Card.Text>
              One of the many things that sets us apart is that we are happy to take on jobs big and small.  So many of our customers for bigger projects still call us for their home or commercial repairs, and so many of our small-repair customers keep us in mind when they have a big project come along.  We enjoy building these relationships and being the team you call for whatever repair and construction needs come your way.  Welcome to our circle of company friends!
              </Card.Text>
            </Card.Body>
            {/* <CardFooter>
              <Button>See More</Button>              
            </CardFooter> */}
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '25rem' }} className="h-100">
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