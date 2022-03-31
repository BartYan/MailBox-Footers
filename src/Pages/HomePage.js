import React from 'react';

import Sidebar from '../components/Sidebar';
import MainContent from '../components/Content/MainContent/MainContent';
import '../Style/style.scss';

import image from '../Images/gmail-main.jpg';
import linkedin from '../Images/socialmedia/001-linkedin.svg';
import twitter from '../Images/socialmedia/002-twitter.svg';
import facebook from '../Images/socialmedia/003-facebook.svg';
import youtube from '../Images/socialmedia/004-youtube.svg';
import instagram from '../Images/socialmedia/005-instagram.svg';


const HomePage = () => {

  return (
    <div className='container'>
      <Sidebar/>
      <div className='content-left columbus'>
        <MainContent />
      </div>

      <div className='content-right'>
        <img className='content-right--image' src={image} alt="laptop" />

        <div className="socials__wrap">
          <div className="socials__wrap-box">
            <a href="https://pl.linkedin.com/company/columbusenergy" className="socials__wrap-item" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <a href="https://twitter.com/columbusenergy_" className="socials__wrap-item" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter"/>
            </a>
            <a href="https://www.facebook.com/columbusenergysa" className="socials__wrap-item" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook"/>
            </a>
            <a href="https://www.youtube.com/c/ColumbusEnergyPV" className="socials__wrap-item" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube"/>
            </a>
            <a href="https://www.instagram.com/columbusenergy/?hl=pl" className="socials__wrap-item" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram"/>
            </a>
          </div>
			  </div>
      </div>

    </div>
  );
};

export default HomePage;