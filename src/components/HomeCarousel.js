import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    image: require('../assets/img/Decks&.jpg'),
    caption: "Decks &",
    // description: "Image Description"
  },
  {
    image: require('../assets/img/Fences&.jpg'),
    caption: "Fences &",
    // description: "Image Description"
  },
  {
    image: require('../assets/img/Repairs&.jpg'),
    caption: "Repairs &",
    // description: "Image Description"
  },
  {
    image: require('../assets/img/Remodels&.jpg'),
    caption: "Remodels &",
    // description: "Image Description"
  },
  {
    image: require('../assets/img/Commercial&.jpg'),
    caption: "Commercial &",
    // description: "Image Description"
  },
  {
    image: require('../assets/img/AmpersTeam2.jpg'),
    caption: "Ampers & Ampersand",
    // description: "Image Description"
  }
]

function HomeCarousel() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel id="homeCarousel" data-bs-theme="light" activeIndex={index} onSelect={handleSelect} fade>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide.image}
              alt='slider'
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              {/* <p>{slide.description}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}

    </Carousel>
  );
}

export default HomeCarousel;