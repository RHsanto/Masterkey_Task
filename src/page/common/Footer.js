import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram,FaFacebookF ,FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="foot-info-1">
              <h5>We are social </h5>
              <h4>FOLLOW US</h4>
              <div className="d-flex social-icons gap-3">
               <li className='instagram'><FaInstagram/></li>
               <li className='facebook'><FaFacebookF/></li>
               <li className='youtube'><FaYoutube/></li>
              </div>

              <h1>LOGO</h1>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="foot-info-2 fw-bold">
              <h5>Link</h5>
              <div>
               <li><Link to='/#'>ADVERTISERS</Link> </li>
               <li><Link to='/#'>PUBLISHERS</Link> </li>
               <li><Link to='/#'>INFLUENCER</Link> </li>
               <li><Link to='/#'> AD FORMATS</Link></li>
              </div>
          </div>
          </div>
          <div className="col-lg-3">
          <div className="foot-info-2 fw-bold">
              <h5>Documentation </h5>
              <div>
               <li> <Link to='/#'>TERMS & CONDITIONS</Link></li>
               <li> <Link to='/#'>PRIVACY POLICY </Link></li>
               <li> <Link to='/#'>CANCELLATION POLICY</Link></li>
               <li> <Link to='/#'>BLOG</Link></li>
              </div>
          </div>
          </div>
          <div className="col-lg-3">
          <div className="foot-info-2">
              <h5>Support </h5>
              <div>
               <li><Link to='/#'>FAQ</Link></li>
               <li><Link to='/#'>MEDIA KIT</Link></li>
               <li><Link to='/#'>CONTACT US</Link></li>
              </div>   
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;