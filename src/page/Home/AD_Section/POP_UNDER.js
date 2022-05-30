import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";

const POP_UNDER = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100' src="https://images.unsplash.com/photo-1653849753645-340aa6b4c636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="col-lg-7">
            <h2>POP-UNDER</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dicta, vitae quisquam velit cumque rem veniam nisi illo odit, beatae doloribus quod at labore quaerat eligendi necessitatibus? Aperiam quia voluptatum amet eligendi cum, dolores pariatur quos distinctio vel dicta repudiandae laboriosam itaque explicabo excepturi officia perferendis repellendus. Ea, repellat ipsa?</p>
           <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
           </div>
        </div>
    </div>
  );
};

export default POP_UNDER;