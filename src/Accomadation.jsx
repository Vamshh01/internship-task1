import React from 'react';
import './Accomadation.css';
import hotelRoom from '/Users/vamshikusuma/Desktop/TASK 1/src/assets/hotelluxery.jpg';


const Accomadation = () => {
  return (
    <div id="RoomsandFacilites"> 
    <div className="left">
        
   <p> Luxury Stay in Hyderabad </p>
   <div className='Heading'>Luxury Stay at Hyderabad Horizon Heights Hotel & Convention Centre</div>
   <div className='para'>Experience ultimate relaxation in our 5-star accommodations at Hyderabad Marriott Hotel & Convention Centre in India. Situated in the heart of the city, our hotel features elegant rooms and luxury suites, all offering stunning views of the lake and cityscape. Whether you're here for business or leisure, enjoy our world-class amenities and exceptional service, making your stay both comfortable and memorable.</div>
   <button>Book Now</button>
    </div>
    

    <div className="right">
        <img src={hotelRoom}/>

    </div>
  </div>
  )
}

export default Accomadation