import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ReusableForm(props) {

    return (
      <Container>
        <Form onSubmit={props.formSubmissionHandler}>
          <Row className='d-flex pt-4 justify-content-left'>
            <Col xs='auto'>
              <Form.Group controlId='formClientName'>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                type='text'
                name='clientName'
                defaultValue=''/>
              </Form.Group>
            </Col>
          </Row>
          <Row className='d-flex pt-4 justify-content-left'>
            <Col xs='auto'>
              <Form.Group controlId='formClientEmail'>
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                type='email'
                name='clientEmail'
                placeholder='name@example.com'
                defaultValue=''/>
              </Form.Group>
            </Col>
          </Row>
          <Row className='d-flex pt-4 justify-content-center'>
            <Col sm>
              <Form.Group controlId='formClientMessage'>
                <Form.Label>How Can We Help?</Form.Label>
                <Form.Control
                as='textarea'
                rows={3}
                name='clientMessage'
                placeholder='Your message here' />
              </Form.Group>
            </Col>
          </Row>
          <Row className='pt-4 justify-content-left'>
            <Col xs='auto'>
            <Button variant='primary' size='xs auto' type='submit' className='btn btn-primary mb-3'>Send It!</Button>
            </Col>
          </Row>
        </Form>
      </Container>
  
    )
  }
  
  ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func
  }
  
  export default ReusableForm
