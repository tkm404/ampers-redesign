import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup  from 'react-bootstrap/ToggleButtonGroup';

function CrosswordMenu() {
  
  return (
    <Container>
      <Row className="p-4">
        <Col>
        <Card style={{width: '25rem'}} className="h-100">
          <Card.Body>
            <Card.Title><strong>Previous Crosswords</strong></Card.Title>
            <br />
            <ToggleButtonGroup vertical type="radio" name="crosswordhist" defaultValue={1}>

              <ToggleButton id="cross-radio-1" value={1}>
                All For One, One For All - <i>9/17/24</i>
              </ToggleButton>
              <ToggleButton id="cross-radio-2" value={2}>
                Crossword Title 2 - <i>last month</i>
              </ToggleButton>
              <ToggleButton id="cross-radio-3" value={3}>
                Crossword Title 3 - <i>forever ago</i>
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>
        </Col>
        <Col>
          <Card style={{width: '25rem'}} className="h-100">
            <Card.Body>
              <Card.Text><strong>Select a Crossword to see the Answers!</strong></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CrosswordMenu