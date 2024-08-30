import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import leftboximg from '../../assets/images/left-box.svg'
import rightboximg from '../../assets/images/right-box.svg'
const Herosection = () => {
  return (
    <>
    <div className="hero-wrapper">
    <div className="container-fluid  py-5">
      <div className="container">
      <h1 className="display-4 heading font-weight-bold">
      <span>BLOCKCHAIN</span>  SECURITY
            </h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  </p>
        <div className="row align-items-center py-5">
          <div className="col-md-6">
           
    <div className="left-box">
<img src={leftboximg
} alt="" />
    </div>
          </div>
  
          <div className="col-md-6">
          <div className="right-box">
          <img src={rightboximg
} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Herosection;
