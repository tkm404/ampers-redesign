import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    image: require('../assets/img/examplepic1.jpg'),
    caption: "Image Caption",
    description: "Image Description"
  },
  {
    image: require('../assets/img/examplepic2.jpg'),
    caption: "Image Caption",
    description: "Image Description"
  },
  {
    image: require('../assets/img/examplepic3.jpg'),
    caption: "Image Caption",
    description: "Image Description"
  }
]

function HomeCarousel() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect} fade>
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
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}

    </Carousel>
  );
}

export default HomeCarousel;