import React from 'react';
import Stack from 'react-bootstrap/Stack'
import Contact from '../pages/Contact'


function ContactControl() {
  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Contact />
      </Stack>
    </React.Fragment>
  )
}

export default ContactControl