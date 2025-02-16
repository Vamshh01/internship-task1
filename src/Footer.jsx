import React from 'react';
import './Footer.css';
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"




const Footer = () => {
  return (
    <div id='Contactus'>
        <h2>Hyderabad Horizon Heights</h2>
        <div className="divs">

       
        <div className='first'>
           <h3>Overview</h3>
           <ul>
            <li>Gallery</li>
            <li>Accomadations</li>
            <li>Dining </li>
           </ul>



        </div>
        <div className="second">
          <h3>Follow Horizon Heights on </h3>
          <ul>
            <li><AiFillInstagram/></li>
            <li><AiFillFacebook/></li>
            <li><AiFillTwitterCircle/></li>
          </ul>

        </div>
        <div className="third">
        <h3>Tank bund Road ,opposite to Hussain Sagar Lake </h3>
          <ul>
            <li>
Hyderabad, India, 500080</li>
            <li>Toll Free: +91-800-102 5000</li>
            <li>Fax: +91 40-65522888</li>
          </ul>

        </div>
        </div>
    </div>

  )
}

export default Footer
