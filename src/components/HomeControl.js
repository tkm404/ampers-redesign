import React from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Home from '../pages/Home'

function HomeControl() {
  let currentlyVisibleState = 
    <Home />;
  let buttonText = null;

  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Button variant="secondary">{buttonText}</Button>
      </Stack>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default HomeControl