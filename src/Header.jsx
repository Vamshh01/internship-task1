import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Accomadation from './Accomadation';

const Header = () => {
  return (
  <div className="navbar">

    <nav>
        <ul>
        <li><a href="#home">Home</a></li>
          <li><a href="#RoomsandFacilites">Rooms and Facilities</a></li>
          <li><a href="#Contactus">Contact us</a></li>
        </ul>

    </nav>

    </div>
  )
}

export default Header