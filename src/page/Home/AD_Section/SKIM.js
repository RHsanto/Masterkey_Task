import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
const SKIM = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100' src="https://images.unsplash.com/photo-1653795164352-6f4ba840f525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="col-lg-7">
            <h2>SKIM</h2>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id doloribus accusamus natus non tempore iusto incidunt molestiae quae perferendis ipsam aliquid veritatis voluptate pariatur dolores nisi fuga exercitationem illum, sit esse tempora hic sunt! Fuga veniam dolor libero nulla, perspiciatis error, doloribus, nobis natus at labore voluptas rem quis sunt.
           </p>
           <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
           </div>
        </div>
    </div>
  );
};

export default SKIM;