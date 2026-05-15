import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'component/ExampleCarouselImage';

function CustomerReviewCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div text="Quick, professional, high-quality work every time. Fair pricing and a contractor we truly trust."/>
          <Carousel.Caption>
            <h3>Aiden L.</h3>
            <p>North Portland</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div text="On time, on budget, and professional. They took the time to fully understand the project before quoting."/>
          <Carousel.Caption>
            <h3>Dan S.</h3>
            <p>Portland</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div text="What started small turned into a big project- and they handled it flawlessly from start to finish." />
          <Carousel.Caption>
            <h3>Meredith</h3>
            <p>Hillsboro</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div text="You can't find a better contractor- quality, timing, and cost are all spot on." />
          <Carousel.Caption>
            <h3>Tricia M.</h3>
            <p>Sellwood, client since 2021</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CustomerReviewCarousel;