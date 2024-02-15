import React from "react";
import Team from '../pages/Team'
import Stack from 'react-bootstrap/Stack'
import Banner from "./Banner";
import TeamInfo from "./TeamInfo";

function TeamControl() {

  return (
    <div>
    <React.Fragment>
      <Stack gap={2} className="p-4 col-md-8 mx-auto">
        <Team />
      </Stack>
      <Banner />
    </React.Fragment>
    <div className="pt-5 d-flex justify-content-center">
      <TeamInfo/>
    </div>
    </div>
  )
}

export default TeamControl