import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo3.png'
import './common.css'
const Navbar = () => {
  return (
    <div>
    <div className="container">
    <div className="menu-bar ">
      <div className="top-menu  d-lg-flex justify-content-between p-3">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div className="language">
          <p><span>BN</span> / EN</p>
        </div>
      </div>
     <div className=" d-lg-flex justify-content-between align-items-center">
       <nav>
         <>
          <Link to='/'><li>HOME</li></Link>
          <Link to='#'><li>ADVERTISERS</li></Link>
          <Link to='#'><li>PUBLISHERS</li></Link>
          <Link to='#'><li>INFLUENCER</li></Link>
          <Link to='#'><li>AD FORMATS</li></Link>
          <Link to='#'><li>BLOG</li></Link>
          <Link to='#'><li>CONTACT US</li></Link>
         </>
       </nav>

       <div className="auth shadow d-flex">
        <Link to='/log-in'><div className='login-btn'>LOGIN </div></Link>
        <Link to='/sign-up'> <div className='signUp-btn active'>SIGN UP</div></Link>
       </div>
     </div>
     </div>
    </div>
    </div>
  );
};

export default Navbar;