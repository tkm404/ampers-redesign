import React from "react";
import Team from '../pages/Team'
import Stack from 'react-bootstrap/Stack'

function TeamControl() {

  return (
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Team />
      </Stack>
    </React.Fragment>
  )
}

export default TeamControl