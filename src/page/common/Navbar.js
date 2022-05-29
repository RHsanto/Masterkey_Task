import React from 'react';
import { NavLink } from 'react-router-dom';
import './all.css'
const Navbar = () => {
  return (
    <div>
    <div className="container">
    <div className="menu-bar">
      <div className="top-menu  d-lg-flex justify-content-between py-4">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="language">
          <p>BN / EN</p>
        </div>
      </div>
     <div className=" d-lg-flex justify-content-between align-items-center">
       <nav>
         <>
          <NavLink to='/'><li className='active'>HOME</li></NavLink>
          <NavLink to='#'><li>ADVERTISERS</li></NavLink>
          <NavLink to='#'><li>PUBLISHERS</li></NavLink>
          <NavLink to='#'><li>INFLUENCER</li></NavLink>
          <NavLink to='#'><li>AD FORMATS</li></NavLink>
          <NavLink to='#'><li>BLOG</li></NavLink>
          <NavLink to='#'><li>CONTACT US</li></NavLink>
         </>
       </nav>

       <div className="auth shadow ">
         <button className='login-btn'>LOGIN </button>
         <button className='signUp-btn shadow'>SIGN UP</button>
       </div>
     </div>
     </div>
    </div>
    </div>
  );
};

export default Navbar;