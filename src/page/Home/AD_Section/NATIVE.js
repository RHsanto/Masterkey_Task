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
            <p>Top Book Publishing Companies in the World 2022, Biggest Book Publishers| 
             Global Book Publishing Industry Factsheet</p>
            <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
          </div>
        </div>
    </div>
  );
};

export default NATIVE;