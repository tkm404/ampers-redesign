import React from "react";
import Container from "react-bootstrap/Container";


const Team = (props) => {

  return(
    <Container>
      <div className="pt-5 d-flex justify-content-center">
        <h2>Meet Our Team</h2>
      </div>
      <div className="d-flex justify-content-center">
        <h6><em>Ampers & Ampersand</em> is a small company, born in Portland in 2015.  Since its inception, we've helped customers with projects big and small in the residential and commercial realms. As a testament to our friendly service and quality craftsmanship, many of our jobs are from return customers and their referrals. If you are finding us out of the blue, welcome to a best kept secret.</h6>
      </div>
    </Container>
  )
}

export default Team