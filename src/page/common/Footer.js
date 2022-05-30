import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="foot-info-1">
              <h5>We are social </h5>
              <h4>FOLLOW US</h4>
              <div className="d-flex">
               <li>Instagram</li>
               <li>Facebook</li>
               <li>Youtube</li>
              </div>

              <h1>LOGO</h1>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="foot-info-2 fw-bold">
              <h5>Link</h5>
              <div>
               <li>ADVERTISERS</li>
               <li>PUBLISHERS</li>
               <li>INFLUENCER</li>
               <li>AD FORMATS</li>
              </div>
          </div>
          </div>
          <div className="col-lg-3">
          <div className="foot-info-2 fw-bold">
              <h5>Documentation </h5>
              <div>
               <li>TERMS & CONDITIONS</li>
               <li>PRIVACY POLICY</li>
               <li>CANCELLATION POLICY</li>
               <li>BLOG</li>
              </div>
          </div>
          </div>
          <div className="col-lg-3">
          <div className="foot-info-2">
              <h5>Support </h5>
              <div>
               <li>FAQ</li>
               <li>MEDIA KIT</li>
               <li>CONTACT US</li>
              </div>   
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;