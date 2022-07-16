import React from 'react';
import frame from '../../assets/spiral/frame1.svg';
import iconDef from '../../assets/spiral/icon1.svg';
import "./spiral.css";

const Spiral = (props) => {

  const { img, icon, title, text, flex, last } = props;

  return (
    <div className='spiral-container'>
      <div className="spiral-content" style={{
        "flexDirection": `${props.flex ? props.flex : "row"}`
      }} >

        <div className="spiral-content-pic">
          <img src={img ? img : frame} alt="" />
        </div>

        <div className="icon-wraper">
          <div className="icon-container">
            <img src={icon ? icon : iconDef} alt="" />
          </div>
          <div className={"icon-line"}></div>
          {last ? <div className={"end-line"}></div> : null}
        </div>

        <div className="spiral-content-text">
          <h1 style={{
            "textAlign": `${flex === 'row' ? "left" : "right"}`
          }} >
            {title ? title : 'Estratégia'}
          </h1>
          <p style={{
            "textAlign": `${flex === 'row' ? "left" : "right"}`,
            "margin": `${flex === 'row' ? "10% 0 0 2%" : "10% 0 0 19%"}`
          }}>{text ? text : "Default"}</p>
        </div>
      </div>
    </div >
  );
}

export default Spiral;
