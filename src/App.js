import React from 'react';
import logo from './img/logo.svg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './App.scss';
import oxbSticker from './img/OXB-sticker.png';
import oxbFull from './img/OXB-FULL.png';

function App() {
  return (
    <div className="App">


      <img src={oxbSticker} className="oxb-sticker" alt="logo" />
      <img src={oxbFull} className="oxb-full" alt="logo" />

      <h1>FULL SITE COMING SOON! </h1>
      <h4>for now visit us at...</h4>
      <Button variant="contained" className="book" href="https://square.site/book/QBS9PPQ431P02/the-oxford-barber-company-greenville-sc">Book Now</Button>
      <Button variant="contained" className="book" href="https://squareup.com/gift/KKZT73JH9V3HG/order">Gift Card</Button>
      <div className="social-wrapper">
        <a calssName="social-items" href="https://www.facebook.com/TheOxfordBarberCo/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="social-icons" icon={faFacebook} />
        </a>
        <a calssName="social-items" href="https://www.instagram.com/theoxfordbarber/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="social-icons" icon={faInstagram} />
        </a>
      </div>

      <div className="footer-wrapper">

      </div>
    </div>

  );
}

export default App;
