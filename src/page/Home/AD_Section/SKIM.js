import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
import img  from '../../../img/4.jpg'
const SKIM = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100 add-img' src={img} alt="" />
          </div>
          <div className="col-lg-7 add-info">
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