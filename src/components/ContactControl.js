import React from 'react';
import Stack from 'react-bootstrap/Stack'
import Contact from '../pages/Contact'
import Banner from './Banner';


function ContactControl() {
  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Contact />
      </Stack>
      <Banner />
    </React.Fragment>
  )
}

export default ContactControl