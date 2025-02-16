import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hotelimg1 from "/Users/vamshikusuma/Desktop/TASK 1/src/assets/hotel img 1.jpeg";
import hotelimg2 from '/Users/vamshikusuma/Desktop/TASK 1/src/assets/hotel img 2.jpg';
import hotelimg3 from '/Users/vamshikusuma/Desktop/TASK 1/src/assets/hotel img 3.jpg';

import './Home.css';

const Home = () => {
  return (
    <div id="home">
        <Carousel showThumbs={false} autoPlay={false} infiniteLoop showStatus={false}>
           
      <div className='carousel-slide'>
        <img src={hotelimg1} alt="Slide 1" className='carouselimg'/>
       
         <p className="carousel-text"> Welcome To Horizon Heights</p>
      </div>
      <div className='carousel-slide'>
        <img src={hotelimg2} alt="Slide 2" className='carouselimg' />
      </div>
      <div className='carousel-slide'>
        <img src={hotelimg3} alt="Slide 3" className='carouselimg' />
      </div>
    
    </Carousel>
    </div>

   
  )
}

export default Home