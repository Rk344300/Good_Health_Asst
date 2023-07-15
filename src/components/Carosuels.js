import React from 'react'
import "./Carousel.css";

import carousel1 from "../static/images/carousel1.png";
import carousel2 from "../static/images/carousel2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import {Carousel} from 'react-responsive-carousel'

function Carosuels() {
  return (
    <div className='carousel'>
        <div className='trackers'>
            <span>view all trackers</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M0 11.4725L4.94467 6.5L0 1.5275L1.52227 0L8 6.5L1.52227 13L0 11.4725Z" fill="white"/>
            </svg>

        </div>
        <Carousel>
          
            <div className='imgDiv'>
              <img className='carouselImg' src={carousel1} alt=''  />  
            </div>
            <div className='imgDiv'>
              <img className='carouselImg' src={carousel2} alt='' />  
            </div>
          
        </Carousel>
    </div>
  )
}

export default Carosuels;