import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
const BANNER_AD = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100' src="https://images.unsplash.com/photo-1653841305515-737c52ac55a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="col-lg-7 add-info">
            <h2>BANNER AD</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque architecto sit expedita ut repellat vitae autem commodi aut reprehenderit earum molestiae eius porro ad dolorem optio, ex accusamus atque vel nisi doloremque. Tempore nostrum eum quidem reprehenderit perferendis dignissimos eos, atque quis dolores itaque repellendus rerum repudiandae, ex quo omnis?</p>
            <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
            </div>
        </div>
    </div>
  );
};

export default BANNER_AD;