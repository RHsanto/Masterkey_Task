import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
import img from '../../../img/pop.jpeg'
const POP_UNDER = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100' src={img} alt="" />
          </div>
          <div className="col-lg-7 add-info">
            <h2>POP-UNDER</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dicta, vitae quisquam velit cumque rem veniam nisi illo odit, beatae doloribus quod at labore quaerat eligendi necessitatibus? Aperiam quia voluptatum amet eligendi cum, dolores pariatur quos distinctio vel dicta repudiandae laboriosam itaque explicabo excepturi officia perferendis repellendus. Ea, repellat ipsa?</p>
           <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
           </div>
        </div>
    </div>
  );
};

export default POP_UNDER;