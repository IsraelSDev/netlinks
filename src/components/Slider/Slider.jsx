import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/carousel/carousel1.svg';
import img2 from '../../assets/carousel/carousel2.svg';
import img3 from '../../assets/carousel/carousel3.svg';
import img4 from '../../assets/carousel/carousel4.svg';
import img5 from '../../assets/carousel/carousel5.svg';
import img6 from '../../assets/carousel/carousel6.svg';

import "./slider.css";

const Slider = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false} showStatus={false}>
      <div className='slider-content'>
        <img src={img1} alt='img1' />
        <img src={img2} alt='img2' />
        <img src={img3} alt='img3' />
        <img src={img4} alt='img4' />
        <img src={img5} alt='img5' />
        <img src={img6} alt='img6' />
      </div>
      <div className='slider-content'>
        <img src={img1} alt='img1' />
        <img src={img2} alt='img2' />
        <img src={img3} alt='img3' />
        <img src={img4} alt='img4' />
        <img src={img5} alt='img5' />
        <img src={img6} alt='img6' />
      </div>

    </Carousel>

  );
}

export default Slider;
