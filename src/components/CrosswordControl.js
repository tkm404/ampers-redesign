import React from "react";
import Crossword from "../pages/Crossword";
import { Stack } from "react-bootstrap";
import Banner from "./Banner";

function CrosswordControl() {

  return (
    <div>
      <React.Fragment>
        <Stack gap={2} className="p-4 col-md-8 mx-auto">
          <Crossword />
        </Stack>
        <Banner />
      </React.Fragment>
    </div>
  )
}

export default CrosswordControl