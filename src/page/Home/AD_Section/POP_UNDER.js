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
           <p>Book sales are transitioning to online sales — 55 percent of all book sales in the US are now made 
             on Amazon. The top book publishing companies in the world are changing their sales strategies to
              target these new types of online customers through selling electronic versions (eBooks) 
              of their books and targeting devices such as the Kindle and other readers as well.
              </p>
           <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
           </div>
        </div>
    </div>
  );
};

export default POP_UNDER;