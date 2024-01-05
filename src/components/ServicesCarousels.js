import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ResidentialData = [
  {
    image: require('../assets/img/servExample1.jpg'),
  },
  {
    image: require('../assets/img/servExample2.jpg')
  }
]

const CommercialData = [
  {
    image: require('../assets/img/servExample3.jpg')
  },
  {
    image: require('../assets/img/servExample4.jpg')
  }
]

const HandiworkData = [
  {
    image: require('../assets/img/servExample5.jpg')
  },
  {
    image: require('../assets/img/servExample6.jpg')
  }
]

function ResidentialCarousel() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect} fade interval={null}>
      {ResidentialData.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
            className='d-block w-100'
            src={slide.image}
            alt='slider'
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

function CommercialCarousel() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect} fade interval={null}>
      {CommercialData.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
            className='d-block w-100'
            src={slide.image}
            alt='slider'
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

function HandiworkCarousel() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect} fade interval={null}>
      {HandiworkData.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
            className='d-block w-100'
            src={slide.image}
            alt='slider'
            />
          </Carousel.Item>          
        )
      })}
    </Carousel>

  )
}

export {ResidentialCarousel, CommercialCarousel, HandiworkCarousel}