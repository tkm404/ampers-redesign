import React from "react";
import Team from '../pages/Team'
import Stack from 'react-bootstrap/Stack'
import Banner from "./Banner";

function TeamControl() {

  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Team />
      </Stack>
      <Banner />
    </React.Fragment>
  )
}

export default TeamControl