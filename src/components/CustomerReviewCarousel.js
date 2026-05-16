import React, {useEffect, useCallback, useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card'
// import ExampleCarouselImage from 'component/ExampleCarouselImage';

const CardItems = [
  {
    id: 1,
    title: 'Aiden, North Portland',
    copy: '"Quick, professional, high-quality work every time. Fair pricing and a contractor we truly trust."',
  },
  {
    id: 2,
    title: 'Dan S.',
    copy: '"On time, on budget, and professional. They took the time to fully understand the project before quoting."',
  },
  {
    id: 3,
    title: 'Meredith, Hillsboro',
    copy: '"What started small turned into a big project- and they handled it flawlessly from start to finish."',
  },
  {
    id: 4,
    title: 'Tricia, Sellwood, Client since 2021',
    copy: '"You cannot find a better contractor- quality, timing, and cost are all spot on."',
  },
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return 'active';
  } else if (indexes.nextIndex === cardIndex) {
    return 'next';
  } else if (indexes.previousIndex === cardIndex) {
    return 'prev';
  } 
  return 'inactive';
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  return (
    <div className="container">
      <button onClick={handleCardTransition}>Transition to next card</button>
      <ul className="card-carousel">
        {CardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}>
              <h2>{card.title}</h2>
              <p>{card.copy}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

// function CustomerReviewCarousel() {
//   return (
//     <Carousel fade>
//       <Carousel.Item active>
//         <Card className="text-center">
//           <Card.Body>
//             <Card.Text>
//               "Quick, professional, high-quality work every time. Fair pricing and a contractor we truly trust."
//             </Card.Text>
//           </Card.Body>
//         </Card>
//         {/* <div class="reviewText" text="Quick, professional, high-quality work every time. Fair pricing and a contractor we truly trust."/> */}
//           <Carousel.Caption>
//             <h3>Aiden L.</h3>
//             <p>North Portland</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div text="On time, on budget, and professional. They took the time to fully understand the project before quoting."/>
//           <Carousel.Caption>
//             <h3>Dan S.</h3>
//             <p>Portland</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div text="What started small turned into a big project- and they handled it flawlessly from start to finish." />
//           <Carousel.Caption>
//             <h3>Meredith</h3>
//             <p>Hillsboro</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div text="You can't find a better contractor- quality, timing, and cost are all spot on."/>
//           <Carousel.Caption>
//             <h3>Tricia M.</h3>
//             <p>Sellwood, client since 2021</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   )
// }

// export default CustomerReviewCarousel;