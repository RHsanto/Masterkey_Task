import React from 'react';

const Banner = () => {
  return (
    <div className="main-menu">
       <div className="container ">
    <div className='banner-section'>
       <div className="row py-5">
         <div className="col-lg-6 ">
           <h1>We create trusted <span className="color">partnerships</span> that drive growth</h1>
            <p>Our global affiliate marketing network empowers advertisers 
              and publishers of all sizes to grow their businesses online. </p>
         </div>
         <div className="col-lg-6">
           <img className='w-100 h-100 rounded-3' src="https://images.unsplash.com/photo-1642775073532-65020022b8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRlYW0lMjBzbWlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
         </div>
       </div>
     </div>
    </div>
    </div>
 
  );
};

export default Banner;