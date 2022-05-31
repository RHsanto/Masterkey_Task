import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
import img from '../../../img/5.png'
const NATIVE = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
          <img className='w-100 h-100' src={img} alt="" />          </div>
          <div className="col-lg-7 add-info">
            <h2>NATIVE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quibusdam nobis odio at soluta sed ex, distinctio dolorem provident quasi obcaecati, dicta repellendus consectetur tenetur quae ipsam quos est, nisi illum tempora quam expedita tempore. Quas nemo quae error, commodi doloremque ratione in porro aut quos illo obcaecati dicta recusandae.</p>
            <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
          </div>
        </div>
    </div>
  );
};

export default NATIVE;