import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
const NATIVE = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100' src="https://images.unsplash.com/photo-1653613603075-74b94b51f129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="col-lg-7">
            <h2>NATIVE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quibusdam nobis odio at soluta sed ex, distinctio dolorem provident quasi obcaecati, dicta repellendus consectetur tenetur quae ipsam quos est, nisi illum tempora quam expedita tempore. Quas nemo quae error, commodi doloremque ratione in porro aut quos illo obcaecati dicta recusandae.</p>
            <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
          </div>
        </div>
    </div>
  );
};

export default NATIVE;