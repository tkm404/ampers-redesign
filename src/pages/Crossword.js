import React from "react";
import Container from "react-bootstrap/Container";


const Crossword = (props) => {

  return (
    <Container>
        <div className="pt-5 d-flex justify-content-center">
          <h2>Wonderlove Crossword Answers</h2>
        </div>
        <div className="d-flex justify-content-center">
          <h5>Stumped in Stumptown? Check the latest Crossword Answers!</h5>
        </div>
    </Container>
  )
}

export default Crossword