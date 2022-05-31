import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo3.png'
import './common.css'
import {RiBarChartHorizontalLine} from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='main-menu'>
    <div className="container ">
    <div className="menu-bar d-none d-lg-block">
      <div className="top-menu  d-lg-flex justify-content-between pt-1">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div className="language">
          <p><span>BN</span> / EN</p>
        </div>
      </div>
     <div className=" d-lg-flex justify-content-between align-items-center pb-3">
       <nav>
         <>
          <Link to='/'><li>HOME</li></Link>
          <Link to='/advertisement'><li>ADVERTISERS</li></Link>
          <Link to='/publisher'><li>PUBLISHERS</li></Link>
          <Link to='/influencer'><li>INFLUENCER</li></Link>
          <Link to='/services'><li>AD FORMATS</li></Link>
          <Link to='/blog'><li>BLOG</li></Link>
          <Link to='/contact'><li>CONTACT US</li></Link>
         </>
       </nav>

       <div className="auth shadow  d-flex">
        <Link to='/log-in'><div className='login-btn'>LOGIN </div></Link>
        <Link to='/sign-up'> <div className='signUp-btn active'>SIGN UP</div></Link>
       </div>
     </div>
    </div>
    <div className="d-flex justify-content-between d-lg-none p-2 ">
    <div className="logo ">
          <img src={logo} alt="" />
    </div>
    <div className="bar">
    <div>
         
     <a class="btn text-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
         <RiBarChartHorizontalLine className='fs-2'/>
      </a>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
 <div class="offcanvas-header">
   <h5 class="offcanvas-title text-dark" id="offcanvasExampleLabel">Menu</h5>
   <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
    aria-label="Close"></button>
 </div>
 <div class="offcanvas-body ">
       <>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/'><li>HOME</li></Link>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/advertisement'><li>ADVERTISERS</li></Link>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/publisher'><li>PUBLISHERS</li></Link>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/influencer'><li>INFLUENCER</li></Link>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/services'><li>AD FORMATS</li></Link>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/blog'><li>BLOG</li></Link>
          <Link class="text-reset" data-bs-dismiss="offcanvas"aria-label="Close" to='/contact'><li>CONTACT US</li></Link>
          
         </>
     
 </div>
</div>
         </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;