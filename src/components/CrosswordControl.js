import React from "react";
import Crossword from "../pages/Crossword";
import { Stack } from "react-bootstrap";
import Banner from "./Banner";
import CrosswordMenu from "./CrosswordMenu";

function CrosswordControl() {

  return (
    <div>
      <React.Fragment>
        <Stack gap={2} className="p-4 col-md-8 mx-auto">
          <Crossword />
        </Stack>
        <Banner />
      </React.Fragment>
      <div>
        <CrosswordMenu />
      </div>
    </div>
  )
}

export default CrosswordControl