import React from "react";
import Services from '../pages/Services'
import Stack from 'react-bootstrap/Stack'
import Banner from "./Banner";


function ServicesControl() {

  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Services />
      </Stack>
      <Banner />
    </React.Fragment>
  )
}

export default ServicesControl