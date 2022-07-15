import React from 'react';
import Logo from "../../assets/logo.png";
import LogoBox from "../../assets/logo-box.png";
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


    

      </div>
    </div>
  );
}

export default Header;
