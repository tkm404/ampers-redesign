import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Peanut Butter Jelly Time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Badger Badger Badger Badger...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>What Does the Fox Say?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel;