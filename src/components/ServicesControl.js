import React from "react";
import Services from '../pages/Services'
import ServicesMenu from "./ServicesMenu";
import Stack from 'react-bootstrap/Stack'
import Banner from "./Banner";


function ServicesControl() {

  return (
    <div> 
      <React.Fragment>
        <Stack gap={2} className="p-4 col-md-8 mx-auto">
          <Services />
        </Stack>
        <Banner />
      </React.Fragment>
      <div>
        <ServicesMenu />
      </div>
    </div>
  )
}

export default ServicesControl