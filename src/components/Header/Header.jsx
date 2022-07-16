import React from 'react';
import Logo from "../../assets/logo.png";
import LogoBox from "../../assets/logo-box.png";

import LayerOne from '../../assets/layers/layer-01.svg';
import LayerTwo from '../../assets/layers/layer-02.svg';
import LayerThree from '../../assets/layers/layer-03.svg';
import LayerFour from '../../assets/layers/layer-04.svg';

import imageForm from '../../assets/header-photo.svg';

import Form from '../Form/Form'

import "./header.css";

const Header = () => {
  return (
    <div className='header-container'>
      <div className="first-step">
        <div className="first-step-container">
          <img src={Logo} alt="logo" />
          <h1 className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <h6 className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
          <p>Lorem Ipsum <span>#dolor</span></p>
          <div className="first-step-box">
            <div className="box box-1">
              <div className="box-logo">
                <img src={LogoBox} alt="logo" />
              </div>
              <div className="box-content">
                <h6>Lorem ipsum dolor</h6>
                <p>Lorem ipsum dolor
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="box box-2"><div className="box-logo">
              <img src={LogoBox} alt="logo" />
            </div>
              <div className="box-content">
                <h6>Lorem ipsum dolor</h6>
                <p>Lorem ipsum dolor
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div></div>
            <div className="box box-3"><div className="box-logo">
              <img src={LogoBox} alt="logo" />
            </div>
              <div className="box-content">
                <h6>Lorem ipsum dolor</h6>
                <p>Lorem ipsum dolor
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div></div>
            <div className="box box-4"><div className="box-logo">
              <img src={LogoBox} alt="logo" />
            </div>
              <div className="box-content">
                <h6>Lorem ipsum dolor</h6>
                <p>Lorem ipsum dolor
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div></div>
          </div>
        </div>
      </div>
      <div className="second-step">
        <div className="image-form">
          <div className="images-container">
            <img className='layer layer-woman' src={imageForm} alt="form" />
            <img className='layer layer-one' src={LayerOne} alt="" />
            <img className='layer layer-two' src={LayerTwo} alt="" />
            <img className='layer layer-three' src={LayerThree} alt="" />
            <img className='layer layer-four' src={LayerFour} alt="" />
          </div>
          <Form className="form" />
        </div>
      </div>
    </div>
  );
}

export default Header;
