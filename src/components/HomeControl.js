import React from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Home from '../pages/Home'
import Banner from './Banner'
import HomeCarousel from './HomeCarousel'

function HomeControl() {
  let currentlyVisibleState = 
    <Home />;

  return (
    <div>
      <div> 
        <React.Fragment>
          <Stack gap={2} className="p-4 col-md-8 mx-auto">
            {currentlyVisibleState} 
          </Stack>

        <Banner />

      </React.Fragment>
      </div>

      <div>
        <div className='p-5'>
          <HomeCarousel />  
        </div>
      </div>

    </div>

  )
}

export default HomeControl