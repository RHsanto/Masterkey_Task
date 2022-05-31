import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/banner.jpg'
const Banner = () => {
  return (
    <div className="main-menu">
       <div className="container ">
    <div className='banner-section'>
       <div className="row py-5">
         <div className="col-lg-6 ">
           <h1>This Month's Best <br /> New Books</h1>
            <p className='mb-5'>Check out our list of this month's best new books, available <br /> now </p>
             <Link to='/#' className="read-btn ">Read More</Link>
         </div>
         <div className="col-lg-6">
           <img className='w-100 h-100 rounded-3' src={banner} alt="" />
         </div>
       </div>
     </div>
    </div>
    </div>
 
  );
};

export default Banner;